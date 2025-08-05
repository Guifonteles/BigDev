import Footerimage from "../../assets/footer.png";
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8 px-4 mt-10">

      <div>
        <img src= {Footerimage} alt="Logo" className="mx-auto mb-4" />

      </div>
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">Reserva<span className="font-bold">Mesa</span></h2>
        
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:underline">Serviços</a>
          <a href="#" className="hover:underline">Sobre Nós</a>
          <a href="#" className="hover:underline">Nosso Contato</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Entrar</a>
        </nav>

        <div className="flex justify-center space-x-6 text-xl mt-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        </div>

        <p className="text-xs text-gray-400 mt-4">TableBooky.com | All rights reserved</p>
      </div>
    </footer>
  );
}
