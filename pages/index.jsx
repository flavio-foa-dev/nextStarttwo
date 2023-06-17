import Link from 'next/link'
import React from 'react'

export default function Index() {
  return (
    <div>
     <h1>
       Page Index em next
      </h1>
      <ul>
        <li>
          <Link href="/">To go home</Link>
        </li>
        <li>
          <Link href="/">To go home</Link>
        </li>
      </ul>
    </div>
  )
}
