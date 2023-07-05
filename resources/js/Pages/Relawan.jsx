import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Relawan(props) {
  return (
    <>
      <Head title={props.title} />
      <Navbar />

      <div class="bg-gray-200 w-auto h-36 flex flex-col justify-center items-center text-black">
        <h1 class="font-bold text-4xl text-footer">Relawan</h1>
      </div>
      <div className="bg-white mx-14 my-14">
        <div>
          <h2 className="text-4xl font-semibold text-button mb-5">Jadilah Pahlawan Pangan</h2>
          <p className="text-black text-justify text-lg">Lorem ipsum dolor sit amet consectetur. Turpis fames cras neque feugiat lectus amet. Vestibulum eget porttitor egestas amet nunc diam at nunc. Elementum sit id egestas lacinia arcu feugiat accumsan tortor. Tincidunt pretium felis ultrices viverra nisl mollis. In lorem libero fermentum semper. Vitae vitae accumsan ornare morbi eu convallis. Hendrerit venenatis amet mauris est ultrices elementum adipiscing vitae. Gravida ut pellentesque luctus adipiscing aliquam viverra odio. Ipsum eget nunc lectus cras aenean vel.</p>
        </div>
        <div className="mt-10">
          <img className="w-full h-96" src="https://i.ibb.co/23FC2f9/25579258-7103291.jpg" alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-semibold text-button mb-5 mt-10">Aturan Dan Ketentuan</h2>
          <p className="text-black text-justify text-lg">Lorem ipsum dolor sit amet consectetur. Turpis fames cras neque feugiat lectus amet. Vestibulum eget porttitor egestas amet nunc diam at nunc. Elementum sit id egestas lacinia arcu feugiat accumsan tortor. Tincidunt pretium felis ultrices viverra nisl mollis. In lorem libero fermentum semper. Vitae vitae accumsan ornare morbi eu convallis. Hendrerit venenatis amet mauris est ultrices elementum adipiscing vitae. Gravida ut pellentesque luctus adipiscing aliquam viverra odio. Ipsum eget nunc lectus cras aenean vel. Lorem ipsum dolor sit amet consectetur. Turpis fames cras neque feugiat lectus amet. Vestibulum eget porttitor egestas amet nunc diam at nunc. Elementum sit id egestas lacinia arcu feugiat accumsan tortor. Tincidunt pretium felis ultrices viverra nisl mollis. In lorem libero fermentum semper. Vitae vitae accumsan ornare morbi eu convallis. Hendrerit venenatis amet mauris est ultrices elementum adipiscing vitae. Gravida ut pellentesque luctus adipiscing aliquam viverra odio. Ipsum eget nunc lectus cras aenean vel.</p>
        </div>
      </div>
      <div>
        <div className="h-screen text-white bg-gradient-to-b from-linear-top to-linear-bottom">
          <div className="flex flex-row items-center justify-center px-14 pt-24 gap-10">
            <img className="h-20" src="https://i.ibb.co/LrM5hSx/calendar.png" alt="calendar" />
            <h2 className="text-4xl font-semibold">12 Jun 2023 - 12 Jul 2023</h2>
          </div>
          <div className="py-12">
            <p className="text-lg font-medium text-center">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="grid grid-cols-3 place-items-center pt-7">
            <div className="card w-96 bg-white text-black shadow-xl text-lg">
              <div className="py-5 font-medium text-center text-white bg-button rounded-b-2xl">
                <p>Sun, X June, 01.00 PM</p>
              </div>
              <div className="items-center py-3 ">
                <p className="border-b-[2px] border-black pb-3 pl-7">1 Koordinator</p>
                <p className="border-b-[2px] border-black py-3 pl-7">4 Relawan</p>
              </div>
              <div className="flex justify-center pb-3">
                <button className="btn px-10 rounded-3xl border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent capitalize">Apply</button>
              </div>
            </div>
            <div className="card w-96 bg-white text-black shadow-xl text-lg">
              <div className="py-5 font-medium text-center text-white bg-button rounded-b-2xl">
                <p>Sun, X June, 01.00 PM</p>
              </div>
              <div className="items-center py-3 ">
                <p className="border-b-[2px] border-black pb-3 pl-7">1 Koordinator</p>
                <p className="border-b-[2px] border-black py-3 pl-7">4 Relawan</p>
              </div>
              <div className="flex justify-center pb-3">
                <button className="btn px-10 rounded-3xl border-transparent bg-button text-white hover:bg-linear-top hover:border-transparent capitalize">Apply</button>
              </div>
            </div>
            <div className="card w-96 bg-white text-black shadow-xl text-lg">
              <div className="py-5 font-medium text-center text-white bg-button rounded-b-2xl">
                <p>Sun, X June, 01.00 PM</p>
              </div>
              <div className="items-center py-3 ">
                <p className="border-b-[2px] border-black pb-3 pl-7">1 Koordinator</p>
                <p className="border-b-[2px] border-black py-3 pl-7">4 Relawan</p>
              </div>
              <div className="flex justify-center pb-3">
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