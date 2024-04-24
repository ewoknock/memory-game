import { useEffect, useState } from "react"
import "../styles/Card.scss"

const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function Card({id, onClick}){

    return(
        <div className="card" id={id} onClick={onClick}>
            <img className="card__img" src={imgUrl+id+".png"}/>
        </div>
    )
}

export default Card