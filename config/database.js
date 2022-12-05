import mongoose from 'mongoose';
export async function connectDatabase() {
    try {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log('\nMongoose connection success');
        console.log('===========================');
        console.log(`MONGO_URI : ${uri}`);
    } catch (error) {
        console.log('\nMongoose connection error');
        console.log('=========================');
        console.log(`${error}`);
        console.log('Process exited');
        process.exit();
    }
}
