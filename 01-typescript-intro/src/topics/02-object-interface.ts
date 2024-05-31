// objetos, arreglos e interfaces
// array de string 
// sintaxis --> const o let variable: string [] = [valores string]
// sintaxis interface --> Interface nombre { propiedades: tipo dato string, number}
const skills: string [] = ['Bash', 'Counter','Healing'];

// interfaz, para instanciar la llamo en el objeto
// hometown? significa que es opcional

interface Character  {
name: string;
hp: number;
skills: string [];
hometown?: string;
}

//objeto literal
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
}

strider.hometown = 'Rivendell'
console.table(strider);

export {}