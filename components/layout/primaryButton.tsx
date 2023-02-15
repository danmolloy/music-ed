import React from "react"

interface PrimaryButtonProps {
  text: string
  className?: string
  dataTestId?: string
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const {text, className, dataTestId} = props
  return (
    <button data-testid={dataTestId} className={` rounded-full py-1 px-2 w-20 m-2 font-extrabold text-center shadow hover:cursor-pointer ${className}`}>
      {text}
    </button>
  )
}