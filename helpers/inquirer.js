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
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Lista tareas`,
      },
      {
        value: "3",
        name: `${"1.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"3.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"4.".green} Completar tareas(s)`,
      },
      {
        value: "6",
        name: `${"5.".green} Borrar tareas`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
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
  console.log(" Seleccione una opción".white);
  console.log("=======================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  console.log("\n");
  await inquirer.prompt(preguntasPausa);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const {desc} = await inquirer.prompt(question);
  return desc
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput
};
