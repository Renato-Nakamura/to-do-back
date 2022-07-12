
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB...Check!');
    })
    .catch((err) => {
      return console.log(`error: ${err}`);
    });
};

export default databaseConnection;
