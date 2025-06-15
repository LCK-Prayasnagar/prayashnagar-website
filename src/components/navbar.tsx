interface barVariant {
  variant: 'horizantal' | 'vertical'
}

import Link from 'next/link'
import { CgArrowTopRightR } from 'react-icons/cg'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Our Team', href: '/team', current: false },
  { name: 'Message From The President', href: '/message', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ variant }: barVariant) => {
  return (
    <>
      {variant === 'vertical' ? (
        <div className="text-1xl font-bold flex flex-col">
          <div className="flex mt-2">
            <Link className="flex mt-2" href={'/'}>
              <span className="me-2">Home </span>
              <CgArrowTopRightR size={15} />
            </Link>
          </div>
          <div className="flex mt-2">
            <Link className="flex mt-2" href={'/about'}>
              <span className="me-2">About Us </span>
              <CgArrowTopRightR size={15} />
            </Link>
          </div>
          <div className="flex mt-2">
            <Link className="flex mt-2" href={'/team'}>
              <span className="me-2">Our Team </span>
              <CgArrowTopRightR size={15} />
            </Link>
          </div>
          <div className="flex mt-2">
            <Link className="flex mt-2" href={'/message'}>
              <span className="me-2">Message from the President </span>
              <CgArrowTopRightR size={15} />
            </Link>
          </div>
        </div>
      ) : (
        <Disclosure as="nav" className=" bg-[#12184F]">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      )}
    </>
  )
}

export default Navbar
