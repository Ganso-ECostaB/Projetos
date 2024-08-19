// Feito por Eduardo da Costa Belem, turma 1AM do colégio SENAC São Leopoldo.
// Jogo feito para ser jogado no console do node.js ou do Visual Studio Code.

let dialogueJogoLista1 = []; //Lista de diálogo número 1
let dialogoCont = 0 //Contador de diálogo
let noCount = 0 //Acrésimo negativo aos giros de dado, também conta como a Vida do personagem.
let yesCount = 0 //Acrésimo positivo aos giros
let diaContador = 0 //Contagem de dias
let inventario = []

// Abaixo estão as variáveis do checkpoint da competição.

let dialogueJogoLista2 = [] //Diálogo da competição.

let inventarioSave1 = []
let yesCountSave = 0
let tempYesCount = 0 // Variável para buffs durante a competição.
let noCountSave = 0

let metrosPlayer = 200
let metrosOponentes = [200, 200, 200, 200, 200] 

let readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Sistema de implementação de um "Aperte Enter para pular" para facilitar a digestão de diálogo a partir de uma array.

dialogueJogoLista1.push("> ...Já se passou tanto tempo desde que você virou um atléta?")
dialogueJogoLista1.push("> Você começou a nadar desde os oito anos.")
dialogueJogoLista1.push("> E mesmo após um acidente enquanto mergulhava nas profundezas da água, você nunca perdeu a paixão pelo mar, pelas águas e pelo oceano.")
dialogueJogoLista1.push("> Você continuou a nadar pela paixão e pelo esporte, eventualmente conseguindo um lugar no time nacional de natação do país...")
dialogueJogoLista1.push("> Você até competiu nas olimpíadas de Tokyo em 2022, representando seu país...")
dialogueJogoLista1.push("> Porém, o seu país de origem, o Irã, vivia em constantes guerras e tensões com seus vizinhos e o ocidente.")
dialogueJogoLista1.push("> Você fugiu de seu país em busca de paz em um lugar melhor, e ganhou asilo na Grã-Bretanha.")
dialogueJogoLista1.push("> Mas por conta da política de asilo do país, você teve que deixar de nadar for 7 meses...")
dialogueJogoLista1.push("> E agora você deve recuperar suas habilidades no nado.")

// Diálogo da fase de treino acima, abaixo o da fase de competição.

dialogueJogoLista2.push("> Após muita luta e sofrimento, você finalmente chegou nas olimpiadas.")
dialogueJogoLista2.push("> Você está na final, e esta competindo com 5 outros atlétas.")
dialogueJogoLista2.push("> Franz Jüunmon. Yokatsu Takahiroma. Karl Obnesto. Roland Gumhiro, e Carlos Ruanbara.")
dialogueJogoLista2.push("> Ao longo de sua jornada e suas escolhas, você obteve sentimentos e emoções baseados nas suas escolhas.")
dialogueJogoLista2.push("> Estes sentimentos obtidos ao longo da semana lhe ajudarão a vencer a competição de natação.")
dialogueJogoLista2.push("> Você deve dar tudo de si.")
dialogueJogoLista2.push("> (Checkpoint Alcançado)")
dialogueJogoLista2.push("> Você e os participantes esperam na borda da piscina pelo sinal...")
dialogueJogoLista2.push("> ...E QUE COMEÇE AS FINAIS DE NATAÇÃO!")

let dialogoLer = function () {
  rl.question('(Aperte Enter para pular.)', function (answer) {
    
    if (dialogueJogoLista1.length !== dialogoCont){
    console.log(dialogueJogoLista1[dialogoCont])
    dialogoCont++
    dialogoLer();
    } else {
        rl.pause();
        semanaTreino()
    }
    });
};

dialogoLer();

// Vai loopar até o diálogo acabar.

// Começo da semana de treino.

