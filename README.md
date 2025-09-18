# RD Cosméticos – Sistema de Gestão de Produtos

Este projeto é um **sistema de gerenciamento de produtos de cosméticos** desenvolvido em **TypeScript**, rodando em ambiente **Node.js**.  
Ele simula o controle de estoque de uma loja, permitindo **cadastrar, listar, buscar, atualizar e excluir produtos** de diferentes categorias (capilar, corporal e facial).

---

# Funcionalidades

- 📦 **Cadastrar novos produtos** (Capilar, Corporal e Facial)  
- 📋 **Listar todos os produtos em estoque**  
- 🔍 **Buscar produto por ID**  
- ✏️ **Atualizar informações de um produto existente**  
- ❌ **Excluir produtos**  
- 🖥️ **Interface via terminal (console)** com interação por menus

---

# Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [readline-sync](https://www.npmjs.com/package/readline-sync) – para entrada de dados no terminal  

---

# Estrutura do Projeto

```
.
├── src
│   ├── controller
│   │   └── ProdutoController.ts
│   ├── model
│   │   ├── Produto.ts
│   │   ├── ProdutoCapilar.ts
│   │   ├── ProdutoCorporal.ts
│   │   └── ProdutoFacial.ts
│   └── util
│       └── Colors.ts
├── Menu.ts
└── package.json
```

---

## ▶️ Como Executar

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/rd-cosmeticos.git
cd rd-cosmeticos
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Compile o TypeScript
```bash
npx tsc
```

### 4. Execute o sistema
```bash
node Menu.js
```

---

## 📑 Menu Principal

```
*****************************************************
                     RD Cosméticos
*****************************************************

 1 - Cadastrar novo produto
 2 - Listar todos os produtos em estoque
 3 - Buscar produto
 4 - Atualizar dados do produto
 5 - Excluir produto
 6 - Sair
```

---

## 👩‍💻 Autor

Projeto desenvolvido por **Dandara Nascimento**  
📧 E-mail: dandaran@genstudents.org  
🌐 GitHub: [dan-olivnas](https://github.com/dan-olivnas/projeto-javaScript)  
