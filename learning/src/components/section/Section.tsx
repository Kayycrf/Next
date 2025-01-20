import { Card } from "../card/Card"

export const Section = () => {
    return (
        <section className="flex flex-col gap-4 px-4 items-center justify-center">
            <h2 className="font-bold text-xl">Todos os times</h2>

            <ul className="flex flex-col gap-2">
                <li>
                    <Card 
            href='/times/123'
            image='/imagens/flamengo.jpg'
            title='Clube de Regatas do Flamengo'
            description='Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
                    />
                </li>
                <li>
                    <Card 
            href='/times/123'
            image='/imagens/flamengo.jpg'
            title='Clube de Regatas do Flamengo'
            description='Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
                    />
                </li>
                <li>
                    <Card 
            href='/times/123'
            image='/imagens/flamengo.jpg'
            title='Clube de Regatas do Flamengo'
            description='Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
                    />        
                </li>
            </ul>
        </section>
    )
}