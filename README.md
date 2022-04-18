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
  <li>Editor de texto (recomendo o <a href="https://code.visualstudio.com/download">VSCode</a>)</li>
  <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  <li>Insomnia ou Postman (utilizo <a href="https://insomnia.rest/download">Insomnia</a>)</li>
  <li><a href="https://www.npmjs.com/">NPM</a> ou <a href="https://yarnpkg.com/">Yarn</a></li>
</ul>

<h2 align="center">Resumo</h2>
<p>Com o auxílio dessa documentação, você vai conseguir fazer um CRUD utilizando NodeJS. <b>Não utilizaremos dados complexos ou externos de banco de dados e também não contaremos com uma arquitetura e estrutura organizada e planejada</b>, tudo será feito em um pequeno arquivo "index.js". O principal objetivo aqui é você entender os conceitos de um CRUD na prática.</p>

<h2 align="center">Qualquer dúvida você pode consultar aqui...</h2>
<h3>O que é API</h3>
<p>API é...</p>
<br>

<h3>O que é CRUD</h3>
<p>CRUD é...</p>
<br>

<h3>O que é Middleware</h3>
<p>Middleware é...</p>
<br>

<h3>O que é JSON</h3>
<p>JSON é...</p>
<br>

<h3>O que é e quais são os métodos HTTP</h3>
<p>HTTP é...</p>
<br>

<h3>Sobre NodeJS</h3>
<p>NodeJS é...</p>
<br>

<h3>Sobre Express</h3>
<p>Express é...</p>
<br>

<h3>Sobre Nodemom</h3>
<p>Nodemom é...</p>
<br>

<h3>Sobre Insomnia</h3>
<p>Insomnia é...</p>
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
