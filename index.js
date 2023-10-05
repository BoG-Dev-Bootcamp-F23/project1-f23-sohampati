const left_arrow = document.getElementsByClassName('arrow-button-left')[0];
const rightarrow = document.getElementsByClassName('arrow-button-right')[0];
const info_button = document.getElementsByClassName('inf');
const moves_button = document.getElementsByClassName('moves');
const info_or_moves = document.getElementsByClassName('info');
const poke_type = document.getElementsByClassName('type');
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

let current = 300;

function mod(a,b){
    if(a < 0){
        return(b+a) % b;
    }else{
        return a;
    }

}
async function fetchPoke(current){
    const apiUrl = `https://pokeapi.co/api/v2/type/${mod(current, 1017)}`;
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
  
        if (spriteUrl) {
          img.src = spriteUrl;
          img.alt = pokemonName;
          pokemon_name.textContent = data.name;
          data.height /= 10
          height.textContent = "height: " + data.height + "m";
          data.weight = data.weight / 10;
          let finalweight = checkAndAddDecimalZero(data.weight);
          weight.textContent = "weight: " + finalweight + "kg";
         // hp.textContent = "hp: " + data.stats.stat.hp;

          
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
          img.src = spriteUrl;
          img.alt = pokemonName;
          pokemon_name.textContent = data.name;

          
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







