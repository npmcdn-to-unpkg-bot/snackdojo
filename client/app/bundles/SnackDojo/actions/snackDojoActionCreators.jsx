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
