import { ArrowDown, BookText, CloudAlert, Lock, Server } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

// Info 
const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudAlert,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Lock,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: Server,
  },
]


function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden pt-14 min-h-screen">
        {/* <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover"
        /> */}
        <video
          alt="Video by: Canva"
          src="../videos/baby.mp4"
          className='absolute inset-0 -z-10 size-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <img
                alt="GuateCare"
                src="https://i.ibb.co/934jscxV/Home.png"
                className="mx-auto h-16 w-auto sm:h-16 md:h-60 lg:h-60 xl:h-28 2xl:h-32"
              />
              <div className="block mt-8 sm:flex sm:justify-center">
                <div className=" relative rounded-full px-2 py-0.5 text-sm md:text-lg text-gray-50 ring-1 ring-white/10 hover:ring-white/20 backdrop-blur-3xl sm:px-3 sm:py-1 sm:text-sm/6 w-52 md:w-auto mx-auto">
                  Conoce más sobre GuateCare.{' '}
                  <Link to={'/company'} className="font-semibold text-white">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Saber más <BookText aria-hidden="true" className="size-4 inline-block" />
                  </Link>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/login"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a href="#more" className="text-sm/6 font-semibold text-white">
                  Malnutrición <ArrowDown aria-hidden="true" className="size-4 inline-block" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
      {/* Feature section */}
      <section id='more' className='relative isolate overflow-hidden'>
        <div className="overflow-hidden py-24 sm:py-32">
          <img
            alt="Photo by: Fundación Libertad y Desarrollo"
            src="https://i.ibb.co/QvCrTDzQ/malnutrition.png"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-extrabold text-indigo-400">Guatemala</h2>
                  <p className="font-roboto mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-50 sm:text-5xl">
                    Una infancia robada por la desnutrición.
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-200">
                    Según el Centro de Investigación Económica y Presupuestaria 
                    <p className='font-oswald text-2xl font-bold italic'>“en términos de eficiencia económica, la inversión social en la primera infancia posee efectos más marcados sobre la formación de capacidades que invertir en etapas posteriores de la vida (después de los 6 años)”.</p>
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-100">
                          <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-500" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                alt="Photo by: ASOCEM"
                src="https://i.ibb.co/9FY7VHt/mom.png"
                width={2432}
                height={1442}
                className=" mx-auto block w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home