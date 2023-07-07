import Header2 from "@/Components/sub-header";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";

export default function Donasi(props) {
    const deskripsi = "Silahkan Pilih Donasimu!"
    const judul = "Donasi"

    return (
        <div class="bg-white text-black">
            <Head title={props.title} />
            <Navbar />
            <Header2 deskripsi={deskripsi} judul={judul} />
            <div className="bg-gradient-to-b from-linear-top to-linear-bottom h-fit">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-24 place-items-center max-w-4xl mx-auto">
                    <div className="bg-white border-collapse border-2 border-transparent shadow-xl rounded-2xl h-96 w-96 mx-auto">
                        <h1 className=" text-3xl text-center font-bold my-2 text-h1">Donasi <span className=" text-green-500">Makanan</span></h1>
                        <img src="https://i.ibb.co/MBqgt2C/Makanan.png" className=" mx-auto h-2/6 w-2/6 my-1"></img>
                        <p className="font-medium text-center justify-center mx-4 my-2">Yuk, bergabunglah dalam gerakan donasi makanan ini dan jadilah pahlawan bagi mereka yang kelaparan.</p>
                        <div className="flex justify-center items-center">
                            <Link href={route('makanan')} className="btn btn-outline btn-accent mt-8 px-16 mx-24 first-letter:font-medium capitalize">Mulai</Link>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-transparent shadow-xl rounded-2xl h-96 w-96 mx-auto">
                        <h1 className=" text-3xl text-center font-bold my-2 text-h1">Donasi <span className=" text-green-500">Tunai</span></h1>
                        <img src="https://i.ibb.co/G2xpvDX/Tunai.png" className=" mx-auto h-2/6 w-2/6 my-1"></img>
                        <p className="font-medium text-center justify-center mx-4 my-2">Setiap kontribusi Anda akan membuat perbedaan nyata dan memberi harapan baru bagi mereka.</p>
                        <div className="flex justify-center items-center">
                            <Link className="btn btn-outline btn-accent mt-8 px-16 mx-24 font-medium capitalize">Mulai</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}