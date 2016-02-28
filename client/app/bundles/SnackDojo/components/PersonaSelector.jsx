import React, { PropTypes } from 'react'
import _ from 'lodash'
import Markdown from './ui/Markdown'

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
    const { currentPersona } = this.props

    return (
      <div>
        <h2>{currentPersona.name} <span className="h5 muted pointer" onClick={this.selectPersona.bind(this, null)}>(change)</span></h2>
        <div className="clearfix sm-flex flex-stretch">
          <div className="sm-col sm-col-6 mr2 py2">
            <Markdown markdown={currentPersona.description} />
          </div>
          <div className="sm-col sm-col-6 mb3 p2 border">
            <span className="h4 bold">Recommended Items</span>
            <div className="flex flex-center">
              <img src="http://placehold.it/50x50" className="p1 flex-none" />
              <div>Complex carbs (sustained energy throughout the day, low glycemic index)</div>
            </div>
            <div className="flex flex-center">
              <img src="http://placehold.it/50x50" className="p1 flex-none" />
              <div>Plant proteins (sustained energy throughout the day, low glycemic index)</div>
            </div>
            <div className="flex flex-center">
              <img src="http://placehold.it/50x50" className="p1 flex-none" />
              <div>Omega-3 fatty acids (reduce risk of preterm birth and preeclampsia)</div>
            </div>
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
