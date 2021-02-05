require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivos");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
} = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.ListarPendientesCompletadas(true);
        break;
      case "4":
        tareas.ListarPendientesCompletadas(false);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿Esta Seguro?");
          if (ok) {
            tareas.borrarTarea(id);

            console.log("Tarea Borrada");
          }
        }
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
  // pause();
};

main();
