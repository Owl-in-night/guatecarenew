import { ArrowLeft, Building2, ChevronRight, Gem, Globe, Key } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router'

function NotFound() {
  const { t } = useTranslation();
  const links = [
    {
      name: t('notfound.spanText1'),
      href: '/company',
      description: t('notfound.pText2'),
      icon: Building2,
    },
    { name: t('notfound.spanText2'), href: '/prices', description: t('notfound.pText3'), icon: Gem },
    {
      name: t('notfound.spanText3'),
      href: '/global',
      description: t('notfound.pText4'),
      icon: Globe,
    },
    { name: t('notfound.spanText4'), href: '/login', description:  t('notfound.pText5'), icon: Key },
  ]

  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
        <img
          alt="GuateCare"
          src="https://i.ibb.co/20T84qQY/404.png"
          className="mx-auto h-20 w-auto md:h-44"
        />
        <div className="mx-auto max-w-2xl text-center ">
          <p className="text-base/8 font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            {t("notfound.h1Text1")}
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {t("notfound.pText1")}
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
            <Link to="/" className="text-sm/6 font-semibold text-indigo-600"><ArrowLeft className='inline' /> Back to home</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound