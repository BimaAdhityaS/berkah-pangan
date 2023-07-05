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
            <div className="bg-gradient-to-b from-linear-top to-linear-bottom h-fit">
                <div className="grid grid-cols-1 grid-rows-1">
                    <div className="bg-white w-3/5 h-fit mx-auto mt-14 rounded-xl drop-shadow-2xl">
                        <img className=" bg-gray-300 w-96 h-72 mx-auto my-2" />
                        <p className="text-base font-semibold mx-6 my-2 text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Aspernatur laudantium quaerat aliquam nam nobis laboriosam dignissimos asperiores enim. Accusamus incidunt illo culpa
                            at fugiat similique dolore accusantium iste quo autem.Aspernatur laudantium quaerat aliquam nam nobis laboriosam dignissimos
                            asperiores enim. Accusamus incidunt illo culpa
                            at fugiat similique dolore accusantium iste quo autem.
                        </p>
                        <p className="text-base font-semibold mx-6 my-2 text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Aspernatur laudantium quaerat aliquam nam nobis laboriosam dignissimos asperiores enim. Accusamus incidunt illo culpa
                            at fugiat similique dolore accusantium iste quo autem.Aspernatur laudantium quaerat aliquam nam nobis laboriosam dignissimos
                            asperiores enim. Accusamus incidunt illo culpa
                            at fugiat similique dolore accusantium iste quo autem. Oleh karena itu mari kita bersama memastikan kebutuhan makananmu terpenuhi. Jangan menunda,
                        </p>
                        <div className="flex justify-center items-center">
                            <h2 className='text-2xl text-h2 font-medium mx-auto capitalize mb-4 text-center'>Mari kita bantu satu sama lain dalam melawan kelaparan!</h2>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 my-2 w-fit mx-auto mt-4">
                    <div className="mx-auto">
                        <p className="text-form">Nama Lokasi (*)</p>
                        <input onChange={(e) => setlokasi(e.target.value)} value={lokasi} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="Nama lokasi anda" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Alamat (*)</p>
                        <input onChange={(e) => setalamat(e.target.value)} value={alamat} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: Bogor, curug Jl Rajawali 10" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Nama CP/Narahubung (*)</p>
                        <input onChange={(e) => setcp(e.target.value)} value={cp} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="Nama Contact Person" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Telepon (*)</p>
                        <input onChange={(e) => settelepon(e.target.value)} value={telepon} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="(+62) xxx-xxxx-xxxx" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Email (*)</p>
                        <input onChange={(e) => setemail(e.target.value)} value={email} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="email" placeholder="someone@example.com" required />
                    </div>
                    <div className="mx-auto">
                        <p className="text-form">Perkiraan jumlah penerima (*)</p>
                        <input onChange={(e) => setjpenerima(e.target.value)} value={jpenerima} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: 10 org (dalam angka saja)" required />
                    </div>
                    <div className=" lg:col-span-2">
                        <p className="text-form text-center">Keterangan Tambahan</p>
                        <textarea onChange={(e) => setketerangan(e.target.value)} value={keterangan} className="mt-2 drop-shadow-lg appearance-none block w-5/6 mx-auto bg-white text-black rounded-md focus:bg-white h-48" id="keterangan" placeholder="Deskripsi singkat lokasinya, alasan membutuhkan bantuan pangan" />
                        <p className="text-form text-sm justify-center my-2 w-5/6 text-center mx-auto">Peringatan : Isikan data dengan sebenar-benarnya, kami akan menghubungi anda untuk tahap selanjutnya. Terimakasih</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={() => submit()} className="btn btn-primary font-white px-28 rounded-2xl capitalize my-4">Kirim</button>
                </div>
                <div className="justify-center items-center my-4 w-2/4 mx-auto">
                    {notif && <div class="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Data berhasil terkirim!</span>
                    </div>
                    }
                </div>
                <Footer />
            </div>
        </div>
    )
}