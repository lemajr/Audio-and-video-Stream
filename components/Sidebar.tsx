'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex flex-col h-screen justify-center items-center p-2 object-center text-white max-sm:hidden">
      <div className="flex flex-col justify-center items-center gap-6 h-96 w-14 bg-dark-1 rounded-full">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <TooltipProvider key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.route}
                    className={cn(
                      'flex gap-4 items-center p-2 rounded-lg justify-center  transition-transform hover:scale-125 hover:border border-blue-1',
                      {
                        'border border-blue-1': isActive,
                      }
                    )}
                  >
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
