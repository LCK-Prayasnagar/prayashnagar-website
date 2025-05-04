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
                {/* About Us Button */}
                <a
                  className="inline-block px-6 py-2 bg-white text-blue-900 rounded-md font-semibold hover:bg-gray-200 transition-colors z-10"
                  href="#"
                >
                  About Us →
                </a>
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
                    <span>Location</span>
                  </div>
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Contact</span>
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
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.58 8.06 8.22 9.54v-6.75h-2.48v-2.79h2.48v-2.13c0-2.45 1.5-3.79 3.69-3.79 1.05 0 1.95.08 2.21.11v2.57h-1.52c-1.19 0-1.42.57-1.42 1.4v1.84h2.84l-.37 2.79h-2.47v6.75c4.64-1.48 8.22-5.13 8.22-9.54 0-5.5-4.46-9.96-9.96-9.96z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96s9.96-4.46 9.96-9.96c0-5.5-4.46-9.96-9.96-9.96zm0 1.8c4.41 0 7.98 3.58 7.98 7.98s-3.58 7.98-7.98 7.98-7.98-3.58-7.98-7.98 3.58-7.98 7.98-7.98zm0 2.7c-2.94 0-5.34 2.4-5.34 5.34s2.4 5.34 5.34 5.34 5.34-2.4 5.34-5.34-2.4-5.34-5.34-5.34zm0 1.8c1.98 0 3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6-3.6-1.62-3.6-3.6 1.62-3.6 3.6-3.6zm5.58-2.52v1.8h-1.8v-1.8h1.8z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.62 2.04h-15.24c-2.49 0-4.38 1.89-4.38 4.38v15.24c0 2.49 1.89 4.38 4.38 4.38h15.24c2.49 0 4.38-1.89 4.38-4.38v-15.24c0-2.49-1.89-4.38-4.38-4.38zm-11.16 17.1h-2.7v-9.36h2.7v9.36zm-1.35-10.62c-.87 0-1.56-.72-1.56-1.56s.69-1.56 1.56-1.56 1.56.72 1.56 1.56-.69 1.56-1.56 1.56zm12.06 10.62h-2.7v-5.04c0-1.2-.42-2.04-1.5-2.04-.81 0-1.29.54-1.5 1.08-.06.18-.06.42-.06.66v5.34h-2.7v-9.36h2.7v1.26c.39-.6 1.08-1.44 2.64-1.44 1.92 0 3.36 1.26 3.36 3.96v5.58z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.58 8.06 8.22 9.54v-6.75h-2.48v-2.79h2.48v-2.13c0-2.45 1.5-3.79 3.69-3.79 1.05 0 1.95.08 2.21.11v2.57h-1.52c-1.19 0-1.42.57-1.42 1.4v1.84h2.84l-.37 2.79h-2.47v6.75c4.64-1.48 8.22-5.13 8.22-9.54 0-5.5-4.46-9.96-9.96-9.96z" />
                    </svg>
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
                <a href="#" className="text-blue-900 hover:text-blue-700">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.58 8.06 8.22 9.54v-6.75h-2.48v-2.79h2.48v-2.13c0-2.45 1.5-3.79 3.69-3.79 1.05 0 1.95.08 2.21.11v2.57h-1.52c-1.19 0-1.42.57-1.42 1.4v1.84h2.84l-.37 2.79h-2.47v6.75c4.64-1.48 8.22-5.13 8.22-9.54 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-700">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96s9.96-4.46 9.96-9.96c0-5.5-4.46-9.96-9.96-9.96zm0 1.8c4.41 0 7.98 3.58 7.98 7.98s-3.58 7.98-7.98 7.98-7.98-3.58-7.98-7.98 3.58-7.98 7.98-7.98zm0 2.7c-2.94 0-5.34 2.4-5.34 5.34s2.4 5.34 5.34 5.34 5.34-2.4 5.34-5.34-2.4-5.34-5.34-5.34zm0 1.8c1.98 0 3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6-3.6-1.62-3.6-3.6 1.62-3.6 3.6-3.6zm5.58-2.52v1.8h-1.8v-1.8h1.8z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-700">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.62 2.04h-15.24c-2.49 0-4.38 1.89-4.38 4.38v15.24c0 2.49 1.89 4.38 4.38 4.38h15.24c2.49 0 4.38-1.89 4.38-4.38v-15.24c0-2.49-1.89-4.38-4.38-4.38zm-11.16 17.1h-2.7v-9.36h2.7v9.36zm-1.35-10.62c-.87 0-1.56-.72-1.56-1.56s.69-1.56 1.56-1.56 1.56.72 1.56 1.56-.69 1.56-1.56 1.56zm12.06 10.62h-2.7v-5.04c0-1.2-.42-2.04-1.5-2.04-.81 0-1.29.54-1.5 1.08-.06.18-.06.42-.06.66v5.34h-2.7v-9.36h2.7v1.26c.39-.6 1.08-1.44 2.64-1.44 1.92 0 3.36 1.26 3.36 3.96v5.58z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-700">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.58 8.06 8.22 9.54v-6.75h-2.48v-2.79h2.48v-2.13c0-2.45 1.5-3.79 3.69-3.79 1.05 0 1.95.08 2.21.11v2.57h-1.52c-1.19 0-1.42.57-1.42 1.4v1.84h2.84l-.37 2.79h-2.47v6.75c4.64-1.48 8.22-5.13 8.22-9.54 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>

              <div className="text-white">
                <p className="text-lg mb-16">
                  Leo Club of Kathmandu Prayasnagar, founded on January 13, 2020, is a youth-led
                  organization committed to leadership, community, impact. As part of Leo
                </p>
                {/* About Us Button */}
                <div className="flex justify-end mr-3">
                  <a
                    className="px-6 py-2 bg-white text-blue-900 rounded-md font-semibold hover:bg-gray-200 transition-colors z-10"
                    href="#"
                  >
                    About Us →
                  </a>
                </div>

                <div className="flex align-bottom gap-14 mt-16 justify-end">
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
                    <span>Location</span>
                  </div>
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Contact</span>
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
