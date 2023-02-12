import React from "react"

interface PrimaryButtonProps {
  text: string
  className?: string
  dataTestId?: string
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  const {text, className, dataTestId} = props
  return (
    <button data-testid={dataTestId} className={` rounded p-2 w-20 m-2 font-extrabold text-center text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-600 shadow hover:cursor-pointer ${className}`}>
      {text}
    </button>
  )
}