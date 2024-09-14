import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug') // Extract the slug from query params

  if (!slug) {
    return new Response(JSON.stringify({ message: 'Slug is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const postsDirectory = path.join(process.cwd(), 'blog-posts')
  const filePath = path.join(postsDirectory, `${slug}.md`)

  try {
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { content } = matter(fileContents)

    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Blog post not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
