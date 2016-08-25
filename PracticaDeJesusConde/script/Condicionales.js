//Promedio de tres notas

/*function notas(){
	
	for(nota=1; nota<=3; nota++){
		var uno = parseInt(prompt("Ingrese nota"));
	}
		var suma= uno + uno + uno;
		var promedio = suma/2; 
	    
		if(promedio>= 7){
		alert("Promocionado. Su promedio fue de :"+promedio);
	}
	
	else{
		alert("Curso reprobado. Promedio de: "+promedio);
	}
		
}]*/

/*function comparar(){
	var numero1= parseInt(prompt("Ingrese un numero"));
	var numero2= parseInt(prompt("Ingrese un numero"));
	
	if(numero1 > numero2){
		document.write("El bumero mayor es: "+numero1);
		
	}
	
	else{
		document.write("El numero mayor es: "+numero2);
	}
}

function numero(){
	
	var numero1= parseInt(prompt("Ingrese un numero"));
	
	if(numero1>=10 && numero1<=99){
		alert("El nunmero tienes dos digitos: "+numero1);
	}
	
	else if(numero1<=10){
		alert("El numero ingresado es de un digito: "+numero1)
		
	}
	
	else{
	alert("Numero ingresado tiene mas de dos digitos"+numero);
	}
}
*/

/*function notas(a,b,c){
      var promedio= (a+b+c)/3;
        
        if(promedio>=7){
            alert("Promocionado. Su promedio fue de :"+promedio);
        }
        
        else{
            alert("Curso reprobado. Promedio de: "+promedio);
        }
      
    }   
    
    var numero1=parseInt(prompt("Ingrese la primera nota:"));
    var numero2=parseInt(prompt("Ingrese la segunda nota:"));
    var numero3=parseInt(prompt("Ingrese la tercera nota:"));
        
   notas(numero1,numero2,numero3)*/
   
   /*Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 10 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 30.
utilizar el evento onclick*/

/*function multiplicar(){
	var numero = parseInt(prompt("Ingrese un numero"));
	
	var i=1;
	while(i<=10){
		var resultado = numero * i;
		document.write(resultado+"<br>");
		i++;
	}
}



	if(primero<segundo && primero<tercero){
		alert("El numero menor entre ( "+ primero+ ", "+ segundo+ ", " +tercero+" ) Es: "+primero);
	}
	else if (segundo<primero && segundo<tercero){
		alert("El numero menor entre ( "+ primero+ ", " +segundo+", "+tercero+" ) Es: "+segundo);
	
	}
	else{
		alert("El numero menor entre ( "+ primero+ ", " +segundo+", "+tercero+" ) Es: "+tercero);
	
	}

}
	var primero = parseInt(prompt("Ingrese primer numero"));
	var segundo = parseInt(prompt("Ingrese segundo numero"));
	var tercero = parseInt(prompt("Ingrese tercer numero"));

function menor(primero,segundo,tercero);*/


function arreglo(){
	
	var meses=["lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
	
	alert(meses.length);
}