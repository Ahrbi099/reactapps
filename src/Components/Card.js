import React from "react";

export default function Card(props){
    const array=['Yellow','Orange']
    const newarray=array.map(items => {
      <h3>{items}</h3>
    }
    )

    return(
        <div className="Card-section">
            <img className="cardimg" src={props.img} ></img>
            
            <div className="card-box">
            <img className="cardicon" src="./star.png" width="20px" height="20px"></img>
            <span>% {props.rate} </span>
            <span>(6) </span>
            <span> {props.country} </span>
            </div>
            <p><b>{props.title}</b></p>
            <p>{props.price}</p>
            <hr />
            {props.Setup}+{props.Punchline}
            {newarray}
        </div>
    )
}

