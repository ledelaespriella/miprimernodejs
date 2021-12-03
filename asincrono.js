'use strict'
const fs = require('fs');

fs.readFile(process.argv[2],"utf-8",(error,data)=>{
    if (error)return;

    let data_split = data.toString().split("\n").length-1;
    console.log(data_split);    
})



