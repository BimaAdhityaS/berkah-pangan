import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import About from '@/Components/Tentang Kami/Navbar_About';
import Footer from '@/Components/Footer';

export default function TentangKami(props) {
    return (
        <div className='bg-white'>
            <Head title={props.title} />
            <Navbar />
            <About />
            <div className=" mt-12 text-black">
                <h1 className="font-medium text-4xl text-footer text-center">Latar Belakang</h1>
                <img className="w-2/4 h-auto mx-auto rounded-xl mt-5" src='https://i.ibb.co/7VFnXgM/Berkah-Pangan-2.png'></img>
                <p className=" mx-14 text-justify font-medium my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                </p>
                <p className=" mx-14 text-justify font-medium my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                </p>
            </div>
            <Footer />
        </div>
    )
}