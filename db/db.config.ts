import mongoose from 'mongoose';
import colors from 'colors/safe';


const dbConnection = async():Promise<void> => {
    
    try {
        await mongoose.connect( process.env.MONGODB_CNN!, {
            dbName: process.env.DB_NAME,
            autoIndex: true,
            autoCreate: true
        });

        console.log(colors.cyan('Connection establesihed with database'),colors.bgCyan(`"${process.env.DB_NAME}"`));

    } catch(err){
        throw new Error("Error establishing a database connection")
    }
}


export default dbConnection;
