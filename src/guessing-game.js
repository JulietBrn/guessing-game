class GuessingGame {
    constructor() {

    }
    setRange(min, max) {
        this.min = min;
        this.max = max
    }
    
    guess() {
        this.guessNumber = Math.round((this.max + this.min)/2)

    //предполагать()
    //этот метод возвращает кандидата решения (вы делаете предположение на основе диапазона и предыдущих предположений)
        return this.guessNumber
    }
    lower() {
      return this.max = this.guessNumber
        
        //этот метод вызывается, если предыдущая функция предположения() вернула число, которое больше, чем ответ
    }
    
    greater() {
      return this.min = this.guessNumber
        //этот метод вызывается, если предыдущая функция предположения() вернула число меньше, чем ответ
    }
}


module.exports = GuessingGame;
