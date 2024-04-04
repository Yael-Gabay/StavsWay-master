import mongoose, { Document } from 'mongoose';

enum UserType {
  Donator = 'Donator',
  Recipient = 'Recipient',
  Volunteer = 'Volunteer',
}

enum GenderType {
  Male = 'male',
  Female = 'female',
}

interface Location {
  city: string;
  street: string;
  houseNumber: number;
  floor?: number;
}

export interface UserDocument extends Document {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: GenderType;
  phoneNumber: string;
  email: string;
  userType: UserType;
  location: Location; // Add location property
  approvedType: boolean;
}

const UserSchema = new mongoose.Schema<UserDocument>(
  {
    id: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    firstName: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    lastName: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    gender: {
      type: mongoose.Schema.Types.String,
      enum: Object.values(GenderType),
      require: true,
    },
    phoneNumber: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    userType: {
      type: mongoose.Schema.Types.String,
      discriminatorKey: 'userType',
      enum: Object.values(UserType),
      require: true,
    },
    location: {
      type: {
        city: mongoose.Schema.Types.String,
        street: mongoose.Schema.Types.String,
        houseNumber: mongoose.Schema.Types.Number,
        floor: mongoose.Schema.Types.Number,
      },
      require: true,
    },
    approvedType: {
      type: mongoose.Schema.Types.Boolean,
      require: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
      },
    },
  }
);

const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export { UserModel };

