import React, { PropTypes } from 'react'
import _ from 'lodash'

export default class CurrentBox extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h3>Your box</h3>
      </div>
    );
  }
}
