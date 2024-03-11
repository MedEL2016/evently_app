import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className='w-full border-b'>
      <div className='max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between'>
        <Link href="/" className='w-36'>
          <Image src="/assets/images/logo.svg" alt='Evently Logo' width={128} height={38}/>
        </Link>
        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>
        <div className='flex w-32 justify-end gap-3 items-center'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>
          <SignedOut>
              <Button asChild className='rounded-full' size='lg'>
                <Link href='/sign-in'>
                  Login
                </Link>
              </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header