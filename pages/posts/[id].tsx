import { useRouter } from 'next/router'
import React from 'react'

export default function PostPage() {
  const router = useRouter()
  const result = router.query.id
  return (
    <div>
      {router.query.id}
      <h1>My Post de Next</h1>
    </div>
  )
}
