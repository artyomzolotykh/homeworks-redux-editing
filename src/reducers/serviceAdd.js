import {CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD, CLEAR_SERVICE_FIELD} from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
  editting: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case EDIT_SERVICE_FIELD:
      const editting = action.payload;
      return {name: editting.name, price: editting.price, editting: editting.id};
    case CLEAR_SERVICE_FIELD:
      return {name: '', price: '', editting: false}
    default:
      return state;
  }
}