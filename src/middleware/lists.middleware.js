import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send('invalid ID');
  }

  next();
};

