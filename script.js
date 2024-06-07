importar  {  aleatório ,  nome  }  de  './aleatório.js' ;
importar  {  perguntas  }  de  './perguntas.js' ;

const  caixaPrincipal  =  documento . querySelector ( ".caixa-principal" ) ;
const  caixaPerguntas  =  documento . querySelector ( ".caixa-perguntas" ) ;
const  caixaAlternativas  =  documento . querySelector ( ".caixa-alternativas" ) ;
const  caixaResultado  =  documento . querySelector ( ".caixa-resultado" ) ;
const  textoResultado  =  documento . querySelector ( ".texto-resultado" ) ;
const  botaoJogarNovamente  =  document . querySelector ( ".novamente-btn" ) ;
const  botaoIniciar  =  documento . querySelector ( ".iniciar-btn" ) ;
const  telaInicial  =  documento . querySelector ( ".tela-inicial" ) ;

deixe  atual  =  0 ;
deixe  perguntaAtual ;
deixe  historiaFinal  =  "" ;

botaoIniciar . addEventListener ( 'clique' ,  iniciaJogo ) ;

function  iniciaJogo ( )  {
    atual  =  0 ;
    historiaFinal  =  "" ;
    telaInicial . estilo . exibir  =  'nenhum' ;
    caixaPerguntas . lista de classes . remover ( "mostrar" ) ;
    caixaAlternativas . lista de classes . remover ( "mostrar" ) ;
    caixaResultado . lista de classes . remover ( "mostrar" ) ;
    mostraPergunta ( ) ;
}

function  mostraPergunta ( )  {
    if  ( atual  >=  perguntas . length )  {
        mostraResultado ( ) ;
        retornar ;
    }
    perguntaAtual  =  perguntas [ atual ] ;
    caixaPerguntas . textContent  =  perguntaAtual . anunciado ;
    caixaAlternativas . textContent  =  "" ;
    mostraAlternativas ( ) ;
}

function  mostraAlternativas ( )  {
    for  ( const  alternativa  de  perguntaAtual . alternativas )  {
        const  botaoAlternativas  =  document . createElement ( "botão" ) ;
        botaoAlternativas . textContent  =  alternativa . texto ;
        botaoAlternativas . addEventListener ( "click" ,  ( )  =>  respostasSelecionada ( alternativa ) ) ;
        caixaAlternativas . appendChild ( botaoAlternativas ) ;
    }
}

function  respostasSelecionada ( opcaoSelecionada )  {
    const  afirmacoes  =  aleatorio ( opcaoSelecionada . afirmacao ) ;
    historiaFinal  +=  afirmações  +  " " ;
    if  ( opcaoSelecionada . proxima  !==  indefinido )  {
        atual  =  opcaoSelecionada . próximo ;
    }  outro  {
        mostraResultado ( ) ;
        retornar ;
    }
    mostraPergunta ( ) ;
}

function  mostraResultado ( )  {
    caixaPerguntas . textContent  =  `Em 2049, ${ nome } ` ;
    textoResultado . textContent  =  historiaFinal ;
    caixaAlternativas . textContent  =  "" ;
    caixaResultado . lista de classes . add ( "mostrar" ) ;
    botaoJogarNovamente . addEventListener ( "clique" ,  jogaNovamente ) ;
}

function  jogaNovamente ( )  {
    atual  =  0 ;
    historiaFinal  =  "" ;
    caixaResultado . lista de classes . remover ( "mostrar" ) ;
    mostraPergunta ( ) ;
}

function  substituiNome ( )  {
    for  ( const  pergunta  de  perguntas )  {
        pergunta . enunciado  =  pergunta . anunciado . substituir ( / você / g ,  nome ) ;
    }
}

substituiNome ( ) ;