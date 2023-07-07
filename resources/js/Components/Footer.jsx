import { Link } from "@inertiajs/react"

const Footer = () => {
    return (
        <footer>
            <div className="p-10 text-white bg-footer">
                <div className="max-w-6xl mx-auto pl-5">
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5">
                            <h4 className="text-orange-300 font-medium mb-6 text-2xl">Berkah Pangan</h4>
                            <p className="font-normal text-lg">Berkah pangan merupakan website atau platform online yang memfasilitasi proses donasi makanan kepada mereka yang membutuhkan. Tujuannya adalah untuk mengurangi pemborosan makanan, meminimalkan kelaparan, dan mendukung keberlanjutan pangan.</p>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5">
                            <h4 className="text-orange-300 font-medium mb-6 text-2xl">Tentang Kami</h4>
                            <ul>
                                <li className="pb-4 font-normal text-lg"> <Link href={route('tentangkami-latarbelakang')} className="hover:text-orange-300 ">Tentang Kami</Link></li>
                                <li className="pb-4 font-normal text-lg"> <Link href={route('donasi')} className="hover:text-orange-300">Donasi</Link></li>
                                <li className="pb-4 font-normal text-lg"> <Link href={route('penerima')} className="hover:text-orange-300">Usul Penerima</Link></li>
                                <li className="pb-4 font-normal text-lg"> <Link href={route('relawan')} className="hover:text-orange-300">Relawan</Link></li>
                                <li className="pb-4 font-normal text-lg"> <Link href={route('kontakkami')} className="hover:text-orange-300">Kontak Kami</Link></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5">
                            <h4 className="text-orange-300 font-medium mb-6 text-2xl">Hubungi Kami</h4>
                            <div>
                                <div className="flex items-center mb-5">
                                    <img className="h-8" src="https://i.ibb.co/YpMbpLP/location-pin-1.png" alt="location" />
                                    <Link href="#" className="hover:text-orange-300 text-lg ml-5">Jl. Pahlawan Pangan No. 17 Jakarta Pusat</Link>
                                </div>
                                <div className="flex items-center mb-5">
                                    <img className="h-7" src="https://i.ibb.co/WkbtD24/phone-call-1.png" alt="phone" />
                                    <Link href="#" className="hover:text-orange-300 text-lg ml-6">(+62) 21-7748-3122</Link>
                                </div>
                                <div className="flex items-center">
                                    <img className="h-8" src="https://i.ibb.co/vvMZysD/mail-1.png" alt="mail" />
                                    <Link href="#" className="hover:text-orange-300 text-lg ml-5">Berkahpanganid@yahoo.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-footer text-copyright px-10">
                <hr />
                <div className="text-center mt-10">
                    <div className="pb-10">
                        © {new Date().getFullYear()} <strong><span>Berkah Pangan</span></strong> - All Right's Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
