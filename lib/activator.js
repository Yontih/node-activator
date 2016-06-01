'use strict';
class Activator {
    /**
     *
     * @param classDef
     * @param constructorArgs
     * @returns {Activator}
     */
    constructor(classDef, constructorArgs) {
        if (constructorArgs && constructorArgs.length) {
            return Activator.createInstanceWithArgs(classDef, constructorArgs);
        } else {
            return Activator.createInstance(classDef);
        }
    }

    static createInstance(classDef) {
        let Class = Activator.createClass(classDef);
        return new Class();
    }

    /**
     *
     * @param classDef
     * @param constructorArgs
     * @returns {Activator}
     */
    static createInstanceWithArgs(classDef, ...constructorArgs) {
        let Class = Activator.createClass(classDef);
        return new Class(...constructorArgs);
    }

    /**
     *
     * @param classDef
     * @returns {classDef.__proto__}
     */
    static createClass(classDef) {
        let Class;
        if (classDef.prototype) {
            Class = classDef;
        } else if (classDef.__proto__) {
            Class = Object.create(classDef.__proto__).constructor;
        } else {
            throw new Error(`Object is not a class ${classDef}`);
        }

        return Class;
    }
}

module.exports = Activator;
