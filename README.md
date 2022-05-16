<p align="center">
  🖼️IMG CRUD🖼️
</p>
<h1 align="center">Seu primeiro CRUD com NodeJS</h1>
<p align="center">Aqui você vai aprender a desenvolver seu primeiro CRUD com NodeJS</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/AlencarLeo/my-first-crud?style=for-the-badge">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/AlencarLeo/my-first-crud?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AlencarLeo/my-first-crud?style=for-the-badge">
</p>
<p align="center">
  🖼️IMG OU VIDEO MOSTRANDO PROJETO🖼️
</p>

<h2>🧠 O que você vai utilizar</h2>
<ul>
  <li>JavaScript</li>
  <li>JSON</li>
  <li>NodeJS</li>
  <li>Express</li>
</ul>

<h2>⚙️ O que você vai precisar</h2>
<ul>
  <li>IDE (recomendo o <a href="https://code.visualstudio.com/download">VSCode</a>)</li>
  <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  <li>Insomnia ou Postman (utilizo <a href="https://insomnia.rest/download">Insomnia</a>)</li>
  <li><a href="https://www.npmjs.com/">NPM</a> ou <a href="https://yarnpkg.com/">Yarn</a></li>
</ul>

<h2 align="center">Resumo</h2>
<p>Com o auxílio dessa documentação, você vai conseguir fazer um CRUD utilizando NodeJS. <b>Não utilizaremos dados complexos ou externos de banco de dados e também não contaremos com uma arquitetura e estrutura organizada e planejada</b>, tudo será feito em um pequeno arquivo "index.js". O principal objetivo aqui é você entender os conceitos de um CRUD na prática.</p>

<h2 align="center">Qualquer dúvida você pode consultar aqui...</h2>
<h3>O que é API</h3>
<p>API significa Application Programming Interface, ou, em português, Interface de Programação de Aplicativos. Ela faz ponte de um sistema para outro, no qual será possível que um sistema compartilhe suas ações, ferramentas e entre outros, ou seja, eles se conversam. Agora falando no nosso caso, o que é um API REST? API REST é uma API como explicado anteriormente, porém ela utiliza o protocolo HTTP na versão 1.1, ele aceita novos métodos de comunicação como PUT, POST e DELETE, sendo assim possível construir APIs mais poderosas.</p>

<p align="center"><a href="https://www.instagram.com/p/CZvYe1ZNqSb/">Clique aqui e saiba mais de API</a></p>
<br>

<h3>O que é CRUD</h3>
<p>CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada. Básicamente são as quatro operações básicas para se trabalhar com dados.</p>
<ul>
  <li>Create - Cria um dado.</li>
  <li>Read - Lista um dado.</li>
  <li>Update - Atualiza um dado.</li>
  <li>Delete - Deleta um dado.</li>
</ul>
<br>

<h3>O que é Middleware</h3>
<p>Middleware é todo o tipo de função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente. Ou seja, ao usar o "GET", para listar uma informação por exemplo, podemos ter um função antes de executar a resposta dada a esse verbo que foi pedido, tendo uma condiçãoa para seguir, caso de "false", a listagem não será retornada.</p>
<br>

<h3>O que é JSON</h3>
<p>JSON significa JavaScript Object Notation. Ele se resume em um formato de representação de dados que é leve para troca de informações entre sistemas. Ele utiliza o formato de chave e valor, sendo o mais utilizado para APIs e arquivos de configurações. Fique tranquilo, se você é familiarizado com objetos em JavaScript, JSON não vai ser um problema para você. Aceita diversos tipos de dados: 
<ul>
  <li>Strings</li>
  <li>Numbers</li>
  <li>Arrays</li>
  <li>Objetos</li>
  <li>Null</li>
  <li>Boolean</li>
</ul>
<p align="center"><a href="https://www.instagram.com/p/CcYucwrPQRK/">Clique aqui e saiba mais de JSON</a></p>
</p>
<br>

