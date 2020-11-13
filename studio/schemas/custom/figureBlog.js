export default {
  name: 'figureBlog',
  type: 'object',
  title: 'figure',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption text'
    }
  ]
}