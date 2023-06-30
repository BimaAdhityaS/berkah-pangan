const About = () => {
    return (
        <div class="bg-gray-200 w-auto h-36 flex flex-col justify-center items-center text-black">
            <h1 class="font-bold text-4xl text-footer pb-7">Tentang Kami</h1>
            <div class="justify-center bg-white border-collapse border-2 border-black rounded-2xl w-2/4 h-20 mt-36 absolute">
                <ul class="grid grid-cols-3 justify-items-center items-center h-full font-medium text-center">
                    <li><a href={route('tentangkami-latarbelakang')} className="hover:text-orange-300">Latar Belakang</a></li>
                    <li><a href={route('tentangkami-visimisi')} className="hover:text-orange-300">Visi dan Misi</a></li>
                    <li><a href={route('tentangkami-FaQ')}  className="hover:text-orange-300">Frequently Asked Question</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About