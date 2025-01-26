const myArrayObj = [
    {
      nome: "Sergio",
      sobreNome: "Soares",
    },
    {
      nome: "Nay",
      sobreNome: "Soares",
    },
    {
      nome: "José 0",
      sobreNome: "Soares",
    },
    {
      nome: "José 1",
      sobreNome: "Soares",
    },
    {
      nome: "José 2",
      sobreNome: "Soares",
    },
    {
      nome: "José 3",
      sobreNome: "Soares",
    },
  ];
  
  for (let item of myArrayObj) {
    if (item.nome === "Nay") {
      console.log("O mozão ta te esperando");
      continue;
    }
  
    if (item.nome === "José 1") {
      console.log("Lembrar de enviar um SMS");
      break;
    }
    console.log(item);
  }