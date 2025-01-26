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
      nome: "José",
      sobreNome: "Soares",
    },
  ];
  
  myArrayObj.forEach((item, index) => {
    if (item.nome === "Nay") {
      return console.log("O Mozão ta te esperando");
    }
  
    console.log(index, item.nome);
  });