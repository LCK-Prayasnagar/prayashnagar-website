import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#F5E9D4] relative">
        {/* Left Section - Beige Background with Illustration */}
        <div className="lg:w-3/9 w-full flex flex-col items-center px-20">
          <div className="text-center">
            <a className="flex flex-col items-center mb-6 w-7 h-7" href='./'>
              <img src="./home.svg" alt="" />
              <span className="ml-2">Home</span>
            </a>
            <div className="flex justify-center mb-6">
              <img
                alt="Leo Club of Kathmandu Prayasnagar logo"
                className="w-60 h-60"
                src="./logo.png"
              />
            </div>
            <p className="text-justify mb-1">
              Established on January 13, 2020, the Leo Club of Kathmandu Prayasnagar is a dynamic youth-led organization committed to leadership, service, and community impact. Proudly sponsored by the Lions Club of Kathmandu Prayasnagar, we empower young individuals to hone their leadership skills, engage in impactful service projects, and drive meaningful change.
            </p>
            <p className="text-justify">
              As an active member of Leo District Council 325L, Nepal, we focus on key areas like education, digital literacy, environmental sustainability, health, and youth empowerment. Our initiatives uplift communities while fostering personal and professional growth among members. Join us to lead, serve, and inspire a brighter future together!
            </p>
          </div>
        </div>

        {/* Right Section - Blue Background */}
        <div
          className="lg:w-6/9 w-full bg-blue-900 text-white flex flex-col justify-center items-center"
          style={{ clipPath: 'polygon(19% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <div className="text-[#f5f5f5] pe-30 ps-50 py-10 w-full">
            <h2 className="text-2xl font-bold mb-15 text-center">About Us</h2>
            <div className="flex gap-10">
              <div className="lg:w-1/2">
                <div className="mb-20">
                  <h3 className="text-xl font-bold mb-10">Our Vision</h3>
                  <p className="text-justify">
                    To create a future where young leaders thrive, serve with purpose, and drive positive change.
                  </p>
                </div>
                <div className="mb-20">
                  <h3 className="text-xl font-bold mb-10">Our Mission</h3>
                  <p className="text-justify">
                    To empower youth through leadership and service opportunities, fostering personal growth while uplifting communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-10">Why Join Us?</h3>
                  <p className="text-justify">
                    Become part of a passionate community to develop leadership skills, serve meaningfully, and make a lasting difference.
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-xl font-bold flex items-center mb-2 text-[#DFBF7F]">
                    <img src="./tick.png" alt="" />
                    History & <br />Establishment
                  </h3>
                  <p className="text-justify">
                    Since our founding, the Leo Club of Kathmandu Prayasnagar has emerged as a leading youth organization. We’ve produced exceptional leaders, including a District President, District Secretary, and award-winners like Best President (LY 2020/21, 2021/22), Best Secretary (LY 2023/24), Best VP (LY 2022/23), Leo of the Year (LY 2023/24), and Best Club of the Year (LY 2023/24). Our service projects have positively impacted over 10,000 lives in the community.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold flex items-center mb-2 text-[#DFBF7F]">
                    <img src="./tick.png" alt="" />
                    Club Details
                  </h3>
                  <p className="text-justify">
                    Club ID: 140727<br />
                    Sponsored by: Lions Club of Kathmandu Prayasnagar<br />
                    Charter Date: January 13, 2020<br />
                    Type: Community-Based<br />
                    District: Leo District Council 325L, Nepal
                  </p>
                </div>
              </div>


            </div>


          </div>
        </div>
      </div>
    </>
  );
}