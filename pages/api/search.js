import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  try {
    let posts;

    if (process.env.NODE_ENV === 'production') {
      // Fetch from cache
      posts = require('../../cache/data').posts;
    } else {
      const files = fs.readdirSync(path.join('posts'));

      posts = files.map((filename) => {
        const slug = filename.replace('.md', '');

        const markdownWithMeta = fs.readFileSync(
          path.join('posts', filename),
          'utf-8'
        );

        const { data: frontmatter } = matter(markdownWithMeta);

        return {
          slug,
          frontmatter,
        };
      });
    }
    const results = posts.filter(
      ({ frontmatter: { title, excerpt, category } }) =>
        title.toLowerCase().indexOf(q.trim().toLowerCase()) != -1 ||
        excerpt.toLowerCase().indexOf(q.trim().toLowerCase()) != -1 ||
        category.toLowerCase().indexOf(q.trim().toLowerCase()) != -1
    );
    return res.status(200).json({ results });
  } catch (error) {
    return res.status(500).json({ error: 'Search failed' });
  }
}
