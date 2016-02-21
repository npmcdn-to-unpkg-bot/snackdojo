import markdown from '../../../../lib/markdownit'
import React from 'react'

export default class Markdown extends React.Component {
  static propTypes = {
    markdown: React.PropTypes.string.isRequired,
  };

  render() {
    return <div className="markdown" dangerouslySetInnerHTML={{ __html: markdown.render(this.props.markdown) }} />
  }
}
