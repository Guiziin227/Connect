import React, { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 rounded-xl border border-gray-600
     px-4 flex items-center gap-2 focus-within:border-gray-100 [:has(input:placeholder-shown)]:data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100
        group-[&:not(:has(input:placeholder-shown))]:text-gray-100
        group-data-[error=true]:text-danger
      "
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}

// interface InputProps extends ComponentProps<'input'> {
//   error?: boolean
// }

// export function Input({ error = false, ...props }: InputProps) {
//   return (
//     <div
//       data-error={error}
//       className="group bg-gray-800 h-12 rounded-xl border border-gray-600
//      px-4 flex items-center gap-2 focus-within:border-gray-100 [:has(input:placeholder-shown)]:data-[error=true]:border-danger"
//     >
//       <span
//         data-error={error}
//         className="text-gray-400 group-focus-within:text-gray-100
//         group-[&:not(:has(input:placeholder-shown))]:text-gray-100
//         group-data-[error=true]:text-danger
//       "
//       >
//         <Mail />
//       </span>

//       <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
//     </div>
//   )
// }
