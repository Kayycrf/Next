import { Section } from '@/components/section/Section';
import { Metadata } from 'next'

export const metadata:  Metadata = {
  title: "Times Brasileirão - Série A"
}

export default function Home() {
  return (
    <main>
      <Section 
        title='Veja mais times'
        variant='h-list'
      />

    </main>
  );
}
