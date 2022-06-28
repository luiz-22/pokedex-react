import '../css/Card.css'

const Card = ({ el, setModal, setDescription, setLoader }) => {

    let namePokemon = el.name

    if (namePokemon === "minior-red-meteor") {
        namePokemon = "minior"
    }

    if (namePokemon === "mimikyu-disguised") {
        namePokemon = "mimikyu"
    }

    const handleClick = () => {
        setLoader(true)
        fetch(el.url)
            .then(res => res.json())
            .then(json => {
                setLoader(false)
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