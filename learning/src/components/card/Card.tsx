import Link from "next/link"
import Image from "next/image"

    interface ICardProps {
        href: string;
        image: string;
        title: string;
        description: string;
    }
    
export const Card = ({ title, description, image, href } : ICardProps) => {
    return (
        <Link href={href} className='hover:no-underline'>
            <article className="flex gap-2 flex-col p-2 sm:hover:bg-primary">
                <Image 
                    src={image}
                    alt={title}
                    draggable={false}
                    className="aspect-video object-cover rounded-2xl"
                    width={500}
                    height={0}
                />
                <h4 className="font-extrabold text-lg">{title}</h4>
                <p className="line-clamp-3">{description}</p>
            </article>
        </Link>
    )
}