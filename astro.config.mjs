import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGemoji from 'remark-gemoji';
import codeImport from 'remark-code-import';
import remarkBlockContainers from 'remark-block-containers';
import astroExpressiveCode from 'astro-expressive-code';

import { remarkModifiedTime } from './plugins/remark-modified-time.js';
import { remarkReadingTime } from './plugins/remark-reading-time.js';
import { remarkMermaid } from './plugins/remark-mermaid.js';
import siteConfig from './site.config.js';

function buildRemarkPlugins() {
  const plugins = [
    remarkGemoji,
    codeImport,
    remarkBlockContainers,
    remarkMermaid,
  ];

  if (siteConfig.lastModified) {
    plugins.push(remarkModifiedTime);
  }

  if (siteConfig.readTime) {
    plugins.push(remarkReadingTime);
  }

  return plugins;
}

function computedIntegrations() {
  return [astroExpressiveCode(), mdx(), react(), sitemap(siteConfig.sitemap)];
}

export default defineConfig({
  site: siteConfig.site,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite',
    },
    fallback: {
      zh: 'en',
    },
  },
  integrations: computedIntegrations(),
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Noto Sans SC',
      cssVariable: '--font-noto-sc',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['chinese-simplified', 'latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
  markdown: {
    processor: satteri({
      mdastPlugins: buildRemarkPlugins(),
      hastPlugins: [],
    }),
  },
  vite: {
    plugins: [
      svgr(),
      tailwindcss(),
    ],
  },
});
