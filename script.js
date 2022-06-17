//declaração de variáveis
const elementoResposta = document.querySelector("#resposta");
const buttonPerguntar = document.querySelector('#buttonPerguntar');
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
  "É muito fácil conhecer palavras de motivação, o difícil é aplicá-las na sua vida.",
  "Deixe que as experiências de vida contabilizem a sua idade.",
"Busque multiplicar sorrisos e subtrair tristezas em todos os dias da sua vida.",
"A vida não é um conto de fadas, mas é repleta de pequenos milagres e conquistas. Basta parar para enxergar."',
"Se você deseja alcançar a grandeza, haja como se fosse a pessoa mais confiante do mundo.",
"Se você quiser que as coisas mudem, primeiro você tem que mudar.",
"A chave do sucesso é começar antes de estar pronto.",
"Ganhar não é tudo, mas querer ganhar é.",
"Algumas pessoas querem que aconteça, algumas esperam que aconteça, outras fazem acontecer.",
"Não tenha medo de desistir do que é bom para ir atrás do que é ótimo.",
"Somos o que repetidamente fazemos. A excelência, portanto, não é um feito, mas um hábito.",
"Acredite em milagres, mas não dependa deles.",
"As realizações de hoje eram as impossibilidades de ontem.",
"O impossível é apenas uma opinião.",
"Um vencedor é um sonhador que nunca desiste.",
"Caia sete vezes. Levante-se oito.",
"Se você quer mudar os frutos, primeiro tem que trocar as raízes!",
"Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
"Você pode encontrar muitas derrotas, mas você não pode se deixar derrotar.",
"Ser você mesmo em um mundo que está constantemente tentando fazer de você outra coisa é a maior realização.",
"Você tem de agir. E você tem que estar disposto a fracassar... Se você tem medo de fracassar, não irá muito longe.",
"A verdadeira motivação não é aquilo que te anima, mas aquilo que te transforma...",
"Você é a força criadora na sua vida. Nada lhe acontece sem a sua participação.",
"As adversidades são partes inevitáveis da vida. Aprenda a aceitar estes obstáculos para conseguir superá-los.",
"Você não é uma gota no oceano, você é o oceano inteiro dentro de uma gota.",
"Se o plano A não funcionou, não se preocupe. O alfabeto possui muitas outras letras.",
"Não deixe que a amargura do mundo tire o seu sorriso.",
"Quanto maior a dificuldade, maior é a glória.",
"Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
"Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
"Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste.",
"Há três coisas na vida que nunca voltam atrás: a flecha lançada, a palavra pronunciada e a oportunidade perdida."
];

// clicar em fazer pergunta
function fazerPergunta() {
  buttonPerguntar.setAttribute("disabled", true);

  // função para geração de numero aleatório e conversão para espaço no array
  const  totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  //gravar dentro do HTML
  elementoResposta.innerHTML = "'" + respostas[numeroAleatorio] + "'";

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 5 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 5000)
}
