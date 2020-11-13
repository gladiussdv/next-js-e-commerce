export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'auther',
      type: 'reference',
      to: [
        {
          type: 'auther'
        }
      ]
    }
  ]
}