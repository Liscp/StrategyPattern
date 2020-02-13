const Duck = require('./Duck');
class RubberDuck extends Duck {
    constructor(display){
        super(display);
    }
    quack(){
        return('Yo digo Cuack');
    }

}

module.exports = RubberDuck;