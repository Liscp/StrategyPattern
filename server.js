const express = require('express');
const decoryDuck = require('./obj/decoryDuck');
const mallarDuck = require('./obj/mallarDuck');
const redHeadDuck = require('./obj/redHeadDuck');
const rubberDuck = require('./obj/rubberDuck');
const app = express();
const pato = express.Router();
const port = process.env.PORT || 3000;

pato.route("/duck/:id")
    .get((req,res) => {
        const my= req.params.id
    console.log(typeof(my))
    const mallar= new mallarDuck('Soy pepe Mallar');
    const decory= new decoryDuck('Soy de Decoracion')
    const red= new redHeadDuck('Soy de cabeza roja')
    const rubbert= new rubberDuck('Soy rubbert')
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
    });

app.use(pato)

app.listen(port, ()=>{
    console.log(`Runing on port ${port}`);
});