
const left_arrow = document.getElementsByClassName('arrow-button-left')[0];
const rightarrow = document.getElementsByClassName('arrow-button-right')[0];
const info_button = document.getElementById('infobutton');
const moves_button = document.getElementById('movebutton');
const info_or_moves = document.getElementsByClassName('info')[0];
const poke_type = document.getElementsByClassName('type');
const stats = document.getElementsByClassName('stats')[0];
const img = document.getElementById('pic');
const pokemon_name = document.getElementsByClassName('pokeType')[0];
const height = document.getElementsByClassName('height')[0];
const weight = document.getElementsByClassName('weight')[0];
const hp = document.getElementsByClassName('hp')[0];
const attack = document.getElementsByClassName('attack')[0];
const defense = document.getElementsByClassName('defense')[0];
const special_att = document.getElementsByClassName('special-attack')[0];
const special_def = document.getElementsByClassName('special-defense')[0];
const speed = document.getElementsByClassName('speed')[0];
const types = document.getElementsByClassName('types1')[0];

let current = 132;
let infoMode = true;



moves_button.addEventListener("click", function () {
    infoMode = false; // Update the value of infoMode
    moves_button.style.backgroundColor = "#7CFF79"; 
    info_button.style.backgroundColor = "#E8E8E8"
    info_or_moves.textContent = "Moves"// Change the button color
    let count = 0;
    let x = fetchPoke(current);
    stats.innerHTML = '';
  

    const furl = `https://pokeapi.co/api/v2/pokemon/${current}/`;
    fetch(furl)
      .then((response) => {
          if(!response.ok) {
            throw new Error(`Failed to fetch data for ${data.forms.name}`);
          }
          return response.json();
        })
      .then((data) => {
          stats.innerHTML = '';
          let y =0;
          for(let i = 0; i < data.moves.length; i++){
              stats.innerHTML += data.moves[i].move.name;
              stats.innerHTML += "<br />"

              y++;
              
          }
              
              
console.log(y);



          }
          
          )

      
    



  })

  info_button.addEventListener("click", function () {
    infoMode = true; // Update the value of infoMode
    info_button.style.backgroundColor = "#7CFF79"; 
    moves_button.style.backgroundColor = "#E8E8E8"// Change the button color
    info_or_moves.textContent = "Info"
    stats.innerHTML = ' ';
    const furl = `https://pokeapi.co/api/v2/pokemon/${current}/`;
    fetch(furl)
      .then((response) => {
          if(!response.ok) {
            throw new Error(`Failed to fetch data for ${data.forms.name}`);
          }
          return response.json();
        })
      .then((data) => {
          stats.innerHTML = '';
        //   data.height /= 10
        //   let finalheight = checkAndAddDecimalZero(data.height);
        //   height.textContent = "height: " + finalheight + "m";
        //   data.weight = data.weight / 10;
        //   let finalweight = checkAndAddDecimalZero(data.weight);
        //   weight.textContent = "weight: " + finalweight + "kg";
        //   hp.textContent = "hp: " + data.stats[0].base_stat;
        //   attack.textContent = "attack: " + data.stats[1].base_stat;
        //   defense.textContent = "defense: " + data.stats[2].base_stat;
        //   special_att.textContent = "special-attack: " + data.stats[3].base_stat;
        //   special_def.textContent = "special-defense: " + data.stats[4].base_stat;
        //   speed.textContent = "speed: " + data.stats[5].base_stat;
        data.height /= 10
          let finalheight = checkAndAddDecimalZero(data.height);
          stats.innerHTML += "height: " + finalheight + "m";
          stats.innerHTML += "<br />"
          data.weight = data.weight / 10;
          let finalweight = checkAndAddDecimalZero(data.weight);
          stats.innerHTML += "weight: " + finalweight + "kg"
          stats.innerHTML += "<br />"
          stats.innerHTML += "hp: " + data.stats[0].base_stat;
          stats.innerHTML += "<br />"
          stats.innerHTML += "attack: " + data.stats[1].base_stat;
          stats.innerHTML += "<br />"
          stats.innerHTML += "defense: " + data.stats[2].base_stat;
          stats.innerHTML += "<br />"
          stats.innerHTML += "special-attack: " + data.stats[3].base_stat;
          stats.innerHTML += "<br />"
          stats.innerHTML += "special-defense: " + data.stats[4].base_stat;
          stats.innerHTML += "<br />"
          "speed: " + data.stats[5].base_stat;


        
      })
    

  }); 



function mod(a,b){
    if(a < 0){
        return(b+a) % b;
    }else{
        return a;
    }

} 
async function fetchPoke(current){
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${mod(current, 1017)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

rightarrow.addEventListener("click", () => {
    current+=1;
    const pokemonName = 'pikachu';
    const url = `https://pokeapi.co/api/v2/pokemon/${current}/`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${data.forms.name}`);
        }
        return response.json();
      })
      .then((data) => {
        const spriteUrl = data.sprites?.front_default;
        let s = data.types.length;
        console.log(s);
        
        
        if (spriteUrl) {
          img.src = spriteUrl;
          img.alt = pokemonName;
          pokemon_name.textContent = data.name;
          types.innerHTML = '';
          for(let f = 0; f < s; f++){
            var newItem = document.createElement('li');
            newItem.textContent = data.types[f].type.name;
            console.log(newItem.textContent);
            types.appendChild(newItem);
            
          
          }
          
          
          if(infoMode === true){
            stats.innerHTML = '';
            data.height /= 10
            let finalheight = checkAndAddDecimalZero(data.height);
            stats.innerHTML += "height: " + finalheight + "m";
            stats.innerHTML += "<br />"
            data.weight = data.weight / 10;
            let finalweight = checkAndAddDecimalZero(data.weight);
            stats.innerHTML += "weight: " + finalweight + "kg"
            stats.innerHTML += "<br />"
            stats.innerHTML += "hp: " + data.stats[0].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "attack: " + data.stats[1].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "defense: " + data.stats[2].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "special-attack: " + data.stats[3].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "special-defense: " + data.stats[4].base_stat;
            stats.innerHTML += "<br />"
            "speed: " + data.stats[5].base_stat;
          }else{
            stats.innerHTML = '';
            let y =0;
            for(let i = 0; i < data.moves.length; i++){
                stats.innerHTML += data.moves[i].move.name;
                stats.innerHTML += "<br />"
  
                y++;
                
            }

          }
          data.height /= 10
          let finalheight = checkAndAddDecimalZero(data.height);
          height.textContent = "height: " + finalheight + "m";
          data.weight = data.weight / 10;
          let finalweight = checkAndAddDecimalZero(data.weight);
          weight.textContent = "weight: " + finalweight + "kg";
          hp.textContent = "hp: " + data.stats[0].base_stat;
          attack.textContent = "attack: " + data.stats[1].base_stat;
          defense.textContent = "defense: " + data.stats[2].base_stat;
          special_att.textContent = "special-attack: " + data.stats[3].base_stat;
          special_def.textContent = "special-defense: " + data.stats[4].base_stat;
          speed.textContent = "speed: " + data.stats[5].base_stat;

          
        } else {
          console.error(`Sprite not found`);
          console.log("PokeAPI Response:", data); // Log the full response for debugging
          // Clear the image in case of an error
          img.src = "";
          img.alt = "";
        }
      })
      .catch((error) => {
        console.error(error);
        // Clear the image in case of an error
        img.src = "";
        img.alt = "";
      });
   

  });
  

  left_arrow.addEventListener("click", () => {
    current-=1;
    const pokemonName = 'pikachu';
    const url = `https://pokeapi.co/api/v2/pokemon/${current}/`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${data.forms.name}`);
        }
        return response.json();
      })
      .then((data) => {
        const spriteUrl = data.sprites?.front_default;
        
  
        if (spriteUrl) {
          let s = data.types.length;
          types.innerHTML = '';
          for(let f = 0; f < s; f++){
            var newItem = document.createElement('li');
            newItem.textContent = data.types[f].type.name;
            console.log(newItem.textContent);
            types.appendChild(newItem);
            
          
          }
          img.src = spriteUrl;
          img.alt = pokemonName;
          pokemon_name.textContent = data.name;
          if(infoMode === true){
              stats.innerHTML = '';
            data.height /= 10
            let finalheight = checkAndAddDecimalZero(data.height);
            stats.innerHTML += "height: " + finalheight + "m";
            stats.innerHTML += "<br />"
            data.weight = data.weight / 10;
            let finalweight = checkAndAddDecimalZero(data.weight);
            stats.innerHTML += "weight: " + finalweight + "kg"
            stats.innerHTML += "<br />"
            stats.innerHTML += "hp: " + data.stats[0].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "attack: " + data.stats[1].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "defense: " + data.stats[2].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "special-attack: " + data.stats[3].base_stat;
            stats.innerHTML += "<br />"
            stats.innerHTML += "special-defense: " + data.stats[4].base_stat;
            stats.innerHTML += "<br />"
            "speed: " + data.stats[5].base_stat;

          }else{
            stats.innerHTML = '';
            let y =0;
            for(let i = 0; i < data.moves.length; i++){
                stats.innerHTML += data.moves[i].move.name;
                stats.innerHTML += "<br />"
  
                y++;
                
            }

          }
          
          data.height /= 10
          height.textContent = "height: " + data.height + "m";
          data.weight = data.weight / 10;
          let finalweight = checkAndAddDecimalZero(data.weight);
          weight.textContent = "weight: " + finalweight + "kg";
          hp.textContent = "hp: " + data.stats[0].base_stat;
          attack.textContent = "attack: " + data.stats[1].base_stat;
          defense.textContent = "defense: " + data.stats[2].base_stat;
          special_att.textContent = "special-attack: " + data.stats[3].base_stat;
          special_def.textContent = "special-defense: " + data.stats[4].base_stat;
          speed.textContent = "speed: " + data.stats[5].base_stat;

          
        } else {
          console.error(`Sprite not found for ${pokemonName}`);
          console.log("PokeAPI Response:", data); // Log the full response for debugging
          // Clear the image in case of an error
          img.src = "";
          img.alt = "";
        }
      })
      .catch((error) => {
        console.error(error);
        // Clear the image in case of an error
        img.src = "";
        img.alt = "";
      });
   

  });

  


  function checkAndAddDecimalZero(number) {
    // Convert the number to a string
    let numberString = number.toString();
  
    // Check if there is a decimal point
    if (numberString.indexOf('.') !== -1) {
      // Check if there is a digit after the decimal point
      if (numberString.split('.')[1].length === 0) {
        // Add ".0" if there is no digit after the decimal point
        return numberString + '0';
      }
    } else {
      // If there is no decimal point, add ".0" to the end
      return numberString + '.0';
    }
  
    // If there is already a digit after the decimal point, return the original number
    return numberString;
  }




  async function getTotalMovesForPokemon(current) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${current}`);
      
      if (response.ok) {
        const pokemonData = await response.json();
        const totalMoves = pokemonData.moves.length;
        console.log(`Total moves for ${current.name}: ${totalMoves}`);
        return totalMoves;
      } else {
        console.error(`Failed to fetch data for ${current.name}.`);
      }
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }



