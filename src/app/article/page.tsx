import Link from 'next/link'
import React from 'react'

const ArticlesPage = async () => {

 const res = await fetch('https://jsonplaceholder.typicode.com/posts');
 const  articles = await res.json(); 
 console.log(articles)
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      ArticlesPage
      <button className='bg-black text-white rounded p-1'>
      <Link href={'/'}>Back to home</Link>
      </button>
    </div>
  )
}

export default ArticlesPage