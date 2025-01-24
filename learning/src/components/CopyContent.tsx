'use client'
import { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MdCheck, MdContentCopy } from 'react-icons/md';

interface IContentProps {
    title: string;
    content: string;
    children: React.ReactNode
}

export const ContentCopy = ({ title, content, children}: IContentProps) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (copied) {
            setTimeout(() => setCopied(false), 2000)
        }
    })
    const handleCopy = () => {
        setCopied(true)
        window.navigator.clipboard.writeText(content)
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {children}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className='p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 max-w-sm'>
                    <span>{title}</span>
                    <div className='flex items-cnter gap-1'>
                        <input 
                            readOnly
                            autoFocus
                            onFocus={event => event?.target.select()}
                            defaultValue={content}
                            className='bg-background p-1 px-2 rounded'
                        />

                        <button className='p-2' onClick={handleCopy}>
                            {copied ? <MdCheck className='color-text-primary'/> : <MdContentCopy />}
                        </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}