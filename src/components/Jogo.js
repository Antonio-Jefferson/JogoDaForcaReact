
export default function Jogo({contadorErro, setPalavraSorteada, palavras, palavraSorteada, setAtivarBtn, setVerdadeOuFalso}){
    console.log(contadorErro)
    console.log(palavras)
    const imgsFocar = [
        "./assets/forca0.png",
        "./assets/forca1.png",
        "./assets/forca2.png",
        "./assets/forca3.png",
        "./assets/forca4.png",
        "./assets/forca5.png",
        "./assets/forca6.png"
        ]
        function sortearPalavra(){
            setPalavraSorteada(palavras[Math.floor(Math.random() * palavras.length)])
            if(palavraSorteada !== undefined){
                setAtivarBtn("ativado")
                setVerdadeOuFalso(false)
            }
         }
    return(
        <div className="jogo">
            <div>
                <img src={imgsFocar[contadorErro]}/>
            </div>
            <div>
                <div>
                    <button className="btn" onClick={sortearPalavra}>Escolher Palavra</button>
                </div>
                <div className="palavra-sorteada">
                   <Card/>
                </div>
            </div>
        </div>
    )
}

function Card(){
    return (
        <div className="card">_</div>
    )
}


