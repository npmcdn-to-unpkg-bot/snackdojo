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
    const { id, name } = item

    return (
      <div key={id} className="p1">
        <img src="http://placehold.it/150x150" />
        <div className="center">{name}</div>
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
