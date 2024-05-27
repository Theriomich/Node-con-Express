let express= require("express")

let app= express()


app.get("/", function(peticion, respuesta){
respuesta.send("Ruta INICIO")//SEND permite enviar al navegador un texto
});

app.get("/contacto", function(peticion, respuesta){
  respuesta.send("Ruta CONTACTO")
  });

//METODOS COMO GET, POST, PUT, SON METODOS DE SOLICITUDES HTTP

app.listen(3000, function(peticion,respuesta){
  console.log("Hola Mundo")
});

