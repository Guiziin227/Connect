import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/Button'

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-heading font-bold">Hello world!</h1>

      <Button>
        Enviar
        <ArrowRight />
      </Button>
    </main>
  )
}
