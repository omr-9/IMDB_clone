import User from "../models/user.model";
import { connectDb } from "../mongodb/mongoose";

interface EmailAddress {
  email_address: string;
}

export const createOrUpdateUser = async (
  id: string | undefined,
  first_name: string | null,
  last_name: string | null,
  image_url: string | null,
  email_addresses: EmailAddress[]
) => {
  if (!id) {
    throw new Error("Error: User ID is undefined");
  }
  try {
    await connectDb();
    const email = email_addresses[0]?.email_address || "no-email@example.com";
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: email,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("Error: Could not create or update user", error);
    throw error;
  }
};

export const deleteUser = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Error: User ID is undefined");
  }
  try {
    await connectDb();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error: Could not delete user", error);
    throw error;
  }
};