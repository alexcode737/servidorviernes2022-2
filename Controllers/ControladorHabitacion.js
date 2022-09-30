export class ControladorHabitacion{

    constructor(){}

    buscarHabitaciones(request,response){
        try{
            response.status(200).json({

                "mensaje":"Exito en la consulta", 
                "datos":"AQUI VAN LOS DATOS DE HABITACIONES",
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null,
            })
        }

        
        

        // response.send("estoy buscando habitaciones desde el controlador")

    }

    buscarHabitacionPorId(request,response){
        let id=request.params.idhabitacion// recibo el id de la peticion 
        console.log('el id es: '+id)
        try{
            response.status(200).json({

                "mensaje":"Exito en la consulta "+datosenviadosenurl, 
                "datos":"AQUI VAN LOS DATOS DE HABITACIONES POR ID ",
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null,
            })
        }

        //response.send("estoy buscando una habitacion por id desde el controlador")
    }

    registrarHabitacion(request,response){
        let datosHabitacion=request.body
        console.log(datosHabitacion)
        try{
            response.status(200).json({

                "mensaje":"Exito en la consulta", 
                "datos":"AQUI VAN LOS DATOS DE REGISTRO DE HABITACIONES",
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null
            })
        }
       // response.send("estoy agregando desde el controlador")
    }

    editarHabitacion(request,response){
        let id=request.params.idhabitacion
        let datosEditar = request.body
        console.log(id,datosEditar)
        try{
            response.status(200).json({

                "mensaje":"Exito Editando a: "+id, 
                "datos": datosEditar
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null,
            })
        }
       // response.send("estoy editando desde el controlador")
    }

    eliminarHabitacion(request,response){
        let id = request.params.idhabitacion
        try{
            response.status(200).json({
                "mensaje":"Exito al eliminar",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Error al eliminar"+error,
                "datos":null
            })
        }

    }

}
/*INVESTIGAR RESPUESTAS HTTP*/
/*TAREA REALIZAR LOS STATUS DE LOS DEMAS CONTROLES*/