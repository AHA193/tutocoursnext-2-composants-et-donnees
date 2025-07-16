
import React from 'react'


async function page() {


const res = await fetch ("https://jsonplaceholder.typicode.com/photos/1") /**/
const imgObject = await res.json()
console.log(imgObject);

  return (
        <div>
        <h1>Une image</h1>
        <img src={imgObject.url} 
          placeholder={imgObject.url} 
    alt="" />
        </div>
  )
}

export default page
 