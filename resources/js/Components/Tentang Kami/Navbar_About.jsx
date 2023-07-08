const About = (props) => {
    return (
        <div class="w-auto h-36 md:h-96 flex flex-col justify-center items-center text-black" style={{ backgroundImage: `url(${props.img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <h1 class="font-bold text-4xl md:text-6xl text-slate-100 pb-7">Tentang Kami</h1>
            <div class="justify-center bg-white border-collapse border-2 border-[#103732] rounded-2xl w-4/5 sm:w-2/4 h-20 mt-36 md:mt-96 absolute">
                <ul class="grid grid-cols-1 sm:grid-cols-3 justify-items-center items-center h-full font-medium text-center">
                    <li><a href={route('tentangkami-latarbelakang')} className="hover:text-orange-300">Latar Belakang</a></li>
                    <li><a href={route('tentangkami-visimisi')} className="hover:text-orange-300">Visi dan Misi</a></li>
                    <li><a href={route('tentangkami-FaQ')} className="hover:text-orange-300">FAQ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About