import '../css/Card.css'

const Card = ({ el }) => {

    let namePokemon = el.name 

    if(namePokemon === "minior-red-meteor") {
        namePokemon = "minior"
    }  

    if(namePokemon === "mimikyu-disguised") {
        namePokemon = "mimikyu"
    }  
    

    return (
        <figure onClick={null}>
            <img src={`https://img.pokemondb.net/artwork/large/${namePokemon}.jpg`} alt="pokemon" />
            <figcaption>{namePokemon}</figcaption>
        </figure>
    )
}

export default Card