'use strict'

const fs = require('fs');
const path = require('path');
const tv4 = require('tv4');
const config = require('../config');

const SCHEMA = path.join(__dirname, '/..', config.DATA_DIR, '/_-schema.json');
const DATA_PATH = path.join(__dirname, '/..', config.DATA_DIR, '/_-data.json');

const controllers = {
  hello: (req, res) => {
    res.json({ message: 'Your favorite films' });
  },
  addFilm:(req,res)=>{
    console.log(req.body);
    let result=tv4.validateMultiple(req.body,SCHEMA);
   if(result.valid){
    let films=JSON.parse(fs.readFileSync(DATA_PATH));
        films.push({idFilm:films.nextId,title:req.body.title,duration:req.body.duration,description:req.body.description,link:this.link,budget:this.budget})
        fs.writeFileSync(DATA_PATH,JSON.stringify(films)) 
        console.log("film saved");
        return res.json({films});
   }
   res.send(result.errors);
  }

};

module.exports = controllers;
