export default{
    name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name:'location',
      title:'Location',
      type:'string',
    },
    {
      name: 'profileImage',
      title: 'profileImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
    {
        title: 'Twitter',
        name: 'twitter',
        type: 'url',
      },
      {
        title: 'Instagram',
        name: 'instagram',
        type: 'url',
      },
      {
        title: 'Facebook',
        name: 'facebook',
        type: 'url',
      },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
    },
  },
}