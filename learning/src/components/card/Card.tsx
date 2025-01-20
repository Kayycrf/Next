import Link from "next/link"
import Image from "next/image"

export const Card = () => {
    return (
        <Link href='/times/flamengo' className='hover:no-underline'>
            <article className="flex gap-2 flex-col p-2 sm:hover:bg-primary">
                <Image 
                    src={'/imagens/flamengo.jpg'}
                    alt={'Flamengo'}
                    draggable={false}
                    className="aspect-video object-cover rounded-2xl"
                    width={500}
                    height={0}
                />
                <h4 className="font-extrabold text-lg">Clube de Regatas do Flamengo</h4>
                <p className="line-clamp-3">Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!</p>
            </article>
        </Link>
    )
}