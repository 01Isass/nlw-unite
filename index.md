fronteditor.dev/nlw-unite

table = tabela        "th"=cabeçalho        tr=linhas         th=coluna?     tbody=corpo da tabela      td=onde vou colocar as infos q vou ver em cada parte da tabela



const=variavel q n vai mudar de valor  let=variavel q permite q o valor seja alterado
//objeto javascript
const participante = {
  nome: "Mayk",
  email: "maik@outlook.com"
  dataInscricao: new Date(2024,2, 22, 19, 20),
  dataCheckIn: new Date(2024,2,25,22,00)
}
//array
let participantes = [
  {
  nome: "Mayk",
  email: "maik@outlook.com"
  dataInscricao: new Date(2024,2, 22, 19, 20),
  dataCheckIn: new Date(2024,2,25,22,00)
  }
]

//estrutura de repetição - loop
  for(let participante of participantes){
    faça alguma coisa aqui
    enquanto tiver participantes nessa lista
  }
