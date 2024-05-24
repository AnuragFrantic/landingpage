import React from 'react'
import logo from "./assets/legal999-2.png"
import whatsapp from "./assets/whatsapp.webp"
import telegram from "./assets/telegram.png"



function Home() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <div className="">
                        <a class="navbar-brand" href="#">
                            <img src={logo} className='img-fluid' style={{ height: "80px" }} alt="" />
                        </a>

                    </div>
                    <div className="">
                        <a class="navbar-brand" href="#">
                            <span className='text-white me-3'> GET ID NOW</span>
                            <img src={whatsapp} className='img-fluid' style={{ height: "40px" }} alt="" />
                        </a>
                    </div>





                </div>
            </nav>

            <section className='mainsection'>
                <a href='https://wa.me/+917817078742' target='_blank' className='btn shadow-none whatsappicon' id="blinking-button">GET ID NOW <img src={whatsapp} style={{ height: "30px" }} alt="" /></a>
                <a href='https://t.me/linkw999' className='btn shadow-none telegramicon' id="blinking-button">GET ID NOW <img src={telegram} style={{ height: "30px", borderRadius: "50%" }} alt="" /></a>
            </section>
        </>
    )
}

export default Home
