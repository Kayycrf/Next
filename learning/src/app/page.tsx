import { Section } from '@/components/section/Section';
import { Metadata } from 'next'

export const metadata:  Metadata = {
  title: "Times Brasileirão - Série A"
}

export default function Home() {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='min-[800px]:max-w-[880]'>
        <Section 
          title='Veja mais times'
          variant='h-list'
          items={[
            {
              href: '/cursos/123',
              title: 'CLube de Regatas do Flamengo',
              image:'/imagens/flamengo.jpg',
              description: 'Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
            },
            {
              href: '/cursos/123',
              title: 'Sociedade Esportiva Palmeiras',
              image:'/imagens/flamengo.jpg',
              description: 'Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
            },
            {
              href: '/cursos/123',
              title: 'CLube de Regatas Vasco da Gama',
              image:'/imagens/flamengo.jpg',
              description: 'Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
            },
            {
              href: '/cursos/123',
              title: 'Santos Futebol Clube',
              image:'/imagens/flamengo.jpg',
              description: 'Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!'
            },
            
          ]}
        />
      </div>

    </main>
  );
}
