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
- Renderização inicial no servidor utilizando **Server Side Rendering (SSR)**

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
- Produtos da API externa são renderizados utilizando **Static Site Generation (SSG)**, com fallback dinâmico quando necessário

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

Exemplo de URL:

```
/?source=generator&category=Clothes
```

---

## 🧠 Arquitetura de Backend (API Interna)

Foi criada uma **API interna** utilizando o App Router do Next.js.

### Endpoints principais:

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
- Manter SSR, SSG e Infinite Scroll funcionando de forma consistente

---

## ⚡ Performance e Qualidade

- Uso combinado de **SSR e SSG**, conforme a natureza da página
- **Lazy loading** de imagens com `next/image`
- Infinite scroll eficiente e progressivo
- Código desacoplado entre **Server Components** e **Client Components**
- Atenção a boas práticas relacionadas a **Core Web Vitals**

---

## ♿ Acessibilidade

- Uso de HTML semântico e componentes acessíveis do Shadcn/UI
- Navegação funcional por teclado (tabulação lógica)
- Labels associados a inputs
- Indicação de estado ativo em filtros (`aria-current`)
- Textos alternativos em imagens

---

## 🧪 Testes

- Testes unitários implementados com **Vitest**
- Cobertura abrangendo:

  - Componentes de UI
  - Componentes de domínio
  - Endpoints da API interna

- Relatório de cobertura gerado automaticamente
- Envio de coverage para **Qlty** via GitHub Actions

---

## 🤖 CI / CD

- Pipeline automatizado com **GitHub Actions**
- Execução automática de:

  - Instalação de dependências
  - Testes
  - Geração de coverage

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
- **Performance e acessibilidade**
- **Código limpo, testável e bem organizado**

Além dos requisitos solicitados, foram implementados diferenciais como:

- API interna
- Mock paginado infinito
- Alternância de fonte de dados
- Uso combinado de **SSR e SSG**

---

## 👨‍💻 Autor

Desenvolvido por **Jailton Cruz**
Desafio técnico — Frontend / Full Stack
