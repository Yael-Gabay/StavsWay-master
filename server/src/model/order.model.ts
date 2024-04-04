import mongoose, { Document } from 'mongoose';

export enum OrderStatus {
  PLACED = 1,
  ACCEPTED = 2,
  ARRIVED = 3,
}

interface LocationContact {
  city: string;
  street: string;
  houseNumber: number;
  floor?: number;
  phoneNumber:string
}

interface OrderDocument extends Document {
  donationId: string;
  recipientId: string;
  amount: number;
  volunteerId: string;
  status: OrderStatus;
  from: LocationContact;
  to: LocationContact;
}

const OrderSchema = new mongoose.Schema<OrderDocument>(
  {
    donationId: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: 'Donation',
    },
    recipientId: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: 'Recipient',
    },
    amount: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    volunteerId: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: 'User',
    },
    status: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    from: {
      type: {
        city: mongoose.Schema.Types.String,
        street: mongoose.Schema.Types.String,
        houseNumber: mongoose.Schema.Types.Number,
        floor: mongoose.Schema.Types.Number,
        phoneNumber:mongoose.Schema.Types.String
      },
      required: true,
    },
    to: {
      type: {
        city: mongoose.Schema.Types.String,
        street: mongoose.Schema.Types.String,
        houseNumber: mongoose.Schema.Types.Number,
        floor: mongoose.Schema.Types.Number,
        phoneNumber:mongoose.Schema.Types.String

      },
      required: true,
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

const OrderModel = mongoose.model<OrderDocument>('Order', OrderSchema);

export { OrderModel };
