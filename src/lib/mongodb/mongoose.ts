import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true); // Optional: Suppresses Mongoose deprecation warning for `strictQuery`.

  if (initialized) {
    console.log('MongoDB already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '', {
      dbName: 'next-imdb-clerk', 
    });
    initialized = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};