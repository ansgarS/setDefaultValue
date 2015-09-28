.PHONY: test, build, setup, docs, install, clean, symlink

SHELL:=/bin/bash
##
#  root directory (Makefile location)
WORKING_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

##
#  find all relevant sources (sources that end with .js) 
#  and get their path relative to working dir
SOURCES_RELATIVE:= \
	$(shell cd $(WORKING_DIR) && find src -type f -iname '*.js')
#	index.js
#

ifeq ($(INSTALLDIR),)
   INSTALLDIR=$(WORKING_DIR)
endif

##
#  save the relative sources to a new variable that holds al SOURCES
#  with absolute paths
SOURCES:=$(foreach x, $(SOURCES_RELATIVE), $(WORKING_DIR)/$(x))
##
#  these are our "object"-files - the files that are transpiled from
#  es6 to es5
OBJECTS:=$(foreach x, $(SOURCES_RELATIVE), $(WORKING_DIR)/build/$(x))

all: docs install

setup: $(WORKING_DIR)/build
	
build: $(WORKING_DIR)/build/bundle.js

test: build
	#npm test
	$(WORKING_DIR)/node_modules/.bin/istanbul cover --root $(WORKING_DIR)/build/src -x "**/__tests__/**" $(WORKING_DIR)/node_modules/.bin/_mocha $(shell find $(WORKING_DIR)/build/src -name "*Test.js") -- -R spec

docs: build
	$(WORKING_DIR)/node_modules/.bin/jsdoc $(WORKING_DIR)/build/src -d $(WORKING_DIR)/docs	

install: test
	mkdir -p $(INSTALLDIR)/lib
	cp -r $(WORKING_DIR)/build/src/* $(INSTALLDIR)/lib
	node $(WORKING_DIR)/index.js
	

clean:
	rm -rf $(WORKING_DIR)/build
	rm -rf $(WORKING_DIR)/docs
	rm -rf $(WORKING_DIR)/lib
	rm -rf $(WORKING_DIR)/coverage


##
#  create the build dir structure from the source-dir, so that
#  we can place a copy of the source dir, with the transpiled 
#  files in our build-dir. 
#  this preserves correct require behaviour.
$(WORKING_DIR)/build:
	@echo "Creating Build-Dir"
	mkdir -p $(WORKING_DIR)/build
	rsync -a --include '*/' --exclude '*' $(WORKING_DIR)/src $(WORKING_DIR)/build/


##
#  bundle.js is the minified and bundled file used for production. 
#  this build step requires all objects to have been transpiled.
$(WORKING_DIR)/build/bundle.js: $(OBJECTS)
	$(WORKING_DIR)/node_modules/.bin/browserify $(WORKING_DIR)/build/src/index.js -o $(WORKING_DIR)/build/bundle.js


##
#  this targets are necessary to not always trigger a rebuild of
#  transpiled files, even if they exist. if the no-op is removed
#  this will trigger a rebuild too
$(WORKING_DIR)/src/%.js: $(WORKING_DIR)/build
	@echo "" > /dev/null

#$(WORKING_DIR)/index.js: $(WORKING_DIR)/build
#	@echo "" > /dev/null


##
#  every transpiled file requires a matching source file
#  to be created.
#$(WORKING_DIR)/build/index.js: $(WORKING_DIR)/src/index.js 
#	babel $< --out-file $@

$(WORKING_DIR)/build/src/%.js: $(WORKING_DIR)/src/%.js
	$(WORKING_DIR)/node_modules/.bin/eslint $<
	$(WORKING_DIR)/node_modules/.bin/babel --stage 0 $< --out-file $@

