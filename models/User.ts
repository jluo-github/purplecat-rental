import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
  username: string;
  image?: string;
  bookmarks?: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required."],
    },
    username: {
      type: String,
      required: [true, "Username is required."],
    },

    image: {
      type: String,
    },

    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: true }
);

// let User: IUser;

// try {
//   // Check if the model is already defined
//   User = models.User as unknown as IUser;
// } catch {
//   // If not, define the model
//   User = model<IUser>("User", UserSchema) as unknown as IUser;
// }

const User = models.User || model<IUser>("User", UserSchema);

export default User;
// const User = (): Model<IUser> => {
//   return models.User || model<IUser>("User", UserSchema);
// };
