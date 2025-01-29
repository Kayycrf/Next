import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IClassProps {
    title: string; 
    playerUrl: string;
}

export const Class = ({ title, playerUrl }: IClassProps) => {
    return (
        <Link target='_blank' href={playerUrl} className="flex items-center hover:no-underline gap-6 p-4">
            <MdPlayCircleOutline  size={24} />
            {title}
        </Link>
        
    )
}