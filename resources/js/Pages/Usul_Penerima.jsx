import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Header2 from "@/Components/sub-header";
import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function penerima(props) {

    const deskripsi = "Penerima Berkah Pangan?"
    const judul = "Penerima"

    const [lokasi, setlokasi] = useState('');
    const [alamat, setalamat] = useState('');
    const [cp, setcp] = useState('');
    const [telepon, settelepon] = useState('');
    const [email, setemail] = useState('');
    const [jpenerima, setjpenerima] = useState('');
    const [keterangan, setketerangan] = useState('');

    const [notif, setnotif] = useState(false);

    const submit = () => {
        const data = {
            lokasi,
            alamat,
            cp,
            telepon,
            email,
            jpenerima,
            keterangan,
            status: 'PENDING'
        };

        router.post('/penerima', data)
        setnotif(true);
        setlokasi('');
        setalamat('');
        setcp('');
        settelepon('');
        setemail('');
        setjpenerima('');
        setketerangan('');
    };

    useEffect(() => {
        let timer;
        if (notif) {
            timer = setTimeout(() => {
                setnotif(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [notif]);

    return (
        <div className="text-black">
            <Head title={props.title} />
            <Navbar />
            <Header2 deskripsi={deskripsi} judul={judul} />
            <div className="bg-gradient-to-b from-linear-top to-linear-bottom h-fit py-10">
                <div className="grid grid-cols-1 grid-rows-1">
                    <div className="bg-white w-5/6 lg:w-3/5 h-fit mx-auto mt-14 rounded-xl drop-shadow-2xl">
                        <div className="flex justify-center items-center">
                            <h2 className="w-4/5 lg:w-11/12 text-2xl text-h2 font-medium mx-auto capitalize my-10 text-center">Mari kita bantu satu sama lain dalam melawan kelaparan!</h2>
                        </div>
                        <img className=" bg-gray-300 w-3/4 h-auto mx-auto mb-7" src="https://i.ibb.co/zbgYnQW/melanie-lim-n-D3wun-G16-Fo-unsplash.jpg" />
                        <p className="w-3/4 text-base font-semibold mx-auto my-2 text-justify indent-10">
                            Penerima Berkah Pangan adalah mereka yang membutuhkan bantuan pangan. Hal ini meliputi masyarakat pra-sejahtera, seperti keluarga kurang mampu, pengungsi, anak-anak terlantar, lansia, atau mereka yang tinggal di daerah terpencil. Selain itu, penerima juga dapat mencakup panti asuhan yang merawat anak-anak yatim, piatu, atau terlantar, serta lembaga sosial dan kemanusiaan yang memberikan bantuan makanan kepada masyarakat yang membutuhkan.
                        </p>
                        <p className="w-3/4 text-base font-semibold mx-auto mt-5 mb-10 text-justify indent-10">
                        Berkah Pangan juga dapat menyasar sekolah atau program pangan anak yang bertujuan memberikan makanan bergizi kepada anak-anak yang kurang mampu atau terancam kelaparan. Penerima Berkah Pangan juga dapat melibatkan komunitas dan kelompok masyarakat yang menghadapi kesulitan akses pangan, seperti pekerja migran, nelayan, petani, atau kelompok etnis tertentu. Melalui Berkah Pangan, upaya dilakukan untuk memastikan donasi makanan dan dana disalurkan dengan efisien dan tepat sasaran kepada mereka yang membutuhkan.
                        </p>
                    </div>
                </div>
                <div className="text-form text-2xl text-center font-semibold my-10">
                        <h2>Form Usulan Penerima</h2>
                    </div>
                <div className="grid lg:grid-cols-2 gap-4 my-2 w-fit mx-auto mt-5">
                    <div className="mx-auto">
                        <p className="text-form">Nama Lokasi <span className="text-red-500">*</span></p>
                        <input onChange={(e) => setlokasi(e.target.value)} value={lokasi} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="Nama lokasi anda" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Alamat <span className="text-red-500">*</span></p>
                        <input onChange={(e) => setalamat(e.target.value)} value={alamat} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: Bogor, curug Jl Rajawali 10" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Nama CP/Narahubung <span className="text-red-500">*</span></p>
                        <input onChange={(e) => setcp(e.target.value)} value={cp} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="Nama Contact Person" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Telepon <span className="text-red-500">*</span></p>
                        <input onChange={(e) => settelepon(e.target.value)} value={telepon} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="(+62) xxx-xxxx-xxxx" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Email <span className="text-red-500">*</span></p>
                        <input onChange={(e) => setemail(e.target.value)} value={email} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="email" placeholder="someone@example.com" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Perkiraan Jumlah Penerima <span className="text-red-500">*</span></p>
                        <input onChange={(e) => setjpenerima(e.target.value)} value={jpenerima} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: 10 org (dalam angka saja)" required />
                    </div>
                    <div className=" lg:col-span-2">
                        <p className="text-form text-center">Keterangan Tambahan</p>
                        <textarea onChange={(e) => setketerangan(e.target.value)} value={keterangan} className="mt-2 drop-shadow-lg appearance-none block w-4/5 mx-auto bg-white text-black rounded-md focus:bg-white h-48" id="keterangan" placeholder="Deskripsi singkat lokasinya, alasan membutuhkan bantuan pangan" />
                        <p className="text-form text-sm my-2 w-4/5 text-center mx-auto">Peringatan : Isikan data dengan sebenar-benarnya, kami akan menghubungi anda untuk tahap selanjutnya. Terima kasih</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={() => submit()} className="btn btn-primary font-white px-28 rounded-2xl capitalize my-4 shadow-lg">Kirim</button>
                </div>
                <div className="justify-center items-center my-4 w-2/4 mx-auto">
                    {notif && <div class="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Data berhasil terkirim!</span>
                    </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}