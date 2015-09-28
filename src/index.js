class Defaults {
    constructor(value, options = {}) {
        this.value          = value;
        this.checkNull      = typeof options.checkNull === "undefined" ? true : options.checkNull;
        this.checkUndefined = typeof options.checkUndefined === "undefined" ? true : options.checkUndefined;
    }

    /**
     * Sets a default value, if null/undefined is given
     *
     * @param  {*} defaultValue replacing null/undefined
     * @return {*}
     */
    to(defaultValue) {
        return (
            (this.checkNull && this.value === null) ||
            (this.checkUndefined && typeof this.value === "undefined") ? defaultValue : this.value
        );
    }
}

export default (...args) => Object.freeze(new Defaults(...args));
