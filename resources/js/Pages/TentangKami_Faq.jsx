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
                <h1 className="font-medium text-4xl text-h1 text-center pt-5">Frequently Asked Question</h1>
                <h2 className='text-2xl text-h2 font-medium mx-14 mt-4'>Apa itu Berkah Pangan?</h2>
                <p className=" mx-14 text-justify font-medium my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                </p>
                <h2 className='text-2xl text-h2 font-medium mx-14 mt-4'>Mengapa Indonesia membutuhkan Berkah Pangan?</h2>
                <p className=" mx-14 text-justify font-medium my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                </p>
                <h2 className='text-2xl text-h2 font-medium mx-14 mt-4'>Jenis makanan & minuman yang dapat didistribusikan Berkah Pangan?</h2>
                <p className=" mx-14 text-justify font-medium my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                </p>
                <h2 className='text-2xl text-h2 font-medium mx-14 mt-4'>Kepada siapa donasi makanan ini didistribusikan?</h2>
                <p className=" mx-14 text-justify font-medium my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum eos perferendis 
                    expedita veniam rem quasi ea! At architecto dolor, quidem quos est praesentium, 
                    sed necessitatibus, nesciunt nemo maxime delectus.
                </p>
                <h2 className='text-2xl text-h2 font-medium mx-14 mt-4'>Bagaimana saya dapat membantu?</h2>
                <p className=" mx-14 text-justify font-medium my-5">
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