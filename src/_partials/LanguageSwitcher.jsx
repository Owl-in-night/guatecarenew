'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions
} from '@headlessui/react';
import { Check, ChevronsUpDown } from 'lucide-react';

const LANGUAGES = [
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/gt.png' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
];

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];
    const [selectedLang, setSelectedLang] = useState(currentLang);

    const handleChange = (lang) => {
        setSelectedLang(lang);
        i18n.changeLanguage(lang.code);
    };

    return (
        <Listbox value={selectedLang} onChange={handleChange}>
            <div className="relative  w-auto">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-transparent  pr-2 pl-3 text-left text-white sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <img
                            alt={`${selectedLang.label} flag`}
                            src={selectedLang.flag}
                            className="size-5 shrink-0 rounded-full"
                        />
                        <span className="block truncate">{selectedLang.label}</span>
                    </span>
                    <ChevronsUpDown
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-white sm:size-4"
                    />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm"
                >
                    {LANGUAGES.map((lang) => (
                        <ListboxOption
                            key={lang.code}
                            value={lang}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white"
                        >
                            <div className="flex items-center">
                                <img
                                    alt={`${lang.label} flag`}
                                    src={lang.flag}
                                    className="size-5 shrink-0 rounded-full"
                                />
                                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                                    {lang.label}
                                </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                <Check aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
}

function LanguageSwitcherT() {
    const { i18n } = useTranslation();
    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];
    const [selectedLang, setSelectedLang] = useState(currentLang);

    const handleChange = (lang) => {
        setSelectedLang(lang);
        i18n.changeLanguage(lang.code);
    };

    return (

        <Listbox value={selectedLang} onChange={handleChange}>
            <div className="relative mt-2">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <img alt="" src={selectedLang.flag} className="size-5 shrink-0 rounded-full" />
                        <span className="block truncate">{selectedLang.label}</span>
                    </span>
                    <ChevronsUpDown
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                >
                    {LANGUAGES.map((lang) => (
                        <ListboxOption
                            key={lang.code}
                            value={lang}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                        >
                            <div className="flex items-center">
                                <img alt="" src={lang.flag} className="size-5 shrink-0 rounded-full" />
                                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{lang.label}</span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                <Check aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
}
//Export
export default LanguageSwitcher;
export { LanguageSwitcherT };