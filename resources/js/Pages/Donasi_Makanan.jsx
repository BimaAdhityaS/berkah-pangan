import Header2 from "@/Components/sub-header";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Donasi(props) {
    const deskripsi = "Pengisian Data Donor Makanan";
    const judul = "Donasi Makanan";

    const [nama, setnama] = useState('');
    const [alamat, setalamat] = useState('');
    const [telepon, settelepon] = useState('');
    const [email, setemail] = useState('');
    const [makanan, setmakanan] = useState('');
    const [exp, setexp] = useState('');
    const [porsi, setporsi] = useState('');
    const [keterangan, setketerangan] = useState('');
    
    const [nama_restoran, setresto] = useState('');
    const [nama_cp, setcp] = useState('');
    const [alamat_resto, setaddress] = useState('');
    const [telepon_resto, settelp] = useState('');
    const [email_resto, setemailresto] = useState('');
    const [makanan_resto, setfood] = useState('');
    const [exp_resto, setkadaluarsa] = useState('');
    const [porsi_resto, setportion] = useState('');
    const [keterangan_resto, setdesc] = useState('');

    const [notif, setnotif] = useState(false);
    const [individu, setindividu] = useState(true);
    const [restoran, setrestoran] = useState(false);

    const submit_individu = () => {
        const data = {
            nama,
            alamat,
            telepon,
            email,
            makanan,
            exp,
            porsi,
            keterangan,
            status: 'PENDING'
        };

        router.post('/individu', data);
        setnotif(true);
        setnama('');
        setalamat('');
        settelepon('');
        setemail('');
        setmakanan('');
        setexp('');
        setporsi('');
        setketerangan('');
    };

    const submit_restoran = () => {
        const data = {
            nama_restoran,
            nama_cp,
            alamat_resto,
            telepon_resto,
            email_resto,
            makanan_resto,
            exp_resto,
            porsi_resto,
            keterangan_resto,
            status: 'PENDING'
        };

        router.post('/restoran', data);
        setnotif(true);
        setresto('');
        setcp('');
        setaddress('');
        settelp('');
        setemailresto('');
        setfood('');
        setkadaluarsa('');
        setportion('');
        setdesc('');
    };

    const ch_individu = () => {
        setindividu(true);
        setrestoran(false);
    };

    const ch_restoran = () => {
        setindividu(false);
        setrestoran(true);
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
        <div className="bg-white text-black">
            <Head title={props.title} />
            <Navbar />
            <Header2 deskripsi={deskripsi} judul={judul} />
            <div className="bg-gradient-to-b from-linear-top to-linear-bottom h-fit">
                <div className="grid grid-cols-1 grid-rows-1">
                    <div className="h-3/4 w-4/5 my-12 mx-auto">
                        <h1 className="text-center text-form text-2xl">Silahkan pilih jenis donasimu</h1>
                        <div className="grid grid-cols-2 gap-2 w-fit mx-auto my-2">
                            <button onClick={() => ch_individu()} className={`bg-white rounded-xl w-40 h-44 ${individu ? ' border-b-8 border-green-400' : ''}`}>
                                <img src="https://img.icons8.com/office/80/gender-neutral-user.png" className="mx-auto h-16" alt="Individu" />
                                <p className="font-medium">Individu</p>
                                <p className="font-medium text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint porro, deserunt</p>
                            </button>
                            <button onClick={() => ch_restoran()} className={`bg-white rounded-xl w-40 h-44 ${restoran ? ' border-b-8 border-green-400' : ''}`}>
                                <img src="https://img.icons8.com/fluency/96/restaurant-.png" className="mx-auto h-16" alt="Restoran" />
                                <p className="font-medium">Restoran</p>
                                <p className="font-medium text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint porro, deserunt</p>
                            </button>
                        </div>

                        {individu && (
                            <>
                            <div className="grid lg:grid-cols-2 gap-4 my-3 w-fit mx-auto">
                                <div>
                                    <p className="text-form">Nama Lengkap (*)</p>
                                    <input onChange={(e) => setnama(e.target.value)} value={nama} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="nama lengkap anda" required />
                                </div>
                                <div>
                                    <p className="text-form">Jenis Makanan (*)</p>
                                    <input onChange={(e) => setmakanan(e.target.value)} value={makanan} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: sayuran, buah, olahan, minuman" required />
                                </div>
                                <div>
                                    <p className="text-form">Alamat (*)</p>
                                    <input onChange={(e) => setalamat(e.target.value)} value={alamat} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: Bogor, curug Jl Rajawali 10" required />
                                </div>
                                <div>
                                    <p className="text-form">Perkiraan Tanggal Kadaluarsa (*)</p>
                                    <input onChange={(e) => setexp(e.target.value)} value={exp} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: 12 januari XXXX, 12/01/XXXX" required />
                                </div>
                                <div>
                                    <p className="text-form">Telepon (*)</p>
                                    <input onChange={(e) => settelepon(e.target.value)} value={telepon} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="(+62) xxx-xxxx-xxxx" required />
                                </div>
                                <div>
                                    <p className="text-form">Jumlah Porsi (*)</p>
                                    <input onChange={(e) => setporsi(e.target.value)} value={porsi} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="" required />
                                </div>
                                <div>
                                    <p className="text-form">Email (*)</p>
                                    <input onChange={(e) => setemail(e.target.value)} value={email} type="email" className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" placeholder="someone@example.com" required />
                                <p className="text-form text-sm justify-center w-80">Peringatan : Isikan data dengan sebenar-benarnya, kami akan menghubungi anda untuk tahap selanjutnya. Terimakasih</p>
                                </div>
                                <div>
                                    <p className="text-form">Keterangan Tambahan</p>
                                    <textarea onChange={(e) => setketerangan(e.target.value)} value={keterangan} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white h-48" placeholder="Semoga berkah" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button onClick={() => submit_individu()} className="btn btn-primary font-white px-28 rounded-2xl capitalize my-4">Kirim</button>
                            </div>
                            </>
                        )}

                        {restoran && (
                            <>
                            <div className="grid lg:grid-cols-2 gap-4 my-3 w-fit mx-auto">
                                <div className="mx-auto">
                                    <p className="text-form">Nama Restoran/Kafe/Bakery/Warung (*)</p>
                                    <input onChange={(e) => setresto(e.target.value)} value={nama_restoran} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="nama restoran" required />
                                </div>
                                <div className="mx-auto">
                                    <p className="text-form">Jenis Makanan (*)</p>
                                    <input onChange={(e) => setfood(e.target.value)} value={makanan_resto} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: nama makanan, nama minuman" required />
                                </div>
                                <div className="mx-auto">
                                    <p className="text-form">Alamat (*)</p>
                                    <input onChange={(e) => setaddress(e.target.value)} value={alamat_resto} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: Bogor, curug Jl Rajawali 10" required />
                                </div>
                                <div className="mx-auto">
                                    <p className="text-form">Perkiraan Tanggal Kadaluarsa (*)</p>
                                    <input onChange={(e) => setkadaluarsa(e.target.value)} value={exp_resto} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: 12 januari XXXX, 12/01/XXXX" required />
                                </div>
                                <div className="mx-auto">
                                    <p className="text-form">Nama CP/Narahubung (*)</p>
                                    <input onChange={(e) => setcp(e.target.value)} value={nama_cp} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="contoh: Nama Contact Person" required />
                                </div>
                                <div className="mx-auto">
                                    <p className="text-form">Telepon (*)</p>
                                    <input onChange={(e) => settelp(e.target.value)} value={telepon_resto} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="(+62) xxx-xxxx-xxxx" required />
                                </div>
                                <div className="mx-auto">
                                    <p className="text-form">Jumlah Porsi (*)</p>
                                    <input onChange={(e) => setportion(e.target.value)} value={porsi_resto} className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white"type="text" placeholder="" required />
                                </div>
                                <div className="mx-auto">
                                    <p className="text-form">Email (*)</p>
                                    <input onChange={(e) => setemailresto(e.target.value)} value={email_resto}  type="email" className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" placeholder="someone@example.com" required />
                                </div>
                                <div className="lg:col-span-2 mx-auto">
                                    <p className="text-form text-center">Keterangan Tambahan</p>
                                    <textarea onChange={(e) => setdesc(e.target.value)} value={keterangan_resto} className=" mx-auto mt-2 drop-shadow-lg appearance-none block w-5/6 bg-white text-black rounded-md focus:bg-white h-48 " placeholder="Alasan restoran ingin mendonasi" />
                                    <p className="text-form text-sm mx-auto text-center justify-center w-5/6">Peringatan : Isikan data dengan sebenar-benarnya, kami akan menghubungi anda untuk tahap selanjutnya. Terimakasih</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button onClick={() => submit_restoran()} className="btn btn-primary font-white px-28 rounded-2xl capitalize my-4">Kirim</button>
                            </div>
                            </>
                        )}

                        <div className="flex justify-center items-center mt-2">
                            {notif && <div class="alert alert-success">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Data berhasil terkirim!</span>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}