import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Beranda from "./Beranda";


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