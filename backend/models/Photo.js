import { Schema, model } from 'mongoose';

const PhotoSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default model('Photo', PhotoSchema);