import Link from "next/link"

const Header = () => {
  return (
    <header>

      <ul className="flex justify-around  py-5 
      items-center space-x-2 mx-6 px-6 bg-slate-200">
      
          <li>
          <Link href={'/'}>home</Link>
          </li>
        <li>
            <Link href={'/about'}>Aboute</Link>
        </li>
        <li>
            <Link href={'/article'}>article</Link>
        </li>
        <li>
            <Link href={'/admin'}>admine</Link>
        </li>

        <li>
           <button className='bg-blue-900 text-white 
      rounded px-5 py-1 my-4'>
            <Link href={'/login'}>login</Link>
            </button>
        
            <button className='bg-blue-900 text-white 
      rounded px-5 py-1 mx-2 my-4'>
              <Link href={'/register'}>register</Link>
              </button>
              
        </li>
        
        
      </ul>
    </header>
  )
}

export default Header
