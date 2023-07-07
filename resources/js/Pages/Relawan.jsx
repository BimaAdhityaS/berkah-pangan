import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Relawan(props) {
  return (
    <>
      <Head title={props.title} />
      <Navbar />
      <div className= "w-auto h-36 flex flex-col justify-center items-center text-black" style={{ backgroundImage: `url("https://i.ibb.co/PgspTBN/Relawan.png")`, backgroundSize: 'auto 100%', backgroundPosition: 'center' }}>
        <h1 className="font-bold text-4xl text-footer">Relawan</h1>
      </div>
      <div className="bg-white my-10 mx-5 md:mx-auto text-black md:w-4/5 border-2 border-slate-100">
        <div className="w-4/5 md:w-3/4 mx-auto my-10">
          <h2 className="text-4xl font-semibold text-button mb-5">Jadilah Pahlawan Pangan</h2>
          <p className="text-black text-justify text-base md:indent-10">Jadilah Pahlawan Pangan dengan Berkah Pangan! Dengan berkontribusi dan berpartisipasi dalam program kami, Anda dapat menjadi pahlawan yang membantu mengatasi masalah kelaparan dan ketidakcukupan pangan di Indonesia. Setiap donasi makanan atau dana yang Anda berikan akan memberikan manfaat yang nyata bagi mereka yang membutuhkan. Dengan menjadi Pahlawan Pangan, Anda turut berperan dalam menjembatani kesenjangan pangan, mengurangi pemborosan makanan, dan memastikan akses pangan yang merata dan bermakna bagi semua masyarakat. Bergabunglah dengan Berkah Pangan dan bersama-sama kita dapat menciptakan perubahan positif dalam memenuhi kebutuhan pangan, memberikan harapan, dan menyebarkan kebaikan kepada mereka yang membutuhkan.</p>
        </div>
        <div className="w-4/5 md:w-3/4 mx-auto my-10">
          <img className="w-full h-72 md:h-96 object-cover" src="https://i.ibb.co/23FC2f9/25579258-7103291.jpg" alt="" />
        </div>
        <div className="w-4/5 md:w-3/4 mx-auto my-10">
          <h2 className="text-4xl font-semibold text-button mb-5 mt-10">Aturan Dan Ketentuan</h2>
          <ol className="list-decimal text-base text-justify">
            <li className="list mb-2">Pendaftaran pahlawan pangan dilakukan setiap hari Sabtu pukul 10:00. Terdapat slot yang tersedia setiap harinya untuk para relawan, namun jika slot sudah penuh, maka opsi di hari tersebut tidak akan tersedia.</li>
            <li className="list mb-2">Pahlawan Pangan dapat berasal dari berbagai usia, namun anak-anak di bawah 18 tahun harus didampingi oleh orangtua atau wali yang bertanggung jawab.</li>
            <li className="list mb-2">Calon Pahlawan Pangan diharuskan untuk mendaftar melalui platform Berkah Pangan dan mengisi formulir pendaftaran dengan data yang akurat dan lengkap.</li>
            <li className="list mb-2">Setelah mendaftar, data calon Pahlawan Pangan akan diverifikasi oleh tim Berkah Pangan sebelum disetujui sebagai relawan.</li>
            <li className="list mb-2">Pahlawan Pangan akan mendapatkan informasi mengenai kegiatan Food Rescue yang akan diikuti dan diharapkan untuk hadir tepat waktu sesuai jadwal yang telah ditentukan.</li>
            <li className="list mb-2">Pahlawan Pangan diharapkan memiliki komitmen tinggi terhadap misi Berkah Pangan dalam mengatasi masalah kelaparan dan ketidakcukupan pangan.</li>
            <li className="list mb-2">Pahlawan Pangan harus dapat mengalokasikan waktu yang cukup untuk berpartisipasi dalam kegiatan Food Rescue dan program-program Berkah Pangan.</li>
            <li className="list mb-2">Pahlawan Pangan diwajibkan untuk mematuhi petunjuk dan SOP yang diberikan oleh Koordinator Food Rescue untuk menjaga keamanan makanan dan kenyamanan penerima donasi.</li>
            <li className="list mb-2">Pahlawan Pangan diharapkan berperilaku dengan etika yang tinggi, menghormati keberagaman, menjaga kerahasiaan informasi sensitif, dan bertindak bertanggung jawab selama berpartisipasi dalam kegiatan Berkah Pangan.</li>
            <li className="list mb-2">Jika Pahlawan Pangan tidak dapat hadir dalam kegiatan Food Rescue yang telah terjadwal, diharapkan memberikan pemberitahuan sebelumnya kepada Koordinator Food Rescue.</li>
          </ol>
        </div>
      </div>
      <div>
        <div className="h-auto md:h-screen text-white bg-gradient-to-b from-linear-top to-linear-bottom">
          <div className="flex flex-col items-center justify-center px-5 md:px-14 pt-16 md:pt-24 gap-5">
            <img className="h-14 md:h-20" src="https://i.ibb.co/LrM5hSx/calendar.png" alt="calendar" />
            <h2 className="text-4xl mt-2 font-semibold text-center">12 Jun 2023 - 12 Jul 2023</h2>
          </div>
          <div className="py-8 md:py-12">
            <p className="text-lg font-medium text-center">Diharapkan untuk membaca Aturan dan Ketentuan yang ada sebelum mendaftar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 place-items-center pb-8 md:pb-0">
            <div className="card w-80 md:w-96 bg-white text-black shadow-xl text-lg">
              <div className="py-3 font-medium text-center text-white bg-button rounded-b-2xl">
                <p>Sat, 12 June, 10.00 AM</p>
              </div>
              <div className="items-center py-3">
                <p className="border-b-2 border-black pb-3 pl-3">1 Koordinator</p>
                <p className="border-b-2 border-black pb-3 pl-3">4 Relawan</p>
              </div>
              <div className="flex justify-center py-3">
                <button className="btn px-10 rounded-3xl border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent capitalize">Apply</button>
              </div>
            </div>
            <div className="card w-80 md:w-96 bg-white text-black shadow-xl text-lg">
              <div className="py-3 font-medium text-center text-white bg-button rounded-b-2xl">
                <p>Sat, 18 June, 10.00 AM</p>
              </div>
              <div className="items-center py-3">
                <p className="border-b-2 border-black pb-3 pl-3">1 Koordinator</p>
                <p className="border-b-2 border-black pb-3 pl-3">4 Relawan</p>
              </div>
              <div className="flex justify-center py-3">
                <button className="btn px-10 rounded-3xl border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent capitalize">Apply</button>
              </div>
            </div>
            <div className="card w-80 md:w-96 bg-white text-black shadow-xl text-lg">
              <div className="py-3 font-medium text-center text-white bg-button rounded-b-2xl">
                <p>Sat, 24 June, 10.00 AM</p>
              </div>
              <div className="items-center py-3">
                <p className="border-b-2 border-black pb-3 pl-3">1 Koordinator</p>
                <p className="border-b-2 border-black pb-3 pl-3">4 Relawan</p>
              </div>
              <div className="flex justify-center py-3">
                <button className="btn px-10 rounded-3xl border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent capitalize">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}