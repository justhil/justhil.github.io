import { defineSiteConfig } from './src/helpers/config-helper';

export default defineSiteConfig({
  lang: 'zh-CN',
  site: 'https://your-blog.com',
  avatar: '/avatar.png',
  title: 'My Blog',
  description: 'A minimal blog',
  theme: {
    mode: 'light',
    enableUserChange: true,
  },
  lastModified: true,
  readTime: true,
  contentWidth: { type: 'medium' },
  footer: {
    copyright: '© 2026 Your Name',
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/your-username' },
    { icon: 'mail', link: 'mailto:hello@example.com' },
  ],
  // Uncomment to enable Follow.is subscription
  // follow: {
  //   feedId: 'your-feed-id',
  //   userId: 'your-user-id',
  // },
  // Uncomment to enable Giscus comments (https://giscus.app)
  // giscus: {
  //   repo: 'your-username/your-repo',
  //   repoId: '',
  //   category: 'Announcements',
  //   categoryId: '',
  //   mapping: 'pathname',
  //   strict: true,
  //   reactionsEnabled: true,
  //   inputPosition: 'bottom',
  //   lang: 'en',
  // },
});
