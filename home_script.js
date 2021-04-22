function display_settings(){
        document.getElementById("settings").style.opacity = "1";
     }
     function display_instruction(){
        document.getElementById("instrukcja").style.display = "block";
        document.getElementById("instrukcja").style.opacity = "1";
     }
     function display_authors() {
       document.getElementById("autorzy").style.display = "block";
       document.getElementById("autorzy").style.opacity = "1";
     }
     async function hide_instruction() {
       document.getElementById("instrukcja").style.opacity = "0";
       await new Promise(r => setTimeout(r, 300));
       document.getElementById("instrukcja").style.display = "none";
     }
     async function hide_authors(){
        document.getElementById("autorzy").style.opacity = "0";
        await new Promise(r => setTimeout(r, 300));
        document.getElementById("autorzy").style.display = "none";
     }
     function decrease_word_len(){
        if (document.getElementById("word_len").innerText === '15'){
          document.getElementById("word_len").innerText = '10';
        }
        if (document.getElementById("word_len").innerText === '20'){
          document.getElementById("word_len").innerText = '15';
        }
     }
     function increase_word_len(){
        if (document.getElementById("word_len").innerText === '15'){
          document.getElementById("word_len").innerText = '20';
        }
        if (document.getElementById("word_len").innerText === '10'){
          document.getElementById("word_len").innerText = '15';
        }
     }
     function decrease_alphabet(){
        if (document.getElementById("alphabet").innerText === '123'){
          document.getElementById("alphabet").innerText = 'ABC';
        }
     }
     function increase_alphabet(){
        if (document.getElementById("alphabet").innerText === 'ABC'){
          document.getElementById("alphabet").innerText = '123';
        }
     }
     function decrease_difficulty(){
        if (document.getElementById("difficulty").innerText === 'trudny'){
          document.getElementById("difficulty").innerText = 'łatwy';
        }
     }
     function increase_difficulty(){
        if (document.getElementById("difficulty").innerText === 'łatwy'){
          document.getElementById("difficulty").innerText = 'trudny';
        }
     }

     function play(x){
        chosen_len = document.getElementById("word_len").innerText
        chosen_alphabet = document.getElementById("alphabet").innerText
        chosen_difficulty =document.getElementById("difficulty").innerText
        alert("Game with " + chosen_len + chosen_alphabet + chosen_difficulty)
        window.location = '/kombi/Thue_online/game.html?l=' + chosen_len + "";
     }
