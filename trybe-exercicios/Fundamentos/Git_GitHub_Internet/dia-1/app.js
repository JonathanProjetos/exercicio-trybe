/*                 GIT  &  GITHUB

Update check-out = comandos que podem ser utilizador para atualizar os arquivos no servidor.
classificação controle de versão = centralizados, distribuídos.

Centralizados = trabalha com servidor local e diversas areas de trabalho, baeado na arquitetura cliente - servidor
areas de traba passa pelo servidor para se comunicar exp;  subversion

Distribuidos =  mais utilizado para empresas e unidades de varias filiais. E atráves do modo distribuido cada área
de trabalho e um servido que poderá ser feito os check-in e check-out e possibilita as áres de trabalho trabalhar entre si

A comunicação entre o servidor principal e as áreas de trabalho funciona com outras duas operações,
para atualizar e mesclar o projeto, chamadas de pull e push (puxar e empurrar).
  

pull: Com esta operação é possível pegar a versão de outra área de trabalho e mesclar com a sua.
push: Com esta operação temos o processo inverso do pull, ou seja, enviando para outra área a sua versão do projeto.

Breaches = e uma vesão independente do seu codico
Breach Master = breanch principal e ae versão que  está hospedada e a vai ser tranmitida ou colocar no ar.
merge = e quando pegamos as alterações de breaches e junta todas  a breach master exp: breach master + breach feature;


            AUTENTICAÇÃO

*SSH ou Secure Shell : é um protocolo de criptografia de rede que serve para transferir dados de forma segura mesmo em 
redes inseguras. Usando o protocolo SSH, você pode se conectar ao GitHub sem precisar digitar seu nome e chave de acesso pessoal a cada comando executado.
*HTTPS ou Hypertext Transfer Protocol Secure : é uma extensão do protocolo de internet HTTP ( você verá mais sobre esse protocolo no dia de conteúdo que
trata sobre internet! ) que utiliza certificados digitais para autenticar os dados e permitir que eles sejam criptografados de forma segura.

                 GIT
git status = retorna como está o repositório status                  
git add . = adiciona todos os arquivos modificados.
git add "arquivo" = pode adicionar arquivo especifico.
git commit -m "mensagem sobre a alteração feita"
git config --global user.name "Seu nome" comando para 
git config --global user.email seuemail@exemplo.br
git config --global core.editor "code --wait" = Esse comando define o editor do .gitconfig como o VS Code , que é o editor que você usará ao longo curso. 
Caso queira abrir o arquivo de configuração no VS Code basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo .gitconfig está localizado.
code .gitconfig = comando para usar dentro co terminal do VsCode.
git --version = comando para saber a versão do git instalada.
git config --list = lista os dados da conta do usuario cadastrado git.
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com" = cria uma senha aleatoria para usos de acesso no github.
eval "$(ssh-agent -s)" = iniciar o porteiro.
ssh-add ~/.ssh/id_rsa = adiciona a chave criada ao porteiro.
sudo apt-get install xclip = comando para o terminal para instalar o xclip.
xclip -sel clip < canho do arquivo = ele copia os dados de dentro do arquivo para outro de destino.
main =  projeto principal
guit branch = remove o item que está sendo trabalhado.
guit log = mostra o resumo do que ja foi feito.
guit commit -m = realiza uma mensagem referente ao que foi feito.

*/