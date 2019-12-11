﻿# ChallengeLeve

Esta pasta contém uma aplicação que envolve pessoas e cursos. Foi construído para tal uma Api em NodeJS e para o frontend foi usado Angular
<br>Como se sabe, a linguagem mundial é o inglês, portanto os nomes foram passados para os seus respectivos correspondentes em inglês.
<br>Também foi realizado uma modelagem mais abrangente desse caso, adicionando também alunos, professores, turmas e disciplinas para manter um pouco mais completo. O diagrama EER ficou assim: 

![Diagram](https://github.com/Kimbellyf/challengeLeve/blob/master/pngchallengediagram.png)
<br>
<br>
O script do banco de dados está no próprio repositório <a href="https://github.com/Kimbellyf/challengeLeve/blob/master/challengeScript.sql">esse</a>

<br>
Para facilitar o povoamento de cursos o seguinte exemplo é aceito:

<strong>insert into course (name) values
("sistemas");</strong>

<br>

<br>Depois de clonado o repositório:
<h5><strong>Instruções: </strong></h5>
<br>
<ul>
    <li>1. Execute o script MySQL <a href="https://github.com/Kimbellyf/challengeLeve/blob/master/challengeScript.sql">aqui</a> e abra a conexão no MySQL WorkBench</li>
    <li>2. Altere as configurações do banco no backend</li>
    <li>3. Entre na pasta backend da aplicação e execute o código <strong>npm start</strong></li>
    <li>4. Deixe o backend executando e execute agora o client(frontendangular) entrando na pasta frontendangular e executando <strong>ng serve-open</strong></li>
    <li>5. Abra a porta aberta pelo frontend no navegador e comece os testes</li>
</ul>
<br>
<br>
<h2>Rotas API : GET/POST/ </h2>
<br>
<ol>
    <li>localhost:3000/person/</li>
    <li>localhost:3000/course/</li>
<ol>
<br>
<br>





