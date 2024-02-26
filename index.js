import express from 'express';
const app = express()

import students from "./collegeDB.js";

app.get('/', function (req, res) {

    students.create({
        name :"roshan",
        status : "not graduated"
    });

    res.send(students.find());
  });

app.listen(8080,()=>{
    console.log("conneted to 8080");
});