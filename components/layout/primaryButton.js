export default function PrimaryButton(props) {
  const {text, className, dataTestId} = props
  return (
    <button data-testid={dataTestId} className={`${className} rounded border p-4 m-2 font-extrabold text-center hover:bg-blue-50 active:bg-blue-100 hover:cursor-pointer`}>
      {text}
    </button>
  )
}