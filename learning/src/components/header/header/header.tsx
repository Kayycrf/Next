'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdMenu, MdOutlineOpenInNew } from 'react-icons/md';

export default function Header() {
    const currentPath = usePathname();

    return (
        <nav className='flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6'>
            <button className='sm:hidden'>
                <MdMenu size={24}/>
            </button>
            <ul className='flex gap-4 items-center'>
                <li className='my-2'>
                    <Link href="/" className='border-2 rounded-md py-2 px-2 font-bold'>BRASILEIRÃO</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href="/" data-active={currentPath === '/'} className='data-[active=true]:underline'>Página Inicial</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href="/times" data-active={currentPath === '/times'} className='data-[active=true]:underline'>Times</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href="https://x.com/KayySg" target="_blank" className='flex gap-1 items-center'>Twitter 
                        <MdOutlineOpenInNew />
                    </Link>
                </li>
            </ul>
            <h1 className='sm:hidden'>BRASILEIRÃO - Página Inicial</h1>
        </nav>
    )
}