'use strict'
'use strict'
const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2],'utf-8',(error,lista)=>{
    if (error)return;

    for (let i = 0; i < lista.length; i++) {

        let ext=path.extname(lista[i]);
        if(`.${process.argv[3]}`==ext){
            console.log(lista[i]);
        };  

    };
        
});