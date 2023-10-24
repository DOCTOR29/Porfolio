import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectd',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type:'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type:'text',
    },
    
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'isCurrentWorkingHere',
      title: 'IsCurrentWorkingHere',
      type:'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type:'reference', to: { type: 'skill' } }],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string'}]
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [{ type:'reference', to: { type: 'social' } }],
    }
   
  ],

  
})
