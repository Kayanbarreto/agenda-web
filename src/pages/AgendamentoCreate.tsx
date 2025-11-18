import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

function AgendamentoCreate() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.post("/agendamentos", {
        nome,
        servico,
        data,
        hora,
      });

      alert("Agendamento criado com sucesso!");
      navigate("/");
    } catch (error: any) {
      const msg = error.response?.data?.message ?? "Erro ao criar agendamento";
      alert(msg);
    }
  }

  function limparFormulario() {
    setNome("");
    setServico("");
    setData("");
    setHora("");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Novo Agendamento</h1>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3 max-w-xl">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 block w-full"
        />

        <input
          type="text"
          placeholder="Serviço"
          value={servico}
          onChange={(e) => setServico(e.target.value)}
          className="border p-2 block w-full"
        />

        <input
          type="text"
          placeholder="Data (dd-mm-aaaa)"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="border p-2 block w-full"
        />

        <input
          type="text"
          placeholder="Hora (hh:mm)"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="border p-2 block w-full"
        />
        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded
                transition
                hover:bg-green-500       
                active:bg-green-600      
                active:scale-95   "
          >
            Salvar
          </button>

          <button
            type="button"
            onClick={limparFormulario}
            className="
          bg-gray-400
          text-white
          px-4
          py-2
          rounded
          transition
          hover:bg-gray-500       
          active:bg-gray-600      
          active:scale-95        
          "
          >
            Limpar formulário
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgendamentoCreate;
