import { defineSiteConfig } from './src/helpers/config-helper';

export default defineSiteConfig({
  lang: 'zh-CN',
  site: 'https://justhil.github.io',
  avatar: 'https://github.com/justhil.png',
  title: "justhil's blog",
  description: '写点小事',
  theme: {
    mode: 'auto',
    enableUserChange: true,
  },
  lastModified: true,
  readTime: true,
  contentWidth: { type: 'medium' },
  footer: {
    copyright: '© 2026 justhil',
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/justhil' },
    { icon: 'mail', link: 'mailto:mitu233333@gmail.com' },
    { icon: 'rss', link: '/rss.xml' },
  ],
  // Uncomment to enable Follow.is subscription
  // follow: {
  //   feedId: 'your-feed-id',
  //   userId: 'your-user-id',
  // },
  giscus: {
    repo: 'justhil/justhil.github.io',
    repoId: 'R_kgDOM_dg5Q',
    category: 'Announcements',
    categoryId: 'DIC_kwDOM_dg5c4DDXsz',
    mapping: 'pathname',
    strict: false,
    reactionsEnabled: true,
    inputPosition: 'bottom',
    lang: 'zh-CN',
  },
});
