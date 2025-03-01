export default function List({text}: {text: String}) {
  return (
    <div className='bg-gray-100 p-[24px] sm:w-full xl:w-[70%] h-full rounded-2xl'>
        <p className='text-[18px] font-medium w-full'>
            {text}
        </p>
    </div>
  )
}
