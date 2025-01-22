import { CollapsibleText } from "./components/CollapsibleText"


export const TeamHeader = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="font-extrabold text-xl">
                🔴⚫ Flamengo
            </h1>
            <CollapsibleText numberOfLinesWhenCLosed={3}>
                Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional! O Fla é sinônimo de orgulho e superação. Mais que um time, é uma verdadeira paixão que atravessa gerações. Minha melhor herança é esse amor por você!

            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <button className="py-2 px-4 bg-paper rounded-full">
                    Compartilhar
                </button>

                <span>
                    Uma vez Flamengo, Flamengo até morrer.
                </span>
            </div>
        </div>
    )
}