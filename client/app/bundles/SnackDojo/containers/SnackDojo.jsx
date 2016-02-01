import React, { PropTypes } from 'react'
import PersonaSelector from '../components/PersonaSelector'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import * as snackDojoActionCreators from '../actions/snackDojoActionCreators'

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$snackDojoStore: state.$$snackDojoStore };
}

// Simple example of a React "smart" component
class SnackDojo extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,

    // This corresponds to the value used in function select above.
    // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
    // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
    // instead use the Immutable.js `get` API for Immutable.Map
    $$snackDojoStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, $$snackDojoStore } = this.props
    const actions = bindActionCreators(snackDojoActionCreators, dispatch)
    const personas = $$snackDojoStore.get('personas').toJS()
    const currentPersona = $$snackDojoStore.get('currentPersona')

    return (
      <div className="mb4">
        <PersonaSelector {...{ personas, actions, currentPersona }} />
      </div>
    );
  }
}

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/rackt/react-redux/blob/master/docs/api.md#examples
export default connect(select)(SnackDojo);
