import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import Form from 'next/form'
export default function Header() {
  return (
    <div className='border-b py-1 max-w-screen-xl mx-auto px-4 '>
        <div className='flex flex-wrap items-center gap-2'>
        <Link href={'/'}>
        <Image src={logo} alt='logo'>

        </Image>
        </Link>
        <Form className='w-full sm:w-auto sm:flex-1 sm:mx-4' action='/search'>
<input className='border-2 ' placeholder='Search products'>

</input>
        </Form>

        </div>
        
     {/* logo */}
     {/* searchbar */}
     {/* sidebar */}
    </div>
  )
}
