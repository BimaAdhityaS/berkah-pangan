import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import About from '@/Components/Tentang Kami/Navbar_About';
import Footer from '@/Components/Footer';

export default function TentangKami(props) {
    return (
        <div className='bg-white'>
            <Head title={props.title} />
            <Navbar />
            <About />
            <div className="my-20 text-black mx-auto w-4/5 border-2 border-slate-100">
                <h1 className="font-medium text-4xl text-h1 text-center py-10">Visi dan Misi</h1>
                <h2 className="w-3/4 mx-auto text-2xl text-h2 font-medium">Visi : Mewujudkan akses pangan yang merata, berkelanjutan, dan bermakna bagi semua masyarakat. </h2>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Kami bertekad untuk menciptakan sebuah platform yang menghubungkan donatur dengan penerima yang membutuhkan, meminimalkan pemborosan makanan, dan meningkatkan kesadaran akan pentingnya keberlanjutan pangan. Dengan visi ini, kami berharap dapat menciptakan sistem yang efisien, adil, dan transparan dalam mendistribusikan makanan kepada mereka yang membutuhkan, serta memberikan dampak positif yang nyata dalam mencapai akses pangan yang berkelanjutan bagi seluruh masyarakat.
                </p>
                <h2 className="w-3/4 mx-auto text-2xl text-h2 font-medium">Misi :</h2>
                <ol className="list-decimal w-3/4 mx-auto pl-4 mt-5 mb-10 font-medium">
                    <li>Menyediakan platform yang memudahkan donasi makanan dan dana untuk membantu mereka yang membutuhkan, dengan fokus pada penyaluran yang tepat sasaran dan efisien.</li>
                    <li>Mengurangi pemborosan makanan dengan menghubungkan donatur makanan berlebihan dengan penerima yang membutuhkan.</li>
                    <li>Meningkatkan kesadaran dan pemahaman masyarakat tentang isu-isu pangan, termasuk pentingnya keberlanjutan pangan dan pencegahan pemborosan makanan.</li>
                    <li>Membangun jaringan kemitraan dengan organisasi, lembaga, dan pihak-pihak terkait untuk memperkuat dampak sosial dalam penyediaan pangan.</li>
                    <li>Mengembangkan inovasi teknologi dan sistem yang mempermudah donasi makanan dan dana secara online, serta memastikan keamanan dan kualitas makanan yang disalurkan.</li>
                    <li>Menyediakan akses informasi yang mudah dan transparan tentang donasi dan penggunaan dana, sehingga masyarakat dapat melihat dampak positif yang dihasilkan dari kontribusi mereka.</li>
                    <li>Mendorong adopsi praktik berkelanjutan dalam rantai pasokan pangan, termasuk pengelolaan limbah makanan dan pemberdayaan petani lokal.</li>
                </ol>
            </div>
            <Footer />
        </div>
    )
}