import Instructions from "./Instructions";
import "../styles/Navbar.scss"

function Header(){

    const toggleInstructions = () => {
        const backdrop = document.querySelector(".backdrop");
        const instructions = document.querySelector(".instructions");
        backdrop.classList.toggle("hidden");
        instructions.classList.toggle("hidden");   
    }

    return (
        <>
        <header className="header">
            <h1 className="header__title">Pokemon Memory Game</h1>
            <div className="header__container">
                <button className="header__btn" onClick={toggleInstructions}>How to Play</button>
            </div>
        </header>
        <Instructions onClick={toggleInstructions} />
        </>


    )
}

export default Header