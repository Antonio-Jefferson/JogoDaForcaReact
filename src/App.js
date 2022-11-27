import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras"
import { useState } from "react";

export default function App() {

  const [listaLetras, setListaLetras] = useState([]);
  const [contadorErro, setContadorErro] = useState(0);
  const [ativarBtn, setAtivarBtn] = useState("");
  const [verdadeOuFalse, setVerdadeOuFalso] = useState(true);
  const [letrinha, setLetrinha] = useState('');
  const [underline, setUnderline] = useState([]);
  const [palavra, setPalavra] = useState('')
  const [litLetras, setListLetras] = useState([])
  const [chutePalavra, setChutePalavra] = useState('')
  const [cor, setCor] = useState('')
  
  //console.log(underline)
  //console.log(palavra)
  //console.log(listaLetras)
  //console.log(letrinha)

  function inicializarJogo() {
        const palavraSoteada = palavras[Math.floor(Math.random() * palavras.length)];
        setPalavra(palavraSoteada);
        const arrPalavra = [...palavraSoteada];
        setListLetras(arrPalavra);
        const listUnderline = arrPalavra.map(_l => "_ ");
        setUnderline(listUnderline);
        setVerdadeOuFalso(false)
        setAtivarBtn('ativado')
        setContadorErro(0)
        setCor('')
        let newarr = [];
        setListaLetras(newarr);
  };

  function letraEscolhida(letra) {
    if (!listaLetras.includes(letra)) {
        setListaLetras([...listaLetras, letra])
        setLetrinha(letra)
    }
    let isL = letra
    verificar(isL)
         
  }

  function verificar(isL){
    if(palavra.includes(isL)){
      const novoArr = [...palavra];
      const novoUnderline = [...underline];
      novoArr.forEach((l, i) => {
        if(l === isL){
          novoUnderline[i] = isL;
          setUnderline([...novoUnderline])
        }
        FimDeJogo(novoArr, novoUnderline);
      })
    }else{ 
      if(contadorErro <= 5){
        if(!listaLetras.includes(isL)){
          let tmpContador = contadorErro + 1;
          setContadorErro(tmpContador);
            if(tmpContador === 6){
              setCor('red')
              setVerdadeOuFalso(true)
              setAtivarBtn('')
            }
        }
    }
      
    }
  }
  function FimDeJogo(novoArr, novoUnderline){
    if(novoArr.toString() === novoUnderline.toString()){
      console.log('entrei no caio')
      setCor('green')
      setVerdadeOuFalso(true)
      setAtivarBtn('')
    }
  }
  const palavraChutada = (ev)=> {
    const pChute = ev.target.value;
    setChutePalavra(pChute)
    console.log('esse eu digitei '+ pChute);
   
}
function confirmarPalavra(){
    setChutePalavra('')
    if(palavra.toString() === chutePalavra){
      setUnderline([...palavra])
      setCor('green')
      setVerdadeOuFalso(true)
      setAtivarBtn('')
    }else{
      setUnderline([...palavra])
      setContadorErro(6)
      setCor('red')
      setVerdadeOuFalso(true)
      setAtivarBtn('')
    }
}

 

  return (
    <>
      <Jogo
        inicializarJogo={inicializarJogo}
        contadorErro={contadorErro}
        palavra={palavra}
        underline={underline}
        cor={cor}
      />
      <Letras
        listaLetras={listaLetras}
        ativarBtn={ativarBtn}
        verdadeOuFalse={verdadeOuFalse}
        letraEscolhida={letraEscolhida}
      />
      <Chute
        chutePalavra={chutePalavra}
        confirmarPalavra={confirmarPalavra}
        palavraChutada={palavraChutada}
        verdadeOuFalse={verdadeOuFalse}
      />
    </>
  );
}
