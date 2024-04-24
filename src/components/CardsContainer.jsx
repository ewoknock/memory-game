import { useState } from "react"
import Card from "./Card"
import "../styles/CardsContainer.scss"

function CardsContainer(){
    const [score, setScore] = useState(0)
    const [numCards, setNumCards] = useState(8)
    const [idList, setIdList] = useState([])

    const createIdList = () => {
        const newIds = [];
        while(newIds.length < numCards){
            const randomId = Math.floor(Math.random() * 151) + 1
            if(!newIds.find((id) => id === randomId)){
                newIds.push({
                    id: randomId,
                    clicked: false
                })
            }
        }
        setIdList(newIds)
    }

    const shuffleArray = (list) => {
        const array = [...list]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleCardClick = (e) => {
        const cardId = parseInt(e.target.closest(".card").id)
        console.log(cardId)
        if(idList.some((id) => id.id === cardId && id.clicked)){
            console.log("game over")
        } else{
            setScore(score + 1)
            setIdList(idList.map(id => {
                return id.id === cardId ? {...id, clicked: true} : id
            }))
        }
    }

    if(numCards !== idList.length){
        createIdList()
    }

    const shuffledIds = shuffleArray(idList)

    return (
        <>
            <main>
            <div className="scores">
                <p>Current Score: {score}</p>
            </div>
            <div className="cards-container">
                {shuffledIds.map(id => 
                    <Card key={id.id} id={id.id} onClick={handleCardClick}/>
                )}
            </div>
            </main>
        </>
    )
}

export default CardsContainer