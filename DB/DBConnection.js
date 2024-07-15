import mongoose from "mongoose";
const DBConnection = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'InfoBeansFoundation'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Connected Successfully...');
    } catch (err) {
        console.log(err);
    }
}
export default DBConnection;