export default class Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 ) {
            this.name = name;
            this.health = 100;
            this.level = 1;
        } else {
            throw new Error("10 >= name >= 2");
        }

        if (type === 'Bowman'){
            this.type = 'Bowman';
            this.attack = 25;
            this.defence = 25;
        } else if (type === 'Swordsman') {
            this.type = 'Swordsman';
            this.attack = 40;
            this.defence = 10;
        } else if (type === 'Magician') {
            this.type = 'Magician';
            this.attack = 10;
            this.defence = 40;
        } else if (type === 'Undead') {
            this.type = 'Undead';
            this.attack = 25;
            this.defence = 25;
        } else if (type === 'Zombie') {
            this.type = 'Zombie';
            this.attack = 40;
            this.defence = 10;
        } else if (type === 'Daemon') {
            this.type = 'Daemon';
            this.attack = 10;
            this.defence = 40;
        } else {
            throw new Error("one of the types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
            // const error = new Error("KRAH")
        }
    }
    
    levelUp = function () {
        if (this.health <= 0) {
            throw new Error('Geme over, health <= 0');
        } 
        
        this.level += 1;
        this.attack = this.attack * 1.2;
        this.defence = this.defence * 1.2;
        this.health = 100;
    };

}



// export default class Character {
//     constructor() {
//         levelUp = function () {
//             if (this.health <= 0) {
//                 throw new Error('Geme over, health <= 0');
//             } 

//             this.level += 1;
//             this.attack = this.attack * 1.2;
//             this.defence = this.defence * 1.2;
//             this.health = 100;
//         };

//         damage =  function(points) {
//             if (this.health <= 0) {
//                 throw new Error('Geme over, health <= 0');
//             }

//             this.health -= points * (1 - defence / 100);
//         };
//     }
// }