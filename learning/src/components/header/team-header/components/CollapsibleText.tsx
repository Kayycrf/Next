'use client'

import { useState } from "react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

interface ICollapsibleProps {
    numberOfLinesWhenCLosed: number;
    children: React.ReactNode
}

export const CollapsibleText = ({ children, numberOfLinesWhenCLosed }: ICollapsibleProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col items-end">
            
            <p 
                data-open={open}
                style={{ '--number-of-lines-when-closed': numberOfLinesWhenCLosed} as React.CSSProperties}
                className="data-[open=false]:line-clamp-[var(--number-of-lines-when-closed)]"
             >
                {children}
            </p>
           
            <button 
                data-open={false}
                onClick={() => setOpen(!open)}
                className="bg-paper rounded-full px-2 py-2 data-[open=false]:-mt-6  "
            >
            {open ? <MdArrowUpward /> : <MdArrowDownward />}
                    
            </button>
            
            
        </div>
       
    )
}