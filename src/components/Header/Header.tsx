import Logo from '../../public/icons/logo.svg'

export default function Header() {
  return (
    <div className='flex flex-row items-center justify-between w-full border-b-[#E2E5E6] border-b-[1px] p-[28px]'>
       <img src={Logo} alt=''/>
       <button className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-white">Sign In</button>
    </div>
  )
}
