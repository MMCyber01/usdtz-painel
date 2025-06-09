import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState("");

  const handleDeploy = async () => {
    const res = await fetch("/api/deploy", {
      method: "POST",
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    alert(`Token criado: ${data.address}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Criar Token USDT.z</h1>
      <input placeholder="Quantidade" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleDeploy}>Deploy</button>
    </div>
  );
}
