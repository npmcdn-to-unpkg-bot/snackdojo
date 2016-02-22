import MarkdownIt from 'markdown-it'

export default {
  render(input) {
    const md = new MarkdownIt({
      html: true,
      xhtmlOut: true,
      breaks: true,
      linkify: true,
    })
    return md.render(input)
  },
}
