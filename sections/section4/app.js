const getRandomValue = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    }
  },
  computed: {
    monsterBarStyles(){
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyles(){
      return {width: this.playerHealth + '%'};
    },
    mayUseSpecialAttack(){
      return this.currentRound % 3 !== 0;
    }
  },
  watch: {
    playerHealth(value){
      if(value <= 0 && this.monsterHealth <= 0){
        // draw
        this.winner = 'draw';
      } else if(value <= 0){
        // monster wins
        this.winner = 'monster';
      }
    },
    monsterHealth(value){
      if(value <= 0 && this.playerHealth <= 0){
        // draw
        this.winner = 'draw';
      } else if(value <= 0){
        // player wins
        this.winner = 'player';
      }
    },
  },
  methods: {
    addLogMessage(who, what, value){
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    },
    attackMonster(){
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      console.log(this.monsterHealth);
      this.attakPlayer();
    },
    attakPlayer(){
      const attackValue = getRandomValue(15, 8);
      this.addLogMessage('monster', 'attack', attackValue);
      if(this.playerHealth - attackValue < 0){
        this.playerHealth = 0;
      } else {
      this.playerHealth -= attackValue;
      }
    },
    specialAttackMonster(){
      this.currentRound++;
      const attackValue = getRandomValue(25, 10);
      this.addLogMessage('player', 'attack', attackValue);
      if(this.monsterHealth - attackValue < 0){
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      }
      this.attakPlayer();
    },
    healPlayer(){
      this.currentRound++;
      const healValue = getRandomValue(20, 8);
      this.addLogMessage('player', 'heal', healValue);
      if(this.playerHealth + healValue > 100){
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attakPlayer();
    },
    startNewGame(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrender(){
      this.winner = 'monster';
      this.addLogMessage('player', 'surrender', 0);
    }
  }
});

app.mount("#game");