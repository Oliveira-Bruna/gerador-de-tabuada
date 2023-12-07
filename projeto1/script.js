function resolverTabuada() {
  document.getElementById('output').innerHTML = '';

  var numeroTabuada = document.getElementById('numero').value;

  var table = document.createElement('table');
  
  for (var i = 1; i <= 10; i++) {
    var resultado = numeroTabuada * i;

    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.textContent = numeroTabuada + ' x ' + i + "=";
    cell2.textContent =  resultado;
  }

  document.getElementById('output').appendChild(table);
}

alet("Ola mundo");