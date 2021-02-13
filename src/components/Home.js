import React from 'react'
import bg_image from "../images/green_bg.jpg"

function Home() {
    return (
        <div>
            <main>
                <img src={bg_image} alt="Backgrounf Image" className="absolute object-cover w-full h-full"/>
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello!! I'm Kamaljeet</h1>
                </section>
            </main>
        </div>
    )
}

export default Home
