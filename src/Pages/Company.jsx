import { Cloud, LockIcon, Server } from "lucide-react";

const stats = [


  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]

export default function CompanyAll() {
  return (
    <div>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center sm:pt-40">
          <img
                alt=""
                src="https://i.ibb.co/sdGCvZpT/logo.png"
                className="h-16 w-auto align-middle mx-auto mb-2 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36"
              />
          <h1 className="text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">Bienvenido a GuateCare</h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-600 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                hac adipiscing egestas.
              </p>
            </div>
            <div>
              <p>
                Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
                voluptate.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-gray-700">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* Second part */}
      

    </div>
  )
}
