import { ContentCopy } from "@/components/CopyContent"
import { CollapsibleText } from "./components/CollapsibleText"
import { MdShare } from "react-icons/md"


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
                <ContentCopy title='Copie o conteúdo abaixo' content='http://localhost:3000/times/123'>
                    <button className="py-2 px-4 bg-paper rounded-full flex gap-2 items-center">
                        <MdShare /> 
                        Compartilhar
                    </button>
                </ContentCopy>
                <span>
                    Uma vez Flamengo, Flamengo até morrer.
                </span>
            </div>
        </div>
    )
}