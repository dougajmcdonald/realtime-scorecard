import Link from 'next/link'

const Index = () => (
  <div>
    <Link prefetch href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index