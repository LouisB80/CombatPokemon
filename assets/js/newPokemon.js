var types = ['feu', 'eau', 'plante'];

//var NomPokemon = new Pokemon(name, type, attackName, damage)
var Dracaufeu = new Pokemon('Dracaufeu', types[0], 'Lance-Flammes', 40);
var Tortank = new Pokemon('Tortank', types[1], 'Hydrocanon', 40);
var Florizzare = new Pokemon('Florizzare', types[2], 'Lance-Soleil', 40);
var Arcanin = new Pokemon('Arcanin', types[0], 'Roue de feu', 35);
var Staross = new Pokemon('Staross', types[1], 'Surf', 20);
var Noadkoko = new Pokemon('Noadkoko', types[2], 'Tranche-herbe', 25);

var equipe = [Dracaufeu, Florizzare, Tortank, Arcanin, Staross, Noadkoko];
var attaquant = '', cible = '';
console.log(equipe);


//Création de l'événement de sélection d'attaquant et de cible au clic
$('div').on('click', function(){
  console.log('id :', $(this).attr('id'));
  let obj = $(this).attr('id');
  $.each(equipe, function(index, elm){
    if (elm._name == obj && attaquant == ''){
      attaquant = elm;
    }
    else if (elm._name == obj && cible == '') {
      cible = elm;
    }
    else if (attaquant != '' && cible != '') {
      attaquant.attaquer(cible);
      cible.attaquer(attaquant);
      attaquant = '';
      cible = '';
    }
  })
  return console.log('attaquant', attaquant);
})
