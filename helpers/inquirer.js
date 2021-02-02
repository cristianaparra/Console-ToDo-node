const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desa hacer",
    choices: [
      {
        value: "1",
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Lista tareas",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tareas(s)",
      },
      {
        value: "6",
        name: "6. Borrar tareas",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];
const preguntasPausa = [
  {
    type: "input",
    name: "opcionPausa",
    message: `Presione ${"enter".green} para continuar`,
  },
];

const inquirerMenu = async () => {
  console.log("=======================".green);
  console.log(" Seleccione una opción");
  console.log("=======================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
console.log('\n')
  await inquirer.prompt(preguntasPausa);


};

module.exports = {
  inquirerMenu,
  pausa,
};
