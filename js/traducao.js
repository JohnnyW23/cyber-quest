function criarTraducaoInicio(){
    traducao = {}
    if(animacoes.idioma == 'portugues'){
        traducao.inicio = {
            cores: [
                'NOVA ERA RETRO',
                'FANTASMA DA NEVE',
                'VULCÃO DE TRÓIA',
                'LAMENTO DE SAKURA',
                'FIM DE HALLOWEEN',
                'TROVÃO DE FISCHER'
            ],
            sobre:
                "<h1>🎮BOAS-VINDAS AO CYBER QUEST!🎮</h1>\
                <br>\
                <p>Prepare-se para uma aventura eletrizante onde você é mestre dos códigos, tanto defendendo seu território digital quanto desafiando as fronteiras da segurança cibernética atacando um alvo.</p>\
                <br>\
                <p>Como jogar:</p>\
                <br>\
                <p><span>1. Escolha seu papel:</span> Defensor ou Atacante. Em ambos os modos, você terá 6 tentativas para acertar a senha do jogo, um número aleatório gerado pelo jogo, dentro de um intervalo conforme o nível que você escolher.</p>\
                <p><span>2. Defenda seu sistema:</span> No modo defesa, proteja seu domínio digital de um hacker astuto. Se falhar, prepare-se para ter seu dispositivo invadido!</p>\
                <p><span>3. Seja o hacker:</span> No modo ataque, teste suas habilidades para invadir um sistema. Mas cuidado, se não conseguir quebrar o código a tempo, o firewall irá bloquear você permanentemente!</p>\
                <p><span>4. Modo DOLPHIN:</span> A primeira tentativa de cada jogo te dá a chance exclusiva de usar o código DOLPHIN e entrar em uma experiência de jogo completamente nova. O próprio DOLPHIN te dirá pelo que procurar. Preste atenção e veja se você consegue decifrar o mistério!</p>\
                <br>\
                <p>Lembre-se: <span>não há hackers de verdade aqui!</span> Este jogo é uma simulação segura e divertida para testar sua sorte e entreter. Portanto, relaxe, divirta-se e boa sorte!</p>\
                <br>\
                <p style='font-style: italic;'>Nota: Cyber Quest é apenas um jogo. Nenhuma informação pessoal é coletada e nenhum dispositivo é realmente comprometido.</p>\
                <br>\
                <p>Músicas por:</p>\
                <p style='color: white'>Ashot Danielyan</p>\
                <p style='color: white'>ShtakalBerry Music</p>",

            principal: [
                '<p>iniciarJogo();</p>',
                'TEMAS DE CORES',
                'SOBRE O JOGO',
                'MEU GITHUB'
            ],
            modo: [
                'Escolha seu modo de jogo:',
                'defender();',
                'atacar();'
            ]
        }

    }else if(animacoes.idioma == 'ingles'){
        traducao.inicio = {
            cores: [
                'NEW ERA RETRO',
                'SNOW GHOST',
                'TROJAN MAGMA',
                "SAKURA'S SORROW",
                "HALLOWEEN'S END",
                "FISCHER'S THUNDER"
            ],
            sobre: 
                "<h1>🎮WELCOME TO CYBER QUEST!🎮</h1>\
                <br>\
                <p>Get ready for a thrilling adventure where you are the master of codes, defending your digital territory and challenging the boundaries of cybersecurity by attacking a target.</p>\
                <br>\
                <p>How to play:</p>\
                <br>\
                <p><span>1. Choose your role:</span> Defender or Attacker. In both modes, you have 6 attempts to guess the game's password, a random number generated by the game, within a range according to the level you choose.</p>\
                <p><span>2. Defend your system:</span> In defense mode, protect your digital domain from a cunning hacker. If you fail, prepare to have your device invaded!</p>\
                <p><span>3. Be the hacker:</span> In attack mode, test your skills to invade a system. But be careful, if you can't crack the code in time, the firewall will block you permanently!</p>\
                <p><span>4. DOLPHIN Mode:</span> The first attempt of each game gives you the exclusive chance to use the DOLPHIN code and enter a completely new gaming experience. DOLPHIN itself will tell you what to look for. Pay attention and see if you can decipher the mystery!</p>\
                <br>\
                <p>Remember: <span>there are no real hackers here!</span> This game is a safe and fun simulation to test your luck and entertain. So relax, have fun, and good luck!</p>\
                <br>\
                <p style='font-style: italic;'>Note: Cyber Quest is just a game. No personal information is collected and no device is actually compromised.</p>\
                <br>\
                <p>Music by:</p>\
                <p style='color: white'>Ashot Danielyan</p>\
                <p style='color: white'>ShtakalBerry Music</p>",

            principal: [
                '<p>startGame();</p>',
                'COLOR THEMES',
                'ABOUT THE GAME',
                'MY GITHUB'
            ],
            modo: [
                'Choose your game mode:',
                'defend();',
                'attack();'
            ]
        }
    }
}


