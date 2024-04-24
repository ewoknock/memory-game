import { useState } from "react"
import Card from "./Card"
import "../styles/CardsContainer.scss"

function CardsContainer(){
    const [numCards, setNumCards] = useState(8)
    const [idList, setIdList] = useState([])

    const createIdList = () => {
        const newIds = [];
        while(newIds.length < numCards){
            const randomId = Math.floor(Math.random() * 151) + 1
            if(!newIds.find((id) => id === randomId)){
                newIds.push(randomId)
            }
        }
        setIdList(newIds)
    }

    const shuffleArray = (list) => {
        const array = [...list];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleCardClick = (e) => {

    }

    if(numCards !== idList.length){
        createIdList()
    }

    console.log(idList)

    const shuffledIds = shuffleArray(idList);

    console.log(shuffledIds)
    return (
        <>
            <main>
            <div className="cards-container">
                {shuffledIds.map(id => 
                    <Card key={id} id={id} onClick={handleCardClick}/>
                )}
            </div>
            </main>
        </>
    )
}

export default CardsContainer