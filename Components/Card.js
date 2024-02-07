import React from "react"


export default function Card(props) {

    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.openSpots === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {/* bu sekilde yazdigimizda varsa ekliyor yoksa hic girmiyor -- conditional rendering*/}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* eger img eklerken pathi degil de sadece png ismi olarak ekliyorsak asagidaki gibi ekleyebiliriz */}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.stats.reviewsCount}) • </span>
                <span className="gray">{props.item.stats.country}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}