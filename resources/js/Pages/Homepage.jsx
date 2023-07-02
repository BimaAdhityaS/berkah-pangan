import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Beranda from "@/Components/beranda";
import { Head } from "@inertiajs/react";


export default function Homepage(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <Beranda />
            <Footer />
        </>
    )
}