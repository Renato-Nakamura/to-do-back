import List from '../models/Lists.js';

export const getListService = async (listTitle) => {
  return await List.find({ listTitle: listTitle });
};

export const addListService = async (newList) => {
  return await List.create(newList);
};

export const updateListService = async (id, listBody) => {
  return await List.findByIdAndUpdate(id, listBody).setOptions({ returnOriginal: false });
};

export const deleteListService = async (id) => {
  return await List.findByIdAndDelete(id);
};
