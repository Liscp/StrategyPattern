const express = require('express');
const mallarDuck = require('./mallarDuck')
const decoryDuck = require('./decoryDuck')
const redHeadDuck= require('./redHeadDuck')
const rubbertDuck= require('./rubberDuck')

const app = express();

app.get("/duck/:id",(req, res)=>{
    const my= req.params.id
    console.log(typeof(my))
    const mallar= new mallarDuck('Soy pepe Mallar');
    const decory= new decoryDuck('Soy de Decoracion')
    const red= new redHeadDuck('Soy de cabeza roja')
    const rubbert= new rubbertDuck('Soy rubbert')
const objetos={
    mallarobj:{
        params: mallar.display,
        params2: mallar.quack(),
        params3: mallar.fly()
    },
    decoryobj:{
        params: decory.display
    },
    
   redobj:{
        params: red.display,
        params2:red.fly(),
        params3: red.quack()
    },
    
   rubbertobj :{
        params: rubbert.display,
        params2: rubbert.quack()
    }
}

    res.json(Object.values(objetos[`${my}obj`]))
    
    
})



module.exports = app;
