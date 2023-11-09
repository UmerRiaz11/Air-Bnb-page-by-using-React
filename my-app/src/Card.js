import React from "react"

export default function Card(props) {

    let badge
    if (props.openSpot === 0) {
        badge = "SOLD OUT"
    } else if (props.status === "Online") {
        badge = "ONLINE"
    }
    return (
        <div>
            <div>
                {badge && <div className="card-badge">{badge}</div>}
                <img src={props.img} alt="cd-1 Error" className="poke-1" />
            </div>
            <div className="star-1">
                <img src="/star.jpg" alt="star-Error" className="star-1" />
                <span>{props.rating}</span>
                <span>(6) *</span>
                <span>{props.country}</span>
            </div>
            <p>{props.text}</p>
            <p><span className="bold">From $136 </span> / Person</p>
        </div >

    )
}