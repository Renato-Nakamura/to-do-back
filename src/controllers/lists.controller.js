import {
  getListService,
  addListService,
  updateListService,
  deleteListService,
} from '../services/lists.service.js';

export const getListController = async (req, res) => {
  const listTitle = req.params.listTitle;
  const list = await getListService(listTitle);

  if (list.length === 0) return res.status(206).send('list not found');

  res.send(list);
};

export const addListController = async (req, res) => {
  const listBody = req.body;
  const list = await getListService(listBody.listTitle);
  if(list.length) return res.status(400).send('list already exists')
  const newList = await addListService(listBody);

  res.status(201).send(newList);
};

export const updateListController = async (req, res) => {
  const idParam = req.params.id;
  const listBody = req.body;

  const updatedList = await updateListService(idParam, listBody);

  if (!updatedList) return res.status(400).send('not exists');

  res.status(200).send(updatedList);
};

export const deleteListController = async (req, res) => {
  const idParam = req.params.id;

  const deletedList = await deleteListService(idParam);
  if (!deletedList) return res.status(400).send('not exists');

  res.status(200).send(deletedList);
};
