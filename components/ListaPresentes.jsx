import { useState } from 'react';
import { motion } from 'framer-motion';
import gifts from '../data/gifts';

export default function ListaPresentes() {
  const [loading, setLoading] = useState(null);
  const chavePix = 'mateus.ramos96@outlook.com'; // Substitua pela sua chave Pix real
  const [copiado, setCopiado] = useState(false);

  const handleCheckout = async (gift) => {
    setLoading(gift.id);

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: gift }),
    });

    if (!response.ok) {
      alert('Erro ao iniciar pagamento. Tente novamente.');
      setLoading(null);
      return;
    }

    const { init_point } = await response.json();
    window.location.href = init_point;
    setLoading(null);
  };

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(chavePix);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar chave Pix:', error);
    }
  };

  const renderGiftCard = (gift) => (
    <motion.div
      key={gift.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-md bg-white overflow-hidden flex flex-col border border-[#c5b358]"
    >
      <img src={gift.image} alt={gift.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-md font-semibold text-center text-[#3c4b3f] mb-2">{gift.name}</h2>
          <p className="text-sm text-[#6b6b6b] text-center mb-4">R$ {(gift.price / 100).toFixed(2)}</p>
        </div>
        <button
          onClick={() => handleCheckout(gift)}
          disabled={loading === gift.id}
          className="bg-[#c5b358] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#b4a146] transition disabled:opacity-50"
        >
          {loading === gift.id ? 'Redirecionando...' : 'Presentear 🎁'}
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#3c4b3f] mb-2">Lista de Presentes dos Noivos</h1>
      <p className="text-center text-[#6b6b6b] max-w-2xl mx-auto mb-8">
        Queridos amigos e familiares, agradecemos por fazerem parte desse momento tão especial.
        Abaixo, preparamos uma lista com opções divertidas e também itens para nossa nova casa. Fiquem à vontade para escolher com carinho ♥️
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#3c4b3f] mb-4 border-b pb-1 border-[#c5b358]">🎉 Itens Divertidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gifts.filter(g => g.id <= 12).map(renderGiftCard)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#3c4b3f] mb-4 border-b pb-1 border-[#c5b358]">🏠 Itens para a Casa Nova</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gifts.filter(g => g.id > 12).map(renderGiftCard)}
        </div>
      </div>
      <div className="mt-12 text-center border-t pt-6 border-olive-200 bg-white">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-800">💸 Quer deixar só um mimo no nosso Pix?</h2>
        <p className="mb-4 text-olive-700 text-[#6b6b6b]">A gente aceita com alegria, sorriso no rosto e muito amor no coração! 😍</p>

        <div className="inline-flex flex-col items-center gap-2 bg-yellow-100 p-4 rounded-xl text-yellow-900">
          <span className="font-mono text-lg">{chavePix}</span>
          <button
            onClick={copiarPix}
            className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700 transition text-sm"
          >
            {copiado ? 'Chave copiada! ✅' : 'Copiar chave Pix'}
          </button>
        </div>
      </div>
    </div>
  );
}
