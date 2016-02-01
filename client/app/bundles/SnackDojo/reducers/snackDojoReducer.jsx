import Immutable from 'immutable';

import actionTypes from '../constants/snackDojoConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
  personas: [],
});

export default function snackDojoReducer($$state = $$initialState, action) {
  const { type, name, persona } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', name);
    case actionTypes.SELECT_PERSONA:
      return $$state.set('currentPersona', persona)

    default:
      return $$state;
  }
}
