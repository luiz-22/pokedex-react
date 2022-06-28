import '../css/Card.css'

const Card = ({ el, setModal, setDescription }) => {

    let namePokemon = el.name

    if (namePokemon === "minior-red-meteor") {
        namePokemon = "minior"
    }

    if (namePokemon === "mimikyu-disguised") {
        namePokemon = "mimikyu"
    }

    const handleClick = async () => {
        fetch(el.url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setDescription(json)
                setModal(true)
            });

    }

    return (
        <figure onClick={() => handleClick()}>
            <img src={`https://img.pokemondb.net/artwork/large/${namePokemon}.jpg`} alt="pokemon" />
            <figcaption>{namePokemon}</figcaption>
        </figure>
    )
}

export default Card