export default function Chute(chutePalavra, setChutePalavra){

    const palavraChutada = (ev)=> {
        setChutePalavra(ev.target.value)
    }
    function verificar(){
        setChutePalavra('')
    }
    return(
        <div className="chute">
            <div className="box-chute">
                <p>Já sei a palavra!</p>
                <input 
                    type="text"
                    onChange={palavraChutada}
                    value={chutePalavra}
                />
                <button onClick={verificar}>Chutar</button>
            </div>
        </div>
    )
}

