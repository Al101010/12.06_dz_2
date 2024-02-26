import Character from '../Character'

test('should myFunction: Magician', () => {
  const magicianOleg2 = {
    name: 'Oleg', 
    health: 100, 
    level: 1, 
    levelUp: function () {
      if (this.health <= 0) {
          throw new Error('Geme over, health <= 0');
      } 
      
      this.level += 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
    },
    type: 'Magician', 
    attack: 10, 
    defence: 40
  };
  const result = new Character('Oleg', 'Magician');
  expect(result).toEqual(magicianOleg2);
});
