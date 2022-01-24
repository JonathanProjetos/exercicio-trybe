/*                UNIX BASH PART 2
IMPUT OUTPUT
 cat = comando sem atribuir o arquivo alvo ele abre uma janela para adição de dados
 cat > frutas.txt = cria o arquivo e adiciona dados nele."CUIDADO caso o arquivo informado já tenha dados eles serão substituidos" 
 cat >> frutas.txt = adiciona mais dado no aquivo nomeado.
 comando CTRL+D fecha a interface do cat.
 cat frutas.txt cores.txt > lista.txt = Pega arquivo1 + arquivo2 e cria um arquivo novo com a soma dos dois que seria lista.txt.
 sort < cores.txt = comando para organizar conteúdo interno em ordem alfabetica pegando a referencia da prinmeira letra."<" mostra a previa da modificação ">" gera a modificação no arquivo.
 sort < cores.txt > coresOrdenadas.txt = primeira parte gera a mudança e após > voçe define um novo arquivo para receber a alteração.
 who = mostra as pessoas que tem acesso para usar este terminal
 who | sort = Toda a informação que e passada pelo primeiro comando e organizada no sort ex: who passa a informação para o sort e ele organiza em ordem alfabetica.
 who | wc-l = A informação que e passada pelo primeiro comando complementa opelo segundo ex: who passa a informação para o wc -l e ele  mostra a quantidade de pessoas que utiliza o sistema.

 O | canaliza a saída do primeiro comando para a entrada do segundo,
# dessa forma conseguimos realizar comandos de forma sucessiva

# Considere que queremos uma lista com todos os nomes que contenham
# a letra "F" e que nosso resultado esteja em ordem alfabética
# Para isso podemos realizar o comando abaixo

grep F nomes.txt | sort
# Resultado
Fabiano
Fernanda

PERMIÇOES DE ACESSO
ex:  -rw-rw-r--

r = permissão de leitura
w = voce tem permissão para editar aquele arquivo.
x = permite vc acessar o arquivo pelo comando "cd".
- = No inicio siginifica que o arquivo e comum.
D = No inicio significa que o arquivo e um diretorio.

ex: -rw-rw-r--   
(-)se o arquivo for comum ou diretorio - ou d 
(rw-)definição para o usuario 
(rw-)definição para o grupo 
(r--) definição para outros grupos.

usando o comando chmod ? + arquivo

u = altera permissão somente para o usuário.
g = altera somente para o grupo.
o = altera para outros grupos
a =  altera para todos

utilizando +- adiciona ou remove permissão exp: chmod u-rw arquivo.txt
na posição usuário sera removido a leitura e escritra. 
-rw-rw-r-- para ----rw-r--
exp: chmod u+rw arquivo.txt
na posição usuário sera adicionado a leitura e escritra.
----rw-r-- para -rw-rw-r--


  Permissões | Links  | Proprietário | Grupo | Tamanho | Data e Hora   | Nome
  -----------|--------|--------------|-------|---------|---------------|---------
  drwxr-xr-x | 2      | root         | root  | 4096    | Out 19 09:10  | composer/


Permissões => É possível verificar o tipo do item e nível de permissão para Leitura, Escrita e Execução de item ou diretório;
Links => Número de ligações que o item possui, no caso do diretório, número de subdiretórios que possui;
Proprietário => Quem é a pessoa dona, quem criou. É o diretório padrão da pessoa usuária, o home;
Grupo => Grupo ao qual pertence o item ou diretório. Utilizado para dar permissões à outras pessoas;
Tamanho => Em Bytes;
Data e Hora => Momento em que foi criado ou última modificação;
Nome => Nome do item ou diretório;


Esses valores são permissões com base em bits de ligados = 1 e desligados = 0 ,

rwx = 111 ( 7 | Acesso Total )
r-- = 100 ( 4 | Somente Leitura )
-w- = 010 ( 2 | Somente Escrita )
--x = 001 ( 1 | Somente Execução )
rw- = 110 ( 6 | Somente Leitura e Escrita )
r-x = 101 ( 5 | Somente Leitura e Execução )
-wx = 011 ( 3 | Somente Escrita e Execução )
--- = 000 ( 0 | Todos Acessos Negados )


PROCESSOS

ps = abre a interface que mostra os processos.
jobs = mostras os processos em execução.
& =  após definir o nome do processo e valor "&" coloca o processo em background e recebe uma posição e id 
fg % = comando para reiniciar o processo após o % + 1 para identificar a posição do processo. 
CRTL+C = durante a execução do processo fora do background ele suspende o processo. 
bg = continua rodando o processo."tira do momento suspenso"
CTRL+Z = durante a execução do processo fora do background ele coloca o processo em parado.
find = utilizando somente o comando find ele buscará todos os diretorios e arquivos dentro desta seção. 
find . -name "*.txt" = pesquisar arquivos com a extenção .txt.
find . -type d = pesquisa por todos os diretórios.
find . -type f = pesquisa por todos os arquivos.
find ./test -name "exemplo*"
history = mostra todos os comando feito por voce durate todo o tempo.
history | tail = pode utilizar o comando junto do | para adiciona mais uma condição em sequencia.
echo = O `echo` é um comando utilizado em scripts ou no terminal para exibir mensagens na tela ou em um arquivo.
echo "isso e uma condição a mais que coloquei dentro do arquivo" > arquivo.txt = comando que possibilita adicionar ou substituir texto que já está dentro do arquivo.
echo "isso e outra condição a mais que coloquei dentro do arquivo" >> arquivo.txt = comando que possibilita adicionar mais coisas dentro do arquivo.




*/