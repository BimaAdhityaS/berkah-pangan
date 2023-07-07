import { Link } from "@inertiajs/react"
import BarChart from "./chart"

const Beranda = () => {
    return(
        <>
        {/* Carousel */}
        <div className="carousel w-full max-h-screen">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://images.unsplash.com/photo-1604998103924-89e012e5265a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
            <div className="absolute h-screen flex items-center justify-center">
              <div className="w-9/12 text-center text-white">
                <h1 className="mb-12 text-5xl font-medium">Tahukah Kamu?</h1>
                <p className="px-32 text-xl">Bahwa diIndonesia setiap tahunnya terdapat sekitar 300 kilogram makanan per orang dibuang secara tidak perlu. Ini berarti Indonesia kehilangan sekitar 9 juta ton makanan setiap tahunnya, yang setara dengan 30% dari total produksi pangan nasional.</p>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://plus.unsplash.com/premium_photo-1675756583638-ee9120a0ecda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
            <div className="absolute h-screen flex items-center justify-center">
              <div className="w-9/12 text-center text-white">
                <h1 className="mb-12 text-5xl font-medium">Jangan Buang Makanan Anda</h1>
                <p className="px-32 text-xl">Sumbangkan makanan kering/beku yang berlebihan, belum dibuka, dan masih berlaku selama minimal 4 minggu, untuk didistribusikan langsung kepada mereka yang membutuhkannya.</p>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://images.unsplash.com/photo-1495277493816-4c359911b7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
            <div className="absolute h-screen flex items-center justify-center">
              <div className="w-9/12 text-center text-white">
                <h1 className="mb-12 text-5xl font-medium">Jangan Buang Makanan Anda</h1>
                <p className="px-32 text-xl">Sumbangkan makanan kering/beku yang berlebihan, belum dibuka, dan masih berlaku selama minimal 4 minggu, untuk didistribusikan langsung kepada mereka yang membutuhkannya.</p>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://images.unsplash.com/photo-1624267439301-8147fff1a23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
            <div className="absolute h-screen flex items-center justify-center">
              <div className="w-9/12 text-center text-white">
                <h1 className="mb-12 text-5xl font-medium">Jangan Buang Makanan Anda</h1>
                <p className="px-32 text-xl">Sumbangkan makanan kering/beku yang berlebihan, belum dibuka, dan masih berlaku selama minimal 4 minggu, untuk didistribusikan langsung kepada mereka yang membutuhkannya.</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Carousel */}
  
        {/* BarChart */}
        <div className="border-box flex justify-center items-center max-w-screen-2xl h-3/4 bg-slate-50">
          <div className="absolute max-w-xl">
            <h2 className="z-50 text-4xl text-gray-350">Statistic Berkah Pangan 2023</h2>
          </div>
          <BarChart />
        </div>
        {/* BarChart */}
  
        {/* About us */}
        <div className="h-screen flex justify-center items-center bg-gradient-to-b from-linear-top to-linear-bottom">
          <div className="text-center max-w-xl text-white">
            <h2 className="text-5xl font-semibold mb-12">Berkah Pangan</h2>
            <p className="text-lg mb-12">Berkah pangan merupakan website atau platform online yang memfasilitasi proses donasi makanan kepada mereka yang membutuhkan. Tujuannya adalah untuk mengurangi pemborosan makanan, meminimalkan kelaparan, dan mendukung keberlanjutan pangan.</p>
            <Link href={route('tentangkami-latarbelakang')} as="button" className="btn rounded-3xl px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Baca Selengkapnya</Link>
          </div>
        </div>
        {/* About us */}
  
        {/* What are we doing */}
  
        <div className="h-screen flex justify-center items-center bg-white">
          <div className="max-w-xl">
            <h2 className="w-96 text-5xl font-bold text-button mb-12">Apa yang kami lakukan?</h2>
            <p className="text-lg text-black w-4/5 mb-12">Kami menyediakan mekanisme bagi individu, organisasi, dan bisnis untuk menyumbangkan makanan yang tidak terpakai kepada mereka yang membutuhkan. Makanan tersebut dikumpulkan dari restoran, supermarket, dan pihak lain yang memiliki makanan berlebih.</p>
            <Link href={route('tentangkami-FaQ')}  as="button" className="btn rounded-3xl px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Baca Selengkapnya</Link>
          </div>
          <div className="shadow-xl rounded-xl">
            <img src="https://i.ibb.co/Lpx3QDn/food-bank-img.png" alt="food-bank-img" width={461} />
          </div>
        </div>
  
        {/* What are we doing */}
  
        {/* Card Menu */}
  
        <div className="bg-slate-50 h-screen">
          <div className="flex flex-col text-center text-black mb-12 pt-20">
            <h2 className="text-5xl font-bold text-button mb-12">Siap menjadi Agen Perubahan!</h2>
            <p className="text-lg">Dengan bergabung bersama Berkah Pangan, kamu dapat ikut serta dalam mengatasi masalah kelaparan pangan di Indonesia.</p>
          </div>
  
          <div className="grid grid-cols-4 gap-10 justify-center">
            <div className="card bg-slate-100 shadow-xl">
              <figure className="h-2/5 px-5 pt-5">
                <img src="https://i.ibb.co/tLF7Fk3/fast-food-1.png" alt="food-icon" className="rounded-xl" width={104} />
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title text-lg">Donasi Makanan</h2>
                <p className="text-sm">Marilah kita bersama-sama memberikan harapan dan kebahagiaan kepada mereka yang membutuhkan dengan berbagi makanan.</p>
                <div className="card-actions">
                  <Link href={route('makanan')} as="button" className="btn rounded-3xl px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
                </div>
              </div>
            </div>
            <div className="card bg-slate-100 shadow-xl">
              <figure className="h-2/5 px-5 pt-5">
                <img src="https://i.ibb.co/hVKvDhH/love.png" alt="food-icon" className="rounded-xl" width={100} />
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title text-lg">Donasi Tunai</h2>
                <p className="text-sm">Ayo kita berikan perubahan positif dalam hidup orang-orang yang membutuhkan dengan memberikan donasi tunai.</p>
                <div className="card-actions">
                  <Link as="button" href="#" className="btn rounded-3xl px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
                </div>
              </div>
            </div>
            <div className="card bg-slate-100 shadow-xl">
              <figure className="h-2/5 px-5 pt-5">
                <img src="https://i.ibb.co/PD80Lzg/selfcare-3.png" alt="food-icon" className="rounded-xl" width={100} />
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title text-lg">Usul Penerima</h2>
                <p className="text-sm">Bersama-sama, bantu perjuangan pahlawan-pahlawan tak terlihat di sekitarmu dengan donasi yang merata dan tepat sasaran.</p>
                <div className="card-actions">
                  <Link as="button" href={route('penerima')} className="btn rounded-3xl px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
                </div>
              </div>
            </div>
            <div className="card bg-slate-100 shadow-xl">
              <figure className="h-2/5 px-5 pt-5">
                <img src="https://i.ibb.co/wpBsKH7/volunteer-1.png" alt="food-icon" className="rounded-xl" width={100} />
              </figure>
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title text-lg">Relawan</h2>
                <p className="text-sm">Jadilah pahlawan sejati dengan bergabung sebagai relawan Berkah Pangan! Memberikan dukungan kepada mereka yang membutuhkan.</p>
                <div className="card-actions">
                  <Link as="button" href={route('relawan')} className="btn rounded-3xl px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Mulai</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Card Menu */}
  
        {/* Mitra Page */}
  
        <div className="h-screen flex justify-center items-center bg-white">
          <div className="max-w-xl">
            <h2 className="w-96 text-5xl font-bold text-button mb-12">Ayo mitra dengan kami!</h2>
            <p className="text-lg text-black w-4/5 mb-12">Marilah bergabung sebagai mitra Berkah Pangan, dan bersama-sama kita wujudkan visi menyediakan makanan berkelanjutan bagi mereka yang membutuhkan, memberi harapan baru, dan menciptakan perubahan nyata dalam kehidupan mereka.</p>
            <button className="btn rounded-3xl px-10 border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent shadow-lg">Kontak Kami</button>
          </div>
          <div className="drop-shadow-xl">
            <img src="https://i.ibb.co/zndy9cF/group-asia-young-creative-people-smart-casual-wear-smiling-arms-crossed-creative-office-workplace-di.jpg" alt="food-bank-img" width={461} />
          </div>
        </div>
        {/* Mitra Page */}
      </>
    )
}

export default Beranda