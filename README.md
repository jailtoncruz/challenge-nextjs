# 🛍️ Product Listing App — Desafio Técnico Stefanini - NextJS

<div align="center">

[![Maintainability](https://qlty.sh/gh/jailtoncruz/projects/challenge-nextjs/maintainability.svg)](https://qlty.sh/gh/jailtoncruz/projects/challenge-nextjs)
[![Code Coverage](https://qlty.sh/gh/jailtoncruz/projects/challenge-nextjs/coverage.svg)](https://qlty.sh/gh/jailtoncruz/projects/challenge-nextjs)

</div>

Aplicação desenvolvida em **Next.js (App Router)** para listagem e visualização de produtos, consumindo uma **API pública** e também um **backend mock paginado**, com foco em **performance, arquitetura limpa e experiência do usuário**.

O projeto foi pensado para simular um **cenário real de produção**, indo além do mínimo solicitado no desafio.

[Acessar aplicação](https://challenge-nextjs.tomcruz.dev)

---

## 🚀 Tecnologias Utilizadas

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Shadcn/UI** (Design System)
- **Vitest** (testes unitários)
- **Docker**
- **GitHub Actions** (CI)
- **Qlty** (coverage)

---

## 🎯 Funcionalidades Implementadas

### 📦 Listagem de Produtos

- Exibição de produtos em formato de **cards**
- Informações principais:
  - Imagem
  - Título
  - Preço
- Layout totalmente **responsivo**
- Renderização inicial com **SSR / SSG**

---

### 🔍 Detalhes do Produto

- Página dedicada para visualização de um produto
- Informações exibidas:
  - Título
  - Descrição
  - Preço
  - Categoria
  - Galeria de imagens
- Funciona com **links diretos (deep link)** e refresh da página

---

### 🧭 Filtro por Categoria

- Filtro de produtos por categoria
- Estado controlado via **query params**
- URLs compartilháveis, por exemplo:

```
/?category=Electronics

```

---

### ♾️ Infinite Scroll com Paginação

- Scroll infinito com **paginação real**
- Primeira página renderizada no **servidor (SSR)**
- Próximas páginas carregadas sob demanda no client
- Implementado com **IntersectionObserver**
- Comportamento semelhante a e-commerces reais

---

### 🔄 Alternância de Fonte de Dados (Diferencial)

O projeto suporta **duas fontes de dados**, controladas por um seletor na interface:

1. **API Real**

- Fonte: [https://api.escuelajs.co](https://api.escuelajs.co)
- Consumo via API interna do projeto

2. **Mock Generator (Infinito)**

- Backend fake implementado no servidor
- Geração determinística de produtos por ID
- Paginação infinita simulando um backend real

O usuário pode alternar entre as fontes diretamente na UI.

Exemplo de URL:

```

/?source=generator&category=Clothes

```

---

### 🧠 Arquitetura de Backend (API Interna)

Foi criada uma **API interna** utilizando o App Router do Next.js:

#### Endpoints principais:

- `GET /api/products`

  - Parâmetros:
    - `page`
    - `limit`
    - `category`
    - `source` (`api` | `generator`)

- `GET /api/products/[id]`
  - Parâmetros:
    - `source` (`api` | `generator`)

Essa abordagem permite:

- Centralizar a lógica de dados
- Alternar facilmente entre backend real e mock
- Manter SSR e Infinite Scroll funcionando corretamente

---

## ⚡ Performance e Qualidade

- **SSR / SSG** para carregamento rápido
- **Lazy loading** de imagens
- Infinite scroll eficiente
- Normalização e fallback de imagens inválidas
- Código desacoplado entre Server e Client Components

---

## ♿ Acessibilidade

- Uso de componentes acessíveis do Shadcn/UI
- Estrutura semântica
- Navegação funcional por teclado
- Labels e textos adequados para leitores de tela

---

## 🧪 Testes

- Testes unitários com **Vitest**
- Ambiente configurado para Next.js
- Relatório de cobertura gerado automaticamente
- Envio de coverage para **Qlty** via GitHub Actions

---

## 🤖 CI / CD

- Pipeline com **GitHub Actions**
- Execução automática de:
  - Instalação
  - Testes
  - Coverage
- Projeto preparado para deploy contínuo

---

## 🐳 Docker

O projeto pode ser executado via Docker:

```bash
docker build -t product-listing-app .
docker run -p 3000:3000 product-listing-app
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

---

## 📝 Observações Finais

Este projeto foi desenvolvido com foco em:

- **Arquitetura escalável**
- **Boas práticas de frontend moderno**
- **Simulação de cenários reais de produção**
- **Código limpo e bem organizado**

Vários diferenciais foram implementados além do solicitado, como:

- API interna
- Mock paginado infinito
- Alternância de fonte de dados
- SSR + Infinite Scroll combinados

---

## 👨‍💻 Autor

Desenvolvido por **Jailton Cruz**
Desafio técnico — Frontend / Full Stack
