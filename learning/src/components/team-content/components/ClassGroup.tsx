'use client'
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Class } from "./Class";


interface IClassGroupProps {
    title: string; 
    teamId: string;
    classes: {
        id: string;
        title: string;
    }[];
}

export const ClassGroup = ({ title, teamId, classes }: IClassGroupProps) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button 
                className="flex items-center gap-6 p-4 bg-paper rounded"
                onClick={() => setOpen(!open)}
            >
                {open ? <MdKeyboardArrowDown size={24}/> : <MdKeyboardArrowRight size={24}/>}
                {title}
            </button>

            <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
                {classes.map(({ id, title }) => (
                    <li key={id}>
                        <Class 
                            title={title}
                            playerUrl={`https://youtu.be/mMIeK0gC6qk?si=WeY-S_XE0KJuvYjn/${teamId}/${id}`}
                        />
                    </li>
                    
                ))}

            </ol>
        </>
    )
}