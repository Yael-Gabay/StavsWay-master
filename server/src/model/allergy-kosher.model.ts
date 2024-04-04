// allergy.model.ts
import mongoose, { Document, Model } from 'mongoose';

interface AllergyDocument extends Document {
  name: string;
}

const AllergySchema = new mongoose.Schema<AllergyDocument>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const AllergyModel = mongoose.model<AllergyDocument>('Allergy', AllergySchema);

export { AllergyModel };

// kosher.model.ts

interface KosherDocument extends Document {
  name: string;
}

const KosherSchema = new mongoose.Schema<KosherDocument>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const KosherModel = mongoose.model<KosherDocument>('Kosher', KosherSchema);

export { KosherModel };
