
import React from 'react'


async function page() {


const res = await fetch ("https://jsonplaceholder.typicode.com/albums/1/photos/1") /*https://jsonplaceholder.typicode.com/photos/1*/
const imgObject = await res.json()
console.log(imgObject);

  return (
        <div>
        <h1>Une image</h1>
        <img src={imgObject.url} 
        height="600"
        width="600"
        alt="" />
        </div>
  )
}

export default page
 