import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => {
      console.log(
        `DB Successfully Connected at ${res.connection.port}`.cyan.underline
          .bold
      );
    })
    .catch((err) => {
      console.log(`DB Failed! ${err.message}`.red.underline.bold);
    });
};

export default connectDB;
