import React, { PropTypes } from 'react'
import _ from 'lodash'
import $ from 'jquery'
import numeral from 'numeral'

export default class InventorySelector extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    inventory: PropTypes.array,
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    $('.hover-wrapper .hover-show').each((i, e) => {
      $(e).css({ minHeight: $(e).siblings('.hover-hide').height() })
    })
  }

  renderItem = (item) => {
    const { id, name, picture } = item
    const { addItemToCart } = this.props.actions

    return (
      <div key={id} className="p1 center pointer hover-wrapper flex flex-center border border-whitesmoke flex-auto" onClick={addItemToCart.bind(this, item, 1)}>
        <div className="hover-hide mx-auto">
          <div className="flex flex-center mx-auto" style={{ width: '150px', height: '150px' }}>
            <img src={picture || 'http://placehold.it/150x150'} style={{ maxWidth: '150px', maxHeight: '150px', height: 'auto', width: 'auto' }} className="mx-auto" />
          </div>
          <div className="py1 h5">
            <strong>{name}</strong><br />
            {numeral(item.price / 100).format('$0,0.00')}
          </div>
        </div>
        <div className="hover-show flex flex-center mx-auto">
          <div>
            <div className="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at quam felis. Sed sodales erat nulla, a auctor augue efficitur id. Vestibulum consectetur aliquet mollis.
            </div>
            <button className="btn btn-primary bg-orange white h5 mt1">
              Add to box
            </button>
          </div>
        </div>
      </div>
    )
  };

  renderItemRow = (items) => {
    const length = 12 / items.length

    return (
      <div className="clearfix sm-flex flex-stretch">
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
