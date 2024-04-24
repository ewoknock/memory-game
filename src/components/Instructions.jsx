import "../styles/Instructions.scss";

function Instructions({onClick}) {
    /*if (!localStorage.getItem("highScore")) {
        setTimeout(() => {
            const backdrop = document.querySelector(".backdrop");
            const instructions = document.querySelector(".instructions");
            backdrop.classList.remove("hidden");
            instructions.classList.remove("hidden");
        }, 0)
    }*/

    return <>
        <div className="backdrop hidden" onClick={onClick}></div>
        <div className="instructions hidden" >
            <h2 className="instructions__heading">Instructions</h2>
            <p className="instructions__text">Each round, you&apos;ll see a set of Pokemon.</p>
            <p className="instructions__text">Your mission: <strong>click on each Pokemon only one time!</strong></p>
            <p className="instructions__text">If you click the a Pokemon twice in one round, you lose.</p>
            <p className="instructions__text">If you click successfully click every single Pokemon once, you&apos;ll advance to the next level.</p>
            <p className="instructions__text">Try to see how far you can get!</p>
            <button className="instructions__close" onClick={onClick}>X</button>
        </div>
    </>
}

export default Instructions;