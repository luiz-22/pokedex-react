import '../css/Card.css'

const Card = ({ el }) => {

    return (
        <figure>
            <img src={`https://img.pokemondb.net/artwork/large/${el.name}.jpg`} alt="pokemon" />
            <figcaption>{el.name}</figcaption>
        </figure>
    )
}

export default Card