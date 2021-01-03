new Vue({
  el: "#app",
  data: {
    isOn: false,
    myHealth: 100,
    enemyHealth: 100,
    actions: [],
    types: [
      "Canavarın Canını azalttın",
      "Özel Saldırı",
      "Sağlık Tamlaması",
    ],
  },
  methods: {
    logAction(f, t, q) {
      if (this.actions.length >= 14) {
        this.actions.shift();
      }
      myObj = { from: f, type: t, quantity: q };
      this.actions.push(myObj);
    },
    newGame() {
      this.isOn = true;
      this.myHealth = 100;
      this.enemyHealth = 100;
      this.actions = [];
    },
    gameOver() {
      this.isOn = false;
    },
    attack() {
      rand = this.getRandomNumber(2, 16);
      this.logAction("player-turn", this.types[0], rand);
      this.enemyHealth += -rand;
      this.monsterAttack(0);
    },
    specialAttack() {
      type = this.types[1];
      rand = this.getRandomNumber(10, 26);
      if (rand === 25) {
        type = "Ultra Özel Saldırı";
        rand = 99999;
      }
      this.enemyHealth += -rand;
      this.logAction("player-turn", type, rand);
      this.monsterAttack(0);
    },
    monsterAttack(heal) {
      rand = this.getRandomNumber(6, 21);
      this.logAction("monster-turn", "Canavar Saldırısı", rand);
      this.myHealth += heal - rand;
    },
    healUp() {
      rand = this.getRandomNumber(20, 36);
      this.logAction("player-turn", this.types[2], rand);
      //this.myHealth += rand;
      this.monsterAttack(rand);
    },
    giveUp()
    {
      this.gameOver();
    },
    getRandomNumber(lb, ub) {
      return Math.floor(Math.random() * (ub - lb) + lb);
    },
  },
  watch: {
    myHealth(value) {
      if (value <= 0) {
        this.myHealth = 0;
        this.gameOver();
      } else if (value >= 100) {
        this.myHealth = 100;
      }
    },
    enemyHealth(value) {
      if (value <= 0) {
        this.enemyHealth = 0;
        this.gameOver();
      } else if (value >= 100) {
        this.enemyHealth = 100; // unnecessary but why not :p
      }
    },
  },
});