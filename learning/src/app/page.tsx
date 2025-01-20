import { Card } from '@/components/card/Card';
import { Metadata } from 'next'

export const metadata:  Metadata = {
  title: "Times Brasileirão - Série A"
}

export default function Home() {
  return (
    <main>
      <Card 
          href='/times/123'
          image='/imagens/flamengo.jpg'
          title='Clube de Regatas do Flamengo'
          description='Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!s'
      />
    </main>
  );
}
