const Header2 = (props) => {
    return (
        <div class="bg-gray-200 w-auto h-36 flex flex-col justify-center items-center text-black">
            <h1 class="font-bold text-4xl text-footer pb-7">{props.judul}</h1>
            <div class="justify-center bg-white border-collapse border-2 border-black rounded-2xl w-2/4 h-20 mt-36 absolute">
                <h2 class="font-medium text-center text-3xl my-5">
                    {props.deskripsi}
                </h2>
            </div>
        </div>
    )
}

export default Header2;