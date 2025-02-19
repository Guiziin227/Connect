import { ArrowRight, Copy, Mail } from 'lucide-react'

import { Button } from '@/components/Button'
import { IconButton } from './../components/Icon-Button'
import { InputField, InputIcon, InputRoot } from '@/components/Input'

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-heading font-bold">Hello world!</h1>

      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>

          <InputField placeholder="Digite seu email" />
        </InputRoot>
      </div>
    </main>
  )
}
