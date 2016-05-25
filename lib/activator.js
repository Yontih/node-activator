'use strict';
class Activator {
    /**
     *
     * @param classDef
     * @param constructorArgs
     * @returns {Activator}
     */
    constructor(classDef, constructorArgs) {
        return Activator.createInstance(classDef, constructorArgs);
    }

    /**
     *
     * @param classDef
     * @param constructorArgs
     * @returns {Activator}
     */
    static createInstance(classDef, constructorArgs) {
        let Class = Activator.createClass(classDef);
        return new Class(...constructorArgs);
    }

    /**
     *
     * @param classDef
     * @returns {classDef.__proto__}
     */
    static createClass(classDef) {
        let Class =  Object.create(classDef.__proto__);
        return Class.constructor;
    }
}

module.exports = Activator;
