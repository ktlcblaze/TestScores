//create an app that accepts a comma-separated list of test scores and displays the list of scores, the low score, the high score, and the average score rounded to 1 decimal.

function TestScores(params) {
    this.scores = params.split(',').map(Number);
    this.lowScore = Math.min(...this.scores);
    this.highScore = Math.max(...this.scores);
    this.averageScore = (this.scores.reduce((a, b) => a + b, 0) / this.scores.length).toFixed(1);       


    console.log("Scores: " + this.scores.join(', '));
    console.log("Low Score: " + this.lowScore);
    console.log("High Score: " + this.highScore);
    console.log("Average Score: " + this.averageScore);
    
}

new TestScores("85, 90, 78, 92, 88");






