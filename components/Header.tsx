import Image from "next/image"
import Link from "next/link"
import React from "react"

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='header'>
      <Link
        href='/'
        className='flex md:flex-1 '
      >
        <Image
          src='/assets/icons/logo.svg'
          alt='logo-w-name'
          width={32}
          height={32}
          className='mr-2 '
        />
        <span className='h-9 border-l-2 mr-2 border-purple-500 hidden lg:block md:flex '></span>
        <span className='lg:flex md:flex font-mono flex-col items-left leading-4 text-sm hidden'>
          <span>Docs</span>
          <span>Draft</span>
        </span>
      </Link>
      {children}
    </div>
  )
}

export default Header
