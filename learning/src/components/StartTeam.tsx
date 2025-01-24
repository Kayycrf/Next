import Link from "next/link"
import { MdPlayCircleOutline } from "react-icons/md"
import { TbPlayerPlay } from "react-icons/tb"


interface IStartTeamProps {
    idTeam: string;
    idChannel: string;
    imageUrl: string
}
export const StartTeam = ({ idTeam, idChannel, imageUrl}: IStartTeamProps) => {
    return (
        <div className="p-3 bg-paper rounded-md flex flex-col gap-4">
            <Link
                className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded"
                style={{ backgroundImage: `url(${imageUrl})`}}
                href={`/player/${idTeam}/${idChannel}`}
            >
                <div className="w-full h-full flex items-center justify-center bg-background rounded opacity-0 hover:opacity-70 transition-opacity">
                    <MdPlayCircleOutline size={58}/>
                </div>
            </Link>

            <Link 
                className="bg-primary p-2 px-3 rounded flex items-center justify-center gap-2"
                href={'/player/{idTeam}/{idChannel}'}
            >
                Assistir vídeo
                <TbPlayerPlay />
            </Link>
        </div>
    )
}