<h3>O que é e quais são os métodos HTTP</h3>
<p>HTTP é um protocolo que define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Para cada ação temos diferentes "verbos", quais indicam a ação que será tomada. Para realizar esse CRUD, vamos usar:</p>
<ul>
  <li>
    GET - Esse verbo é um método qual solicita uma representação de recurso, ou seja, ela fará o "read" de nosso CRUD, pois vai retornar uma listagem ou apenas um recurso quando específicado junto com os <a href="">querys</a> da nossa <a href="">URI</a>.
  </li> 
  <li>
    POST - Será o verbo reponsável pelo "create" do nosso CRUD, ou seja, com ele será possível o envio de dados para ele.
  </li> 
  <li>
    PUT - Verbo que será utilizado para o "update" do CRUD. Com ele é possível enviar novos dados, assim atualizando o que desejamos com novas informações.
  </li>
  <li>
    DELETE - Como o próprio verbo já diz, esse método vai excluir o dado desejado, sendo assim ele o "delete" do nosso CRUD.
  </li> 
</ul>
<br>

<h3>Sobre NodeJS</h3>
<p>NodeJS pode ser definido como um ambiente de execução Javascript server-side. Isso significa é possível criar aplicações Javascript, sem depender de um browser para a execução, como estamos acostumados. Ele será uma ferramenta essêncial para a criação da nossa API, sendo possível acessar ela com o Front-End e se integrada com um banco de dados, criar uma super aplicação!</p>
<p align="center"><a href="https://www.instagram.com/p/CcYucwrPQRK/">Conheça myFit, meu super projeto</a></p>
<br>

<h3>Sobre Express</h3>
<p>Express é o framework mais popular de Node, que facilita o desenvolvimento de nossas aplicações. É uma biblioteca necessária para uma série de outros frameworks do Node. Ele oferece diversas soluções minimalistas, mas para realizar nosso CRUD, as funções utilizadas nele será para requisições de diferentes verbos HTTP para diferentes URIs, utilização de middlewares, configuração para controle do servidor, como porta utilizada para conexão e o controle de rotas com URIs.</p>
<br>

<h3>URL vs URI</h3>
<p>Abaixo você encontra uma imagem explicativa, para você entender visualmente essa diferença de termos, mas qualquer um vai te entender usando qualquer um dos termos.</p>
<p align="center">IMG URL VS URI<img src="" alt="url vs uri"/></p>
<p align="center"><a href="https://www.instagram.com/p/CcYucwrPQRK/">Curta esse post caso queira entender um pouco mais</a></p>
<br>

<h3>Sobre Nodemom</h3>
<p>Nodemom é...</p>
<br>

<h3>Sobre Insomnia</h3>
<p>Insomnia é uma ferramenta cliente para API REST, utilizado para testes de API, ou seja, com ele vamos testar e ver nosso CRUD acontecendo. Vamos usar essa ferramenta para organizar e vizualizar nossos métodos HTTP.</p>
<br>

<h3>Sobre NPM</h3>
<p>NPM é...</p>
<br>

<h1 align="center">🔥 Configurando o ambiente...</h1>
<h3>Configurando nosso cliente que vai consumir a API (aqui utilizei o <a href="https://insomnia.rest/download">Insomnia</a>)</h3>
<p>Para isso, basta abrir o Insomnia e criar 4 métodos HTTP, sendo eles: GET, POST, UPDATE e DELETE. Para todos utilizaremos a seguinte rota: <b>http://localhost:3000/clientes</b>. Isso significa que, estamos configurando em um ambiente local (sua máquina/seu ip, por isso utilizamos <b>"localhost"</b>), na porta <b>3000</b> e na rota <b>"clientes"</b>.</p>
<h3>Configurando NodeJS</h3>
<p>Configurando...<p>
<br>

<br>

