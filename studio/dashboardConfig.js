export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb457350b8ea31cf17ff447',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-man8iu8p',
                  apiId: '3fdfe9ff-d901-4ab8-80b3-1734e93ca17f'
                },
                {
                  buildHookId: '5fb457356255f71ee33e0199',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8hi2km7x',
                  apiId: 'f552099f-ac8f-4d1b-b928-4d019e511823'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyra/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8hi2km7x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
