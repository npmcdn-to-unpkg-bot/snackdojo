import React, { PropTypes } from 'react'
import _ from 'lodash'
import Markdown from './ui/Markdown'
import $ from 'jquery'
import numeral from 'numeral'

export default class PersonaSelector extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    personas: PropTypes.array,
    currentPersona: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'selectPersona');
  }

  componentDidMount() {
    $('.hover-wrapper .hover-show').each((i, e) => {
      $(e).css({ minHeight: $(e).siblings('.hover-hide').height() })
    })
  }

  // React will automatically provide us with the event `e`
  selectPersona(persona) {
    // const name = e.target.value;
    // this.props.updateName(name);
    this.props.actions.selectPersona(persona)
  }

  renderPersona = (persona) => {
    return (
      <div
        key={persona.name}
        className="p1 center border border-black flex-auto pointer"
        onClick={this.selectPersona.bind(this, persona)}
      >
        <div>
          {persona.name}
        </div>
        <img src="http://placehold.it/150x150" />
      </div>
    )
  };

  renderSelectedPersona() {
    const { currentPersona, actions } = this.props
    const { addItemToCart } = actions

    return (
      <div>
        <h2>{currentPersona.name} <span className="h5 muted pointer" onClick={this.selectPersona.bind(this, null)}>(change)</span></h2>
        <div className="clearfix sm-flex flex-stretch">
          <div className="sm-col sm-col-6 mr2 py2">
            <Markdown markdown={currentPersona.description} />
          </div>
          <div className="sm-col sm-col-6 mb3 p2 border">
            <span className="h4 bold">Recommended Items</span>
            {currentPersona.recommended_items.map(i => {
              return (
                <div className="flex flex-center hover-wrapper pointer" onClick={addItemToCart.bind(this, i)}>
                  <div className="p1 flex-none center flex flex-center" style={{ width: 50, height: 50 }}>
                    <img src={i.picture || 'http://placehold.it/50x50'} style={{ maxHeight: 50 }} className="mx-auto" />
                  </div>
                  <div className="h5 px1 hover-hide">
                    <div>{i.name} <span className="black muted px1">{numeral(i.price / 100).format('$0,0.00')}</span></div>
                    <div>{i.description}</div>
                  </div>
                  <div className="hover-show px1">
                    <button className="btn btn-primary bg-orange white h5">
                      Add to box
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  renderPersonaList() {
    const { personas } = this.props

    return (
      <div>
        <h2>Select your stage</h2>
        <div className="flex flex-justify mb3 flex-wrap">
          {personas.map(this.renderPersona)}
        </div>
      </div>
    )
  }

  render() {
    const { currentPersona } = this.props
    return (
      <div>
        {currentPersona ? this.renderSelectedPersona() : this.renderPersonaList()}
      </div>
    );
  }
}