<h1 align="center">🚀 Vamos para a prática!</h1>
<h3>Começando o projeto CRUD</h3>
<p>Após a instalação e a configuração do que foi pedido acima, vamos iniciar a parte prática de vez!<p>
<p>Crie uma pasta e abra em seu VSCode. Logo após com o atalho "CTRL + J", você vai abrir seu terminal diretamente do VSCode e no caminho da pasta aberta no IDE. Em seguida basta digitar <code>npm init</code>, com isso iniciamos nosso pacote, criando o arquivo package.json -esse arquivo contém toda configuração utilizada para determinar e configurar dependências do seu projeto, tais como os pacotes qual sua aplicação dependerá e scripts de automatização-.</p>
<br>
<p>GIF FAZENDO NPM INIT</p>
<br>
<p>Agora crie uma pasta "index.js" e instale as dependencias necessárias. Como faremos um CRUD simples utilizaremos na construção do projeto apenas o <a href="">Express.js</a> e o <a href="">nodemon</a>, sendo este último não obrigatório, ele vai facilitar o nosso desenvolvimento com a automação do nosso ambiente.</p>
<br>
<p>GIF MOSTRANDO INSTALAÇÂO DAS DEPENDENCIAS</p>
<br>
<p>Com essas dependencias instaladas, o packed.json criado no inicio e o arquivo index.js criado, sua pasta deverá estar desse jeito</p>
<br>
<p align="center">
  <img src="imgs/start-files.png" alt="estrutura de arquivos inicial">
</p>
<br>


<h3>Base do nosso projeto</h3>
<p align="center">
  <img src="imgs/img1.png" alt="estrutura de arquivos inicial">
</p>
<p>Para você entender melhor o que está acontecendo aqui, explicarei linha a linha o projeto por inteiro.</p>
<p><code>const express = require('express')</code> -> Importa o framework que instalamos;</p>
<p><code>const app = express()</code> -> Adiciona todos seus recursos na variável "app";</p>
<p><code>app.use(express.json())</code> -> Indica para nossa variável app que contem os recursos do framework, usar o middleware "json()", qual vai facilitar a interpretação desses objetos;</p>
<p><code>let users = []</code> -> Uma array de objetos que criamos para representar nosso banco de dados, nela que vamos realizar nosso CRUD. Lembrando que as modificações não são permanentes, ela reseta com a finalização de nosso servidor (ao fechar o programa);</p>
<p><code>app.listen(3000)</code> -> Todo nosso códi terá que ficar antes dessa linha, indiquei com o comentário "CRUD" o local que todo nosso CRUD vai ocorrer, essa linha é responsável de dizer que nosso servidor utilizará a porta 3000, com isso nossa url para acessálo via browser ou pelo cliente REST será: <b>https://localhost:3000></b>;</p>

<br>



<h3>👀 READ</h3>
<p>Vamos iniciar nosso CRUD construindo o método que vai permitir que você vizualise os dados de sua API.<p>
<br>
  
<h3>➕ CREATE</h3>
<p>Vamos iniciar nosso CRUD construindo o método que vai permitir que você vizualise os dados de sua API.<p>
<br>
  
<h3>✏️ UPDATE</h3>
<p>Vamos iniciar nosso CRUD construindo o método que vai permitir que você vizualise os dados de sua API.<p>
<br>
  
<h3>❌ DELETE</h3>
<p>Vamos iniciar nosso CRUD construindo o método que vai permitir que você vizualise os dados de sua API.<p>
<br>

<h2 align="center">❤️developed with love by Leonardo Alencar❤️</h2>
<p><b>FOLLOW ME!</b></p>

<p align="center">
  <a href="https://www.instagram.com/la.codes/">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
  </a>
  
  <a href="https://www.linkedin.com/in/leonardo-alencar-5749aa1b0/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
  
  <a href="https://github.com/AlencarLeo">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  </a>
</p>

<p align="right">LA | Leonardo Alencar.</p>
