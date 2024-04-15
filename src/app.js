let who = ["El perro", "Mi abuela ", "El cartero", "Mi pájaro"];
let action = ["comió", "orinar", "aplastó", "rompió"];
let what = ["mi tarea", "mi movil", "mi coche"];
let when = [
  "antes de la clase",
  "mientras dormía",
  "mientras hacía ejercicio",
  "durante mi almuerzo",
  "mientras estaba orando"
];

function fraseAletoria() {
  let person = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);

  return (
    who[person] + " " + action[accion] + " " + what[que] + " " + when[cuando]
  );
}

function mostrarFraseAleatoria() {
  document.getElementById("excuse").innerHTML = fraseAletoria();
}
