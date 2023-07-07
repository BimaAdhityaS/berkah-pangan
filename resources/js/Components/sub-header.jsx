const Header2 = (props) => {
    return (
        // <div className="bg-gray-200 w-auto h-36 flex flex-col justify-center items-center text-h1 border-b-4 border-white" style={{ backgroundImage: `url(${props.img})` }}>
        <div className="w-auto h-36 flex flex-col justify-center items-center text-h1 border-b-4 border-white" style={{ backgroundImage: `url(${props.img})`, backgroundSize: 'auto 100%', backgroundPosition: 'center' }}>
            <h1 className="absolute font-bold text-4xl text-footer pb-7">{props.judul}</h1>
            <div className="justify-center bg-white border-collapse border-2 border-[#103732] rounded-2xl w-11/12 md:w-2/4 h-20 mt-36 md:mt-36 mx-auto relative">
                <h2 className="font-medium text-center text-2xl md:text-3xl my-5 text-h1">
                    {props.deskripsi}
                </h2>
            </div>
        </div>
    )
}

export default Header2;