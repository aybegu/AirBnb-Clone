import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"


export default function App() {
    // bu sekilde datayi direkt olarak aktarabiliriz
    const cards = data.map(item => {
        return(
            <Card 
                key= {item.id} //map kullandigimiz her seferde key kullanmaliyiz
                item={item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-list">
                {cards}
            </section>
        </div>
    )
}