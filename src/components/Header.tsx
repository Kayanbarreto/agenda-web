import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-purple-600 text-white p-4 shadow-md">
      <nav className="max-w-4xl mx-auto flex gap-6">
        <Link
          to="/"
          className="hover:bg-purple-700 px-3 py-2 rounded transition"
        >
          Agendamentos
        </Link>

        <Link
          to="/novo"
          className="hover:bg-purple-700 px-3 py-2 rounded transition"
        >
          Novo Agendamento
        </Link>

      </nav>
    </header>
  );
}

export default Header;
