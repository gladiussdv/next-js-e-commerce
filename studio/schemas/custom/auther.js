import Webcam from 'part:sanity-plugin-asset-source-webcam/image-asset-source';
export default {
  name: 'auther',
  type: 'document',
  title: 'Auther',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'bio',
      type: 'richText'
    },
    {
      name: 'image',
      type: 'figureBlog',
      title: 'image',
      options: {
        hotspot: true,
        sources: [Webcam]
      }
    }
  ]
}