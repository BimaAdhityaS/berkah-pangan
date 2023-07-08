import { Link } from "@inertiajs/react";
import BarChart from "./chart";
import Carousel from "./Carousel";

const Beranda = () => {
  return (
    <>
      {/* Carousel */}

      <Carousel />

      {/* Carousel */}

      {/* BarChart */}
      <div className="border-box flex justify-center items-center h-4/5 md:h-screen bg-slate-50" style={{ height: "500px" }}>
        <div className="max-w-screen-2xl mx-auto absolute text-center">
          <h2 className="text-xs md:text-4xl text-gray-350">Statistic Berkah Pangan 2023</h2>
        </div>
        <BarChart />
      </div>

      {/* BarChart */}

      {/* About us */}
      <div className="md:h-screen flex flex-col justify-center items-center bg-gradient-to-b from-linear-top to-linear-bottom">
        <div className="text-center max-w-xl w-3/4 md:w-3/4 py-20 md:py:0 text-white">
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 md:mb-12">Berkah Pangan</h2>
          <p className="text-base md:text-lg mb-10 md:mb-12">Berkah pangan merupakan website atau platform online yang memfasilitasi proses donasi makanan kepada mereka yang membutuhkan. Tujuannya adalah untuk mengurangi pemborosan makanan, meminimalkan kelaparan, dan mendukung keberlanjutan pangan.</p>
          <Link href={route('tentangkami-latarbelakang')} as="button" className="btn rounded-3xl px-6 md:px-10 border-transparent bg-button text-white text-xs md:text-lg hover:bg-linear-top hover:border-transparent shadow-lg capitalize font-medium">Baca Selengkapnya</Link>
        </div>
      </div>

      {/* About us */}

      {/* What are we doing */}

      <div className="md:h-screen grid grid-cols-1 md:grid-cols-2 place-items-center bg-white">
        <div className="max-w-lg px-16 md:px-0 py-16 md:py-0">
          <h2 className="w-96 text-4xl md:text-5xl font-bold text-button mb-10 md:mb-12">Apa yang kami lakukan?</h2>
          <p className="text-base md:text-lg text-black w-full md:w-4/5 mb-10 md:mb-12">Kami menyediakan mekanisme bagi individu, organisasi, dan bisnis untuk menyumbangkan makanan yang tidak terpakai kepada mereka yang membutuhkan. Makanan tersebut dikumpulkan dari restoran, supermarket, dan pihak lain yang memiliki makanan berlebih.</p>
          <Link href={route('tentangkami-FaQ')} as="button" className="btn rounded-3xl px-6 md:px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg capitalize">Baca Selengkapnya</Link>
        </div>
        <div className="hidden md:block shadow-xl rounded-xl">
          <img src="https://i.ibb.co/Lpx3QDn/food-bank-img.png" alt="food-bank-img" className="w-full" />
        </div>
      </div>


      {/* What are we doing */}

      {/* Card Menu */}

      <div className="bg-slate-50 min-h-screen">
        <div className="flex flex-col text-center text-black mb-12 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-button mb-6 md:mb-12">Siap menjadi Agen Perubahan!</h2>
          <p className="text-base md:text-lg">Dengan bergabung bersama Berkah Pangan, kamu dapat ikut serta dalam mengatasi masalah kelaparan pangan di Indonesia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 px-4 pb-24">
          <div className="card bg-slate-200 shadow-xl">
            <figure className="h-1/3 pt-4">
              <img src="https://i.ibb.co/tLF7Fk3/fast-food-1.png" alt="food-icon" className="rounded-xl mx-auto" width={104} />
            </figure>
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title text-lg md:text-xl">Donasi Makanan</h2>
              <p className="text-sm md:text-base">Marilah kita bersama-sama memberikan harapan dan kebahagiaan kepada mereka yang membutuhkan dengan berbagi makanan.</p>
              <div className="card-actions">
                <Link href={route('makanan')} as="button" className="btn rounded-3xl px-6 md:px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
              </div>
            </div>
          </div>
          <div className="card bg-slate-200 shadow-xl">
            <figure className="h-1/3 pt-4">
              <img src="https://i.ibb.co/hVKvDhH/love.png" alt="food-icon" className="rounded-xl mx-auto" width={100} />
            </figure>
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title text-lg md:text-xl">Donasi Tunai</h2>
              <p className="text-sm md:text-base">Ayo kita berikan perubahan positif dalam hidup orang-orang yang membutuhkan dengan memberikan donasi tunai.</p>
              <div className="card-actions">
                <Link as="button" href="#" className="btn rounded-3xl px-6 md:px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
              </div>
            </div>
          </div>
          <div className="card bg-slate-200 shadow-xl">
            <figure className="h-1/3 pt-4">
              <img src="https://i.ibb.co/PD80Lzg/selfcare-3.png" alt="food-icon" className="rounded-xl mx-auto" width={100} />
            </figure>
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title text-lg md:text-xl">Usul Penerima</h2>
              <p className="text-sm md:text-base">Bersama-sama, bantu perjuangan pahlawan-pahlawan tak terlihat di sekitarmu dengan donasi yang merata dan tepat sasaran.</p>
              <div className="card-actions">
                <Link as="button" href={route('penerima')} className="btn rounded-3xl px-6 md:px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
              </div>
            </div>
          </div>
          <div className="card bg-slate-200 shadow-xl">
            <figure className="h-1/3 pt-4">
              <img src="https://i.ibb.co/wpBsKH7/volunteer-1.png" alt="food-icon" className="rounded-xl mx-auto" width={100} />
            </figure>
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title text-lg md:text-xl">Relawan</h2>
              <p className="text-sm md:text-base">Jadilah pahlawan sejati dengan bergabung sebagai relawan Berkah Pangan! Memberikan dukungan kepada mereka yang membutuhkan.</p>
              <div className="card-actions">
                <Link as="button" href={route('relawan')} className="btn rounded-3xl px-6 md:px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Card Menu */}

      {/* Mitra Page */}

      <div className="h-screen flex flex-col md:flex-row justify-start items-center bg-white px-16 pt-16">
        <div className="max-w-lg text-center mb-12 md:mr-12">
          <h2 className="w-full text-4xl md:text-5xl font-bold text-button mb-10 md:mb-12 text-left md:text-left">Ayo mitra dengan kami!</h2>
          <p className="text-lg text-black w-full mb-12 text-left md:text-left">Marilah bergabung sebagai mitra Berkah Pangan, dan bersama-sama kita wujudkan visi menyediakan makanan berkelanjutan bagi mereka yang membutuhkan, memberi harapan baru, dan menciptakan perubahan nyata dalam kehidupan mereka.</p>
          <div className="text-left">
            <Link as="button" href={route('kontakkami')}  className="btn rounded-3xl px-6 md:px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg capitalize">Kontak Kami</Link>
          </div>
        </div>
        <div className="shadow-xl flex justify-center">
          <img src="https://i.ibb.co/zndy9cF/group-asia-young-creative-people-smart-casual-wear-smiling-arms-crossed-creative-office-workplace-di.jpg" alt="food-bank-img" className="w-full" />
        </div>
      </div>


      {/* Mitra Page */}
    </>
  )
}

export default Beranda