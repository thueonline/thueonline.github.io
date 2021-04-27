
let current_word = "";
let current_word_len = 0;
let difficulty = 'easy'

function start(){
  append_char('a', random_position())
  console.log(current_word, current_word_len)
  append_char('b', random_position())
  console.log(current_word, current_word_len)
  append_char('c', random_position())
  console.log(current_word, current_word_len)
  append_char('a', random_position())
  console.log(current_word, current_word_len)
  append_char('b', random_position())
  console.log(current_word, current_word_len)
  append_char('c', random_position())
  console.log(current_word, current_word_len)
  append_char('a', random_position())
  console.log(current_word, current_word_len)
  console.log(find_repetition())
}

function append_char(char, where){
  current_word = [current_word.slice(0, where), char, current_word.slice(where)].join('');
  current_word_len += 1
}


function is_repetition(word){
  let word_len = word.length
  return word.substring(0, word_len / 2) === word.substring(word_len / 2, word_len);
}

function find_repetition(){
  // trade offer:
  // I receive: current_word
  // you receive: where repetition
  for(let i=0; i<current_word_len; i++){
    for(let j=i+2; j<current_word_len+1; j+=2){
      if(is_repetition(current_word.substring(i,j))){
        return [i,j]
      }
    }
  }
  // no repetition
  return [-1,-1]
}

function random_position(){
  // move for easy difficulty
  // trade offer:
  // I receive: current_word_len
  // you receive: random position [0, current_word_len]
  return Math.floor(Math.random() * (current_word_len));
}

function hard_position(){
  // move for hard difficulty
  return 0
}

function find_position() {
  if (difficulty === 'easy'){
    return random_position()
  }
  else{
    return hard_position()
  }
}

function computer_move(){
  let pos = find_position()
  let word_to_display = [current_word.slice(0, pos), '_', current_word.slice(pos)].join('');

  // tutaj zmień inner html tego pola na word_to_display

}
