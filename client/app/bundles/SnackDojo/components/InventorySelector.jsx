import React, { PropTypes } from 'react'
import _ from 'lodash'

export default class InventorySelector extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    items: PropTypes.array,
  };

  constructor(props, context) {
    super(props, context);
  }

  renderItem(item) {
    const { id, name, picture } = item

    return (
      <div key={id} className="p1 center" style={{ width: '150px', height: '150px' }}>
        <img src={picture || 'http://placehold.it/150x150'} style={{ maxWidth: '150px', maxHeight: '150px' }}/>
        <div>{name}</div>
      </div>
    )
  }

  renderItemGroup = (items, groupKey) => {
    return (
      <div key={groupKey}>
        <h3>{groupKey}</h3>
        <div className="flex flex-center flex-wrap">
          {items.map(this.renderItem)}
        </div>
      </div>
    )
  };

  render() {
    const { items } = this.props
    const groupedItems = _.groupBy(items, 'category')

    return (
      <div>
        {
          _.map(groupedItems, this.renderItemGroup)
        }
      </div>
    );
  }
}
