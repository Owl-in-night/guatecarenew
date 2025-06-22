import { Cloud, HandCoins, LockIcon, Server } from "lucide-react";
// Language
import { useTranslation } from 'react-i18next'


export default function CompanyAll() {
  const { t } = useTranslation();
  const stats = [
    { label: t('company.dtText1'), value: '2023' },
    { label: t('company.dtText2'), value: '+' },
    { label: t('company.dtText3'), value: t('company.ddText2') },
    { label: t('company.dtText4'), value: '8' },
  ]
  return (
    <div>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center pt-40">
          <img
            alt="Dr.Quetzal"
            src="https://i.ibb.co/ch6GCgJY/logo3.png"
            className="h-16 w-auto align-middle mx-auto sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36"
          />
          <h1 className="text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">{t('company.history')}</h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
            {t('company.origin')}
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-800 lg:max-w-none lg:grid-cols-2">
            <div>
              <p className="text-justify indent-5">
                {t('company.pText1')}
              </p>
              <p className="text-justify mt-8 indent-5">
                {t('company.pText2')}
              </p>
            </div>
            <div>
              <p className="text-justify indent-5">
                {t('company.pText3')}
              </p>
              <p className="text-justify mt-8 indent-5">
                {t('company.pText4')}
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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {t('company.h2Text1')}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                {t('company.pText5')}
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="/login"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t('company.aText1')}
                </a>
                <a href="/prices" className="text-sm font-semibold text-gray-900">
                  {t('company.aText2')} <HandCoins className="inline" />
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                alt="DIY Electrónica"
                src="https://i.ibb.co/nMq6kjz5/logo1.png"
                width={105}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
              <img
                alt="COMUSAN Comisiones Municipales de Seguridad Alimentaria y Nutricional Panajachel"
                src="https://i.ibb.co/rGPqmLtg/logo2.png"
                width={104}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
              <img
                alt="SESAN Secretaría de Seguridad Alimentaria y Nutricional"
                src="https://i.ibb.co/tPZCNS8k/logo3.png"
                width={140}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
              <img
                alt="Municipalidad de Panajachel"
                src="https://i.ibb.co/HfdFJ3Hk/logo4.png"
                width={136}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
              <img
                alt="Universidad del Valle de Guatemala"
                src="https://i.ibb.co/bMLjJSXZ/logo5.png"
                width={158}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
              <img
                alt="Makerspace UVG Altiplano"
                src="https://i.ibb.co/ycVmPsP6/logo6.png"
                width={147}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
              <img
                alt="Centro de Salud Panajachel"
                src="https://i.ibb.co/5xJBwCVT/logo7.png"
                width={147}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
              <img
                alt="Ministerio de Salud Pública"
                src="https://i.ibb.co/HLRdNkTv/logo8.png"
                width={147}
                height={48}
                className="max-h-36 w-full object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
