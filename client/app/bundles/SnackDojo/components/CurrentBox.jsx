import React, { PropTypes } from 'react'
import numeral from 'numeral'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
      <div key={itemId} className="flex flex-center py1 h5">
        <div className="p1 right-align" style={{ minWidth: '1rem' }}>{count}</div>
        <div className="px1 flex flex-center" style={{ height: '50px', width: '50px' }}>
          <img src={item.picture} className="mx-auto" style={{ maxWidth: '50px', maxHeight: '50px' }} />
        </div>
        <div className="flex-auto px1">{item.name}</div>
        <div>{numeral(item.price / 100 * count).format('$0,0.00')}</div>
      </div>
    )
  }

  renderSubtotal() {
    const { selectedItems } = this.props
    const subTotal = selectedItems.reduce((r, v, k) => {
      return r + (v.count * v.item.price)
    }, 0)

    if (true || selectedItems.count() > 0) {
      return (
        <div className="border-top flex flex-center py1">
          <div className="bold">Subtotal</div>
          <div className="flex-auto right-align">
            {numeral(subTotal / 100).format('$0,0.00')}
          </div>
        </div>
      )
    }
  }

  renderSelectedItems() {
    const { selectedItems } = this.props

    return (
      <div>
        <ReactCSSTransitionGroup transitionName="fadeIn" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {selectedItems.map((v, k) => this.renderLine(k, v))}
        </ReactCSSTransitionGroup>
        {selectedItems.count() > 0 ? null : <div className="gray center py2">Empty box!<br /> Add some items now</div>}
      </div>
    )
  }

  render() {
    return (
      <div className="py2">
        <h3 className="center">Your box</h3>
        <div className="py1">
          {this.renderSelectedItems()}
        </div>
        {this.renderSubtotal()}
      </div>
    );
  }
}
