import React, { PropTypes } from 'react'
import _ from 'lodash'

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
        <div className="flex flex-wrap flex-center">
          <div className="p1 center border border-black">
            <img src="http://placehold.it/150x150" />
          </div>
          <div className="flex-auto px2">{
            currentPersona.description}
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
        <div className="flex flex-wrap flex-justify mb3">
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
