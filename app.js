// Variável para armazenar a lista de carros
let carros = [  {
    id: '61',
    modelo: 'Truck',
    marca: 'Ford',
    ano: 2021,
    cor: 'White',
    preco: 35000
  },
  {
    id: '78',
    modelo: 'SUV',
    marca: 'Toyota',
    ano: 2022,
    cor: 'White',
    preco: 20000
  },
  {
    id: '2',
    modelo: 'Truck',
    marca: 'Honda',
    ano: 2022,
    cor: 'Blue',
    preco: 35000
  },
  {
    id: '17',
    modelo: 'Hatchback',
    marca: 'Toyota',
    ano: 2022,
    cor: 'Black',
    preco: 30000
  },
  {
    id: '27',
    modelo: 'Truck',
    marca: 'Ford',
    ano: 2021,
    cor: 'Red',
    preco: 35000
  },
  {
    id: '12',
    modelo: 'Truck',
    marca: 'Chevrolet',
    ano: 2021,
    cor: 'Black',
    preco: 30000
  },
  {
    id: '76',
    modelo: 'Hatchback',
    marca: 'Chevrolet',
    ano: 2021,
    cor: 'Blue',
    preco: 25000
  },
  {
    id: '58',
    modelo: 'SUV',
    marca: 'Ford',
    ano: 2020,
    cor: 'Red',
    preco: 30000
  },
  {
    id: '78',
    modelo: 'Truck',
    marca: 'Toyota',
    ano: 2020,
    cor: 'White',
    preco: 20000
  },
  {
    id: '41',
    modelo: 'Hatchback',
    marca: 'Ford',
    ano: 2022,
    cor: 'Black',
    preco: 25000
  }];

// Função para cadastrar um novo carro
function cadastrarCarro() {
  // Solicitar os dados do carro ao usuário
  let modelo = prompt("Digite o modelo do carro:");
  let marca = prompt("Digite a marca do carro:");
  let ano = prompt("Digite o ano do carro:");
  let cor = prompt("Digite a cor do carro:");
  let preco = prompt("Digite o preço do carro:");

  // Gerar um identificador único para o carro
  let id = carros.length + 1;

  // Criar um objeto com os dados do carro
  let novoCarro = {
    id: id,
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor,
    preco: preco
  };

  // Adicionar o carro à lista de carros
  carros.push(novoCarro);

  // Exibir mensagem de sucesso
  alert("Carro cadastrado com sucesso!");
}

// Função para listar todos os carros
function listarCarros() {
  // Verificar se existem carros cadastrados
  if (carros.length === 0) {
    alert("Não há carros cadastrados.");
  } else {
    // Percorrer a lista de carros e exibir os dados de cada um
    carros.forEach(function(carro) {
      console.log(`ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: R$${carro.preco}`);
    });
  }
}

// Função para filtrar carros por marca
function filtrarCarrosPorMarca() {
  // Solicitar a marca ao usuário
  let marca = prompt("Digite a marca do carro:");

  // Filtrar os carros pela marca informada
  let carrosFiltrados = carros.filter(function(carro) {
    return carro.marca.toLowerCase() === marca.toLowerCase();
  });

  // Verificar se existem carros da marca informada
  if (carrosFiltrados.length === 0) {
    alert("Não há carros da marca informada.");
  } else {
    // Percorrer a lista de carros filtrados e exibir os dados de cada um
    carrosFiltrados.forEach(function(carro) {
      console.log(`ID: ${carro.id} | Modelo: ${carro.modelo} | Cor: ${carro.cor} | Preço: R$${carro.preco}`);
    });
  }
}

// Função para atualizar um carro
function atualizarCarro() {
  // Solicitar o identificador do carro ao usuário
  let id = prompt("Digite o identificador do carro:");

  // Verificar se o carro existe na lista
  let carro = carros.find(function(carro) {
    return carro.id === parseInt(id);
  });

  // Se o carro não existir, exibir mensagem de erro
  if (!carro) {
    alert("Carro não encontrado. Retornando ao menu inicial.");
  } else {
    // Solicitar a cor e o preço atualizados ao usuário
    let cor = prompt("Digite a nova cor do carro:");
    let preco = prompt("Digite o novo preço do carro:");

    // Atualizar a cor e o preço do carro
    carro.cor = cor;
    carro.preco = preco;

    // Exibir mensagem de sucesso
    alert("Carro atualizado com sucesso!");
  }
}

// Função para remover um carro
function removerCarro() {
  // Solicitar o identificador do carro ao usuário
  let id = prompt("Digite o identificador do carro:");

  // Verificar se o carro existe na lista
  let index = carros.findIndex(function(carro) {
    return carro.id === parseInt(id);
  });

  // Se o carro não existir, exibir mensagem de erro
  if (index === -1) {
    alert("Carro não encontrado. Retornando ao menu inicial.");
  } else {
    // Remover o carro da lista
    carros.splice(index, 1);

    // Exibir mensagem de sucesso
    alert("Carro removido com sucesso!");
  }
}


function filtrarCarrosPorFaixaDePreco() {
  const valorMinimo = Number(prompt('Insira o valor mínimo:'));
  const valorMaximo = Number(prompt('Insira o valor máximo:'));
 
  const carrosFiltrados = carros.filter(carro =>{
    return carro.preco >= valorMinimo && carro.preco <= valorMaximo;
  })
 
  console.log('Carros filtrados:');  // Exibir carros filtrados
  carrosFiltrados.forEach(carro => {
     console.log(`${carro.marca} ${carro.modelo} - R$ ${carro.preco}`);
  });
 
  return carrosFiltrados; // Retornar a lista filtrada
 }

 function filtrarCarrosMaisCaro (){
  carros.sort((a,b)=>{
    return b.preco - a.preco
  })
  console.log(carros[0])
 }


 



// Função principal para interagir com o sistema
function main() {
  let opcao;

  do {
    // Exibir o menu de opções
    opcao = prompt(`Bem-vindo ao sistema de CRUD de veículos:

    No momento, o sistema tem ${carros.length} carros cadastrados.

    Escolha uma das opções para interagir com o sistema:
    1 - Cadastrar veículo
    2 - Listar todos os veículos
    3 - Filtrar veículos por marca
    4 - Atualizar veículo
    5 - Remover veículo
    6 - Filtrar veiculos por faixa de preço
    7 - Filtrar carro mais caro
    8 - Sair do sistema`);

    // Executar a opção escolhida pelo usuário
    switch (opcao) {
      case "1":
        cadastrarCarro();
        break;
      case "2":
        listarCarros();
        break;
      case "3":
        filtrarCarrosPorMarca();
        break;
      case "4":
        atualizarCarro();
        break;
      case "5":
        removerCarro();
        break;
      case "6":
        filtrarCarrosPorFaixaDePreco();
        break;
      case "7":
        filtrarCarrosMaisCaro();
        break;
      case "8":
        alert("Saindo do sistema. Até logo!")
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        break;
    }
  } while (opcao !== "7");
}

// Chamar a função principal para iniciar o sistema
main();




