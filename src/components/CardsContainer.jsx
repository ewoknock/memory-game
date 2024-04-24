import { useState } from "react"
import Card from "./Card"
import "../styles/CardsContainer.scss"

function CardsContainer(){
    const [score, setScore] = useState(0)
    const [numCards, setNumCards] = useState(8)
    const [idList, setIdList] = useState([])
    const [gameOver, setGameOver] = useState(false)

    const createIdList = () => {
        const newIds = [];
        while(newIds.length < numCards){
            const randomId = Math.floor(Math.random() * 151) + 1
            if(!newIds.find((id) => id.id === randomId)){
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

    const resetGame = () => {
        setNumCards(8);
        setIdList([]);
        setScore(0)
        setGameOver(false);
    }

    const handleCardClick = (e) => {
        const cardId = parseInt(e.target.closest(".card").id)
        if(idList.some((id) => id.id === cardId && id.clicked)){
            setGameOver(true)
        } else{
            setScore(score + 1)
            if(idList.filter((id) => id.clicked).length + 1 == numCards){
                setNumCards(numCards + 4)
                return
            }
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
            {gameOver ? 
                <div key="game-over" className="game-over">
                    <h2 className="game-over__header">Game Over</h2>
                    <div className="game-over__content">
                        <p>You caught <strong>{score} pokemon</strong>!</p>
                        <button className="game-over__reset" onClick={resetGame}>Play again</button>
                    </div>

                </div>
            :
                <div className="cards-container">
                    {shuffledIds.map(id => 
                        <Card key={id.id} id={id.id} onClick={handleCardClick}/>
                    )}
                 </div>
            }
 
            </main>
        </>
    )
}

export default CardsContainer