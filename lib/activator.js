'use strict';
class Activator {
    /**
     *
     * @param _super
     * @param constructorArgs
     */
    constructor(_super, constructorArgs) {
        let Class = Object.create(_super.__proto__);
        return new Class.constructor(...constructorArgs);
    }
}

module.exports = Activator;
