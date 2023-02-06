import React from "react"

interface PrimaryButtonProps {
  text: string
  className?: string
  dataTestId?: string
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const {text, className, dataTestId} = props
  return (
    <button data-testid={dataTestId} className={`${className} rounded border p-4 m-2 font-extrabold text-center hover:bg-blue-50 active:bg-blue-100 hover:cursor-pointer`}>
      {text}
    </button>
  )
}