import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    image: `${baseUrl}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/aaxonxn',
    },
    publisher: {
      '@type': 'Person',
      name: 'Aaron George',
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aaron George',
    description: "AI & Computer Science portfolio — projects, experiments, and open-source work by Aaron George.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Aaron George',
      url: url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aaron George',
    url: 'https://aarongeorge.dev',
    image: 'https://aarongeorge.dev/developer-portrait.png',
    sameAs: [
      'https://github.com/aaxonxn',
      'https://linkedin.com/in/aarongeorge',
    ],
    jobTitle: 'AI & Computer Science Student',
    worksFor: {
      '@type': 'Organization',
      name: 'SAINTGITS College of Engineering',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
