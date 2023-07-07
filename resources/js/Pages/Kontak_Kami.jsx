import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Kontak_Kami(props) {
  const [nama, setnama] = useState('');
  const [email, setemail] = useState('');
  const [telepon, settelepon] = useState('');
  const [pesan, setpesan] = useState('');

  const [notif, setnotif] = useState(false);

  const submit = () => {
    const data = {
      nama,
      email,
      telepon,
      pesan,
    };

    router.post('/kontakkami', data)
    setnotif(true);
    setnama('');
    settelepon('');
    setemail('');
    setpesan('');
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
    <>
      <Head title={props.title} />
      <Navbar />
      <div className="bg-gray-200 w-auto h-36 flex flex-col justify-center items-center text-black">
        <h1 className="font-bold text-4xl text-footer">Kontak Kami</h1>
      </div>
      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 text-black mx-auto">
          <div className="text-lg">
            <div className="my-10">
              <h2 className="text-4xl text-h1 text-center font-medium">01 Hubungi</h2>
              <p className="px-5 md:px-20 pt-5 md:pt-10">Berikut ini merupakan sosial media kami yang dapat anda hubungi dan ikuti:</p>
            </div>
            <div className="px-5 md:px-20">
              <div className="flex flex-row gap-3 md:gap-5">
                <img className="h-7 md:h-9" src="https://i.ibb.co/WkbtD24/phone-call-1.png" alt="phone" />
                <a href=""><p>(+62) 21-7748-3122</p></a>
              </div>
              <div className="flex flex-row gap-3 md:gap-4 mt-3 md:mt-5">
                <img className="h-8 md:h-10" src="https://i.ibb.co/vvMZysD/mail-1.png" alt="e-mail" />
                <a href=""><p>Berkahpanganid@yahoo.com</p></a>
              </div>
              <div className="flex flex-row gap-3 md:gap-5 mt-3 md:mt-5">
                <img className="h-7 md:h-9" src="https://i.ibb.co/gVbQmF7/instagram.png" alt="instagram" />
                <a href=""><p>@BerkahPangan_</p></a>
              </div>
              <div className="flex flex-row gap-3 md:gap-5 mt-3 md:mt-5">
                <img className="h-7 md:h-9" src="https://i.ibb.co/BcxWtDj/facebook.png" alt="https://i.ibb.co/BcxWtDj/facebook.png" />
                <a href=""><p>BerkahPangan_</p></a>
              </div>
            </div>
          </div>
          <div>
            <div className="my-10">
              <h2 className="text-4xl text-h1 text-center font-medium">02 Kirim Kami Pesan</h2>
              <div className="my-2 w-80 md:w-96 h-4 justify-center items-center mx-auto">
                {notif && (
                  <div className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Pesan berhasil tersampaikan!</span>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 px-5 md:px-20 text-lg">
              <div className="form-text">
                <p className="text-black">Nama Anda<span className="text-red-500">*</span></p>
                <input onChange={(e) => setnama(e.target.value)} value={nama} className="mt-2 drop-shadow-lg appearance-none block w-full bg-white text-black rounded-md focus:bg-white" type="text" placeholder="Nama Lengkap" required />
              </div>
              <div className="form-text">
                <p className="text-black">Email</p>
                <input onChange={(e) => setemail(e.target.value)} value={email} className="mt-2 drop-shadow-lg appearance-none block w-full bg-white text-black rounded-md focus:bg-white" type="email" placeholder="someone@example.com" required />
              </div>
              <div className="form-text">
                <p className="text-black">Telepon</p>
                <input onChange={(e) => settelepon(e.target.value)} value={telepon} className="mt-2 drop-shadow-lg appearance-none block w-full bg-white text-black rounded-md focus:bg-white" type="text" placeholder="(+62) xxx-xxxx-xxxx" required />
              </div>
              <div className="form-text">
                <p className="text-black">Pesan Anda <span className="text-red-500">*</span></p>
                <textarea onChange={(e) => setpesan(e.target.value)} value={pesan} className="mt-2 drop-shadow-lg appearance-none block w-full bg-white text-black rounded-md focus:bg-white h-48" id="keterangan" placeholder="Tulis Pesan Anda" required />
              </div>
              <div className="py-4 mb-10 md:mb-20">
                <button onClick={() => submit()} className="btn px-8 md:px-10 rounded-3xl border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent capitalize shadow-lg">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}