import app from './app';
import mongoose from "mongoose";

const { PORT = 8080 } = process.env;


mongoose.connect(`mongodb://${"admin_maprolim"}:${"abc123"}@${"ds023902.mlab.com:23902/firstdb"}`, { useMongoClient: true })
    .then(soUmMomento => {
        console.log("Conectado com o banco de dados! :)")
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
    })