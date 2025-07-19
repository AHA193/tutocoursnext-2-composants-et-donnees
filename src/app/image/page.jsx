
import React from 'react'
import { getImg } from '@/lib/serverActions';

async function Image() {

  const imgObject = await getImg()
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

export default Image
 