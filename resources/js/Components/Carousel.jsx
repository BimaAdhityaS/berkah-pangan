import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePreviousSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  return (
    <div className="carousel w-full max-h-screen mt-50">
      <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? "" : "hidden"}`}>
        <img src="https://img.freepik.com/free-photo/top-view-trash-cooking-concept_23-2149056484.jpg?w=740&t=st=1688798984~exp=1688799584~hmac=ed6abb42893a859b9466c127ba145fae938a1ca6ed218853a47c5252454ad152" className="w-full h-full object-cover" />
        <button className="btn btn-circle hover:text-black hover:bg-slate-300 border-none absolute top-1/2 transform -translate-y-1/2 left-5 z-10" onClick={handlePreviousSlide}>
          ❮
        </button>
        <button className="btn btn-circle hover:text-black hover:bg-slate-300 border-none absolute top-1/2 transform -translate-y-1/2 right-5 z-10" onClick={handleNextSlide}>
          ❯
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-9/12 md:w-1/2 text-center text-white">
            <h1 className="mb-5 md:mb-12 text-2xl md:text-5xl font-bold">Tahukah Kamu?</h1>
            <p className="px-10 md:px-5 text-xs md:text-xl font-medium">Bahwa di Indonesia setiap tahunnya terdapat sekitar 300 kilogram makanan per orang dibuang secara tidak perlu. Ini berarti Indonesia kehilangan sekitar 9 juta ton makanan setiap tahunnya, yang setara dengan 30% dari total produksi pangan nasional.</p>
          </div>
        </div>
      </div>
      <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? "" : "hidden"}`}>
        <img src="https://img.freepik.com/free-photo/volunteer-food-box-close-up_23-2149182041.jpg?w=740&t=st=1688799353~exp=1688799953~hmac=3ab16735dd20f63c8f5b39eadd113dba30e62e56ef9cdf8fd8e14cdcf86ac071" className="w-full h-full object-cover" />
        <button className="btn btn-circle hover:text-black hover:bg-slate-300 border-none absolute top-1/2 transform -translate-y-1/2 left-5 z-10" onClick={handlePreviousSlide}>
          ❮
        </button>
        <button className="btn btn-circle hover:text-black hover:bg-slate-300 border-none absolute top-1/2 transform -translate-y-1/2 right-5 z-10" onClick={handleNextSlide}>
          ❯
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-9/12 md:w-1/2 text-center text-white">
            <h1 className="mb-5 md:mb-12 text-2xl md:text-5xl font-bold">Jangan Buang Makanan Anda</h1>
            <p className="px-10 md:px-5 text-xs md:text-xl font-medium">
              Sumbangkan makanan kering atau kemasan yang berlebihan, belum terbuka, dan belum kedaluwarsa dengan minimal 4 minggu masa kedaluwarsa, untuk didistribusikan langsung kepada mereka yang membutuhkannya.</p>
          </div>
        </div>
      </div>
      <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? "" : "hidden"}`}>
        <img src="https://img.freepik.com/free-photo/close-up-hand-holding-wooden-board_23-2148972878.jpg?w=740&t=st=1688800766~exp=1688801366~hmac=0adeeefe1a90815e46a3292e88b03cc96b447ffdb90ca186366b9385fc7f33df" className="w-full h-full object-cover" />
        <button className="btn btn-circle hover:text-black hover:bg-slate-300 border-none absolute top-1/2 transform -translate-y-1/2 left-5 z-10" onClick={handlePreviousSlide}>
          ❮
        </button>
        <button className="btn btn-circle hover:text-black hover:bg-slate-300 border-none absolute top-1/2 transform -translate-y-1/2 right-5 z-10" onClick={handleNextSlide}>
          ❯
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-9/12 md:w-1/2 text-center text-white">
            <h1 className="mb-5 md:mb-12 text-2xl md:text-5xl font-bold">Makan Lebih, Buang Kurang</h1>
            <p className="px-10 md:px-5 text-xs md:text-xl font-medium">Kami menghubungkan orang-orang dengan makanan berlebihan kepada masyarakat yang kurang beruntung yang membutuhkannya. Bantu kami mencapai lebih banyak orang dalam skala yang lebih besar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
