import '../css/CardModal.css'
import bug from '../assets/background/bug.png'
import dark from '../assets/background/dark.png'
import dragon from '../assets/background/dragon.png'
import electric from '../assets/background/electric.png'
import fairy from '../assets/background/fairy.png'
import fighting from '../assets/background/fighting.png'
import fire from '../assets/background/fire.png'
import flying from '../assets/background/flying.png'
import ghost from '../assets/background/ghost.png'
import grass from '../assets/background/grass.png'
import ground from '../assets/background/ground.png'
import ice from '../assets/background/ice.png'
import normal from '../assets/background/normal.png'
import poison from '../assets/background/poison.png'
import psychic from '../assets/background/psychic.png'
import rock from '../assets/background/rock.png'
import steel from '../assets/background/steel.png'
import water from '../assets/background/water.png'


const CardModal = ({ setModal, description }) => {

    let name = description.name.charAt(0).toUpperCase() + description.name.slice(1)
    let height = description.height
    let weight = description.weight
    let type = description.types[0].type.name
    let image = null

    switch (type) {
        case "bug":
            image = bug
            break;
        case "dark":
            image = dark
            break;
        case "dragon":
            image = dragon
            break;
        case "electric":
            image = electric
            break;
        case "fairy":
            image = fairy
            break;
        case "fighting":
            image = fighting
            break;
        case "fire":
            image = fire
            break;
        case "flying":
            image = flying
            break;
        case "ghost":
            image = ghost
            break;
        case "grass":
            image = grass
            break;
        case "ground":
            image = ground
            break;
        case "ice":
            image = ice
            break;
        case "normal":
            image = normal
            break;
        case "poison":
            image = poison
            break;
        case "psychic":
            image = psychic
            break;
        case "rock":
            image = rock
            break;
        case "steel":
            image = steel
            break;
        case "water":
            image = water
            break;

        default:
            image = null
    }



    return (
        <article onClick={() => setModal(false)}>
            <div className='modal'>
                <div className="wrapper2">
                    <div className="card">
                        <div className="card__body" style={{ backgroundImage: "url(" + image + ")" ?? "" }}>
                            <div className="card__head">
                                <div className="main-info">
                                    <h1 className="name">{name ?? "-"}</h1>
                                    <span className="hp">{description.stats[0].base_stat ?? "-"} HP</span>
                                </div>

                                <div className="frame">
                                    <div className="frame__img" style={{ backgroundImage: "url(" + `https://img.pokemondb.net/artwork/large/${description.name}.jpg` + ")" ?? "" }}>
                                    </div>
                                </div>
                                <div className="stats">
                                    <span>Length: {height / 10 ?? "-"} m., Weight: {weight / 10 ?? "-"} kg.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardModal