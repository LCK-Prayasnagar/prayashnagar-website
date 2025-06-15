'use client'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillTikTok } from 'react-icons/ai'
import { BsThreadsFill } from 'react-icons/bs'
import { MdMarkEmailUnread } from 'react-icons/md'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <>
      {/* for desktop */}
      <div className="bg-[#F5E9D4] relative hidden lg:block">
        <div
          className="min-w-[100vw] min-h-[100vh] bg-[#12184F]"
          style={{ clipPath: 'polygon(0% 0%, 52% 0%, 61% 100%, 0% 100%)' }}
        />
        <div className="absolute top-0 w-full max-h-[100vh] h-full flex justify-center items-center">
          <div className="flex lg:flex-row max-w-[1425px] 2xl:scale-[1.2]">
            {/* Left Section */}
            <div className=" sm:w-[55.56%] w-full text-white justify-start pt-8 pl-8">
              {/* Logo */}
              <div className="mb-6">
                <div className="rounded-full flex ps-15">
                  <img src="./logo.png" alt="" />
                </div>
              </div>
              {/* Text Content */}
              <div className="ml-5 pt-5">
                <p className="text-lg w-96 md:text-xl text-start max-w-md mb-6 pe-25">
                  Leo Club of Kathmandu Prayasnagar, founded on January 13, 2020, is a youth-led
                  organization committed to leadership, community, impact. As part of Leo
                </p>

                <Navbar variant="vertical" />

                {/* Location and Contact Icons */}
                <div className="flex align-bottom gap-14 mt-28">
                  <div className="flex cursor-pointer items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Prayasnagar, Basundhara</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="sm:w-[44.44%] md:w-auto flex flex-col justify-center items-center">
              <div className="w-full h-full">
                <div className="" style={{ marginTop: '-80px' }}>
                  <img src="./peoplesvg.png" alt="" />
                </div>
                {/* Main Heading */}
                <h1 className="lg:text-5xl xl:text-6xl font-bold pb-4 w-full gradient-text z-5">
                  Leo Club of Kathmandu <br /> Prayasnagar
                </h1>

                {/* Tagline */}
                <p className="text-xl gradient-text mb-6 z-5">Hands to Serve, Hearts to Love.</p>

                {/* Social Media Icons */}
                <div className="flex gap-4 justify-end mt-20 pe-20">
                  <a
                    href="https://www.facebook.com/leoktmprayasnagar"
                    className="text-blue-900 hover:text-blue-700"
                  >
                    <FaFacebookSquare size={40} />
                  </a>
                  <a
                    href="https://www.instagram.com/leo_prayasnagar/"
                    className="text-blue-900 hover:text-blue-700"
                  >
                    <FaInstagramSquare size={40} />
                  </a>
                  <a
                    href="https://www.instagram.com/leo_prayasnagar/"
                    className="text-blue-900 hover:text-blue-700"
                  >
                    <MdMarkEmailUnread size={45} />
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700 mt-1">
                    <BsThreadsFill size={35} />
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <AiFillTikTok size={46} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="bg-[#F5E9D4] relative lg:hidden">
        <div
          className="min-w-[100vw;] h-[1300px]  sm:h-[1400px] md:h-[1500px] bg-[#12184F]"
          style={{ clipPath: 'polygon(53% 0%, 100% 0%, 100% 100%, 27% 100%)' }}
        />
        <div className="absolute top-0 w-full">
          {/* Logo */}
          <div className="mt-10 flex justify-center">
            <img src="./logo.png" alt="" />
          </div>

          <div className="max-w-full">
            <img src="./peoplesvg.png" alt="" />
          </div>

          {/* Main Heading */}
          <div className="mx-5">
            <h1 className="font-bold text-2xl gradient-text-reverse ">Leo Club of</h1>
            <h1 className="font-bold text-3xl gradient-text-reverse ">Kathmandu Prayasnagar</h1>

            {/* Tagline */}
            <p className="text-xl mt-4 gradient-text-reverse mb-6 z-5">
              Hands to Serve, Hearts to Love.
            </p>

            <div className="pt-5 flex justify-between gap-[23%]">
              {/* Social Media Icons */}
              <div className="flex w-1/2 flex-col gap-4 min-w-12">
                <a
                  href="https://www.facebook.com/leoktmprayasnagar"
                  className="text-blue-900 hover:text-blue-700"
                >
                  <FaFacebookSquare size={40} />
                </a>
                <a
                  href="https://www.instagram.com/leo_prayasnagar/"
                  className="text-blue-900 hover:text-blue-700"
                >
                  <FaInstagramSquare size={40} />
                </a>
                <a
                  href="https://www.instagram.com/leo_prayasnagar/"
                  className="text-blue-900 hover:text-blue-700"
                >
                  <MdMarkEmailUnread size={45} />
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-700 ms-1">
                  <BsThreadsFill size={35} />
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-700">
                  <AiFillTikTok size={46} />
                </a>
              </div>

              <div className="text-white">
                <p className="text-lg mb-16">
                  Leo Club of Kathmandu Prayasnagar, founded on January 13, 2020, is a youth-led
                  organization committed to leadership, community, impact. As part of Leo
                </p>
                {/* About Us Button */}
                <Navbar />
                <div className="flex align-bottom gap-5 mt-16 justify-end">
                  <div className="flex cursor-pointer items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Prayasnagar, Basundhara </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
