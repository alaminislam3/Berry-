import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import Form from 'next/form'
import { User } from 'lucide-react'
import { auth,currentUser} from '@clerk/nextjs/server'
import {SignInButton} from '@clerk/nextjs'
export default async function  Header() {
  const user = await currentUser()
  
  return (
    <div className='border-b py-1 max-w-screen-xl mx-auto px-4 flex justify-between items-center'>
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
     <div>

     {
      user ?  <div> welcome <br /> {user?.fullName} </div>   : <SignInButton mode="modal">
      <div className='flex justify-end items-center space-x-1'>
        <User></User>
        <p>login</p>
        <p>user</p>
     </div>
     </SignInButton>
     }
     </div>
    </div>
  )
}
