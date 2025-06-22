'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Field, Label, Switch, TransitionChild } from '@headlessui/react'


import { AlignLeft, Bell, Briefcase, ChevronDown, CircleHelp, DoorOpen, Home, Layers, MessageCircle, Search, Settings, Users, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#', icon: Home, current: false },
  { name: 'Jobs', href: '#', icon: Briefcase, current: false },
  { name: 'Applications', href: '#', icon: Layers, current: false },
  { name: 'Messages', href: '#', icon: MessageCircle, current: false },
  { name: 'Team', href: '#', icon: Users, current: false },
  { name: 'Settings', href: '#', icon: Settings, current: true },
]
const secondaryNavigation = [
  { name: 'Help', href: '#', icon: CircleHelp },
  { name: 'Logout', href: '#', icon: DoorOpen },
]
const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-600/75 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs flex-1 transform flex-col bg-white pt-5 pb-4 transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 right-0 -mr-14 p-1 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="flex size-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-hidden"
                  >
                    <X aria-hidden="true" className="size-6 text-white" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <div className="flex shrink-0 items-center px-4">
                <img
                  alt="Dr.Quetzal"
                  src="https://i.ibb.co/sdGCvZpT/logo.png"
                  className="h-10 w-auto"
                />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="flex h-full flex-col">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current
                            ? 'border-purple-600 bg-purple-50 text-purple-600'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center border-l-4 px-3 py-2 text-base font-medium',
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 size-6 shrink-0',
                          )}
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-auto space-y-1 pt-10">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center border-l-4 border-transparent px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <item.icon aria-hidden="true" className="mr-4 size-6 text-gray-400 group-hover:text-gray-500" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </DialogPanel>
            <div aria-hidden="true" className="w-14 shrink-0">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <nav className="flex grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pt-5 pb-4">
            <div className="flex shrink-0 items-center px-4">
              <img
                alt="Dr.Quetzal"
                src="https://i.ibb.co/sdGCvZpT/logo.png"
                className="h-12 w-auto"
              />
            </div>
            <div className="mt-5 grow">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'border-purple-600 bg-purple-50 text-purple-600'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 size-6 shrink-0',
                      )}
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="block w-full shrink-0">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center border-l-4 border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <item.icon aria-hidden="true" className="mr-3 size-6 text-gray-400 group-hover:text-gray-500" />
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Content area */}
        <div className="lg:pl-64">
          <div className="lg:px-8">
            <div className="mx-auto flex flex-col lg:max-w-4xl">
              <div className="sticky top-0 z-10 flex h-16 shrink-0 border-b border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="border-r border-gray-200 px-4 text-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-hidden focus:ring-inset lg:hidden"
                >
                  <span className="sr-only">Open sidebar</span>
                  <AlignLeft aria-hidden="true" className="size-6" />
                </button>
                <div className="flex flex-1 justify-between px-4 lg:px-0">
                  <div className="flex flex-1">
                    <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                      <input
                        name="search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                      />
                      <Search
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                      />
                    </form>
                  </div>
                  <div className="ml-4 flex items-center lg:ml-6">
                    <button
                      type="button"
                      className="relative rounded-full bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      <span className="absolute -inset-1.5" />
                      <Bell aria-hidden="true" className="size-6" />
                      <span className="sr-only">View notifications</span>
                    </button>
                  </div>
                </div>
              </div>

              <main className="flex-1">
                <div className="relative mx-auto max-w-4xl">
                  <div className="pt-10 pb-16">
                    <div className="px-4 sm:px-6 lg:px-0">
                      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Settings</h1>
                    </div>
                    <div className="px-4 sm:px-6 lg:px-0">
                      <div className="py-6">
                        {/* Tabs */}
                        <div className="grid grid-cols-1 lg:hidden">
                          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                          <select
                            defaultValue={tabs.find((tab) => tab.current).name}
                            aria-label="Select a tab"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            {tabs.map((tab) => (
                              <option key={tab.name}>{tab.name}</option>
                            ))}
                          </select>
                          <ChevronDown
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                          />
                        </div>
                        <div className="hidden lg:block">
                          <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                              {tabs.map((tab) => (
                                <a
                                  key={tab.name}
                                  href={tab.href}
                                  className={classNames(
                                    tab.current
                                      ? 'border-purple-500 text-purple-600'
                                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap',
                                  )}
                                >
                                  {tab.name}
                                </a>
                              ))}
                            </nav>
                          </div>
                        </div>

                        {/* Description list with inline editing */}
                        <div className="mt-10 divide-y divide-gray-200">
                          <div className="space-y-1">
                            <h3 className="text-lg/6 font-medium text-gray-900">Profile</h3>
                            <p className="max-w-2xl text-sm text-gray-500">
                              This information will be displayed publicly so be careful what you share.
                            </p>
                          </div>
                          <div className="mt-6">
                            <dl className="divide-y divide-gray-200">
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="grow">Chelsea Hagon</span>
                                  <span className="ml-4 shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">Photo</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="grow">
                                    <img
                                      alt=""
                                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      className="size-8 rounded-full"
                                    />
                                  </span>
                                  <span className="ml-4 flex shrink-0 items-start space-x-4">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Update
                                    </button>
                                    <span aria-hidden="true" className="text-gray-300">
                                      |
                                    </span>
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Remove
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="grow">chelsea.hagon@example.com</span>
                                  <span className="ml-4 shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Job title</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="grow">Human Resources Manager</span>
                                  <span className="ml-4 shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div className="mt-10 divide-y divide-gray-200">
                          <div className="space-y-1">
                            <h3 className="text-lg/6 font-medium text-gray-900">Account</h3>
                            <p className="max-w-2xl text-sm text-gray-500">
                              Manage how information is displayed on your account.
                            </p>
                          </div>
                          <div className="mt-6">
                            <dl className="divide-y divide-gray-200">
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                                <dt className="text-sm font-medium text-gray-500">Language</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="grow">English</span>
                                  <span className="ml-4 shrink-0">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Update
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                <dt className="text-sm font-medium text-gray-500">Date format</dt>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <span className="grow">DD-MM-YYYY</span>
                                  <span className="ml-4 flex shrink-0 items-start space-x-4">
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Update
                                    </button>
                                    <span aria-hidden="true" className="text-gray-300">
                                      |
                                    </span>
                                    <button
                                      type="button"
                                      className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                      Remove
                                    </button>
                                  </span>
                                </dd>
                              </div>
                              <Field className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                <Label as="dt" passive className="text-sm font-medium text-gray-500">
                                  Automatic timezone
                                </Label>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <Switch
                                    checked={automaticTimezoneEnabled}
                                    onChange={setAutomaticTimezoneEnabled}
                                    className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden data-checked:bg-purple-600 sm:ml-auto"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="inline-block size-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5"
                                    />
                                  </Switch>
                                </dd>
                              </Field>
                              <Field className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                <Label as="dt" passive className="text-sm font-medium text-gray-500">
                                  Auto-update applicant data
                                </Label>
                                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden data-checked:bg-purple-600 sm:ml-auto"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="inline-block size-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-5"
                                    />
                                  </Switch>
                                </dd>
                              </Field>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
