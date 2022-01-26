 /*                           Internet - Entendendo como ela funciona
 
                              Minhas Anotações de conceitos de Internet.

 
IP = significa Internet Protocol ou protocolo de internet e a identificação da maqui ou qualquer equipamento
quando conectado a rede de internet.
TCP = significa Transmission Control Protocol (Protocolo de Controle de Transmissão)será responsável 
por definir como diferentes aplicações se comunicam na rede e também em como os dados enviados serão divididos em pacotes
ISP = internet service provider e o provedor de internet.
DNS = DNS ou Domain Name System é um dispositivo com uma base de dados distribuída que gerencia os 
nomes de serviços, computadores ou qualquer dispositivo conectado à Internet. Ele é usado para relacionar 
o endereço nominal (google.com) com o endereço IP. Os servidores DNS são responsáveis por localizar e traduzir para números 
(um endereço IP) as buscas por sites que digitamos no navegador.
Port Number = forma de se conectar ao servidor por um caminho especifico.
HOST = e qualquer componente conectado a rede  e o termo não pode ser associado a servidor porque o hosta será aquilo
em evidência.
HTTP =  Hyper-text Transfer Protocol e o protocolo para comunicação entre navegadores e servidores da internet.
URL = O URL é a sigla para Uniform Resource Locators e identifica um recurso web específico. Podemos, como exemplo 
mudar a nossa busca para https://www.google.com/travel/flights para pesquisar por preços de passagens aéreas. 
O URL identifica o protocolo que será utilizado para comunicarmos com o servidor (https), o nome do host (google.com) 
e o recurso que queremos acessar (travel/flights).
HTML = hyper text markup language. Permite confugurar a estrutura fisica da pagina web.
exp:<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <header>
    <h1>Minha página Web!</h1>
  </header>
  <p>Bem vindos! Essa é a estrutura básica da minha primeira página</p>
  <ul>O que estou aprendendo:
    <li>Git & GitHub</li>
    <li>Internet</li>
    <li>Shell</li>
  </ul>
</body>
</html>
CSS =  Cascading Style Sheets O CSS é uma linguagem que te permite descrever como os elementos definidos pelo HTML devem ser estilizados.
O CSS te permite alterar a fonte, a cor, o tamanho e até mesmo incluir recursos como animações e áudio.
ex:
body {
  background-color: blue;
}

h1 {
  color: purple;
  font-size: large;
}

p {
  color: green;
  font-weight: bold;
}

h2 {
  color: red;
  border: 3px solid black;
}
JavaScript = torna o site dinamico podendo realizar compras filtra visualizações filtra itens pagar e entre outras
ex de como o javascript funciona nos bastidores.
 // Limpar o leitor com um click duplo
const clearButton = document.querySelector('.limpar');
clearButton.addEventListener('dblclick', function () {
  inputResultado.value = "";
});
Balanceamento de carga = é um termo genérico para uma série de algoritmos que distribuem as requisições para o servidor 
 ping site
 traceroute site
 nslookup site
 
 
 
 
 
 
 
 
 
 
 */