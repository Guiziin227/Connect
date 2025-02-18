import { ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className=" 
      px-1.5 bg-gray-500 text-blue rounded-md
      cursor-pointer transition-colors duration-200 hover:bg-blue hover:text-gray-900"
      {...props}
    >
      {props.children || 'Enviar'}
    </button>
  )
}