function criarTraducaoJogo(){
    if(animacoes.modo == 'defesa'){
        if(animacoes.idioma == 'portugues'){
            traducao.parte1 = [
                'IDENTIFIQUE-SE:',
                'MIN 4 CARACTERES',
                'MAX 20 CARACTERES',
                'APENAS LETRAS E NÚMEROS SEM ACENTOS',
                'SELECIONE NÍVEL DE ACESSO AO SISTEMA:',
                'Boas-vindas,',
                'Executando algoritmo de verificação de segurança...',
                'Carregando módulos do firewall...',
                'In´´cializ#ndo~ //0P_SY5TEM//, p%r f4v0r agu%rd&.',
                '// PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO //'
            ],
            traducao.parte2 = [
                'Progresso do vírus no sistema:',
                '//PROCESSO CONCLUÍDO//',
                ['1 e 8', '1 e 16', '1 e 24'],
                ['TENTATIVAS: ', 'CÓDIGO:'],
                '//AVISO DO LOG// ',
                ' conectou ao sistema há 5 minutos.',
                '//FIREWALL DETECTOU CARREGAMENTO DE VÍRUS LETAL AO SISTEMA//',
                '//TENTATIVA DE NEUTRALIZAR VÍRUS EM ANDAMENTO//',
                'AVISO: FIREWALL SOBRECARREGADO. ENTRADA MANUAL NECESSÁRIA DE',
                'DETECTADO INTERVALO: CÓDIGO É UM NÚMERO INTEIRO ENTRE '
            ],
            traducao.parte3 = [
                'VOCÊ PERDEU!',
                'jogarNovamente();',
                '//PROCESSO INTERROMPIDO//',
                '//FIREWALL DECODE SUCCESS: CÓDIGO CORRETO//',
                'VOCÊ VENCEU!',
                '//FIREWALL ERROR EXCEPTION: CÓDIGO INCORRETO//',
                '//CÓDIGO DOLPHIN INDISPONÍVEL: TEMPO DE ATIVAÇÃO EXCEDIDO//',
                'DESCRIPTOGRAFANDO...',
                '//TEMPERATURA DO DISPOSITIVO ACIMA DO RECOMENDADO//',
                '//EXECUTANDO ANÁLISE FINAL DA SEGURANÇA DO DISPOSITIVO//'
            ],
            traducao.dolphin = [
                '//INTELIGENCIA D.O.L.P.H.I.N. ATIVADA//',
                '//EXECUTANDO DOLPHIN//',
                [
                    'OLÁ, ',
                    '. SEU DISPOSITIVO ESTÁ SOFRENDO UM GRAVE ATAQUE DE INJEÇÃO SQL. POR FAVOR, SELECIONE OS CÓDIGOS DIVERGENTES ENCONTRADOS EM MINHA VARREDURA PARA COMPILAÇÃO. AH! PERMITA-ME LHE PERGUNTAR, ',
                    'COMO VÃO SEUS PRIMOS?'
                ],
                'ITERAÇÃO ',
                'ESTOU DESCOMPILANDO OS CÓDIGOS. QUEIRA DEUS QUE VOCÊ TENHA ESCOLHIDO CERTO.',
                '//PROCESSO INTERROMPIDO//',
                'ELIMINAÇÃO DE MALWARE COM SUCESSO',
                'VOCÊ VENCEU O MODO DOLPHIN!',
                '//PROCESSO CONCLUÍDO//',
                'CÓDIGOS DIVERGENTES: ',
                'VOCÊ FALHOU, E AGORA IREI ME AUTO-DESTRUIR.',
                'ELIMINAÇÃO DE MALWARE SEM SUCESSO',
                'VOCÊ PERDEU O MODO DOLPHIN',
                'ELIMINAÇÃO DE MALWARE SEM SUCESSO // DOLPHIN EXCEPTION(E): DADOS INSUFICIENTES PARA COMPILAÇÃO'
            ]

        }else if(animacoes.idioma == 'ingles'){
            traducao.parte1 = [
                'IDENTIFY YOURSELF:',
                'MIN 4 CHARACTERS',
                'MAX 20 CHARACTERS',
                'ONLY LETTERS AND NUMBERS',
                'SELECT ACCESS LEVEL TO THE SYSTEM:',
                'Welcome,',
                'Running security check algorithm...',
                'Loading firewall modules...',
                'In´´tializ*ng~ //0P_SY5TEM//, pl3as& w%it',
                '// DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER //'
            ],
            traducao.parte2 = [
                'Progress of the virus in the system:',
                '//PROCESS COMPLETED//',
                ['1 and 8', '1 and 16', '1 and 24'],
                ['ATTEMPTS: ', 'CODE:'],
                '//LOG WARNING// ',
                ' connected to the system 5 minutes ago.',
                '//FIREWALL DETECTED LETHAL VIRUS DEPLOY ON SYSTEM//',
                '//ATTEMPT TO NEUTRALIZE VIRUS IN PROGRESS//',
                'WARNING: FIREWALL OVERLOADED. MANUAL INPUT REQUIRED FROM',
                'RANGE DETECTED: CODE IS AN INTEGER BETWEEN '
            ],
            traducao.parte3 = [
                'YOU LOSE!',
                'playAgain();',
                '//PROCESS INTERRUPTED//',
                '//FIREWALL DECODE SUCCESS: KEY IS CORRECT//',
                'YOU WIN!',
                '//FIREWALL ERROR EXCEPTION: KEY IS INCORRECT//',
                '//CODE DOLPHIN UNAVAILABLE: ACTIVATION TIME EXCEEDED//',
                'DECRYPTING...',
                '//DEVICE TEMPERATURE ABOVE RECOMMENDED//',
                '//RUNNING FINAL DEVICE SECURITY ANALYSIS//'
            ],
            traducao.dolphin = [
                '//INTEL D.O.L.P.H.I.N. ACTIVATED//',
                '//RUNNING DOLPHIN//',
                [
                    'HELLO, ',
                    '. YOUR DEVICE IS SUFFERING FROM A SEVERE SQL INJECTION ATTACK. PLEASE SELECT THE DEVIANT CODES FOUND IN MY SCAN FOR COMPILATION. OH! ALLOW ME TO ASK YOU, ',
                    "WHAT'S IT LIKE TO REACH THE PRIME OF YOUR LIFE?"
                ],
                'ITERATION ',
                "I'M DECOMPILING THE CODES. MAY GOD WISH YOU'VE CHOSEN THE RIGHT ONES.",
                '//PROCESS INTERRUPTED//',
                'SUCCESSFUL MALWARE ELIMINATION',
                'YOU WON DOLPHIN MODE!',
                '//PROCESS COMPLETED//',
                'DEVIANT CODES: ',
                'YOU FAILED, AND NOW I WILL SELF-DESTRUCT.',
                'UNSUCCESSFUL MALWARE ELIMINATION',
                'YOU LOST DOLPHIN MODE',
                'UNSUCCESSFUL MALWARE ELIMINATION // DOLPHIN EXCEPTION(E): INSUFFICIENT DATA FOR COMPILATION'
            ]
        }
    
    }else{
        if(animacoes.idioma == 'portugues'){
            traducao.parte1 = [
                'DIGITE O USUÁRIO ALVO PARA ATAQUE:',
                'MIN 4 CARACTERES',
                'MAX 20 CARACTERES',
                'APENAS LETRAS E NÚMEROS SEM ACENTOS',
                'SELECIONE PORTA DE ENTRADA PARA ATAQUE:',
                'Conectando-se ao servidor de ',
                'Executando protocolo teste de spyware...',
                'Carregando módulos de malware...',
                'Carregando pacotes trojan para disparo. Por favor, aguarde.',
                '//BRECHA ENCONTRADA NA PORTA DE ENTRADA PARA SERVIDOR//'
            ],
            traducao.parte2 = [
                'Recuperação de Firewall:',
                '//PROCESSO CONCLUÍDO//',
                ['1 e 8', '1 e 16', '1 e 24'],
                ['TENTATIVAS: ', 'CHAVE:'],
                '//AVISO DO LOG// conexão ao servidor de ',
                ' encontra-se bem-sucedida.',
                '//FIREWALL NEUTRALIZADO// 0.' + numeroAleatorio(100, 399) + 'ms',
                '//TENTATIVA DE RECUPERAÇÃO DE FIREWALL EM ANDAMENTO//',
                'AVISO: MÓDULO DE ATAQUE SOBRECARREGADO. ENTRADA MANUAL NECESSÁRIA // EXCEPTION(E): PACOTE DE AUTOMAÇÃO DELETADO POR ',
                'DETECTADO INTERVALO DA CHAVE: NÚMERO INTEIRO ENTRE '
            ],
            traducao.parte3 = [
                'VOCÊ PERDEU!',
                'jogarNovamente();',
                '//PROCESSO INTERROMPIDO//',
                '//MALWARE DEPLOY SUCCESS: CHAVE CORRETA//',
                'VOCÊ VENCEU!',
                '//MALWARE DEPLOY EXCEPTION: CHAVE INCORRETA//',
                '//CHAVE DOLPHIN INDISPONÍVEL: TEMPO DE ATIVAÇÃO EXCEDIDO//',
                'DESCRIPTOGRAFANDO...',
                '//TEMPERATURA DO DISPOSITIVO ACIMA DO RECOMENDADO//',
                '//EXECUTANDO SCRIPT bruteForce(); EM FIREWALL NEUTRALIZADO//'
            ],
            traducao.dolphin = [
                '//INTELIGENCIA D.O.L.P.H.I.N. ATIVADA//',
                '//EXECUTANDO DOLPHIN//',
                [
                    'OLÁ, CAMARADA. VEJO QUE SUA NOVA VÍTIMA SE CHAMA ',
                    '. INFELIZMENTE NÃO POSSUO CLARIVIDÊNCIA, PORTANTO, VOCÊ DEVE SELECIONAR AS CHAVES DIVERGENTES ENCONTRADAS EM MINHA VARREDURA. AH! PERMITA-ME LHE PERGUNTAR, ',
                    'COMO VÃO SEUS PRIMOS?'
                ],
                'ITERAÇÃO ',
                'ESTOU DESCOMPILANDO AS CHAVES. PODE TOMAR UM CAFÉ, SE QUISER.',
                '//PROCESSO INTERROMPIDO//',
                'FIREWALL BLOQUEADO. CARREGAMENTO DE MALWARE BEM-SUCEDIDO',
                'VOCÊ VENCEU O MODO DOLPHIN!',
                '//PROCESSO CONCLUÍDO//',
                'CHAVES DIVERGENTES: ',
                'ESQUEÇA O CAFÉ. ACHO QUE VOCÊ ARRANJOU PROBLEMAS DEMAIS.',
                'FIREWALL RECUPERADO. CARREGAMENTO DE MALWARE MAL-SUCEDIDO. CONEXÃO COM O SERVIDOR INTERROMPIDA POR FIREWALL',
                'VOCÊ PERDEU O MODO DOLPHIN',
                'CARREGAMENTO DE MALWARE INTERROMPIDO // DOLPHIN EXCEPTION(E): DADOS INSUFICIENTES PARA COMPILAÇÃO'
            ]
            
        }else if(animacoes.idioma == 'ingles'){
            traducao.parte1 = [
                "ENTER THE TARGET USER TO ATTACK:",
                'MIN 4 CHARACTERS',
                'MAX 20 CHRACTERS',
                'ONLY LETTERS AND NUMBERS',
                'SELECT A GATEWAY TO ATTACK:',
                'Connecting to the server - user ',
                'Running spyware test protocol... ',
                'Uploading malware modules...',
                'Loading trojan packages for firing. Please wait.',
                '//BREACH FOUND IN SERVER GATEWAY//'
            ],
            traducao.parte2 = [
                'Firewall recovery:',
                '//PROCESS COMPLETED//',
                ['1 and 8', '1 and 16', '1 and 24'],
                ['ATTEMPTS: ', 'KEY:'],
                '//LOG WARNING// connection to the server of user ',
                ' is successful.',
                '//FIREWALL NEUTRALIZED// 0.' + numeroAleatorio(100, 399) + 'ms',
                '//FIREWALL RECOVERY ATTEMPT IN PROGRESS//',
                'WARNING: ATTACK MODULE OVERLOADED. MANUAL INPUT REQUIRED // EXCEPTION(E): AUTOMATION PACKAGE DELETED BY ',
                'DETECTED KEY RANGE: INTEGER BETWEEN '
            ],
            traducao.parte3 = [
                'YOU LOSE!',
                'playAgain();',
                '//PROCESS INTERRUPTED//',
                '//MALWARE DEPLOY SUCCESS: CORRECT KEY//',
                'YOU WIN!',
                '//MALWARE DEPLOY EXCEPTION: INCORRECT KEY//',
                '//KEY DOLPHIN UNAVAILABLE: ACTIVATION TIME EXCEEDED//',
                'DECRYPTING...',
                '//DEVICE TEMPERATURE ABOVE RECOMMENDED//',
                '//RUNNING bruteForce(); SCRIPT ON NEUTRALIZED FIREWALL//'
            ],
            traducao.dolphin = [
                '//INTEL D.O.L.P.H.I.N. ACTIVATED//',
                '//RUNNING DOLPHIN//',
                [
                    'HELLO, COMRADE. I SEE YOUR NEW VICTIM IS NAMED ',
                    '. UNFORTUNATELY I DO NOT POSSESS CLAIRVOYANCE, SO YOU MUST SELECT THE DEVIANT KEYS FOUND IN MY SCAN. OH! ALLOW ME TO ASK YOU, ',
                    "WHAT'S IT LIKE TO REACH THE PRIME OF YOUR LIFE?"
                ],
                'ITERATION ',
                "I'M DECOMPILING THE KEYS. YOU CAN GRAB A COFFEE IF YOU'D LIKE.",
                '//PROCESS INTERRUPTED//',
                'FIREWALL BLOCKED. SUCCESSFUL MALWARE UPLOAD',
                'YOU WON DOLPHIN MODE!',
                '//PROCESS COMPLETED//',
                'DEVIANT KEYS: ',
                "FORGET THE COFFEE. I THINK YOU'VE ALREADY GOTTEN YOURSELF INTO TOO MUCH TROUBLE.",
                'FIREWALL RECOVERED. UNSUCCESSFUL MALWARE UPLOAD. CONNECTION TO SERVER INTERRUPTED BY FIREWALL',
                'YOU LOST DOLPHIN MODE',
                'MALWARE UPLOAD INTERRUPTED // DOLPHIN EXCEPTION(E): INSUFFICIENT DATA FOR COMPILATION'
            ]
        }
    }
}

function traduzirInicio(){
    for(i = 0; i < traducao.inicio.cores.length; i++){
        $('.cores ul').append('\
            <li id="cor' + i + '"><span>' + traducao.inicio.cores[i] + '</span></li>\
        ')
    }
    $('.cores ul li').eq(0).prepend('<span class="cores-selected">></span>')

    $('.sobre-jogo').append(traducao.inicio.sobre);
    
    $('#iniciar').append(traducao.inicio.principal[0]);
    $('.instrucoes ul').append('\
        <li><img id="palette" src="assets/palettes/palette-0.svg"><span>' + traducao.inicio.principal[1] +'</span></li>\
        <li><img id="readme" src="assets/readmes/readme-0.svg"><span>' + traducao.inicio.principal[2] + '</span></li>\
        <li><a href="https://github.com/JohnnyW23?tab=repositories" target="_blank"><img id="github" src="assets/githubs/github-0.svg"></a><span>' + traducao.inicio.principal[3] + '</span></li>\
    '),
    $('.modo-wraper h2').append(traducao.inicio.modo[0]);
    $('#defesa').append(traducao.inicio.modo[1]);
    $('#ataque').append(traducao.inicio.modo[2]);
}
