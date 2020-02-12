const Duck = require('./Duck');
class MallardDuck extends Duck{
    constructor(display){
        super(display);
   
    }
    fly(){
        return ('Yo vuelo')
    }

    quack(){
        return ('Quakk!!');
    }

}
module.exports = MallardDuck