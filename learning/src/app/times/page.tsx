import { Section } from '@/components/section/Section';
import { Metadata } from 'next'

export const metadata:  Metadata = {
  title: "Times brasileirão - Conhecimento"
}

export default function PageTeams() {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='min-[800px]:max-w-[880]'>
        <Section
          title='Todos os times'     
          variant='grid' 
          items={[
            {
              href: '/times/123',
              title: 'CLube de Regatas do Flamengo',
              image:'/imagens/flamengo.jpg',
              description: 'Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
            },
            {
              href: '/times/123',
              title: 'Sociedade Esportiva Palmeiras',
              image:'/imagens/palmeiras.jpg',
              description: 'Um dos maiores times do Brasil. O maior campeão nacional e possui 3 libertadores!!'
            },
            {
              href: '/times/123',
              title: 'CLube de Regatas Vasco da Gama',
              image:'/imagens/vasco.jpg',
              description: 'História incrível com grandes ídolos! Possui uma das maiores torcidas do Brasil!'
            },
            {
              href: '/times/123',
              title: 'Santos Futebol Clube',
              image:'/imagens/santos.jpeg',
              description: 'Um dos maiores times do Brasil. Bi Campeão mundial e um dos maiores campeões internacionais!'
            },
          ]}

          
        />
      </div>
    </main>
  );
}
