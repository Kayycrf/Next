'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineOpenInNew } from 'react-icons/md';

export default function Header() {
    const currentPath = usePathname();

    return (
        <nav className='flex items-center justify-center bg-primary py-4'>
            <ul className='flex gap-4 items-center'>
                <li className='my-2'>
                    <Link href="/" className='border-2 rounded-md py-2 px-2 font-bold'>BRASILEIRÃO</Link>
                </li>
                <li>
                    <Link href="/" data-active={currentPath === '/'} className='data-[active=true]:underline'>Página Inicial</Link>
                </li>
                <li>
                    <Link href="/times" data-active={currentPath === '/times'} className='data-[active=true]:underline'>Times</Link>
                </li>
                <li>
                    <Link href="https://x.com/KayySg" target="_blank" className='flex gap-1 items-center'>Twitter 
                        <MdOutlineOpenInNew />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}