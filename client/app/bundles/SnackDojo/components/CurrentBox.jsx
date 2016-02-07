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
      <div key={itemId} className="flex flex-center py1">
        <div className="p1 right-align" style={{ minWidth: '1rem' }}>{count}</div>
        <div className="px1 center" style={{ height: '50px', width: '50px' }}>
          <img src={item.picture} style={{ maxWidth: '50px', maxHeight: '50px' }} />
        </div>
        <div className="flex-auto px1">{item.name}</div>
        <div>${item.price}</div>
      </div>
    )
  }

  render() {
    const { selectedItems } = this.props

    return (
      <div>
        <h3 className="center">Your box</h3>
        <div className="border-left">
          {selectedItems.map((v, k) => this.renderLine(k, v))}
        </div>
      </div>
    );
  }
}
