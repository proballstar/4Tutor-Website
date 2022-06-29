import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, NextRouter } from 'next/router'

export default function Navbar() {

    const router: NextRouter = useRouter()

    //let location = useLocation()

    const mobileMenuRef = useRef<HTMLDivElement | null>(null)
    
    function handleMobileClick() {
        mobileMenuRef.current!.classList.toggle(
            'hidden'
        )
    }

    return (
        <nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<Link href='/' className="flex items-center py-4 px-2 font-semibold text-gray-500 text-lg">
								4Tutor 
							</Link>
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<Link href="/contact" className={`py-4 px-2 ${router.pathname == '/contact' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500 font-semibold' }`}>Contact</Link>
							<Link href="/faq" className={`py-4 px-2 ${router.pathname == '/faq' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500' } font-semibold hover:text-green-500 transition duration-300`}>Frequently Asked Questions</Link>
							<Link href="/schedule" className={`py-4 px-2 ${router.pathname == '/schedule' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500' } font-semibold hover:text-green-500 transition duration-300`}>Schedule a Session</Link>
							<Link href="/team" className={`py-4 px-2 ${router.pathname == '/team' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500' } font-semibold hover:text-green-500 transition duration-300`} >Our Team</Link>
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
						<a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
					</div>
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={handleMobileClick}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div className="hidden mobile-menu" ref={mobileMenuRef}>
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			<script>
				
			</script>
		</nav>
    )
}