import React, { PropTypes } from 'react'
import _ from 'lodash'

export default class InventorySelector extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    inventory: PropTypes.array,
  };

  constructor(props, context) {
    super(props, context);
  }

  renderItem = (item) => {
    const { id, name, picture } = item
    const { addItemToCart } = this.props.actions

    return (
      <div key={id} className="p1 center pointer hover-wrapper flex flex-center border border-whitesmoke flex-auto" onClick={addItemToCart.bind(this, item)}>
        <div className="hover-hide mx-auto">
          <div className="flex flex-center mx-auto" style={{ width: '150px', height: '150px' }}>
            <img src={picture || 'http://placehold.it/150x150'} style={{ maxWidth: '150px', maxHeight: '150px', height: 'auto', width: 'auto' }} className="mx-auto" />
          </div>
          <div className="py1">{name}</div>
        </div>
        <div className="hover-show mx-auto">
          <div className="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at quam felis. Sed sodales erat nulla, a auctor augue efficitur id. Vestibulum consectetur aliquet mollis.
          </div>
        </div>
      </div>
    )
  };

  renderItemRow = (items) => {
    const length = 12 / items.length

    return (
      <div className="clearfix flex flex-stretch">
        {items.map(i => {
          return (
            <div className={`sm-col sm-col-${length} flex flex-stretch`}>
              {this.renderItem(i)}
            </div>
          )
        })}
      </div>
    )
  };

  renderItemGroup = (items, groupKey) => {
    return (
      <div key={groupKey} className="py2">
        <h3>{groupKey}</h3>
        <div>
          {_.chunk(items, 3).map(this.renderItemRow)}
        </div>
      </div>
    )
  };

  render() {
    const { inventory } = this.props
    const groupedItems = _.groupBy(inventory, 'category')

    return (
      <div>
        {
          _.map(groupedItems, this.renderItemGroup)
        }
      </div>
    );
  }
}
