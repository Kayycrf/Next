import { Card } from "../card/Card"


interface ISectionProps {
    title: string;
    variant: 'grid' | 'h-list';
}
export const Section = ({ title, variant = 'grid' }: ISectionProps) => {
    return (
        <section className="flex flex-col gap-4 px-4 items-center justify-center">
            <h2 className="font-bold text-xl">{title}</h2>

            <ul 
                data-variant={variant}
                className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
            >
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-auto">
                    <Card 
            href='/times/123'
            image='/imagens/flamengo.jpg'
            title='Clube de Regatas do Flamengo'
            description='Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
                    />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-auto">
                    <Card 
            href='/times/123'
            image='/imagens/flamengo.jpg'
            title='Clube de Regatas do Flamengo'
            description='Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
                    />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-auto">
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