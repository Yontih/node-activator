'use strict';
class Activator {
    /**
     *
     * @param classDef
     * @param constructorArgs
     * @returns {Activator}
     */
    constructor(classDef, constructorArgs) {
        let Class = Object.create(classDef.__proto__);
        return new Class.constructor(...constructorArgs);
    }

    /**
     *
     * @param classDef
     * @param constructorArgs
     * @returns {Activator}
     */
    static createInstance(classDef, constructorArgs) {
        let Class = Activator.createClass(classDef);
        return new Class.constructor(...constructorArgs);
    }

    /**
     *
     * @param classDef
     * @returns {classDef.__proto__}
     */
    static createClass(classDef) {
        return Object.create(classDef.__proto__);
    }
}

module.exports = Activator;
