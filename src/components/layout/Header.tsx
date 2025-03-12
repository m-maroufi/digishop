import React from 'react';
import { Button } from '@/components/ui';
import { ShoppingBasket, Store } from 'lucide-react';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white border-b border-b-gray-200 shadow-2xs">
      <div className="container h-15  mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={'.'} className="flex items-center gap-2">
            <Store size={30} className="text-blue-500 " />
            <span className="font-black text-blue-400"> دیجی شاپ</span>
          </Link>
          <nav className="pr-4">
            <Link href={'/products'} className="">
              {' '}
              فروشگاه{' '}
            </Link>
          </nav>
        </div>

        <div className="btns flex items-center justify-center gap-3">
          <Button variant={'ghost'} className="cursor-pointer">
            ورود به سایت
          </Button>
          <Button
            variant="outline"
            size={'icon'}
            className="text-gray-600 cursor-pointer"
          >
            <ShoppingBasket size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
