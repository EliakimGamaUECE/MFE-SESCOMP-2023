# MFE-SESCOMP-2023

Passo a passo
npm install --global yarn
Criar o ROOT (npx create-single-spa)
Mostrar as estrutura do ROOT (Index.ejs e mfe-root-config.ts)
Entrar na pasta do ROOT e startar (yarn start)
Abrir o ROOT na porta 9000
Renomear o terminal ROOT
Copiar as dependências do react
—-------------------------------------------------------------
Criar o Microfrontend NAVBAR (React)
Mostrar a estrutura do NAVBAR
Entrar na pasta NAVBAR e startar (yarn start) 8080
Renomear o terminal NAVBAR
Configurar navbar no root (Mudar apelidos e mudar ativação para () => true
—-------------------------------------------------------------
Criar o Microfrontend FOOTER (React)
Entrar na pasta FOOTER e startar (yarn start) 8081
Renomear o terminal FOOTER
Configurar footer no root (Mudar apelidos e mudar ativação para () => true
—-------------------------------------------------------------
Criar o Microfrontend APP1 (React) 8082
Entrar na pasta APP1 e startar (yarn start)
Renomear o terminal APP1
Configurar app1 no root (Mudar apelidos e mudar ativação para [“/app1”]
—-------------------------------------------------------------
Criar o Microfrontend APP2 (React) 8083
Entrar na pasta APP2 e startar (yarn start)
Renomear o terminal APP2
Configurar app2 no root (Mudar apelidos e mudar ativação para [“/app2”]
—-------------------------------------------------------------
Parar as aplicações
Instalar o @material, abrir o site (yarn add @material-ui/core)
Copiar dependência geral do @material ( "@material-ui/core":https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js)
Criar APP.tsx dentro da NAVBAR, FOOTER, APP1 e APP2
Pegar o código no GitHub
Colar o código APP.tsx 
No root.component das aplicações (Fazer o import do “import SimpleTabs from "./app";”)
Mudar o return “SimpleTabs()”
STARTAR TODOS OS APPS NOVAMENTE
