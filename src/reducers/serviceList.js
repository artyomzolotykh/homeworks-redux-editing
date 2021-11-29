import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE, FILTER_SERVICES} from '../actions/actionTypes';

const initialState = {
  items: [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
  ],
  value: '',
  filtered: [],
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      const newItems = [...state.items, {id: nanoid(), name, price: Number(price)}];
      return {
        items: newItems,
        value: state.value,
        filtered: newItems.filter(({name, price}) => 
          name.toLowerCase().includes(state.value.toLowerCase()) ||
          String(price).toLowerCase().includes(state.value.toLowerCase())
        )
      }
    case REMOVE_SERVICE:
      const {id} = action.payload;
      const itemsFromRemove = state.items.filter(service => service.id !== id);
      return {
        items: itemsFromRemove,
        value: state.value,
        filtered: itemsFromRemove.filter(({name, price}) => 
          name.toLowerCase().includes(state.value.toLowerCase()) ||
          String(price).toLowerCase().includes(state.value.toLowerCase())
        )
      }
    case UPDATE_SERVICE:
      const item = action.payload;
      const updateItems = state.items.map(o => 
        (o.id === item.id) ?
        {id: item.id, name: item.name, price: Number(item.price)} :
        o  
      );
      return {
        items: updateItems,
        value: state.value,
        filtered: updateItems.filter(({name, price}) => 
          name.toLowerCase().includes(state.value.toLowerCase()) ||
          String(price).toLowerCase().includes(state.value.toLowerCase())
        )
      }
    case FILTER_SERVICES:
      const {value} = action.payload;
      return {
        items: state.items,
        value: value,
        filtered: state.items.filter(({name, price}) => 
          name.toLowerCase().includes(value.toLowerCase()) ||
          String(price).toLowerCase().includes(value.toLowerCase())
        )
      };
    default:
      return state;
  }
}