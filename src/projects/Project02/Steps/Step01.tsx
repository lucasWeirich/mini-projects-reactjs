import { useEffect, useState } from "react";

export default function Step01() {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAmount(amount + 1);
    }, 1000);
  }, [amount])

  return <div style={{ display: "flex", flexDirection: "column" }}>
    <h2 style={{textAlign: "center"}}>Step 01</h2>

    <h1 style={{color: 'var(--colorSubDark)', textAlign: "center"}}>Stopwatch for this stage: {amount}s</h1>
    <br />
    <p style={{ color: '#01ccff', textAlign: "center" }}>Este projeto foi estruturado para que quando acrescentar uma nova etapa ou remover, não precise calcular o progresso. <br /> Apenas adicionar o novo step e qual component vai renderizar</p>
    <br />
    <p style={{ color: '#ddff01', textAlign: "center" }}>Estas páginas não foram estilizadas, estão apenas para demonstração de funcionamento das etapas</p>
    <br />
    <img style={{ margin: 'auto', height: 200 }}
      src="https://conexaopanvel.faccat.br/wp-content/uploads/2020/05/react-js-800x450.png" alt="Image random - react" />
  </div>
}