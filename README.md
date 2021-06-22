# Saude Mental

## Instalar
```
npm ci
```

### Rodar localmente
```
npm run serve
```

### Buildar o projeto
```
npm run build
```

## ℹ️ COMO SUBIR PARA O FIREBASE?
IMPORTANTE 1: Caso já tenha inicializado o Firebase CLI, pular para o passo 5.
IMPORTANTE 3: Caso já tenha o arquivo firebase.json e não tenha logado no Firebase CLI, pular os passos 3 e 4.

Passo 1 de 5 - Instale o Firebase CLI
```
npm install -g firebase-tool
```

Passo 2 de 5 - Logar com o Firebase CLI
```
firebase login
```
Utilizar a conta que tem acesso ao projeto que deseja subir

Passo 3 de 5 - Inicializar o Firebase CLI
```
firebase init
```
Selecionar a opção Hosting

Passo 4 de 5 - Selecionar projeto
Selecione um projeto existente

Passo 5 de 5 - Publicar projeto
Buildar o projeto e depois rodar o comando:
```
firebase deploy
```
