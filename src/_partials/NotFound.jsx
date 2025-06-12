import { Book, Bookmark, ChevronRight, Landmark, Rss } from 'lucide-react'
import { Link } from 'react-router'
const links = [
  {
    name: 'Documentation',
    href: '#',
    description: 'Learn how to integrate our tools with your app.',
    icon: Book,
  },
  { name: 'API Reference', href: '#', description: 'A complete API reference for our libraries.', icon: Landmark },
  {
    name: 'Guides',
    href: '#',
    description: 'Installation guides that cover popular setups.',
    icon: Bookmark,
  },
  { name: 'Blog', href: '#', description: 'Read our latest news and articles.', icon: Rss },
]

function NotFound() {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
        <img
          alt="GuateCare"
          src="https://i.ibb.co/s84KG99/logo.png"
          className="mx-auto h-12 w-auto md:h-20"
        />
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base/8 font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            This page does not exist
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex size-10 flex-none items-center justify-center rounded-lg shadow-xs ring-1 ring-gray-900/10">
                  <link.icon aria-hidden="true" className="size-6 text-indigo-600" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    <a href={link.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm/6 text-gray-600">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRight aria-hidden="true" className="size-5 text-gray-400" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            {/* <a href="#" className="text-sm/6 font-semibold text-indigo-600">
              <span aria-hidden="true">&larr;</span> Back to home
            </a> */}
            <Link to="/" className="text-sm/6 font-semibold text-indigo-600"><span aria-hidden="true">&larr;</span> Back to home</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound