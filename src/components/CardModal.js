import '../css/CardModal.css'

const CardModal = ({setModal, description}) => {

    let name = description.name.charAt(0).toUpperCase() + description.name.slice(1)
    let height = description.height
    let weight = description.weight
    
    return (
        <article onClick={() => setModal(false)}>
            <div className='modal'>
                <div className="wrapper2">
                    <div className="card">
                        <div className="card__body">
                            <div className="card__head">
                                <div className="main-info">
                                    <h1 className="name">{name ?? "-"}</h1>
                                    <span className="hp">{description.stats[0].base_stat ?? "-"} HP</span>
                                </div>

                                <div className="frame">
                                    <div className="frame__img" style={{  backgroundImage: "url(" + `https://img.pokemondb.net/artwork/large/${description.name}.jpg` + ")"  ?? ""}}>
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