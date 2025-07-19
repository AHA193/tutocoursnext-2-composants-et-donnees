"use server" // ss le capot va permettre de gerer tt les serveractions creees
// et de nottament creer des ends points pour nous et de les rendre reutilisable pour nous

export async function getImg(){
const res = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos/1") /*https://jsonplaceholder.typicode.com/photos/1*/
const imgObject = await res.json()

return imgObject
}

export async function getPosts(){
     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return posts
}

export async function getPost(id){
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()
  console.log(post);

  return post
}