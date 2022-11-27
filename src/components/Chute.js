export default function Chute({chutePalavra, palavraChutada, confirmarPalavra,verdadeOuFalse }){

    return(
        <div className="chute">
            <div className="box-chute">
                <p>Já sei a palavra!</p>
                <input 
                    disabled={verdadeOuFalse}
                    data-test="guess-input"
                    type="text"
                    onChange={palavraChutada}
                    value={chutePalavra}
                />
                <button  
                    disabled={verdadeOuFalse} 
                    data-test="guess-button" 
                    onClick={confirmarPalavra}
                    >Chutar
                </button>
            </div>
        </div>
    )
}

