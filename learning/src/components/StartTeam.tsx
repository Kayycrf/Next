'use client'

import Link from "next/link"
import { MdPlayCircleOutline } from "react-icons/md"
import { TbPlayerPlay } from "react-icons/tb"
import { useInView } from "react-intersection-observer"


interface IStartTeamProps {
    idTeam: string;
    idChannel: string;
    imageUrl: string
    title: string;
}
export const StartTeam = ({ idTeam, idChannel, imageUrl, title}: IStartTeamProps) => {

    const [ref, inView] = useInView({threshold: 0.1, initialInView: true});
    return (
        <>
            <div ref={ref} className="p-3 bg-paper rounded-md flex flex-col gap-4 md:sticky md:top-[104px]">
                <Link
                    className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded hover:no-underline"
                    style={{ backgroundImage: `url(${imageUrl})`}}
                    href={`/player/${idTeam}/${idChannel}`}
                >
                    <div className="w-full h-full flex items-center justify-center bg-background rounded opacity-0 hover:opacity-70 transition-opacity">
                        <MdPlayCircleOutline size={58}/>
                    </div>
                </Link>

                <Link 
                    className="bg-primary p-2 px-3 rounded flex items-center justify-center gap-2 hover:no-underline"
                    href={'/player/{idTeam}/{idChannel}'}
                >
                    Assistir vídeo
                    <TbPlayerPlay />
                </Link>
             </div>

             {!inView && (
                <div className="p-3 px-2 sm:my-4 bg-paper flex flex-col gap-4 absolute left-0 right-0 top-14">
                    <h1 className="font-extrabold text-xl">
                        {title}
                    </h1>

                    <Link 
                        className="bg-primary p-2 px-3 rounded flex items-center justify-center gap-2 hover:no-underline"
                        href={'/player/{idTeam}/{idChannel}'}
                     >
                        Assistir vídeo
                        <TbPlayerPlay />
                    </Link>
                </div>
             )}
        </>
        
    )
}