import { Link } from "@inertiajs/react"

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-slate-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img src="https://i.ibb.co/7VFnXgM/Berkah-Pangan-2.png" className="h-12 mr-3" alt="Berkah Pangan Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link href={route('homepage')} className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0" aria-current="page" as="button">Beranda</Link>
                        </li>
                        <li>
                            <Link href={route('tentangkami')} className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0" as="button">Tentang Kami</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0" as="button">Donasi</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0" as="button">Usul Penerima</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0" as="button">Relawan</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-black font-medium hover:text-orange-300 rounded md:bg-transparent md:p-0" as="button">Kontak Kami</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar