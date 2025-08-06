import React, { useState, useEffect } from 'react';

const Login = () => {
  // Estado para alternar entre email e telefone
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  
  // Estados para os campos do formulário
  const [credential, setCredential] = useState(''); // Um estado para email ou telefone
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Novo estado para a mensagem de erro da credencial
  const [credentialError, setCredentialError] = useState('');

  // Efeito para validar a credencial (email/telefone) em tempo real
  useEffect(() => {
    if (credential.length === 0) {
      setCredentialError('');
      return;
    }

    if (loginMethod === 'email') {
      // Validação simples de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(credential)) {
        setCredentialError('Por favor, insira um e-mail válido.');
      } else {
        setCredentialError('');
      }
    } else { // loginMethod === 'phone'
      // Validação simples de telefone (apenas números)
      const phoneRegex = /^[0-9]+$/;
      if (!phoneRegex.test(credential)) {
        setCredentialError('Por favor, insira apenas números.');
      } else {
        setCredentialError('');
      }
    }
  }, [credential, loginMethod]);

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (credentialError) {
      alert("Por favor, corrija os erros no formulário.");
      return;
    }

    if (!agreedToTerms) {
      alert("Você precisa concordar com os Termos e Condições.");
      return;
    }

    console.log({ loginMethod, credential, password });
    alert("Login enviado com sucesso!");
  };

  return (
    <div className="flex min-h-screen">
      {/* LADO ESQUERDO: IMAGEM */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/sua-imagem.jpg')" }}></div>

      {/* LADO DIREITO: FORMULÁRIO */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Bem Vindo</h2>

          <div className="flex justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => { setLoginMethod('email'); setCredential(''); }}
              className={`px-4 py-2 border rounded-md w-24 text-sm ${
                loginMethod === 'email' ? 'bg-black text-white' : 'bg-white text-black border-gray-300'
              }`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => { setLoginMethod('phone'); setCredential(''); }}
              className={`px-4 py-2 border rounded-md w-24 text-sm ${
                loginMethod === 'phone' ? 'bg-black text-white' : 'bg-white text-black border-gray-300'
              }`}
            >
              Phone
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">
                {loginMethod === 'email' ? 'Email' : 'Telefone'}
              </label>
              <input
                type={loginMethod === 'email' ? 'email' : 'tel'}
                placeholder={loginMethod === 'email' ? 'SeuNome@email.com' : '(00) 00000-0000'}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
              {/* Exibe a mensagem de erro da credencial */}
              {credentialError && <p className="text-red-500 text-xs mt-1">{credentialError}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1">Senha</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center text-sm">
              <input 
                type="checkbox" 
                className="mr-2" 
                id="termos"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label htmlFor="termos">Concordo com os Termos e Condições e a Política de Privacidade</label>
            </div>

            <button type="submit" className="w-full bg-black text-white py-2 rounded-md font-semibold text-sm">
              Entrar
            </button>

            <div className="text-sm text-center">
              Não tem uma conta? <a href="/signup" className="font-semibold underline">Inscreva-se</a>
            </div>

            <div className="text-sm text-center">
              <a href="#" className="text-gray-700 underline">Continuar como convidado</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;