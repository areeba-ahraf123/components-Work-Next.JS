import Link from "next/link"
export default function Header(){
    return(
        
        <div >
       <nav className="container py-3: mr-auto flex flex-wrap items-center text-base justify-center bg-black color text-white" >
                <Link  href ="/home"className="mr-5">Home</Link>
                <Link  href="/about"className="mr-5">About</Link>
                <Link  href="/contact"className="mr-5">Contact</Link>
                <Link href="/services"className="mr-5">Services</Link>
            </nav>
            
        </div>
        
    )
}