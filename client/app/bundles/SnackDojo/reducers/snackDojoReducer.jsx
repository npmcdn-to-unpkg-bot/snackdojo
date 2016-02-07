import Immutable from 'immutable';

import actionTypes from '../constants/snackDojoConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
  personas: [],
  selectedItems: new Immutable.OrderedMap(),
});

export default function snackDojoReducer($$state = $$initialState, action) {
  const { type, name, persona, item } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', name);
    case actionTypes.SELECT_PERSONA:
      return $$state.set('currentPersona', persona)
    case actionTypes.ADDED_ITEM_TO_CART:
      const prevCount = $$state.getIn(['selectedItems', item.id], {}).count || 0
      return $$state.setIn(['selectedItems', item.id], {
        item,
        count: prevCount + 1,
      })
    default:
      return $$state;
  }
}
