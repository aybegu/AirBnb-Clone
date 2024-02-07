import React from "react"


export default function Card(props) {

    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.openSpots === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {/* bu sekilde yazdigimizda varsa ekliyor yoksa hic girmiyor -- conditional rendering*/}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* eger img eklerken pathi degil de sadece png ismi olarak ekliyorsak asagidaki gibi ekleyebiliriz */}
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}