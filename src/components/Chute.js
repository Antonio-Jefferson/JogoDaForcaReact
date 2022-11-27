export default function Chute({chutePalavra, palavraChutada, confirmarPalavra }){

    return(
        <div className="chute">
            <div className="box-chute">
                <p>Já sei a palavra!</p>
                <input 
                    data-test="guess-input"
                    type="text"
                    onChange={palavraChutada}
                    value={chutePalavra}
                />
                <button data-test="guess-button" onClick={confirmarPalavra}>Chutar</button>
            </div>
        </div>
    )
}

