
# FAQ Accordion - Style Guide

## 1. Paleta de Cores

| Cor                                                                                  | Uso                         |
| ------------------------------------------------------------------------------------ | --------------------------- |
| ![#EE6FC3](https://via.placeholder.com/20/EE6FC3/000000?text=+) `hsl(293, 96%, 36%)` | Hover do botão, destaque    |
| ![#3A3054](https://via.placeholder.com/20/3A3054/000000?text=+) `hsl(238, 29%, 16%)` | Títulos e textos principais |
| ![#999999](https://via.placeholder.com/20/999999/000000?text=+) `gray`               | Texto da descrição          |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/000000?text=+) `white`              | Fundo da caixa principal    |

---

## 2. Tipografia

* **Fonte principal:** `"Work Sans", sans-serif`
* **Tamanhos:**

  * Título principal (`h1`): `3em`
  * Botões de pergunta (`.btn`): `18px`
  * Descrição (`.descricao p`): `16px`
* **Peso da fonte:** `font-weight: bold` para perguntas, normal para descrições.

---

## 3. Layout e Espaçamento

* **Container principal:**

  ```css
  width: 80%;
  max-width: 600px;
  padding: 40px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: white;
  ```

* **Header:**

  * Ícone com `margin-right: 20px`
  * Alinhamento horizontal flex (`display: flex; align-items: center`)

* **Accordion (`.accordion`):**

  * Flex vertical (`flex-direction: column`)
  * Gap entre itens: `15px`

* **Botões (`.btn`):**

  * Cursor pointer
  * Alinhamento entre texto e ícone (`display: inline-flex; justify-content: space-between`)
  * Padding bottom: `30px`

* **Descrição (`.descricao`):**

  * Inicialmente oculta (`display: none`)
  * Cor: `gray`

---

## 4. Ícones

* **Fechado:** `icon-plus.svg`
* **Aberto:** `icon-minus.svg`
* **Tamanho:** 20x20px
* Alterados dinamicamente via JavaScript ao abrir/fechar cada item.

---

## 5. Hover e Interação

* **Botão hover:**

  ```css
  a.btn:hover {
    color: hsl(293, 96%, 36%);
  }
  ```
* **Interatividade JS:**

  * Clique no botão alterna a visibilidade da descrição.
  * Apenas um item aberto por vez.
  * Ícone muda de `+` para `-` e vice-versa.

---

## 6. Background

* **Imagem de fundo:** `background-pattern-desktop.svg`
* **Posicionamento:** topo, repetição horizontal (`repeat-x`)
* **Uso:** dá um efeito visual suave no topo da página.

