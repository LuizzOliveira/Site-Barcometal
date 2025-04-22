function enviarWhatsApp(produto) {
    const numero = '67999344020';
    const mensagem = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto: ${produto}`);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  }
  