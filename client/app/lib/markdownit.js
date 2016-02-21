import MarkdownIt from 'markdown-it'

export default {
  render(input) {
    const md = new MarkdownIt()
    return md.render(input)
  },
}
