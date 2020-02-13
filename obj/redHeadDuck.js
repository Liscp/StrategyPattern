const Duck = require('./Duck');

class RedheadDuck extends Duck {
    constructor(display){
        super(display);
    }
    fly(){
        return('Yo vuelo');
    }

    quack(){
        return('Yo digo Cuack');
    }
}

module.exports = RedheadDuck;