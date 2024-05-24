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
                        <a class="navbar-brand logo" href="#">
                            <img src={logo} className='img-fluid' alt="" />
                        </a>

                    </div>
                    <div className="">
                        <a class="navbar-brand headerimg" href='https://wa.me/+917817078742' target='_blank'>
                            <span className='text-white me-1'> GET ID NOW</span>
                            <img src={whatsapp} className='img-fluid' alt="" />
                        </a>
                        <a class="navbar-brand headerimg" href='https://t.me/linkw999' target='_blank'>
                            <span className='text-white me-1'> GET ID NOW</span>
                            <img src={telegram} style={{ borderRadius: "50%" }} className='img-fluid' alt="" />
                        </a>
                    </div>

                </div>
            </nav>

            <section className='mainsection'>
                <div className="buttonparent position-absolute d-flex w-100 justify-content-between">
                    <a href='https://wa.me/+917817078742' target='_blank' className='btn shadow-none whatsappicon' id="blinking-button">GET ID NOW <img src={whatsapp} alt="" /></a>
                    <a href='https://t.me/linkw999' target='_blank' className='btn shadow-none telegramicon' id="blinking-button">GET ID NOW <img src={telegram} alt="" /></a>
                </div>

            </section>
        </>
    )
}

export default Home
