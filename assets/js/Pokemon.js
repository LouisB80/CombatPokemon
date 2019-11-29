class Pokemon {
  constructor(name, type, attackName, damage) {
    this._name = name;
    this._type= type;
    this._attackName = attackName;
    this._damage = damage;
    this._life = 100;
  };
  isAlive() {
    if (this._life == 0) {
      console.log(`${this._name} est KO.`);
      return false
    }
    return true
  }
  attaquer(cible) {
    this.isAlive();
    cible.isAlive();
    if (this.isAlive() && cible.isAlive()) {
      if (this._type == 'feu' && cible._type == 'eau' || this._type == 'plante' && cible._type == 'feu' || this._type == 'eau' && cible._type == 'plante') {
        let dmg = Math.ceil(this._damage/2);
        cible._life -= dmg;
        if (cible._life < 0) {
          cible._life = 0;
        }
        console.log(`${this._name} lance l'attaque ${this._attackName}, ce n'est pas très efficace, ${cible._name} perd ${dmg} points de vie ! Il lui reste désormais ${cible._life} points de vie !`);
        cible.isAlive();
      }
      else if (this._type == 'eau' && cible._type == 'feu' || this._type == 'feu' && cible._type == 'plante' || this._type == 'plante' && cible._type == 'eau') {
        let dmg = Math.ceil(this._damage*2);
        cible._life -= dmg;
        if (cible._life < 0) {
          cible._life = 0;
        }
        console.log(`${this._name} lance l'attaque ${this._attackName}, c'est super efficace, ${cible._name} perd ${dmg} points de vie ! Il lui reste désormais ${cible._life} points de vie !`);
        cible.isAlive();
      }
      else {
        let dmg = Math.ceil(this._damage);
        cible._life -= dmg;
        if (cible._life < 0) {
          cible._life = 0;
        }
        console.log(`${this._name} lance l'attaque ${this._attackName}, ${cible._name} perd ${this._damage} points de vie ! Il lui reste désormais ${cible._life} points de vie !`);
        cible.isAlive();
      }
    }
    else if (!this.isAlive()) {
      console.log(`${this._name} ne peut pas attaquer, il est mort, veuillez séléctionner un autre attaquant !`);
    }
    else if (!cible.isAlive()) {
      console.log(`Erreur, ${cible._name} est mort, veuillez séléctionner une autre cible !`)
    }
  }
}
