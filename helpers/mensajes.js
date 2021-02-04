const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {

  return new Promise(resolve =>{

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question('Selecdione una opcion: ',(opt)=>{
        readline.close()
        resolve(opt);
    })
  })

};

const pause = () => {
  
  return new Promise(resolve=>{
    
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    
      readline.question(`\nPresione ${'ENTER'.green } para continuar \n`,(opt)=>{
          readline.close();
          resolve();
      })


  })

}

module.exports = {
  mostrarMenu,
  pause
};
