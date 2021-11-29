import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE_FIELD, CLEAR_SERVICE_FIELD, CHANGE_SERVICE_FIELD, UPDATE_SERVICE, FILTER_SERVICES } from "./actionTypes";

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function editService(id, name, price) {
  return {type: EDIT_SERVICE_FIELD, payload: {id, name, price}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function cancelService() {
  return {type: CLEAR_SERVICE_FIELD}
}

export function updateService(id, name, price) {
  return {type: UPDATE_SERVICE, payload: {id, name, price}}
}

export function filterServices(value, items) {
  return {type: FILTER_SERVICES, payload: {value, items}}
}