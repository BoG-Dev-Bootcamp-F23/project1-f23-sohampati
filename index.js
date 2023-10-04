const left_arrow = document.getElementsByClassName('arrow-button-left')[0];
const rightarrow = document.getElementsByClassName('arrow-button-right')[0];
const info_button = document.getElementsByClassName('inf');
const moves_button = document.getElementsByClassName('moves');
const info_or_moves = document.getElementsByClassName('info');
const poke_type = document.getElementsByClassName('type');
const img = document.getElementById('pic');

rightarrow.addEventListener("click", () => {
    const pokemonName = 'pikachu';

    const url = `https://pokeapi.co/api/v2/pokemon/pikachu/`
    fetch(url)
    .then((response) =>{
        console.log('hello world');
        return response.json;
    })
    .then((data) => {
        const spriteUrl = data.sprites?.front_default || data.sprites?.other?.['official-artwork']?.front_default;
        
        if (spriteUrl) {
            img.src = spriteUrl;
            img.alt = pokemonName;
          } else {
            console.error(`Sprite not found for ${pokemonName}`);
            // Clear the image in case of an error
            img.src = "";
            img.alt = "";
          }
        


    })



})








async function fetchPoke(pokemonType){
    const apiUrl = `https://pokeapi.co/api/v2/type/${pokemonType}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;

      



}
