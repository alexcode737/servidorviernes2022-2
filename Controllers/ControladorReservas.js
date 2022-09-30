export class ControladorReservas{

    constructor(){}

    buscarReservas(request,response){

        try{
            response.status(200).json({
                "mensaje":"Exito buscando datos",
                "datos":"Aqui van las reservas"
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Erro trayendo reservas",
                "datos":null
            })

        }

    }

}