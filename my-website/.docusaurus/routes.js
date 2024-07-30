import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Sample-Repo/blog',
    component: ComponentCreator('/Sample-Repo/blog', '9fb'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/archive',
    component: ComponentCreator('/Sample-Repo/blog/archive', '1b5'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/first-blog-post',
    component: ComponentCreator('/Sample-Repo/blog/first-blog-post', 'd52'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/long-blog-post',
    component: ComponentCreator('/Sample-Repo/blog/long-blog-post', '9e6'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/mdx-blog-post',
    component: ComponentCreator('/Sample-Repo/blog/mdx-blog-post', 'b8f'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/tags',
    component: ComponentCreator('/Sample-Repo/blog/tags', '08e'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/tags/docusaurus',
    component: ComponentCreator('/Sample-Repo/blog/tags/docusaurus', '222'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/tags/facebook',
    component: ComponentCreator('/Sample-Repo/blog/tags/facebook', 'bb2'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/tags/hello',
    component: ComponentCreator('/Sample-Repo/blog/tags/hello', '414'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/tags/hola',
    component: ComponentCreator('/Sample-Repo/blog/tags/hola', '279'),
    exact: true
  },
  {
    path: '/Sample-Repo/blog/welcome',
    component: ComponentCreator('/Sample-Repo/blog/welcome', '02f'),
    exact: true
  },
  {
    path: '/Sample-Repo/markdown-page',
    component: ComponentCreator('/Sample-Repo/markdown-page', 'bfd'),
    exact: true
  },
  {
    path: '/Sample-Repo/search',
    component: ComponentCreator('/Sample-Repo/search', 'c22'),
    exact: true
  },
  {
    path: '/Sample-Repo/docs',
    component: ComponentCreator('/Sample-Repo/docs', '4b1'),
    routes: [
      {
        path: '/Sample-Repo/docs',
        component: ComponentCreator('/Sample-Repo/docs', 'ec5'),
        routes: [
          {
            path: '/Sample-Repo/docs',
            component: ComponentCreator('/Sample-Repo/docs', '2e4'),
            routes: [
              {
                path: '/Sample-Repo/docs/category/tutorial---basics',
                component: ComponentCreator('/Sample-Repo/docs/category/tutorial---basics', 'a16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/category/tutorial---extras',
                component: ComponentCreator('/Sample-Repo/docs/category/tutorial---extras', 'f54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/intro',
                component: ComponentCreator('/Sample-Repo/docs/intro', '560'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-basics/congratulations', '952'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-basics/create-a-blog-post', '4f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-basics/create-a-document', '76a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-basics/create-a-page', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-basics/deploy-your-site', '756'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-basics/markdown-features', '2ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-extras/manage-docs-versions', 'baa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Sample-Repo/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Sample-Repo/docs/tutorial-extras/translate-your-site', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Sample-Repo/',
    component: ComponentCreator('/Sample-Repo/', '6e4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
