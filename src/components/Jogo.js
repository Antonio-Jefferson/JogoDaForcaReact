
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
                <img src={`./assets/forca${contadorErro}.png`} />
            </div>
            <div>
                <div>
                    <button className="btn" onClick={inicializarJogo}>Escolher Palavra</button>
                </div>
                <div className="palavra-sorteada">
                    <div className={`card ${cor}`}>{contadorErro === 6 ? palavra : underline}</div>
                </div>
            </div>
        </div>
    )
}

