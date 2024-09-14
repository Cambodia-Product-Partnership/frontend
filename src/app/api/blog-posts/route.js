import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(req) {
  const postsDirectory = path.join(process.cwd(), 'blog-posts')
  const filenames = await fs.readdir(postsDirectory)

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        description: data.description || content.slice(0, 150) + '...',
      }
    })
  )

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}