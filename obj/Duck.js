class Duck {
    constructor(display){
        this._display=display;
        
    }
    get display(){
        
       return this._display
    }

}

module.exports = Duck;