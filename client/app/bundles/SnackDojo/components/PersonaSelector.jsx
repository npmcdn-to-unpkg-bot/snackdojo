import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class PersonaSelector extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    data: PropTypes.array,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    // _.bindAll(this, 'handleChange');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    // const name = e.target.value;
    // this.props.updateName(name);
  }

  renderPersona(persona) {
    return (
      <div key={persona.name} className="p1 center border border-black flex-auto">
        <div>
          {persona.name}
        </div>
        <img src="http://placehold.it/150x150" />
      </div>
    )
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <div className="flex flex-wrap flex-justify mb3">
          { data.map(this.renderPersona) }
        </div>
      </div>
    );
  }
}
