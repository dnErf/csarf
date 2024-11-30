import { useState } from "react"
import CloseSvg from "@/assets/close.svg"
import MenuSvg from "@/assets/menu.svg"

export default Navbar

let navLinks = [
    {
        id: 1,
        name: "Home",
        href: "#home",
    },
    {
        id: 2,
        name: "About",
        href: "#about",
    },
    {
        id: 3,
        name: "Work",
        href: "#work",
    },
    {
        id: 4,
        name: "Contact",
        href: "#contact",
    },
]

const NavItems = ({ onClick = ()=>{} }) => (
    <ul className="relative sm:flex sm:flex-row gap-4 lg:gap-6 z-10">
        {
            navLinks.map((item) => (
                <li key={item.id}>
                    <a href={item.href} onClick={onClick}>
                        { item.name }
                    </a>
                </li>
            ))
        }
    </ul>
);

function Navbar() {
    let [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)
    return (
        <header className="relative top-0 left-0 right-0 z-10">
            <div className="lg:max-w-8xl">
                <div className="flex justify-between items-center py-4 mx-auto px-4 sm:px-8">
                    <a href="/">
                        WhosHu
                    </a>
                    <button onClick={toggleMenu} aria-label="toggle menu" className="flex sm:hidden focus:outline-none">
                        <img src={isOpen ? CloseSvg.src : MenuSvg.src } alt="toggle menu" className="h-6 w-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar bg-black absolute left-0 right-0 mx-auto block z-10 overflow-hidden sm:hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-4">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    )
}

