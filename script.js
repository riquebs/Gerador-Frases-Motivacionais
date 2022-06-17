//declaração de variáveis
const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Não limite os seus desafios. Desafie os seus limites.",
  "Viver cada dia como se fosse o último é uma ótima oportunidade para aprender a amar cada segundo do seu dia.",
  "Se o plano não funcionar, mude o plano, não a meta.",
  "Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.",
  "Que os seus sonhos te levem para onde o seu coração seja feliz.",
  "Para ter sucesso, você deve eliminar dúvidas, aceitar desafios e rejeitar qualquer negatividade externa.",
  "O que você procura está procurando você",
  "Uma meta é um sonho com um prazo.",
  "Tente mover o mundo - o primeiro passo será mover a si mesmo.",
  "Disciplina é a ponte entre metas e realizações",
  "Sorte é o que acontece quando a preparação encontra a oportunidade.",
  "Se você não vivenciar o fracasso, não saberá reconhecer quando o sucesso realmente chegar.",
  "Quando saímos da nossa zona de conforto, todos os nossos sonhos se tornam possíveis.",
  "A vida é uma maratona sem fim. Não fique parado por muito tempo; ao invés disso, concentre-se no próximo ponto.",
  "Você é mais forte do que as suas desculpas.",
  "Quando tiver finalizado uma meta, não olhe para ela como a linha de chegada; olhe como o ponto de partida para sua próxima conquista.",
  "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
  "Uma longa viagem começa com um único passo.",
  "Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.",
  "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
  "Quem quer colher rosas deve suportar os espinhos.",
  "É muito fácil conhecer palavras de motivação, o difícil é aplicá-las na sua vida."
]

// clicar em fazer pergunta
function fazerPergunta() {
  buttonPerguntar.setAttribute("disabled", true)

  // função para geração de numero aleatório e conversão para espaço no array
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  //gravar dentro do HTML
  elementoResposta.innerHTML = "'" + respostas[numeroAleatorio] + "'"

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 4 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 4000)
}