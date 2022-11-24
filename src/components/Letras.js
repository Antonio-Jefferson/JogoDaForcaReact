
export default function Letras({setContadorErro, botao, setBotao, ativarBtn, setAtivarBtn, palavraSorteada,verdadeOuFalse}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log(ativarBtn)
    console.log(palavraSorteada)
    function letraEscolhida(letra){
     if(!botao.includes(letra)){
        setBotao([...botao, letra])
     }else{
        console.log('letra já inclusa')
     }
    }
    return (
        <div className="letras">
            <div className="alfabeto">
               {alfabeto.map((a)=> <button disabled={verdadeOuFalse} className={`btn ${botao.includes(a)? "": ativarBtn}`} onClick={()=>letraEscolhida(a)}>{a}</button>)}
            </div>
        </div>
    )
     
}

