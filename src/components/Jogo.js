export default function Jogo(){
    return(
        <div className="jogo">
            <div>
                <img src="./assets/forca0.png" />
            </div>
            <div>
                <div>
                    <button className="btn">Escolher Palavra</button>
                </div>
                <div className="palavra-sorteada">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}
function Card(){
    return (
        <div className="card"></div>
    )
}