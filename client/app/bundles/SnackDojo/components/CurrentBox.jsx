import React, { PropTypes } from 'react'

export default class CurrentBox extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    selectedItems: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

  renderLine(itemId, data) {
    const { count, item } = data

    return (
      <div key={itemId}>{count}x {item.name}</div>
    )
  }

  render() {
    const { selectedItems } = this.props

    return (
      <div>
        <h3>Your box</h3>
        {selectedItems.map((v, k) => this.renderLine(k, v))}
      </div>
    );
  }
}
