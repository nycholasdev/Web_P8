document.addEventListener('DOMContentLoaded', () => {
    const validarCep = (cep) => /^[0-9]{8}$/.test(cep);
  
    const buscarCep = async (cep) => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error('Erro na requisição!');
        const dados = await response.json();
  
        if (dados.erro) throw new Error('CEP não encontrado!');
        return dados;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
  
    const mostrarResultado = (dados) => {
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `
        <strong>Resultado:</strong><br><br>
        <strong>CEP:</strong> ${dados.cep}<br>
        <strong>Logradouro:</strong> ${dados.logradouro}<br>
        <strong>Bairro:</strong> ${dados.bairro}<br>
        <strong>Cidade:</strong> ${dados.localidade}<br>
        <strong>Estado:</strong> ${dados.uf}
      `;
    };
  
    document.getElementById('buscarCep').addEventListener('click', async () => {
      const cep = document.getElementById('cepInput').value.trim();
      const resultado = document.getElementById('resultado');
  
      if (!validarCep(cep)) {
        resultado.textContent = 'CEP inválido. Deve conter 8 dígitos numéricos.';
        return;
      }
  
      resultado.textContent = 'Buscando...';
  
      try {
        const dados = await buscarCep(cep);
        mostrarResultado(dados);
      } catch (error) {
        resultado.textContent = error.message;
      }
    });
  });