import mongoose, { Document } from 'mongoose';
import { UserModel } from './user.model';

interface RecipientDocument extends Document {
  id: string;
  userId: string; // Reference the User model
  allergies: mongoose.Types.ObjectId[]; // Array of Allergy IDs
  kosher: mongoose.Types.ObjectId[];   // Array of Kosher IDs
}

const RecipientSchema = new mongoose.Schema<RecipientDocument>({
  userId: {
    type: mongoose.Schema.Types.String,
    ref: 'User', // Reference the User model
    required: true,
  },
  allergies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Allergy', // Reference the Allergy model
  }],
  kosher: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kosher', // Reference the Kosher model
  }],
},
  {
    toJSON: {
      transform(doc, ret) {

        ret.id = ret._id
        delete ret._id

        delete ret.password
        delete ret._v
      }
    }
  }
);

const RecipientModel = mongoose.model<RecipientDocument>(
  'Recipient',
  RecipientSchema
);

export { RecipientModel };
