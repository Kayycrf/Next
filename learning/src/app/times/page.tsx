import { Section } from '@/components/section/Section';
import { Metadata } from 'next'

export const metadata:  Metadata = {
  title: "Times brasileirão - Conhecimento"
}

export default function PageTeams() {
  return (
    <main>
      <Section
        title='Todos os times'     
        variant='grid' 
      />
    </main>
  );
}
