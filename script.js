const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " o ciclo escolar acabou e você precisa decidir qual seu primeiro passo em direção a vida adulta. Qual caminho vocẽ escolhe?",
        alternativas: [
            {
                texto: "Ingressar imediatamente na faculdade ou curso técnico para se especializar em sua área ",
                afirmacao: "Sua busca por especialização académica te ajudou a construir uma base teórica sólida para sua área. "
            },
            {
                texto: "Entrar no mercado de trabalho para ganhar experiência prática e independência financeira rápida. ",
                afirmacao: "A inserção rápida no mercado de trabalho trouxe maturidade e uma visão prática sobre o mundo corporativo."
            }
        ]
    },
    {
        enunciado: "Ao planejar o futuro, surge a dúvida: como equilibrar sonhos pessoais e necessidades reais? Qual é a sua prioridade? ",
        alternativas: [
            {
                texto: "Seguir fielmente aquilo que ama e sonha fazer, mesmo que demore mais para dar certo.",
                afirmacao: "Escolher pelo que te motiva te mantém realizado(a), mesmo com desafios e caminhos mais longos. "
            },
            {
                texto: "Optar primeiro por algo mais seguro e instável, realizando desejos pessoais aos poucos.",
                afirmacao: "Garantir instabilidade primeiro te deu tranquilidade e condições melhores de realizar sonhos depois."
            }
        ]
    },
    {
        enunciado: "em um relacionamento, você percebe comportamentos de controle, manipulação e o afastamento progressivo de amigos e familiares. Qual o seu posicionamento? ",
        alternativas: [
            {
                texto: " Conversar abertamente, explicar seus limites e tentar resolver juntos antes de tomar decisões drásticas.",
                afirmacao: "Defender seus limites com calma mostrou maturidade, relacionamentos precisam de respeito e confiança."
            },
            {
                texto: "Reconhecer que isso não é saudável e se afastar definitivamente, preservando sua saúde mental e vínculos verdadeiros",
                afirmacao: "Escolher a si mesmo(a) foi a decisão certa. Nenhuma relação vale a pena se custa quem é ou quem ama."
            }
        ]
    },
    {
        enunciado: "Você presencia uma situação injusta e preconceituosa com alguém, mas intervir pode trazer problemas para você também. O que faz? ",
        alternativas: [
            {
                texto: "se manifestar contra o que está errado, apoiando a pessoa e dizendo que aquilo não é aceitável. ",
                afirmacao: "Ter coragem de se posicionar gera mudanças, pequenas atitudes ajudam a construir um mundo mais justo. "
            },
            {
                texto: "procurar forma de ajudar sem correr risco desnecessário, como buscar autoridade ou apoio de outras pessoas.",
                afirmacao: "Pensar com prudência também é importante. Proteger-se não significa compactar com o erro, mas agir com inteligência. "
            }
        ]
    },
    {
        enunciado: " o ciclo escolar acabou e você precisa decidir qual seu primeiro passo em direção a vida adulta. Qual caminho vocẽ escolhe?",
        alternativas: [
            {
                texto: "Ingressar imediatamente na faculdade ou curso técnico para se especializar em sua área ",
                afirmacao: "Sua busca por especialização académica te ajudou a construir uma base teórica sólida para sua área. "
            },
            {
                texto: "Entrar no mercado de trabalho para ganhar experiência prática e independência financeira rápida. ",
                afirmacao: "A inserção rápida no mercado de trabalho trouxe maturidade e uma visão prática sobre o mundo corporativo."
            }
        ]
    },
    ];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();