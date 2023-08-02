import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = process.env.MONOGO_URL;
    // const URL =`mongodb://kushalgoyal168:4tCYbxWgYOv6O50n@ac-vrfhmri-shard-00-00.g1t5dwe.mongodb.net:27017,ac-vrfhmri-shard-00-01.g1t5dwe.mongodb.net:27017,ac-vrfhmri-shard-00-02.g1t5dwe.mongodb.net:27017/?ssl=true&replicaSet=atlas-fjui11-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;