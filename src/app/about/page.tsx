import Link from 'next/link'
import Navbar from '@/components/navbar'

export default function About() {
  return (
    <>
      <Navbar variant="horizantal" />
      {/* for desktop */}
      <div className="bg-[#12184F] relative hidden lg:block">
        <div
          className="min-w-[100vw] min-h-[100vh] bg-[#12184F]"
          style={{ clipPath: 'polygon(45% 0%, 100% 0%, 100% 100%, 39% 100%)' }}
        />
        <div className="absolute top-0 w-full max-h-[100vh] h-full flex justify-center items-center">
          <div className="flex max-w-[1425px] mx-5 xl:mx-16 mt-10">
            {/* Left Section */}
            {/* <div className="w-[45%] pr-10">
              <div className="w-96">
                <div className="flex justify-center mb-6 ">
                  <img
                    alt="Leo Club of Kathmandu Prayasnagar logo"
                    className="w-60 h-60"
                    src="./logo.png"
                  />
                </div>
                <div className=" text-[#12184F]">
                  <p className="text-justify mb-1">
                    The Leo Club of Kathmandu Prayasnagar, established on January 13, 2020, is a
                    youth-led organization dedicated to leadership, service, and community impact.
                    Sponsored by the Lions Club of Kathmandu Prayasnagar, we provide a platform for
                    young individuals to develop leadership skills, engage in meaningful service,
                    and drive positive change.
                  </p>
                  <p className="text-justify">
                    As an active club of Leo District Council 325L, Nepal, we focus on education,
                    digital literacy, environmental sustainability, health, and youth empowerment.
                    Our initiatives aim to uplift communities while fostering personal and
                    professional growth among members. We believe in action-driven leadership,
                    innovative solutions, and collaborative efforts to create a lasting impact. Join
                    us in our mission to lead, serve, and inspire a better tomorrow.
                  </p>
                </div>
              </div> 
            </div>
              */}

            <div className=" sm:w-[55.56%] w-full text-white justify-start pt-8 pl-8">
              {/* Logo */}
              <div className="mb-6">
                <div className="rounded-full flex ps-15">
                  <img src="./logo.png" alt="" />
                </div>
              </div>
              {/* Text Content */}
              <div className="ml-5 pt-5">
                <p className="text-lg w-96 md:text-xl text-start max-w-md mb-6 text-justify">
                  The Leo Club of Kathmandu Prayasnagar, established on January 13, 2020, is a
                  youth-led organization dedicated to leadership, service, and community impact.
                  Sponsored by the Lions Club of Kathmandu Prayasnagar, we provide a platform for
                  young individuals to develop leadership skills, engage in meaningful service, and
                  drive positive change.
                </p>
                <p className="text-lg w-96 md:text-xl text-start max-w-md mb-6 text-justify">
                  As an active club of Leo District Council 325L, Nepal, we focus on education,
                  digital literacy, environmental sustainability, health, and youth empowerment. Our
                  initiatives aim to uplift communities while fostering personal and professional
                  growth among members. We believe in action-driven leadership, innovative
                  solutions, and collaborative efforts to create a lasting impact. Join us in our
                  mission to lead, serve, and inspire a better tomorrow.
                </p>

                {/* Location and Contact Icons */}
                <div className="flex align-bottom gap-14 mt-28">
                  <div className="flex cursor-pointer items-center gap-2"></div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-[55%] mt-20">
              <h2 className="text-2xl mb-15 font-bold text-center text-white">
                About <span className="text-[#DFBF7F]">Us</span>
              </h2>

              {/* <div className="flex flex-wrap gap-6 text-white justify-center">

                <div className="flex gap-3 items-start min-w-[250px] max-w-sm flex-1">
                  <img className="w-6 h-6 mt-1" src="./tick.png" alt="tick" />
                  <div>
                    <h3 className="text-xl mb-2 text-[#DFBF7F]">Our Vision</h3>
                    <p className="text-justify">
                      To build a future where young leaders grow, serve, and create a positive
                      impact.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start min-w-[200px] max-w-sm flex-1">
                  <img className="w-6 h-6 mt-1" src="./tick.png" alt="tick" />
                  <div>
                    <h3 className="text-xl mb-2 text-[#DFBF7F]">Our Mission</h3>
                    <p className="text-justify">
                      To empower youth through leadership and service opportunities, fostering
                      personal growth while uplifting communities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start min-w-[200px] max-w-sm flex-1">
                  <img className="w-6 h-6 mt-1" src="./tick.png" alt="tick" />
                  <div>
                    <h3 className="text-xl mb-2 text-[#DFBF7F]">
                      History & <br /> Establishment
                    </h3>
                    <p className="text-justify">
                      Our club has grown into a leading youth organization. We have proudly produced
                      a District President, District Secretary, and award-winning leaders. Through
                      our service projects, we’ve positively impacted over 10,000 people.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start min-w-[200px] max-w-sm flex-1">
                  <img className="w-6 h-6 mt-1" src="./tick.png" alt="tick" />
                  <div>
                    <h3 className="text-xl mb-2 text-[#DFBF7F]">Why Join Us?</h3>
                    <p className="text-justify">
                      Join us to develop leadership skills, serve the community, and make a
                      difference.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start min-w-[200px] max-w-sm flex-1">
                  <img className="w-6 h-6 mt-1" src="./tick.png" alt="tick" />
                  <div>
                    <h3 className="text-xl mb-2 text-[#DFBF7F]">Club Details</h3>
                    <p>Club ID: 140727</p>
                    <p>Sponsored by: Lions Club of Kathmandu Prayasnagar</p>
                    <p>Charter Date: January 13, 2020</p>
                    <p>Club Type: Community-Based</p>
                    <p>District: Leo District Council 325L, Nepal</p>
                  </div>
                </div>
              </div> */}

              <div className="max-w-[65%]">
                <div className="mb-6 flex">
                  <img className="min-w-25 h-25 -mt-5" src="./tick.png" alt="tick" />
                  <div className="text-justify text-white">
                    <h3 className="text-xl mb-5 mt-3 text-[#DFBF7F]">Our Vision</h3>
                    <p>
                      To build a future where young leaders grow, serve, and create a positive
                      impact.
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex">
                  <img className="min-w-25 h-25 -mt-5" src="./tick.png" alt="tick" />
                  <div className="text-justify text-white">
                    <h3 className="text-xl mb-5 mt-3 text-[#DFBF7F]">Our Mission</h3>
                    <p>
                      To empower youth through leadership and service opportunities, fostering
                      personal growth while uplifting communities.
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex">
                  <img className="min-w-25 h-25 -mt-5" src="./tick.png" alt="tick" />
                  <div>
                    <h3 className="text-xl mb-2 text-[#DFBF7F]">
                      History & <br />
                      Establishment
                    </h3>
                    <p className="text-justify text-white">
                      Our club has grown into a leading youth organization. We have proudly produced
                      a District President, District Secretary, and award-winning leaders, including
                      Best President (LY 2020/21, 2021/22), Best Secretary (LY 2023/24), Best VP (LY
                      2022/23), Leo of the year LY 2023/24, International Club Excellency and Best
                      Club of the Year (LY 2023/24). Through our service projects, we have
                      positively impacted over 10,000 people in the community.
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex">
                  <img className="min-w-25 h-25 -mt-5" src="./tick.png" alt="tick" />
                  <div className="text-justify text-white">
                    <h3 className="text-xl mb-5 mt-3 text-[#DFBF7F]">Why Join Us?</h3>
                    <p>
                      Join us to develop leadership skills, serve the community, and make a
                      difference.
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex">
                  <img className="min-w-25 h-25 -mt-5" src="./tick.png" alt="tick" />
                  <div className="text-justify text-white">
                    <h3 className="text-xl mb-5 mt-3 text-[#DFBF7F]">Club Details</h3>
                    <p>Club ID : 140727</p>
                    <p>Sponsored by : Lions Club of Kathmandu Prayasnagar</p>
                    <p> Charter Date : January 13, 2020</p>
                    <p>Club Type : Community-Based</p>
                    <p>District : Leo District Council 325L, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* for mobile design */}
      <div className="bg-[#12184F] lg:hidden px-[5%] pt-8 text-[#DFBF7F] pb-15">
        <div className="flex justify-center mb-6 mt-5">
          <img
            alt="Leo Club of Kathmandu Prayasnagar logo"
            className="w-60 h-60"
            src="./logo.png"
          />
        </div>
        <div>
          <p className="text-justify mb-1">
            The Leo Club of Kathmandu Prayasnagar, established on January 13, 2020, is a youth-led
            organization dedicated to leadership, service, and community impact. Sponsored by the
            Lions Club of Kathmandu Prayasnagar, we provide a platform for young individuals to
            develop leadership skills, engage in meaningful service, and drive positive change.
          </p>
          <p className="text-justify">
            As an active club of Leo District Council 325L, Nepal, we focus on education, digital
            literacy, environmental sustainability, health, and youth empowerment. Our initiatives
            aim to uplift communities while fostering personal and professional growth among
            members. We believe in action-driven leadership, innovative solutions, and collaborative
            efforts to create a lasting impact. Join us in our mission to lead, serve, and inspire a
            better tomorrow.
          </p>
        </div>
        <div className="mt-20 capitalize">
          <h2 className="text-2xl font-bold mb-10 text-center ">
            <span className="text-white">about</span> us
          </h2>
          <div className="">
            <div className="mt-15">
              <div className="flex gap-2 items-center mb-5">
                <div className="w-2 h-2 bg-[#DFBF7F] rounded-full" />
                <h3 className="text-xl">Our Vision</h3>
              </div>
              <p className="text-justify">
                To build a future where young leaders grow, serve, and create a positive impact.
              </p>
            </div>
            <div className="mt-15">
              <div className="flex gap-2 items-center mb-5">
                <div className="w-2 h-2 bg-[#DFBF7F] rounded-full" />
                <h3 className="text-xl">Our Mission</h3>
              </div>
              <p className="text-justify">
                To empower youth through leadership and service opportunities, fostering personal
                growth while uplifting communities.
              </p>
            </div>
            <div className="mt-15">
              <div className="flex gap-2 items-center mb-5">
                <div className="w-2 h-2 bg-[#DFBF7F] rounded-full" />
                <h3 className="text-xl">Why Join Us ?</h3>
              </div>
              <p className="text-justify">
                Join us to develop leadership skills, serve the community, and make a difference.
              </p>
            </div>
          </div>

          <div className="flex mt-15">
            <img className="min-w-20 h-20 -mt-6 -ml-5" src="./tick.png" alt="tick" />
            <div>
              <h3 className="text-xl">History & Establishment</h3>
            </div>
          </div>
          <p className="text-justify ">
            Our club has grown into a leading youth organization. We have proudly produced a
            District President, District Secretary, and award-winning leaders, including Best
            President (LY 2020/21, 2021/22), Best Secretary (LY 2023/24), Best VP (LY 2022/23), Leo
            of the year LY 2023/24, International Club Excellency and Best Club of the Year (LY
            2023/24). Through our service projects, we have positively impacted over 10,000 people
            in the community.
          </p>

          <div className="flex mt-15">
            <img className="min-w-20 h-20 -mt-6 -ml-5" src="./tick.png" alt="tick" />
            <div>
              <h3 className="text-xl ">Club Details</h3>
            </div>
          </div>
          <p>Club ID : 140727</p>
          <p>Sponsored by : Lions Club of Kathmandu Prayasnagar</p>
          <p> Charter Date : January 13, 2020</p>
          <p>Club Type : Community-Based</p>
          <p>District : Leo District Council 325L, Nepal</p>
        </div>
      </div>
    </>
  )
}
