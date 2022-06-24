import '../css/Header.css'

const Header = ({ pokemons, setSearch }) => {

    const handleChange = (e) => {
        let fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()));

        setSearch(fileteredPokemons)
    };

    return (
        <header>
            <input type="search" placeholder="Search..." onChange={handleChange}></input>
            <h1>Pokédex</h1>
        </header>
    )
}


export default Header