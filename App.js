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
                key= {item.id}
                img= {item.coverImg}
                rating= {item.stats.rating}
                reviewCount= {item.stats.reviewCount}
                country= {item.location}
                title= {item.title}
                price= {item.price}
                openSpots= {item.openSpots}
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