import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import About from '@/Components/Tentang Kami/Navbar_About';
import Footer from '@/Components/Footer';

export default function TentangKami(props) {
    const url = "https://img.freepik.com/free-photo/portrait-stylish-korean-woman-yellow-jacket-smiling-thoughtful-thinking-looking-up-logo-advertisement-standing-white-background_1258-94309.jpg?w=826&t=st=1688798796~exp=1688799396~hmac=31bbd441924ef493e588edf584a02eef129d156eb7481f7fc1ddbbb1f02d9ece"

    return (
        <div className='bg-white'>
            <Head title={props.title} />
            <Navbar />
            <About img={url}  />
            <div className="my-20 text-black mx-auto w-4/5 border-2 border-slate-100">
                <h1 className="font-medium text-4xl text-h1 text-center py-10">Frequently Asked Question</h1>
                <h2 className="w-3/4 mx-auto text-2xl text-h2 font-medium">Apa itu Berkah Pangan?</h2>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Berkah Pangan adalah sebuah platform atau website yang bertujuan untuk memfasilitasi proses donasi makanan dan dana kepada mereka yang membutuhkan, serta mengurangi pemborosan makanan di Indonesia. Berkah Pangan menyediakan saluran yang mudah bagi individu, restoran, atau lembaga untuk menyumbangkan makanan yang masih layak konsumsi atau memberikan kontribusi finansial secara online. Melalui Berkah Pangan, pengguna dapat dengan mudah mencari informasi tentang donasi, menyalurkan makanan atau dana, serta melihat dampak positif yang dihasilkan dari kontribusi mereka. Dengan memanfaatkan teknologi dan kolaborasi dengan berbagai pihak terkait, Berkah Pangan bertujuan untuk menciptakan sistem pangan yang lebih adil, efisien, dan berkelanjutan, sehingga akses pangan yang cukup dan bermakna dapat terwujud bagi semua lapisan masyarakat.
                </p>
                <h2 className="w-3/4 mx-auto text-2xl text-h2 font-medium">Mengapa Indonesia membutuhkan Berkah Pangan?</h2>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Indonesia membutuhkan Berkah Pangan karena masalah kelaparan, ketidakcukupan pangan, dan pemborosan makanan yang serius. Melalui platform ini, Berkah Pangan dapat menghubungkan donatur makanan atau dana dengan mereka yang membutuhkan, mengurangi pemborosan pangan, dan memberikan akses yang lebih mudah bagi individu untuk berdonasi. Selain itu, Berkah Pangan juga berperan dalam meningkatkan kesadaran masyarakat tentang keberlanjutan pangan, edukasi tentang pencegahan pemborosan makanan, dan membangun kemitraan dengan organisasi terkait. Dengan demikian, Berkah Pangan berkontribusi dalam menciptakan sistem pangan yang adil, berkelanjutan, dan bermakna bagi seluruh masyarakat Indonesia.
                </p>
                <h2 className="w-3/4 mx-auto text-2xl text-h2 font-medium">Jenis makanan & minuman yang dapat didistribusikan Berkah Pangan?</h2>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Berkah Pangan dapat mendistribusikan berbagai jenis makanan dan minuman yang masih layak konsumsi. Beberapa contoh jenis makanan yang dapat didistribusikan meliputi makanan siap saji, nasi, mie, roti, buah-buahan, sayuran, daging, ikan, telur, susu, yogurt, keju, makanan kaleng, makanan kering seperti biskuit atau kue-kue, serta berbagai jenis makanan ringan. Selain itu, Berkah Pangan juga dapat mendistribusikan minuman seperti air mineral, jus, susu, teh, dan kopi yang masih dalam kondisi baik dan aman dikonsumsi. Penting untuk mencatat bahwa makanan dan minuman yang didistribusikan harus memenuhi standar keamanan pangan dan mempertimbangkan faktor kualitas serta masa kedaluwarsa untuk memastikan penerimaan makanan yang bermutu dan layak konsumsi.
                </p>
                <h2 className="w-3/4 mx-auto text-2xl text-h2 font-medium">Kepada siapa donasi makanan ini didistribusikan?</h2>
                <p className="w-3/4 mx-auto text-justify font-medium my-5">
                    Donasi makanan dari Berkah Pangan didistribusikan kepada berbagai pihak yang membutuhkan, seperti masyarakat pra-sejahtera, panti asuhan, lembaga sosial dan kemanusiaan, sekolah atau program pangan anak, serta komunitas dan kelompok masyarakat yang membutuhkan. Dengan kerja sama yang baik dengan pihak berkompeten, Berkah Pangan berupaya memastikan donasi makanan disalurkan secara efisien dan tepat sasaran, sehingga dapat membantu memenuhi kebutuhan pangan mereka yang membutuhkan.
                </p>
                <h2 className="w-3/4 mx-auto text-2xl text-h2 font-medium">Bagaimana saya dapat membantu?</h2>
                <p className="w-3/4 mx-auto text-justify font-medium my-5 mb-10">
                    Anda dapat membantu melalui Berkah Pangan dengan beberapa cara. Anda dapat menyumbangkan makanan yang masih layak konsumsi atau memberikan kontribusi finansial. Selain itu, Anda dapat membagikan informasi tentang Berkah Pangan kepada orang lain, menjadi sukarelawan dalam kegiatan operasional, atau menjalin kemitraan dengan Berkah Pangan sebagai perusahaan atau organisasi. Setiap kontribusi yang Anda berikan, baik berupa makanan, dana, waktu, atau dukungan, memiliki nilai yang signifikan dalam membantu mereka yang membutuhkan dan berkontribusi dalam memerangi kelaparan dan ketidakcukupan pangan. Bergabunglah dengan Berkah Pangan dan menjadi bagian dari solusi untuk menciptakan akses pangan yang merata dan bermakna bagi semua masyarakat.
                </p>
            </div>
            <Footer />
        </div>
    )
}