import actionTypes from '../constants/snackDojoConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name,
  };
}

export function selectPersona(persona) {
  return {
    type: actionTypes.SELECT_PERSONA,
    persona,
  }
}

export function addItemToCart(item, qty) {
  return {
    type: actionTypes.ADDED_ITEM_TO_CART,
    item,
    qty,
  }
}
