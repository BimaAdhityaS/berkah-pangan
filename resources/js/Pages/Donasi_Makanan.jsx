import Header2 from "@/Components/sub-header";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Donasi(props) {
    const deskripsi = "Pengisian Data Donor Makanan"
    const judul = "Donasi Makanan"

    return (
        <div class="bg-white text-black">
            <Head title={props.title} />
            <Navbar />
            <Header2 deskripsi={deskripsi} judul={judul}/>
            <Footer />
        </div>
    )
}