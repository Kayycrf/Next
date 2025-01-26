'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdMenu, MdOutlineOpenInNew } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function Header() {
    const [title, setTitle] = useState('Times Brasileirão - Série A')
    const [drawer, setDrawer] = useState(false)
    const currentPath = usePathname();

    useEffect(() => {
        setTitle(document.title)
        setDrawer(false)
    }, [currentPath])

    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setDrawer(false)
            }
        };

        window.addEventListener('keydown', handle)
        return () => window.removeEventListener('keydown', handle)
    },[])

    return (
        <>
            <nav className='flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6 fixed top-0 right-0 left-0 z-50'>
                <button className='sm:hidden' onClick={() => setDrawer(true)}>
                    <MdMenu size={24}/>
                </button>
                <ul className='flex gap-4 items-center' tabIndex={drawer ? -1 : undefined}>
                    <li className='my-2'>
                        <Link href="/" className='border-2 border-whiterounded-md py-2 px-2 font-bold outline-offset-4'>BRASILEIRÃO</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href="/" data-active={currentPath === '/'} className='data-[active=true]:underline outline-offset-4'>Página Inicial</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href="/times" data-active={currentPath === '/times'} className='data-[active=true]:underline outline-offset-4'>Times</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href="https://x.com/KayySg" target="_blank" className='flex gap-1 items-center'>Twitter 
                            <MdOutlineOpenInNew />
                        </Link>
                    </li>
                </ul>

                <div 
                data-open={drawer}
                tabIndex={drawer ? undefined : -1}
                onClick={() => setDrawer(false)}
                className='sm:hidden bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full'>

                    <ul className='flex gap-4 flex-col p-4 w-60  h-full bg-background' onClick={event => event.stopPropagation()}>
                        <li className=''>
                            <Link href="/" data-active={currentPath === '/'} className='data-[active=true]:underline'>Página Inicial</Link>
                        </li>
                        <li className=''>
                            <Link href="/times" data-active={currentPath === '/times'} className='data-[active=true]:underline'>Times</Link>
                        </li>
                        <li className=''>
                            <Link href="https://x.com/KayySg" target="_blank" className='flex gap-1 items-center'>Twitter 
                                <MdOutlineOpenInNew />
                            </Link>
                        </li>
                    </ul>
                </div>
            
                <h1 className='sm:hidden line-clamp-1'>{title}</h1>
            </nav>
            <div className='h-14 sm:h-[72]'></div>
        </>
        
    )
}