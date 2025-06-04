const questions = [
  { question: "Who built the ark?", answers: ["Moses", "Noah", "Abraham", "David"], correct: 1 },
  { question: "How many days and nights did it rain during the flood?", answers: ["10", "20", "40", "70"], correct: 2 },
  { question: "Jesus turned water into wine at a wedding.", answers: ["True", "False"], correct: 0 },
  { question: "Paul was one of the twelve original apostles.", answers: ["True", "False"], correct: 1 },
  { question: "Who interpreted Pharaoh’s dream in Egypt?", answers: ["Daniel", "Joseph", "Moses", "Elijah"], correct: 1 },
  { question: "What is the first book of the Bible?", answers: ["Exodus", "Genesis", "Leviticus", "Psalms"], correct: 1 },
  { question: "How many disciples did Jesus have?", answers: ["10", "11", "12", "13"], correct: 2 },
  { question: "Where was Jesus born?", answers: ["Nazareth", "Bethlehem", "Jerusalem", "Galilee"], correct: 1 },
  { question: "Which book contains the Ten Commandments?", answers: ["Exodus", "Numbers", "Genesis", "Joshua"], correct: 0 },
  { question: "What did Jesus feed 5,000 people with?", answers: ["Fish and meat", "Bread and wine", "Loaves and fishes", "Manna and quail"], correct: 2 },{ question: "What is the shortest verse in the Bible?", answers: ["Jesus wept.", "Rejoice always.", "Love one another.", "Pray continually."], correct: 0 },
{ question: "Who was swallowed by a great fish?", answers: ["Elijah", "Noah", "Jonah", "Moses"], correct: 2 },
{ question: "How many books are in the Bible?", answers: ["66", "72", "39", "27"], correct: 0 },
{ question: "What was the name of the garden where Adam and Eve lived?", answers: ["Eden", "Gethsemane", "Galilee", "Sinai"], correct: 0 },
{ question: "Who led the Israelites out of Egypt?", answers: ["Abraham", "Moses", "Joshua", "Aaron"], correct: 1 },
{ question: "What is the last book of the New Testament?", answers: ["Jude", "Revelation", "Acts", "Hebrews"], correct: 1 },
{ question: "Who was the first king of Israel?", answers: ["David", "Saul", "Solomon", "Samuel"], correct: 1 },
{ question: "What is the first commandment?", answers: ["Do not steal", "Honor your parents", "No other gods before Me", "Do not kill"], correct: 2 },
{ question: "Who denied Jesus three times?", answers: ["Judas", "Thomas", "Peter", "John"], correct: 2 },
{ question: "Where was Jesus baptized?", answers: ["Sea of Galilee", "Jordan River", "Red Sea", "Dead Sea"], correct: 1 },
{ question: "How many days did God take to create the world?", answers: ["5", "6", "7", "8"], correct: 1 },
{ question: "What happened on the seventh day of creation?", answers: ["Sun was made", "Man was made", "Animals were created", "God rested"], correct: 3 },
{ question: "What kind of insect did John the Baptist eat?", answers: ["Bees", "Ants", "Locusts", "Crickets"], correct: 2 },
{ question: "Who was known for his strength and long hair?", answers: ["David", "Goliath", "Absalom", "Samson"], correct: 3 },
{ question: "What is the name of Jesus' mother?", answers: ["Elizabeth", "Mary", "Martha", "Anna"], correct: 1 },
{ question: "Who was thrown into the lion's den?", answers: ["David", "Daniel", "Elijah", "Joseph"], correct: 1 },
{ question: "Which apostle betrayed Jesus?", answers: ["Peter", "James", "John", "Judas"], correct: 3 },
{ question: "What city’s walls fell after being marched around?", answers: ["Jericho", "Babylon", "Nineveh", "Bethlehem"], correct: 0 },
{ question: "Who wrote most of the Psalms?", answers: ["Moses", "Solomon", "David", "Samuel"], correct: 2 },
{ question: "Which New Testament book tells about the early church?", answers: ["Romans", "Acts", "James", "Galatians"], correct: 1 },{ question: "Which disciple walked on water with Jesus?", answers: ["James", "John", "Peter", "Andrew"], correct: 2 },
{ question: "Who received the Ten Commandments from God?", answers: ["Joshua", "Aaron", "Moses", "Noah"], correct: 2 },{ question: "Who was the first man?", answers: ["Noah", "Adam", "Abraham", "Jacob"], correct: 1 },
{ question: "Who was the first woman?", answers: ["Eve", "Sarah", "Mary", "Rachel"], correct: 0 },
{ question: "What did God create on the first day?", answers: ["Land", "Sky", "Light", "Animals"], correct: 2 },
{ question: "What was Paul's name before conversion?", answers: ["Peter", "Saul", "Stephen", "John"], correct: 1 },
{ question: "What was created on the sixth day?", answers: ["Sun", "Fish", "Man", "Birds"], correct: 2 },
{ question: "Who built the temple in Jerusalem?", answers: ["David", "Solomon", "Saul", "Samuel"], correct: 1 },
{ question: "What is the Bible’s longest verse?", answers: ["Esther 8:9", "Psalm 119:1", "John 3:16", "Genesis 1:1"], correct: 0 },
{ question: "What is the Bible’s shortest chapter?", answers: ["Psalm 23", "Psalm 117", "Psalm 1", "John 11"], correct: 1 },{ question: "Who was the mother of Samuel?", answers: ["Hannah", "Elizabeth", "Sarah", "Rebekah"], correct: 0 },
{ question: "Who was the giant killed by David?", answers: ["Saul", "Goliath", "Absalom", "Nebuchadnezzar"], correct: 1 },
{ question: "What is the name of the first murderer in the Bible?", answers: ["Cain", "Abel", "Esau", "Lamech"], correct: 0 },
{ question: "Who dreamed of a ladder reaching to heaven?", answers: ["Jacob", "Joseph", "Daniel", "Abraham"], correct: 0 },
{ question: "What did God use to speak to Moses in the desert?", answers: ["Thunder", "Angel", "Burning bush", "Whirlwind"], correct: 2 },
{ question: "What did God tell Noah to build?", answers: ["Temple", "Tower", "Boat", "Ark"], correct: 3 },
{ question: "Who betrayed Jesus with a kiss?", answers: ["Peter", "John", "Judas", "Thomas"], correct: 2 },
{ question: "What did Jesus do before He was arrested?", answers: ["Ate dinner", "Healed a blind man", "Prayed in Gethsemane", "Preached to a crowd"], correct: 2 },
{ question: "What animal spoke to Balaam?", answers: ["Horse", "Donkey", "Lion", "Sheep"], correct: 1 },
{ question: "Which book tells the story of creation?", answers: ["Exodus", "Leviticus", "Genesis", "Job"], correct: 2 },
{ question: "Who was the wife of Isaac?", answers: ["Leah", "Rebekah", "Rachel", "Hannah"], correct: 1 },
{ question: "How many plagues did God send on Egypt?", answers: ["5", "7", "10", "12"], correct: 2 },
{ question: "Who rebuilt the walls of Jerusalem?", answers: ["Ezra", "Nehemiah", "Solomon", "David"], correct: 1 },
{ question: "Which book comes after Proverbs?", answers: ["Job", "Ecclesiastes", "Psalms", "Isaiah"], correct: 1 },
{ question: "How many times did Peter deny Jesus?", answers: ["One", "Two", "Three", "Four"], correct: 2 },
{ question: "What was the sign of God's covenant with Noah?", answers: ["Fire", "Ark", "Rainbow", "Dove"], correct: 2 },
{ question: "Which book has the story of the prodigal son?", answers: ["Matthew", "Luke", "Mark", "John"], correct: 1 },
{ question: "What mountain did Moses receive the commandments on?", answers: ["Zion", "Sinai", "Olives", "Carmel"], correct: 1 },
{ question: "Who was thrown into prison for interpreting dreams?", answers: ["Daniel", "Jeremiah", "Joseph", "Paul"], correct: 2 },
{ question: "What did the Israelites cross to escape Egypt?", answers: ["Nile", "Jordan", "Red Sea", "Tigris"], correct: 2 },
{ question: "Which apostle was a doctor?", answers: ["Matthew", "Peter", "Luke", "Thomas"], correct: 2 },
{ question: "Who interpreted Nebuchadnezzar’s dreams?", answers: ["Ezra", "Moses", "Daniel", "Elisha"], correct: 2 },
{ question: "Who was Ruth's mother-in-law?", answers: ["Mary", "Rachel", "Naomi", "Deborah"], correct: 2 },
{ question: "Which king wrote much of Proverbs?", answers: ["David", "Solomon", "Saul", "Josiah"], correct: 1 },
{ question: "Which sea did Moses part?", answers: ["Mediterranean", "Jordan", "Dead Sea", "Red Sea"], correct: 3 },
{ question: "Who was turned into a pillar of salt?", answers: ["Sarah", "Lot's wife", "Rebekah", "Rachel"], correct: 1 },
{ question: "What was Jesus’ first miracle?", answers: ["Walking on water", "Healing a blind man", "Turning water into wine", "Raising Lazarus"], correct: 2 },
{ question: "What’s the first miracle in Acts?", answers: ["Healing a lame man", "Tongues of fire", "Blinding of Saul", "Ananias struck dead"], correct: 1 },
{ question: "Who climbed a sycamore tree to see Jesus?", answers: ["Peter", "Zacchaeus", "Nicodemus", "Andrew"], correct: 1 },
{ question: "What does 'Emmanuel' mean?", answers: ["Savior", "God with us", "Messiah", "Light of the World"], correct: 1 },
{ question: "Which Old Testament book is mostly poetry?", answers: ["Genesis", "Job", "Proverbs", "Psalms"], correct: 3 },
{ question: "Who anointed David as king?", answers: ["Nathan", "Samuel", "Eli", "Solomon"], correct: 1 },
{ question: "Which Old Testament figure was thrown into a fiery furnace?", answers: ["Elisha", "Shadrach", "Daniel", "Ezra"], correct: 1 },
{ question: "What river did the Israelites cross to enter the Promised Land?", answers: ["Nile", "Euphrates", "Jordan", "Tigris"], correct: 2 },
{ question: "Who was Jesus’ earthly father?", answers: ["Joseph", "Zechariah", "Peter", "John"], correct: 0 },
{ question: "How many people were on Noah’s ark?", answers: ["2", "4", "6", "8"], correct: 3 },
{ question: "What is the last word in the Bible?", answers: ["Amen", "Faith", "Jesus", "Peace"], correct: 0 },
{ question: "Who was the oldest man in the Bible?", answers: ["Noah", "Adam", "Methuselah", "Abraham"], correct: 2 },
{ question: "How did Judas die?", answers: ["Stoned", "Crucified", "Hanged himself", "Beheaded"], correct: 2 },
{ question: "Who was the Roman governor who sentenced Jesus?", answers: ["Herod", "Pilate", "Caesar", "Felix"], correct: 1 },
{ question: "In the parable, who helped the man attacked by robbers?", answers: ["Pharisee", "Levite", "Samaritan", "Priest"], correct: 2 },
{ question: "What is the golden rule?", answers: ["Love your neighbor", "Treat others as you'd like to be treated", "Pray without ceasing", "Obey your parents"], correct: 1 },
{ question: "Who was the father of John the Baptist?", answers: ["Joseph", "Zacharias", "Simeon", "Philip"], correct: 1 },
{ question: "Who had a coat of many colors?", answers: ["Jacob", "Isaac", "Joseph", "Esau"], correct: 2 },
{ question: "Who did David defeat with a sling?", answers: ["Saul", "Goliath", "Absalom", "Jonathan"], correct: 1 },
{ question: "What did God give the Israelites to eat in the desert?", answers: ["Manna", "Fish", "Quail", "Milk and honey"], correct: 0 },
{ question: "Which apostle doubted Jesus' resurrection?", answers: ["Peter", "James", "John", "Thomas"], correct: 3 },
{ question: "What is the longest book in the Bible?", answers: ["Isaiah", "Genesis", "Psalms", "Jeremiah"], correct: 2 },
{ question: "Which prophet was taken to heaven in a chariot of fire?", answers: ["Elijah", "Elisha", "Isaiah", "Daniel"], correct: 0 },
{ question: "What was the occupation of Matthew?", answers: ["Fisherman", "Carpenter", "Tax collector", "Shepherd"], correct: 2 },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById('startBtn');
const quizContainer = document.getElementById('quiz');
const startScreen = document.getElementById('start-screen');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const shareBtn = document.getElementById('share-button');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const backgroundMusic = document.getElementById('background-music');

startBtn.addEventListener('click', startGame);

function startGame() {
  startScreen.style.display = 'none';
  quizContainer.style.display = 'block';
  backgroundMusic.play();
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.classList.add('answer-button');
    button.addEventListener('click', () => selectAnswer(index));
    answersEl.appendChild(button);
  });
}

function resetState() {
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild);
  }
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correct) {
    score += 100;
    correctSound.play();
  } else {
    wrongSound.play();
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  questionEl.textContent = 'Quiz Completed!';
  resetState();
  scoreEl.textContent = `Your Score: ${score}`;
  const highscore = localStorage.getItem('highscore') || 0;
  if (score > highscore) {
    localStorage.setItem('highscore', score);
    highscoreEl.textContent = `New Highscore: ${score}`;
  } else {
    highscoreEl.textContent = `Highscore: ${highscore}`;
  }
  shareBtn.style.display = 'block';
  shareBtn.addEventListener('click', shareScore);
}

function shareScore() {
  const shareText = `I scored ${score} points in the Bible Trivia Game! Can you beat my score?`;
  if (navigator.share) {
    navigator.share({
      title: 'Bible Trivia Game',
      text: shareText,
      url: window.location.href
    });
  } else {
    prompt('Copy and share your score:', shareText);
  }
}
