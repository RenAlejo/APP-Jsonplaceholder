import HttpMethods from "../models/http_methods.model";
import Record from "../models/record.model";


export const isValidHttpMethod = async ( method:string = '' ) => {
    const methodExist = await HttpMethods.findOne({ method });
    if( !methodExist ){
        throw new Error(`El método ${method} no es un método HTTP válido.`);
    }
}

export const isAnExistingRecordId = async ( id:number ) => {
    const recordExist = await Record.findById(id);
    if( !recordExist ){
        throw new Error(`El registro con id: ${id} no existe en la base de datos.`);
    }
}

