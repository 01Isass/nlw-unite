let participantes = [
    {nome: "Mayk",
    email: "maik@outlook.com",
    dataInscricao: new Date(2024,2, 22, 19, 20),
    dataCheckIn: new Date(2024,2,25,22,00)
    },
    {nome: "Kauan",
    email: "kauanlip@gmail.com",
    dataInscricao: new Date(2024,3, 18, 9, 12),
    dataCheckIn: new Date(2024,3,21,12,30)
    },
    {nome: "Maria",
    email: "maria@example.com",
    dataInscricao: new Date(2024,2, 23, 14, 45),
    dataCheckIn: null
    },
    {nome: "João",
    email: "joao@example.com",
    dataInscricao: new Date(2024,3, 1, 10, 30),
    dataCheckIn: null
    },
    {nome: "Ana",
    email: "ana@example.com",
    dataInscricao: new Date(2024,2, 28, 8, 0),
    dataCheckIn: new Date(2024,3,2,11,15)
    },
    {nome: "Pedro",
    email: "pedro@example.com",
    dataInscricao: new Date(2024,2, 20, 17, 30),
    dataCheckIn: new Date(2024,2,22,20,45)
    },
    {nome: "Carla",
    email: "carla@example.com",
    dataInscricao: new Date(2024,3, 10, 13, 10),
    dataCheckIn: new Date(2024,3,13,10,20)
    },
    {nome: "Lucas",
    email: "lucas@example.com",
    dataInscricao: new Date(2024,2, 19, 9, 0),
    dataCheckIn: null
    }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

//condicional
if(participante.dataCheckIn == null) {
dataCheckIn = `
<button
data-email="${participante.email}"
onclick="fazerCheckIn(event)"
>
Confirmar Check-in
</button> 
`
}

  return `
  <tr>
      <td>
      <strong>
      ${participante.nome}
      </strong>
      <br>
      <small>
      ${participante.email}
      </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
    `
}

const atualizarlista = (participantes) => {
  let output =""
  //estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }
  //substituír informação do HTML
  document.querySelector ('tbody').innerHTML= output
}

atualizarlista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

const dadosDoFormulario = new FormData (event.target)

const participante = {
  nome: dadosDoFormulario.get('nome'),
  email: dadosDoFormulario.get('email'),
  dataInscricao: new Date (),
  dataCheckIn: null
}

//verificar se o participante ja existe
const participanteExiste = participantes.find(
  (p) => p.email == participante.email

)
if(participanteExiste) {
  alert ('Email já cadastrado')
  return
}


participantes = [participante, ...participantes]
atualizarlista(participantes)
//limpar o formulário
event.target.querySelector('[name="nome"]').value = "";
event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckIn = (event) => {
//confirmar se realmente quer o check-in

if(confirm('Tem certeza que deseja fazer o check-in?') == false) {
  return
}



  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => p.email == event.target.dataset.email
  )
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  //atualizar a lista de participantes
  atualizarlista(participantes)
}