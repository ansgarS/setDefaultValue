class defaults {
    constructor(value, options = {}) {
        this.value          = value;
        this.checkNull      = options.checkNull || false;
        this.checkUndefined = options.checkUndefined || false;
    }

    /**
     * Sets a default value, if null/undefined is given
     *
     * @param  {*} defaultValue replacing null/undefined
     * @return {*}
     */
    to(defaultValue) {
        return (this.checkNull && this.value === null) ||
            (this.checkUndefined && typeof this.value === "undefined") ? defaultValue : this.value;
    }
}

export default (...args) => Object.freeze(new defaults(...args));
