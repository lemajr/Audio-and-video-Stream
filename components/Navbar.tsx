import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          width={50}
          height={42}
          alt="logo"
          className="size- w-16 h-12 max-md:h-10 max-md:w-12"
        />
        <p className="text-[20px] font-extrabold text-white max-sm:hidden">
          VM STREAM
          
        </p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
