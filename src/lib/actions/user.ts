// eslint-disable-next-line @typescript-eslint/no-unused-vars
import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';
import { User as ClerkUser } from '@clerk/nextjs/server';

export const createOrUpdateUser = async (
  id: string | undefined,
  first_name: string | null,
  last_name: string | null,
  image_url: string | null,
  email_addresses: { email_address: string }[]
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: email_addresses[0]?.email_address,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log('Error: Could not create or update user:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log('Error: Could not delete user:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};