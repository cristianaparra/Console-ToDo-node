const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  
  get listadoArr() {
    const listado = [];
    
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    
    return listado;
  }
  constructor() {
    this._listado = {};
  }
  
  borrarTarea (id=''){
    
    if (this._listado[id]){
      
      delete this._listado[id]
    }
  }
  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  ListarPendientesCompletadas(completadas = true) {

    console.log();
    let indice = 0;

    this.listadoArr.forEach((tarea, i) => {
      
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      if (completadas) {
        if (completadoEn) {
          indice += 1;
          console.log(`${(indice +'.').green} ${desc} :: ${estado}`);
        }
      } else {
        if (!completadoEn) {
          indice += 1;
          console.log(`${(indice +'.').green} ${desc} :: ${estado}`);
        }
      }
    });
  }
}
module.exports = Tareas;
