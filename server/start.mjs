import mongoose from 'mongoose';

export const start = (app) => {
  try {
    mongoose.connect('mongodb://localhost:27017/am', { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(process.env.PORT || 2020);
  } catch (error) {
    console.log(error);
  }
}