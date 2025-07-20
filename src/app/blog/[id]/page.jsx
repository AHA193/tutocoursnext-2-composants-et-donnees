import React from 'react'
import Link from 'next/link'

import { getPost } from '@/lib/serverActions';


async function page({ params }) {
  const { id } = await params
  console.log(id);

  const post = await getPost(id)
  console.log(post);

  return (
    <main className='mt-12'>
      <h1 className='text-3-xl font-bold mb-4'>{post.title}</h1>
      <p className='text-gray-600 dark:text-gray-300 mb-8'>{post.body}</p>

      <Link href="/blog" className="text-blue-500 hover:underline">
        ← Retour à la page de blog</Link>
    </main>
  )
}

export default page
