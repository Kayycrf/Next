import { Card } from '@/components/card/Card';
import { Metadata } from 'next'

export const metadata:  Metadata = {
  title: "Cursos - Página Inicial"
}

export default function Home() {
  return (
    <main>
      <Card />
    </main>
  );
}
