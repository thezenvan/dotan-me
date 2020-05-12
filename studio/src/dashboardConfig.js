export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ebb0b2fd1cbb8f7bbaec410',
                  title: 'Sanity Studio',
                  name: 'dotan-me-studio',
                  apiId: 'c41be201-f201-497f-89b5-1299e1a9ad3b'
                },
                {
                  buildHookId: '5ebb0b2fa534fa2336b58d82',
                  title: 'Blog Website',
                  name: 'dotan-me',
                  apiId: 'f921cd64-1d18-4413-b216-6a3dd848bf77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thezenvan/dotan-me',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://dotan-me.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
