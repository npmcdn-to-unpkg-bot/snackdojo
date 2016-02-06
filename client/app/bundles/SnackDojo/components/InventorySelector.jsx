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
      <div key={id} className="p1 center flex-auto" onClick={addItemToCart.bind(this, item)}>
        <div className="flex flex-center mx-auto" style={{ width: '150px', height: '150px' }}>
          <img src={picture || 'http://placehold.it/150x150'} style={{ maxWidth: '150px', maxHeight: '150px', height: 'auto', width: 'auto' }} className="mx-auto" />
        </div>
        <div className="py1">{name}</div>
      </div>
    )
  };

  renderItemGroup = (items, groupKey) => {
    return (
      <div key={groupKey} className="py2 border-bottom">
        <h3>{groupKey}</h3>
        <div className="flex flex-center flex-wrap">
          {items.map(this.renderItem)}
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
