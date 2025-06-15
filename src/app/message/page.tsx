import { FaQuoteLeft } from 'react-icons/fa'
import Navbar from '@/components/navbar'

export default function WelcomePage() {
  return (
    <>
      <Navbar variant="horizantal" />
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center  bg-[#12184F] p-6 md:p-12 text-gray-900">
        {/* Left Section: Image and Name */}
        <div className="flex flex-col items-center text-center md:mr-12 mb-8 md:mb-0">
          <div className="w-90 h-90 rounded-full overflow-hidden border-8 border-[#F5D186] shadow-lg">
            <img src="/ceo.jpg" alt="Club President" className="object-cover w-full h-full" />
          </div>
          <div className="mt-4 bg-[#F5D186] text-white px-6 py-2 rounded-md font-semibold text-lg shadow-md">
            Leo Nabin Basnet
            <div className="text-sm font-normal text-gray-200 text-white ">President</div>
            <div className="text-sm font-normal text-gray-200 text-white">
              Leo Club Of Kathmandu Prayasnagar
            </div>
          </div>
        </div>

        {/* Right Section: Message */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold uppercase mb-1 text-white">
            Welcome Message
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-white">
            From <span className="text-white">the President</span>
          </h1>
          <hr className="border-t border-[#F5D186] mb-4 w-16 mx-auto md:mx-0" />
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">
              <FaQuoteLeft />
            </h3>
            <p className="text-white text-base leading-relaxed text-justify">
              As the President of Leo Club of Kathmandu Prayasnagar, I am delighted to welcome you
              to our vibrant community of passionate young leaders. Since our founding, we have
              strived to create a space where youth can come together, learn, lead, and serve with
              purpose. Our club is built on the foundation of empowerment, growth, and the
              collective desire to make a positive impact on causes that matter most in education,
              health, digital literacy, and environmental sustainability. At Leo Club of Kathmandu
              Prayasnagar, we are more than just an organization, we are like a family. We support
              each other, grow together, and work in harmony to achieve our common goals. It’s this
              sense of belonging and unity that drives us to create meaningful change in our
              communities. We believe that through collaboration and shared values, we can achieve
              great things and empower the next generation of leaders. I invite you to join our
              family, where you will discover not just a chance for personal growth but also the
              opportunity to contribute to something greater than yourself. Together, we can inspire
              change, promote leadership, and build a better future for all. Let’s lead with
              passion, serve with purpose, grow as one and crown the vision.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
