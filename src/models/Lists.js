import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
  {
    listTitle: { type: String, required: true },
    created: { type: Number, required: true },
    tasks: [{ title: { type: String, required: true }, done: { type: Boolean, required: true } }],
  },
  { collection: 'lists', versionKey: false },
);

const List = mongoose.model('List', ListSchema);

export default List;
