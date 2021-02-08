function updateQuote() {

  // RANDOM
  var quote = parseInt(Math.random(1) * quotes.length)

  //quote = quote + 1;
  if ((quote >= quotes.length) | (quote < 0)) {
    quote = 0;
  }

  document.getElementById("quote_text").innerHTML = quotes[quote][0];
  document.getElementById("quote_person").innerHTML = quotes[quote][1];
  //document.getElementById("quote_ref").innerHTML = quote;

  setTimeout(updateQuote, 90000);
}

var quotes = 
[
  ["Failure is the condiment that gives success its flavor.", "Truman Capote"],
  ["Don't watch the clock. Do what it does. Keep going.", "Sam Levenson"],
  ["The most common way people give up their power is by thinking they don't have any.", "Alice Walker"],
  ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
  ["Never memorize something that you can look up.", "Albert Einstein"],
  ["If people never did silly things, nothing intelligent would ever get done.", "Ludwig Wittgenstein"],
  ["A change in perspective is worth 80 IQ points.","Alan Kay"],
  ["A person who never made a mistake never tried anything new.","Albert Einstein"],
  ["The best way to predict the future is to invent it.", "Alan Kay"],
  ["Knowing is not enough; we must apply. Wishing is not enough; we must do.", "Johann Wolfgang von Goethe"],
  ["By seeking and blundering we learn.", "Johann Wolfgang von Goethe"],
  ["Nothing is impossible, the word itself says \"I'm possible\"!", "Audrey Hepburn"],
  ["You can see a lot by just looking.", "Yogi Berra"],
  ["Follow your inner moonlight. Don't hide the madness.", "Allen Ginsberg"],
  ["We may encounter many defeats, but we must not be defeated.", "Maya Angelou"],
  ["Someday is not a day of the week.", "Denise Brennan-Nelson"],
  ["You can't cross the sea merely by standing and staring at the water.", "Rabindranath Tagore"],
  ["A winner is a dreamer who never gives up.", "Nelson Mandela"],
  ["I am not young enough to know everything.", "Oscar Wilde"],
  ["Today's accomplishments were yesterday's impossibilities.", "Robert H. Schuller"],
  ["In theory there is no difference between theory and practice. In practice there is.", "Yogi Berra"],
  ["The best way out is always through.", "Robert Frost"],
  ["I am not young enough to know everything.", "Oscar Wilde"],
  ["Pain is inevitable. Suffering is optional.", "Haruki Murakami"],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
  ["Quality is not an act, it is a habit.", "Aristotle"],
  ["Creativity is intelligence having fun.", "Albert Einstein"],
  ["The two most important days in your life are the day you are born and the day you find out why.", "Mark Twain"],
  ["When you know that you're capable of dealing with whatever comes, you have the only security the world has to offer.", "Harry Browne"],
  ["Discovering the unexpected is more important than confirming the known.", "George Box"],
  ["Do one thing every day that scares you.", "Eleanor Roosevelt"],
  ["Forever is composed of nows.", "Emily Dickinson"],
  ["Somewhere, something incredible is waiting to be known.", "Carl Sagan"],
  ["The only limit to our realization of tomorrow, will be our doubts of today.", "Franklin D. Roosevelt"],
  ["You can't wait for inspiration. You have to go after it with a club.", "Jack London"],
  ["You can see a lot by just looking.", "Yogi Berra"],
  ["Whether you think you can or think you can't, you're right.", "Henry Ford"],
  ["Arise, Awake and Stop not until the goal is reached.", "Swami Vivekananda"],
  ["We first make our habits, then our habits make us.", "John Dryden"],
  ["Without hard work, nothing grows but weeds.", "Gordon B. Hinckley"],
  ["Every strike brings me closer to the next home run.", "Babe Ruth"],
  ["Well done is better than well said.", "Benjamin Franklin"],
  ["We are what we believe we are.", "C.S. Lewis"],
  ["There are far, far better things ahead than any we leave behind.", "C.S. Lewis"],
  ["We cannot solve our problems with the same thinking we used when we created them.", "Albert Einstein"],
  ["Don't wish it were easier, wish you were better.", "Jim Rohn"],
  ["Failure will never overtake me if my determination to succeed is strong enough.", "Og Mandino"],
  ["You can, you should, and if you're brave enough to start, you will.", "Stephen King"],
  ["It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.", "Leonardo da Vinci"],
  ["Computers are good at following instructions, but not at reading your mind.", "Donald Knuth"],
  ["Start where you are. Use what you have. Do what you can.", "Arthur Ashe"],
  ["Even if you fall on your face, you're still moving forward.", "Victor Kiam"],
  ["Play is the highest form of research.", "Albert Einstein"],
  ["Creativity is intelligence having fun.", "Albert Einstein"],
  ["The more you know, the more you realize you know nothing.", "Socrates"],
  ["Optimism is an occupational hazard of programming; feedback is the treatment.", "Kent Beck"],
  ["Never confuse a single defeat with a final defeat.", "F. Scott Fitzgerald"],
  ["I have not failed. I've just found 10,000 ways that won't work.", "Thomas A. Edison"],
  ["It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", "Charles Darwin"],
  ["Have no fear of perfection - you'll never reach it.", "Salvador Dalí"],
  ["You are never too old to set another goal, or to dream a new dream.", "C.S. Lewis"],
  ["If you're not making mistakes, then you're not making decisions.", "Catherine Cook"],
  ["Aim for the moon. If you miss, you may hit a star.", "W. Clement Stone"],
  ["Do not wait to strike till the iron is hot; but make it hot by striking.", "William Butler Yeats"],
  ["Life is like riding a bicycle. To keep your balance, you must keep moving.", "Albert Einstein"],
  ["The harder the conflict, the more glorious the triumph.", "Thomas Paine"],
  ["Once we accept our limits, we go beyond them.", "Albert Einstein"],
  ["The harder I work, the luckier I get.", "Gary Player"],
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "Thomas A. Edison"],
  ["Well done is better than well said.", "Benjamin Franklin"],
  ["We know what we are, but not what we may be.", "William Shakespeare"],
  ["With the new day comes new strength and new thoughts.", "Eleanor Roosevelt"],
  ["Don't let yesterday take up too much of today.", "Will Rogers"],
  ["The power of imagination makes us infinite.", "John Muir"],
  ["Strength does not come from physical capacity. It comes from an indomitable will.", "Mahatma Gandhi"],
  ["Tell me and I forget. Teach me and I remember. Involve me and I learn.", "Benjamin Franklin"],
  ["It is said that your life flashes before your eyes just before you die. That is true, it's called Life.", "Terry Pratchett"],
  ["Everybody has talent, but ability takes hard work.", "Michael Jordan"],
]
