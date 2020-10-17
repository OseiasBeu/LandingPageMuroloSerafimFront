let nome = document.getElementById("nomeid");
let email = document.getElementById("emailid");
let phone = document.getElementById("phoneid");
let postBtn = document.getElementById("postBTN")


const sendData = () => {
    // verificar se o nome está vazio
    if (nome.value == "") {
      alert("Nome não informado");
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }
  
    if (email.value == "" || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1 ) {
      alert("Preencha o campo de email corretamente");
      email.focus();
      return;
    }
    if (phone.value == "" || phone.value.length < 8) {
      alert("O número de telefone está incorreto!");
      phone.focus();
      return;
    }
    postBtn.href = 'https://chat.whatsapp.com/CCl6fKnBlPz50nphJaBzHR'
    console.log('entrou')
    // validar()
    axios
      .post(
        'http://3.128.155.116:3001',
        {
          nome: nome.value,
          email: email.value,
          phne: phone.value
        },
        {
          // headers: {
          //   'Content-Type': 'application/json'
          // }
        }
      )
      .then(response => {
        console.log(response);
        
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };
  
 
postBtn.addEventListener('click', sendData);
