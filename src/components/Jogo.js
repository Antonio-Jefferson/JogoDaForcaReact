
export default function Jogo({
    contadorErro,
    underline,
    inicializarJogo,
    palavra,
    cor
 }) {
       
    return (
        <div className="jogo">
            <div>
                <img data-test="game-image" src={`./assets/forca${contadorErro}.png`} />
            </div>
            <div className="btn-palavras">
                <div>
                    <button data-test="choose-word" className="btn" onClick={inicializarJogo}>Escolher Palavra</button>
                </div>
                <div className="palavra-sorteada">
                    <div data-answer={palavra} data-test="word" className={`card ${cor}`}>{contadorErro === 6 ? palavra : underline}</div>
                </div>
            </div>
        </div>
    )
}