let semanaTreino = function () {
    rl.resume
    if (diaContador < 7) {
    rl.question('\nGostaria de treinar hoje?\nSim(1) ou Não(2)?\n', answer => {
        
        if (answer == 1){
            console.log("Girando a roleta de desafios...\n") // Gira um número de 1 a 5 usando a função de roleta para determinar o desafio do dia.
            if(roleta(5) == 1){
                desafio1()
            } else if (roleta(5) == 2) {
                desafio2()
            } else if (roleta(5) == 3) {
                desafio3()
            } else if (roleta(5) == 4) {
                desafio4()
            } else if (roleta(5) == 5) {
                desafio5()
            }   else {
                console.log("Número de giro Inválido.") // Por algum motivo a roleta tende a não funcionar e eu não sei o porquê.
                semanaTreino() // Tive que adicionar este código para continuar o jogo. 
            }  
        } else if (answer == 2){
            noCount += 2
            console.log("Você decide tirar uma folga por hoje, você tem uma semana inteira para treinar afinal de contas!")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else {
            console.log("Opção invalida.") //Caso o usuário aperte um botão inválido. Vai chamar a função novamente.
            semanaTreino()
        }
    
      });
    } else if (diaContador >= 7){
        faseDeCompeticaoCheck()
    }
  };

function roleta(max) {
    //Usado para gerar um número para o desafio diário.
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
  }

function desafio1(){
    rl.question('Enquanto você treinava o seu nado, você viu um novato tendo dificuldades enquanto tentava nadar.\nVocê deve ajudar-lo?\n Sim(1) ou Não(2)?\n', answer => {
        if (answer == 1){
            inventario.push("Amizade")
            inventario.push("Empatia")
            yesCount++
            
            console.log("Você ajuda o novato a nadar, e em troca, vocês dois formam uma bela amizade.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else if (answer == 2){
            noCount += 2
            console.log("Você decide não ajudar o novato e continua a focar em seu próprio treinamento, mas a culpa que sente lhe impede de melhorar suas habilidades.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else {
            console.log("Opção invalida.")
            desafio1()
        }
    })
}

function desafio2(){
    rl.question('Hoje, você treinou o dia inteiro, desde a manhã até a tarde, e agora esta de noite. Você esta exausto, mas você quer muito conseguir uma medalha nas olimpíadas...\nVocê deve descansar?\n Sim(1) ou Não(2)?\n', answer => {
        if (answer == 1){
            inventario.push("Paz")
            inventario.push("Aceitação")
            yesCount++
            
            console.log("Você sai da piscina e descansa um pouco antes de voltar para casa, você se lembra de que você não está na natação por uma nação, mas sim por você mesmo e por sua paixão.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else if (answer == 2){
            noCount += 3
            console.log("Você continua treinando, porém sem descanso, os seus músculos não conseguem se fortalecer, e você acaba chegando em casa a noite completamente dolorido.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else {
            console.log("Opção invalida.")
            desafio2()
        }
    })
}

function desafio3(){
    rl.question('Um atléta de outra academia que também irá participar nas olimpiadas aparece na academia onde você treina. O nome dele é Carlos Ruanbara, e ele quer desafiar você à uma competição amistosa entre os dois...\nVocê aceita o desafio?\n Sim(1) ou Não(2)?\n', answer => {
        if (answer == 1){
            inventario.push("Competitividade")
            inventario.push("Amizade")
            yesCount++
            
            console.log("Você aceita o desafio e compete amistosamente junto de seu futuro oponente, você e Carlos se divertem bastante.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else if (answer == 2){
            noCount += 1
            inventario.push("Competitividade")

            console.log("Você recusa o pedido de Carlos, temendo que ele possa descobrir o seu método especial para facilitar o Nado Borboleta, afinal, você quer ganhar.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else {
            console.log("Opção invalida.")
            desafio3()
        }
    })
}

function desafio4(){
    rl.question('Hoje, por algum motivo, você não parece estar indo tão bem no seu treino comparado a outros dias, seus resultados de hoje lhe deixam nervoso e frustado\nVocê deve continuar treinando?\n Sim(1) ou Não(2)?\n', answer => {
        if (answer == 1){
            noCount += 2
            
            console.log("Você continua treinando, treinando e treinando, mas tudo o que ganha em troca é frustração consigo mesmo.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else if (answer == 2){
            inventario.push("Aceitação")
            yesCount++
            
            console.log("Você decide parar de treinar por hoje. Você percebe que algumas vezes, pessoas vão ter dias ruins, o importante é se recompor e não ser consumido pelas frustações, pois sempre tem o amanhã para tentar novamente.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else {
            console.log("Opção invalida.")
            desafio4()
        }
    })
}

function desafio5(){
    rl.question('Com as olimpíadas tão próximas, um atléta deve se dedicar ao máximo ao seu treinamento para conseguir uma medalha. Você não é diferente. Neste dia, você sente que falta apenas um pingo de técnica e força em seus movimentos, mas você não consegue achar o que falta em si, o que lhe deixa frustrado...\nApesar das frustrações e medos diante de você, você deseja continuar o treino?\n Sim(1) ou Não(2)?\n', answer => {
        if (answer == 1){
            inventario.push("Determinação")
            yesCount += 2

            console.log("Algo clica dentro de você, e você continua seu treino com perfeição, achando a força que lhe faltava e a técnica que precisava.\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else if (answer == 2){
            noCount += 2
            console.log("Você decide parar o treino para descansar e pensar um pouco no que lhe faltava, os seus medos e frustrações estavam o impedindo de mostrar seu verdadeiro potencial...\n")
            console.log("O dia acaba...")
            diaContador++
            semanaTreino()
        } else {
            console.log("Opção invalida.")
            desafio5()
        }
    })
}

function faseDeCompeticaoCheck() {
    if (noCount >= 5){
        falhaQualificacao() // Muitos pontos negativos vão impedir o jogador de avançar para a fase das olimpiadas, funcionando como o sistema de vida do jogo.
    } else {
        competicaoFinalDialogo()
    }
}

function falhaQualificacao() {
        console.log("Infelizmente, os seus esforços foram em vão, e por conta disto, você não conseguiu se qualificar para as olimpíadas.\n")
        rl.question("Você gostaria de tentar novamente do início da semana?\nSim(1) ou Não(2)?\n", answer => {
            if (answer == 1){
                diaContador = 0
                inventario = []
                yesCount = 0
                noCount = 0

                semanaTreino()
            } else if (answer == 2){
                console.log("Muito bem. Aproveite o seu dia!")
                rl.close
            } else {
                console.log("Opção Inválida.")
                falhaQualificacao()
            }
        })
}

function competicaoFinalDialogo() {
    for (i = 0; i <= inventario.length -1; i++){
        inventarioSave1.push(inventario[i])
    }

    yesCountSave = yesCount
    noCountSave = noCount
    dialogoCont = 0

    let dialogoFinais = function () {
        rl.question('(Aperte Enter para pular.)', function (answer) {
          
          if (dialogueJogoLista2.length !== dialogoCont){
          console.log(dialogueJogoLista2[dialogoCont])
          dialogoCont++
          dialogoFinais();
          } else {
              finais()
          }
          });
      };

      dialogoFinais()
}

function finais() {
    if (metrosPlayer <= 0){
        vitoria()
    } else if (metrosOponentes[0] <= 0 || metrosOponentes[1] <= 0 || metrosOponentes[2] <= 0 || metrosOponentes[3] <= 0 || metrosOponentes[4] <= 0){
        derrota()
    } else {
        rl.question('O que deseja fazer?\nAvançar(1)\nUtilizar um ítem/emoção(2)\n', answer =>{
        if (answer == 1){
            metrosPlayer = metrosPlayer - roletaAvanco(20)
            console.log(`Você nadou com todas as suas forças para avançar até os ${(metrosPlayer - 200)*-1} metros, e agora faltam ${metrosPlayer} para acabar a competição!\n`)
            
            metrosOponentes[0] = metrosOponentes[0] - roletaOponentes(20)
            console.log(`Franz Jüunmon avançou até os ${(metrosOponentes[0] - 200)*-1} metros!\n`)
            
            metrosOponentes[1] = metrosOponentes[1] - roletaOponentes(20)
            console.log(`Yokatsu Takahiroma avançou até os ${(metrosOponentes[1] - 200)*-1} metros!\n`)
            
            metrosOponentes[2] = metrosOponentes[2] - roletaOponentes(20)
            console.log(`Karl Obnesto avançou até os ${(metrosOponentes[2] - 200)*-1} metros!\n`)
            
            metrosOponentes[3] = metrosOponentes[3] - roletaOponentes(20)
            console.log(`Roland Gumhiro avançou até os ${(metrosOponentes[3] - 200)*-1} metros!\n`)
            
            metrosOponentes[4] = metrosOponentes[4] - roletaOponentes(20)
            console.log(`Carlos Ruanbara avançou até os ${(metrosOponentes[4] - 200)*-1} metros!\n`)

            tempYesCount = 0

            finais()
        } else if (answer == 2){
            
            for(let i of inventario){
                console.log(i+"\n")
            }

            rl.question(`Qual desses itens deseja utilizar? (0 a ${inventario.length - 1})\n`, answer => {
                if (answer >=0 && answer < inventario.length){
                    if (inventario[answer].includes("Amizade")){
                        inventario.splice(answer, 1)
                        tempYesCount += 2

                        console.log("\nVocê se lembra das amizades que você fez pelo caminho, e nas pessoas que confiam em você. Você recebe um aumento de 2 pontos em um giro por 1 rodada\n.")
                        finais()
                    } else if (inventario[answer].includes("Aceitação")){
                        inventario.splice(answer, 1)
                        noCount -= 1

                        console.log("\nVocê aceita os termos e fatos de que talvez você não ganhe, mas o importante é participar e dar seu melhor. Você reduziu 1 ponto negativo dos seus giros\n.")
                        finais()
                    } else if (inventario[answer].includes("Determinação")){
                        inventario.splice(answer, 1)
                        yesCount += 3

                        console.log("\nSua determinação em lutar e vencer esta olimpíada lhe traz forças inimaginaveis. Você recebeu um aumento permanente de 3 pontos no giro.\n")
                        finais()
                    } else if (inventario[answer].includes("Paz")){
                        inventario.splice(answer, 1)
                        tempYesCount += 1
                        noCount -= 1

                        console.log("\nEntre cada nado, cada braçada contra a água, você respira profundamente, você está em paz. Você aumenta 1 ponto no giro por 1 rodada e reduz 1 ponto negativo\n.")
                        finais()
                    } else if (inventario[answer].includes("Empatia")){
                        inventario.splice(answer, 1)
                        tempYesCount += 2
                        noCount += 1

                        console.log("\nVocê se lembra de que todos nesta competição estão aqui para vencer também, todos tiveram sua própria jornada para chegar até aqui, Você ganha 2 pontos extras no giro por 1 rodada, mas ganha 1 ponto negativo também\n.")
                        finais()
                    } else if (inventario[answer].includes("Competitividade")){
                        inventario.splice(answer, 1)
                        tempYesCount += 6
                        yesCount += 1
                        noCount += 2

                        console.log("\nVocê se lembra do porque está aqui, do porque está sob a água, para vencer. Você ganha um imenso benefício de um aumento de 6 pontos no giro por 1 turno e 1 ponto permanente, mas ganha 2 pontos negativos também.\n.")
                        finais()
                    } else {

                    } 
                }
            })


        }
    })
}

}

function roletaAvanco(max){
    return Math.floor(Math.random() * (max - 1 + 1)) + 1 + yesCount + tempYesCount - noCount;
    // Roleta do Jogador
}

function roletaOponentes(max){
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
    // Roleta dos Oponentes
}

function vitoria(){
    let dialogueJogoVitoria = []
    
    dialogoCont = 0

    dialogueJogoVitoria.push("> ...")
    dialogueJogoVitoria.push("> Você conseguiu!")
    dialogueJogoVitoria.push("> Você ganhou a competição e a medalha de ouro!")
    dialogueJogoVitoria.push("> Não é possível descrever o quão feliz você está.")
    dialogueJogoVitoria.push("> Seu treinador e seus amigos comemoram junto com você!")
    dialogueJogoVitoria.push("> Porque você conseguiu!!")

    let dialogoVitoria = function () {
        rl.question('(Aperte Enter para pular.)', function (answer) {
          
          if (dialogueJogoVitoria.length !== dialogoCont){
          console.log(dialogueJogoVitoria[dialogoCont])
          dialogoCont++
          dialogoVitoria();
          }
        });
      };

      dialogoVitoria()

}

function derrota(){
    let dialogueJogoDerrota = []
    
    dialogoCont = 0

    dialogueJogoDerrota.push("> ...")
    dialogueJogoDerrota.push("> Você falhou...")
    dialogueJogoDerrota.push("> Você não conseguiu ganhar a competição...")
    dialogueJogoDerrota.push("> Por mais que tenha treinado, por mais que tenha sofrido e lutado, seus esforços não tiveram frutos.")
    dialogueJogoDerrota.push("> Você já aceitou que perder é parte do processo, mas...")
    dialogueJogoDerrota.push("> Você não consegue evitar de sentir um vazio dentro de si.")

    let dialogoDerrota = function () {
        rl.question('(Aperte Enter para pular.)', function (answer) {
          
          if (dialogueJogoDerrota.length !== dialogoCont){
          console.log(dialogueJogoDerrota[dialogoCont])
          dialogoCont++
          dialogoDerrota();
          } else {
            rl.question('Você gostaria de voltar ao checkpoint?\nSim(1) ou Não(2)\n', answer =>{
                if (answer == 1){
                    yesCount = yesCountSave
                    noCount = noCountSave
                    tempYesCount = 0
                    inventario = []
                    
                    for (i = 0; i <= inventarioSave1.length -1; i++){
                        inventario.push(inventarioSave1[i])
                    }

                    metrosPlayer = 200
                    metrosOponentes = [200, 200, 200, 200, 200]

                    dialogoFinais()
                } else {
                    console.log("Muito bem, aproveite o seu dia!")
                    rl.close
                }
            })
          }
        });
      };

      dialogoDerrota()

}