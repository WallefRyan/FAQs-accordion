document.querySelectorAll('.item').forEach(item => {
  const btn = item.querySelector('.btn');
  const descricao = item.querySelector('.descricao');
  const icon = item.querySelector('img');

  btn.addEventListener('click', () => {
    // Fechar todos os itens exceto o atual
    document.querySelectorAll('.item').forEach(i => {
      if (i === item) return; // pula o atual
      const d = i.querySelector('.descricao');
      const img = i.querySelector('img');
      if (d) {
        d.style.display = 'none';
      }
      if (img) {
        img.src = 'src/img/icon-plus.svg';
      }
    });

    // Toggle do item atual
    const isOpen = getComputedStyle(descricao).display === 'block';
    descricao.style.display = isOpen ? 'none' : 'block';
    icon.src = isOpen ? 'src/img/icon-plus.svg' : 'src/img/icon-minus.svg';
  });
});