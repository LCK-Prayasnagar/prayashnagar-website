interface BackHomeButtonProps {
  variant: string
}

import Link from 'next/link'
import { CgArrowTopRightR } from 'react-icons/cg'

const Navbar = () => {
  return (
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
  )
}

export default Navbar
