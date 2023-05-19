var readline= require('readline-sync');

    console.log("##--Teste Estrutura de Menu--##\n\n");
    console.log("|-------------------------------|\n");
    console.log("| Opção 1 - Comprar passagem    |\n");
    console.log("| Opção 2 - Consultar voos      |\n");
    console.log("| Opção 3 - Mapa de assentos    |\n");
    console.log("| Opção 4 - Emitir ticket       |\n");
    console.log("| Opção 0 - Encerrar o programa |\n");
    console.log("|-------------------------------|\n");
    

    while(resposta != 0){
    var resposta= readline.question ("\nDigite uma opcao: ");    
if(resposta==1){
    console.log("_________________ Passagens Aéreas _________________")
    console.log ("Voce esta em -> Comprar passagem")
    var nome= readline.question('Digite seu nome: ');
    var sobrenome= readline.question('Digite seu sobrenome: ');
    var idade=parseInt (readline.question('Digite sua idade: '));
    var assento= readline.question('Escolha seu assento:(A1 - A12;B1 - B12): ")')
    var assentoValido = false
    while(assentoValido == false){
        for(let index = 1; index < 13; index ++){
            if(assento == "A" + index || assento == "B" + index){
                assentoValido = true
            }
        }
        if(assentoValido == false){
            console.log("Esse assento não é valido")
            assento = readline.question("Escolha seu assento: ")
        }
    }

    var origem= console.log('Origem: Presidente Prudente');
    var destino= readline.question('Digite seu destino: ');
    var destinoValido = false
        while(destinoValido == false){
            if(destino == "Las Vegas" || destino == "Viena" || destino == "Dubai" || destino == "Veneza"){
                    destinoValido = true
                }       
                if(destinoValido == false){
                    console.log("Você digitou errado")
                    destino = readline.question("Digite seu Destino: ")
                }
            }
            
        console.log("_________________ Passagens Aéreas _________________\n")
        console.log ("Voce esta em -> Comprar passagem\n")
        console.log("*Resumo da compra*\n")
        console.log("Cliente: "+nome+" "+sobrenome);
        console.log("Idade: "+idade);
        console.log("Assento: "+assento);
        console.log("Voo: Presidente Prudente  > "+ destino);
        console.log("Status do voo: Confirmado\n");
        console.log("Valor: R$4500");
       } 
    if(resposta==2){
    console.log("_________________ Passagens Aéreas _________________")
    console.log("  Você está em -> Consulta de Voos                  ")
    console.log("  Origem                 X                 Destino  ")
    console.log("____________________________________________________")
    console.log("  Presidente Prudente                    Las Vegas  ")
    console.log("  Presidente Prudente                        Dubai  ")
    console.log("  Presidente Prudente                        Viena  ")
    console.log("  Presidente Prudente                       Veneza  ")
    "\n"
    origem = console.log('Origem: Presidente Prudente');
        var origemValido = false
        var destino = (readline.question("Destino: "))
        var destinoValido = false
        while(destinoValido == false){
                if(destino == "Las Vegas" || destino == "Viena" || destino == "Dubai" || destino == "Veneza"){
                    destinoValido = true
                }       
                if(destinoValido == false){
                    console.log("Você digitou errado")
                    destino = readline.question("Destino: ")
                }
            }
        }

        if(resposta == 3){
            console.log("_________________ Passagens Aéreas _________________")
            console.log("  Você está em -> Mapa de assentos                  ")
            console.log("____________________________________________________")
            var fileiraA = ""
            var fileiraB = ""  
            for(var poltrona = 1;poltrona < 13; poltrona ++){
    
               var assentoDaVezA = "A"+poltrona
               var assentoDaVezB = "B"+poltrona
    
               if( assentoDaVezA == assento){
                    fileiraA += " X "
                    fileiraB += assentoDaVezB + " "
               }
               else if(assentoDaVezB == assento){
                    fileiraB += " X "
                    fileiraA += assentoDaVezA + " "
               }
               else{
                    fileiraA += assentoDaVezA + " "
                    fileiraB += assentoDaVezB + " "
               }
            }    
            console.log(fileiraA)
            console.log(fileiraB)
         
            }}
    
    if (resposta==4){
    console.log("_________________ Passagens Aéreas _________________")
    console.log("  Você está em -> Emitir Tickets                    ")
    console.log("______________________________________________________")
    console.log(" Obrigado por viajar conosco!                       ")
    console.log(" Cliente:"+nome+" " +sobrenome                            )
    console.log(" Idade:" +idade + " Assento:" +assento      )
    console.log(" Origem: Presidente Prudente > Destino " + destino    )
    console.log(" Status do voo: Confirmado               ")
    console.log("                                                    ")
    console.log("______________________________________________________")
    }
    
    
    while(resposta == 0){
        resposta= readline.question ("\nVoce encerrou o programa ");}