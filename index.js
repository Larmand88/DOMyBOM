//Crea donde guardar los JSON

var estudiantes = []

//Objetos del JSON

function estudiante(codigo,nombre,nota){
	this.codigo = codigo;
	this.nombre = nombre;
	this.nota = nota;
}
// Creacion de listeners de cada botton

//Listener de maximaNota
document.getElementById("mostrarMayor").addEventListener("click",mostrarMayor)
//Listener de minNota
document.getElementById("mostrarMenor").addEventListener("click",mostrarMenor)
//Listener de promedio
document.getElementById("mostrarPromedio").addEventListener("click",mostrarPromedio)


//Listener de la tabla
document.getElementById("registrarEstudiante").addEventListener("click", function(){
 // crear variables para cada elemento del form
 var codigo = document.getElementById("codigo").value;
 var nombre = document.getElementById("nombre").value;
 var nota = parseInt(document.getElementById("nota").value);
	if (isNaN(nota)) {
		alert("Debe de agregar un valor numberico en Nota")
	} else if (nota < 0 || nota >100 ) {
		alert("Debe de agregar un valor numberico entre 0 y 100")
	} else {
		var nuevoEstudiante = new estudiante(codigo, nombre, nota);
		if (validarEstudiante(nuevoEstudiante)==true){
			estudiantes.push(nuevoEstudiante);

			var tabla = document.getElementById("myTable");
			var fila = tabla.insertRow(tabla.rows.length);
			var celda1 = fila.insertCell(0);
			var celda2 = fila.insertCell(1);
			var celda3 = fila.insertCell(2);
			celda1.innerHTML = nuevoEstudiante.codigo;
			celda2.innerHTML = nuevoEstudiante.nombre;
			celda3.innerHTML = nuevoEstudiante.nota;
		}
			document.getElementById("codigo").value = "";
			document.getElementById("nombre").value = "";
			document.getElementById("nota").value = "";
		}
	})

//Agrega el nuevo arreglo al JSON si no se repite ni el codigo ni el nombre
function validarEstudiante(arreglo){
	for (var i = 0; i < estudiantes.length; i++) {
		if (estudiantes[i].codigo==arreglo.codigo){
			alert("Existe un estudiante con el mismo codigo favor corregir.")
			return false
		} else if (estudiantes[i].nombre==arreglo.nombre) {
			alert("Existe un estudiante con el mismo nombre favor corregir.")
			return false
		}
	}
	return true
}

function mostrarPromedio(){
  tableOutput = 0
 for (var i = 0; i < estudiantes.length; i++) {
   tableOutput = tableOutput + estudiantes[i].nota
 }
 var promedio = tableOutput / i
 alert("La nota promedio es de " +  promedio)
}
function mostrarMenor(){
  tableOutput = []
 for (var i = 0; i < estudiantes.length; i++) {
     tableOutput.push(estudiantes[i].nota)
 }
 console.log(tableOutput);
 var minNota = Math.min.apply(null,tableOutput)
 alert("La nota menor es de " +  minNota)
}
function mostrarMayor(){
  tableOutput = []
 for (var i = 0; i < estudiantes.length; i++) {
     tableOutput.push(estudiantes[i].nota)
 }
 var maximaNota = Math.max.apply(null,tableOutput);
 alert("La nota maxima es de " +  maximaNota)
}
