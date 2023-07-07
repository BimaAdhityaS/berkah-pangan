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
                <h1 className="font-medium text-4xl text-h1 text-center py-10">Latar Belakang</h1>
                <img className="w-2/4 h-auto mx-auto rounded-xl mb-10" src='https://i.ibb.co/7VFnXgM/Berkah-Pangan-2.png'></img>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Di Indonesia, masalah kelaparan dan ketidakcukupan pangan masih menjadi isu yang serius. Banyak masyarakat yang mengalami kesulitan dalam memenuhi kebutuhan pangan sehari-hari. Sayangnya, di sisi lain, masih terdapat individu dan restoran yang membuang makanan berlebihan tanpa memanfaatkannya dengan baik. Fenomena pemborosan makanan ini sangat rawan terjadi di Indonesia.
                </p>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Makanan yang berlebihan  seharusnya bisa disumbangkan untuk membantu mereka yang membutuhkan. Namun kesulitan yang sering dihadapi adalah kurangnya saluran yang efektif untuk menyumbangkan makanan atau dana secara langsung. Terdapat kekurangan dalam infrastruktur dan akses informasi yang mempersulit proses donasi dan distribusi makanan dengan efisien.
                </p>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Disinilah Berkah Pangan hadir sebagai solusi untuk mengatasi permasalahan tersebut. Website donasi makanan atau tunai ini bertujuan untuk memfasilitasi proses donasi makanan ataupun tunai kepada masyarakat membutuhkan. Melalui Platform ini pengguna dapat dengan mudah menyumbangkan makanan yang masih layak konsumsi atau memberikan kontribusi finansial secara online. Biarkan kami komunitas berkah pangan yang akan memberikan bantuan anda ke masyarakat yang membutuhkan.
                </p>
                <p className="w-3/4 mx-auto text-justify font-medium my-5 mb-10">
                    Berkah pangan bertujuan untuk mengurangi pemborosan makanan di Indonesia. Dengan menjadikan kita sebagai jembatan antara donatur dan penerima. Sehingga makanan yang seharusnya terbuang dapat dimanfaatkan dengan baik untuk membantu mereka yang membutuhkan. Dengan adanya website berkah pangan, diharapkan jumlah makanan terbuang dapat berkurang dan akses pangan bagi masyarakat yang membutuhkan dapat terpenuhi.
                </p>
            </div>
            <Footer />
        </div>
    )
}