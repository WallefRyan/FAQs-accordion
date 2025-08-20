

# FAQ Accordion

## Descrição

Este projeto implementa um **accordion de FAQ (Frequently Asked Questions)** com HTML, CSS e JavaScript puro.
O objetivo é permitir que os usuários cliquem em perguntas para exibir ou ocultar respostas de forma interativa. Além disso, apenas um item é aberto por vez, garantindo uma interface limpa e organizada.

O design é responsivo, utilizando fontes do Google Fonts e efeitos visuais simples, como mudança de cor ao passar o mouse e troca de ícones (`+` e `-`) indicando o estado do item.

---

## Funcionalidades

* Mostrar/ocultar a resposta ao clicar na pergunta.
* Apenas um FAQ aberto por vez (fechamento automático dos outros itens).
* Troca do ícone entre `+` e `-` conforme o item é aberto ou fechado.
* Efeito de hover nas perguntas para melhor experiência do usuário.
* Layout responsivo e centralizado na tela.

---

## Tecnologias Utilizadas

* **HTML5** – estrutura do conteúdo.
* **CSS3** – estilização, layout flexbox e efeitos visuais.
* **JavaScript (Vanilla JS)** – interatividade e lógica do accordion.
* **Google Fonts** – fonte "Work Sans".

---

## Estrutura de Pastas

```
/projeto-faq
│
├─ /src
│  ├─ /css
│  │   └─ index.css
│  ├─ /js
│  │   └─ index.js
│  └─ /img
│      ├─ icon-plus.svg
│      ├─ icon-minus.svg
│      └─ icon-star.svg
│
└─ index.html
```

---

## Como Usar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Clique nas perguntas para abrir ou fechar as respostas.

---

## Explicação do Código JavaScript

```js
document.querySelectorAll('.item').forEach(item => {
  const btn = item.querySelector('.btn');
  const descricao = item.querySelector('.descricao');
  const icon = item.querySelector('img');

  btn.addEventListener('click', () => {
    // Fecha todos os outros itens
    document.querySelectorAll('.item').forEach(i => {
      if (i === item) return; // pula o item atual
      const d = i.querySelector('.descricao');
      const img = i.querySelector('img');
      if (d) d.style.display = 'none';
      if (img) img.src = 'src/img/icon-plus.svg';
    });

    // Alterna o item atual
    const isOpen = getComputedStyle(descricao).display === 'block';
    descricao.style.display = isOpen ? 'none' : 'block';
    icon.src = isOpen ? 'src/img/icon-plus.svg' : 'src/img/icon-minus.svg';
  });
});
```

**Como funciona:**

1. Seleciona todos os itens do FAQ (`.item`).
2. Para cada item, captura a pergunta (`.btn`), a resposta (`.descricao`) e o ícone (`img`).
3. Adiciona um evento de clique no botão:

   * Fecha todos os outros itens.
   * Alterna o display da resposta do item clicado (`block`/`none`).
   * Troca o ícone (`+`/`-`) conforme o estado do item.

---

## Estilização CSS

* `.container` – caixa centralizada com sombra e borda arredondada.
* `.header` – exibe o ícone e título das FAQs.
* `.accordion` – organiza os itens em coluna.
* `.btn` – estilo do botão com cursor pointer e espaçamento.
* `.descricao` – inicialmente oculta (`display: none`).
* Hover nos botões altera a cor do texto.

---

## Observações

* A página é **responsiva** e deve funcionar bem em desktops e dispositivos móveis.
* Ícones devem estar na pasta `/src/img` para que a troca de `+` e `-` funcione corretamente.
* É possível adicionar quantos itens quiser, apenas replicando a estrutura `.item` dentro do `<nav class="accordion">`.

---

