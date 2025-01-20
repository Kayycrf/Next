import { Card } from '@/components/card/Card';
import { Metadata } from 'next'

export const metadata:  Metadata = {
  title: "Times Brasileirão - Série A"
}

export default function Home() {
  return (
    <main>
      <Card />
    </main>
  );
}
