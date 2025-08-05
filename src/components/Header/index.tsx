export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Título */}
      <div className="text-lg font-medium">
        Bem Vindo ao <span className="font-bold">NomeApp</span>
      </div>

      {/* Navegação */}
      <nav className="flex items-center space-x-6">
        <a href="#" className="border-b-2 border-black pb-1">Home</a>
        <a href="#" className="hover:underline">Contate-nos</a>
        <a href="#" className="font-semibold hover:underline">Sair</a>

        {/* Divisor */}
        <div className="h-6 border-l border-black mx-2" />

        {/* Perfil */}
        <div className="flex items-center space-x-2">
          <span className="text-sm">Seu Nome</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" // Ícone temporário
            alt="Avatar"
            className="w-8 h-8 rounded-full bg-red-200"
          />
        </div>
      </nav>
    </header>
  );
}
