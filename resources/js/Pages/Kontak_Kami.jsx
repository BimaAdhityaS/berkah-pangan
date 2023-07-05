import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Kontak_Kami(props) {
  return (
    <>
      <Head title={props.title} />
      <Navbar />
      <div class="bg-gray-200 w-auto h-36 flex flex-col justify-center items-center text-black">
        <h1 class="font-bold text-4xl text-footer">Kontak Kami</h1>
      </div>
      <div className="h-full">
        <div className="grid grid-cols-2 text-black mx-auto">
          <div className="text-lg">
            <div className="my-10">
              <h2 className="text-4xl text-center font-medium">01 Hubungi</h2>
              <p className="px-20 pt-10">Lorem ipsum dolor sit amet consectetur. Turpis fames cras neque feugiat lectus amet.</p>
            </div>
            <div className="px-20">
              <div className="flex flex-row gap-5">
                <img className="h-9" src="https://i.ibb.co/WkbtD24/phone-call-1.png" alt="phone" />
                <a href=""><p>Xxxx-xxxx-xxxx</p></a>
              </div>
              <div className="flex flex-row gap-4 mt-5">
                <img className="h-10" src="https://i.ibb.co/vvMZysD/mail-1.png" alt="e-mail" />
                <a href=""><p>Berkahpanganid@yahoo.com</p></a>
              </div>
              <div className="flex flex-row gap-5 mt-5">
                <img className="h-9" src="https://i.ibb.co/gVbQmF7/instagram.png" alt="instagram" />
                <a href=""><p>@BerkahPangan_</p></a>
              </div>
              <div className="flex flex-row gap-5 mt-5">
                <img className="h-9" src="https://i.ibb.co/BcxWtDj/facebook.png" alt="https://i.ibb.co/BcxWtDj/facebook.png" />
                <a href=""><p>BerkahPangan_</p></a>
              </div>
            </div>
          </div>
          <div>
            <div className="my-10">
              <h2 className="text-4xl text-center font-medium">02 Kirim Kami Pesan</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 px-20 text-lg">
              <div className="form-text">
                <p className="text-black">Nama Lengkap</p>
                <input className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="Nama Lengkap" required />
              </div>
              <div className="form-text">
                <p className="text-black">Email</p>
                <input className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="email" placeholder="someone@example.com" required />
              </div>
              <div className="form-text">
                <p className="text-black">Telepon</p>
                <input className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white" type="text" placeholder="(+62) xxx-xxxx-xxxx" required />
              </div>
              <div className="form-text">
                <p className="text-black">Pesan Anda</p>
                <textarea className="mt-2 drop-shadow-lg appearance-none block w-80 bg-white text-black rounded-md focus:bg-white h-48" id="keterangan" placeholder="Tulis Pesan Anda" required />
              </div>
              <div className="py-4 mb-20">
                <button className="btn px-10 rounded-3xl border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent capitalize">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}