import mongoose, { Document } from 'mongoose';

// Define the interface for a Donation document
interface DonationDocument extends Document {
  id: string;
  donatorId: string;
  dishName: string;
  description: string;
  image: string;
  createdOn: Date;
  updatedOn: Date;
  expriedDate: Date;
  amount: number;
  mealType: string;
  allergies: String[]; // Array of Allergy IDs
  kosher: mongoose.Types.ObjectId[];   // Array of Kosher IDs
}

// Create a schema for the Donation document
const DonationSchema = new mongoose.Schema<DonationDocument>({

  donatorId: {
    type: mongoose.Schema.Types.String,
    required: true,
    ref: 'User', // Reference the User model or the name of your user model
  },
  dishName: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: false,
  },
  createdOn: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  updatedOn: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  expriedDate: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  amount: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  mealType: {
    type: mongoose.Schema.Types.String,
    required: false,
  },
  allergies: [{
    type: mongoose.Schema.Types.String,
    required:false
  }],
  kosher: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kosher', // Reference the Kosher model
  }],
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.password
      delete ret._v
    }
  }
});

// Create the Donation model
const DonationModel = mongoose.model<DonationDocument>('Donation', DonationSchema);

DonationSchema.path('image').required(false);
DonationSchema.path('allergies').required(false);
const updatedDonationModel = new DonationModel();
updatedDonationModel.save().then(r => {});

export { DonationModel };
