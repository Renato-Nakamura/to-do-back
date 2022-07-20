import List from '../models/Lists.js';
import PubNub from 'pubnub';
import dotenv from 'dotenv'
dotenv.config()

const pubnub = new PubNub({
  publishKey: process.env.PUBLISHKEY,
  subscribeKey: process.env.SUBSCRIBEKEY,
  uuid: "back001",
});

export const getListService = async (listTitle) => {
  return await List.find({ listTitle: listTitle });
};

export const addListService = async (newList) => {
  return await List.create(newList);
};

export const updateListService = async (id, listBody) => {
  await pubnub.publish({
    channel:id,
    message:{
      text:'alterou'
    }
  })
  return await List.findByIdAndUpdate(id, listBody).setOptions({ returnOriginal: false });
};

export const deleteListService = async (id) => {
  return await List.findByIdAndDelete(id);
};
