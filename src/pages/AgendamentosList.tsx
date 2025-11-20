import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Agendamento {
  id: number;
  nome: string;
  servico: string;
  data: string;
  hora: string;
}

function AgendamentosList() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [mensagem, setMensagem] = useState<string | null>(null);

  async function carregarAgendamentos() {
    try {
      setMensagem(null);
      const response = await api.get("/agendamentos");
      setAgendamentos(response.data);
    } catch {
      setMensagem("Erro ao carregar agendamentos.");
    } finally {
      setLoading(false);
    }
  }

  async function buscarAutomatico(valor: string) {
    const termo = valor.trim();
    setMensagem(null);

    if (!termo) {
      carregarAgendamentos();
      return;
    }

    const ehNumero = /^\d+$/.test(termo);

    try {
      if (ehNumero) {
        const response = await api.get(`/agendamentos/${termo}`);
        setAgendamentos([response.data]);
      } else {
        const response = await api.get("/agendamentos", {
          params: { nome: termo },
        });
        setAgendamentos(response.data);

        if (response.data.length === 0) {
          setMensagem("Nenhum agendamento encontrado para esse nome.");
        }
      }
    } catch (error: any) {
      setAgendamentos([]);
      const status = error?.response?.status;
      if (status === 404) {
        setMensagem("Agendamento não encontrado.");
      } else {
        setMensagem("Erro ao buscar agendamento.");
      }
    }
  }

  async function deletarAgendamento(id: number) {
    const confirmar = confirm("Tem certeza que deseja excluir este agendamento?");
    if (!confirmar) return;

    try {
      await api.delete(`/agendamentos/${id}`);
      alert("Agendamento excluído com sucesso!");
      carregarAgendamentos();
    } catch {
      alert("Erro ao excluir agendamento.");
    }
  }

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agendamentos</h1>

      {/* Campo único de busca */}
      <div className="mb-6 p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Buscar</h2>
        <p className="text-sm text-gray-500 mb-2">
          Digite um <strong>ID</strong> ou <strong>parte do nome</strong>.
        </p>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="border p-2 w-72"
            value={searchTerm}
            onChange={(e) => {
              const valor = e.target.value;
              setSearchTerm(valor);
              buscarAutomatico(valor); 
            }}
          />

          <button
            onClick={() => {
              setSearchTerm("");
              setMensagem(null);
              carregarAgendamentos();
            }}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Limpar
          </button>
        </div>

        {mensagem && <p className="text-red-600 mt-2">{mensagem}</p>}
      </div>

      {/* Lista */}
      <h2 className="text-xl font-semibold mb-2">Resultados</h2>

      {agendamentos.length === 0 && !mensagem && (
        <p className="text-gray-500">Nenhum agendamento encontrado.</p>
      )}

      <ul className="space-y-4">
        {agendamentos.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow-sm bg-white">
            <p><strong>Id:</strong> {item.id}</p>
            <p><strong>Nome:</strong> {item.nome}</p>
            <p><strong>Serviço:</strong> {item.servico}</p>
            <p><strong>Data:</strong> {item.data}</p>
            <p><strong>Hora:</strong> {item.hora}</p>

            <button
              className="mt-3 bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => deletarAgendamento(item.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgendamentosList;
