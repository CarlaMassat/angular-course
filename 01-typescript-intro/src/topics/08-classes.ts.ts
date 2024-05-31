//El constructor es el primer método que se ejecuta en forma automática al crear un objeto de la clase Persona
export class Persona {
  constructor(public name: string, public address: string) {}
}

// new instancia la clase Persona
const ironman = new Persona("Carla", "Rosario");
console.log(ironman);
