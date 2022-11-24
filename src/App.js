import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras"
import { useState } from "react";

export default function App() {
  const [botao, setBotao] = useState([])
  const [contadorErro, setContadorErro] = useState(0);
  const [palavraSorteada, setPalavraSorteada] = useState("")
  const [ativarBtn, setAtivarBtn] = useState("");
  const [verdadeOuFalse, setVerdadeOuFalso] = useState(true)

  

  return (
    <>
     <Jogo 
        contadorErro={contadorErro} 
        setContadorErro={setContadorErro}
        setPalavraSorteada={setPalavraSorteada}
        palavras={palavras}
        palavraSorteada={palavraSorteada}
        setAtivarBtn={setAtivarBtn}
        setVerdadeOuFalso={setVerdadeOuFalso}
     />
     <Letras
          setContadorErro={setContadorErro}
          botao={botao}
          setBotao={setBotao}
          ativarBtn={ativarBtn}
          palavraSorteada={palavraSorteada}
          verdadeOuFalse={verdadeOuFalse}
     />
     <Chute />
    </>
  );
}


