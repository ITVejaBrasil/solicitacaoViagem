// Captura o checkbox de hotel
var checkboxHotel = document.getElementById('hotel');
// Captura os campos de data de check-in e check-out
var camposData = document.getElementById('campos_data');

// Adiciona um evento de mudança ao checkbox de hotel
checkboxHotel.addEventListener('change', function() {
  // Se o checkbox de hotel estiver marcado, exibe os campos de data
  if (this.checked) {
    camposData.style.display = 'block';
  } else {
    // Caso contrário, oculta os campos de data
    camposData.style.display = 'none';
    // Também limpa os valores dos campos de data, caso estejam preenchidos
    document.getElementById('check_in').value = '';
    document.getElementById('check_out').value = '';
  }
});


// Captura o número de viajantes do campo correspondente
var numViajantes = document.getElementById('num_pessoas');
// Captura o botão "Próximo" do modal
var btnProximo = document.getElementById('btnProximo');
// Contador para controlar o número de viajantes inseridos
var contadorViajantes = 0;

// Adiciona um evento de clique ao botão "Próximo"
btnProximo.addEventListener('click', function() {
  // Incrementa o contador de viajantes
  contadorViajantes++;

  // Captura o nome do viajante do campo correspondente
  var nomeViajante = document.getElementById('nomeViajante').value;

  // Aqui você pode realizar outras operações com os dados do viajante, como enviá-los para o servidor, armazená-los em um array, etc.

  // Limpa o campo de nome do viajante para o próximo preenchimento
  document.getElementById('nomeViajante').value = '';

  // Se o número de viajantes inseridos for igual ao número total de viajantes, fecha o modal
  if (contadorViajantes >= parseInt(numViajantes.value)) {
    $('#modalViajantes').modal('hide');
    // Reseta o contador de viajantes para a próxima abertura do modal
    contadorViajantes = 0;
  }
});


// Captura o botão de adicionar viagem
var btnAdicionarViagem = document.getElementById('btnAdicionarViagem');
// Captura o container das viagens
var viagensContainer = document.getElementById('viagensContainer');
// Template HTML para uma nova viagem
var templateViagem = `
  <div class="row mb-3 viagem">
    <div class="col-md-4">
      <label for="destino" class="form-label">Destino:</label>
      <input type="text" class="form-control" name="destino[]" required>
    </div>
    <div class="col-md-4">
      <label for="data_inicial" class="form-label">Data Inicial:</label>
      <input type="date" class="form-control" name="data_inicial[]" required>
    </div>
    <div class="col-md-4">
      <label for="data_final" class="form-label">Data Final:</label>
      <input type="date" class="form-control" name="data_final[]" required>
    </div>
  </div>
`;

// // Adiciona um evento de clique ao botão de adicionar viagem
// btnAdicionarViagem.addEventListener('click', function() {
//   // Cria um novo elemento div para a viagem e insere o HTML do template
//   var novaViagem = document.createElement('div');
//   novaViagem.classList.add('row', 'mb-3', 'viagem');
//   novaViagem.innerHTML = templateViagem;

//   // Insere a nova viagem no container das viagens
//   viagensContainer.appendChild(novaViagem);
// });

// // Adiciona um evento de clique ao botão de remover viagem
// viagensContainer.addEventListener('click', function(event) {
//   // Verifica se o elemento clicado é um botão de remover viagem
//   if (event.target.classList.contains('btnRemoverViagem')) {
//       // Remove o elemento pai (a div da viagem) do botão clicado
//       event.target.closest('.viagem').remove();
//   }
// });
// Adiciona um evento de clique ao botão de adicionar viagem
btnAdicionarViagem.addEventListener('click', function() {
  // Cria um novo elemento div para a viagem e insere o HTML do template
  var novaViagem = document.createElement('div');
  novaViagem.classList.add('row', 'mb-3', 'viagem');
  novaViagem.innerHTML = templateViagem;

// Adiciona um botão de remover à nova linha de viagem
var botaoRemover = document.createElement('button');
botaoRemover.type = 'button';
botaoRemover.classList.add('btn', 'btn-secondary', 'btnRemoverViagem');

// Adiciona o ícone de lixeira ao botão de remover
var iconeLixeira = document.createElement('i');
iconeLixeira.classList.add('fas', 'fa-trash-alt');
botaoRemover.appendChild(iconeLixeira);

botaoRemover.addEventListener('click', function() {
    novaViagem.remove();
});

// Insere o botão de remover na nova linha de viagem
novaViagem.querySelector('.col-md-4:last-child').appendChild(botaoRemover);


  // Insere a nova viagem no container das viagens
  viagensContainer.appendChild(novaViagem);
});