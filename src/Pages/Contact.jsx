import React, { useState } from 'react';
import Images from '../Constants/Images';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const SendMessage = (e) => {
        e.preventDefault();

        // get IDs
        const PublicId = "AqC5_edo3zDOC7AzM"
        const TemplateId = "template_yypklxj"
        const ServiceId = "service_4bvvlsa"

        // templete parameters
        const templeteParams = {
            form_name: name,
            form_email: email,
            to_name: 'Benelmalih Ahmed Amine',
            message: message
        }

        // send email
        emailjs.send(TemplateId, ServiceId, templeteParams, PublicId)
            .then((response) => {
                console.log("Email Sent Successfully", response);
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => {
                console.log("Error: no Email sended", error);
            })
    }

    return (
        <main className='w-full flex flex-col items-center'>
            <div className='w-full relative'>
                <img className='w-full h-full' src={Images.about1} alt="" />
                <div className='w-full h-full bg-[#00000020] flex justify-center items-center text-white text-6xl font-bold uppercase absolute top-0'>About</div>
            </div>
            <article className='w-3/5 pt-16.5 pb-9.5 flex gap-13 max-sm:flex-col'>
                <section className='w-[675px] h-[500px]'><iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5901.408187417011!2d-83.714185!3d42.306179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae3e5396e7cd%3A0x54d4a122d42d8dc6!2sGoogle%20Ann%20Arbor!5e0!3m2!1sen!2sus!4v1751452356733!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></section>

                <section className='w-[730px] text-[15.5px] flex flex-col justify-center gap-8 text-[#888888] leading-6.5 max-sm:w-full'>

                    <section className='w-full space-y-5'>
                        <h2 className="text-2xl text-[#333333] font-medium">Send us your message</h2>
                        <form onSubmit={SendMessage} className="w-[380px] space-y-7">
                            <div className='w-[580px] flex flex-col'>
                                <input value={name} onChange={(e) => setName(e.target.value)}
                                    type="text" id="name" placeholder='Name' required
                                    className="w-full px-5 py-3 border-1 border-gray-300 focus:outline-none" />
                            </div>
                            <div className='w-[580px] flex flex-col'>
                                <input value={email} onChange={(e) => setEmail(e.target.value)}
                                    type="email" id="email" placeholder='Email' required
                                    className="px-5 py-3 border-1 border-gray-300 focus:outline-none" />
                            </div>
                            <div className='w-[580px] flex flex-col'>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                                    type="password" id="password" placeholder='Message' required rows={5} className="px-5 py-3 border-1 border-gray-300 focus:outline-none"></textarea>
                            </div>

                            <button className='w-fit px-15 py-3 bg-black rounded-4xl text-white text-base hover:bg-[#e65540] transition-colors duration-300 uppercase'>Send</button>
                        </form>
                    </section>
                </section>
            </article>
        </main>
    );
};

export default Contact;