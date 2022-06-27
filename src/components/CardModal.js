import '../css/CardModal.css'

const CardModal = () => {

    return (
        <article>
            <div className='modal'>
                <div className="wrapper2">
                    <div className="card">
                        <div className="card__body">
                            <div className="card__head">
                                <div className="main-info">
                                    <h1 className="name">Charizard</h1>
                                    <span className="hp">120 HP</span>
                                </div>

                                <div className="frame">
                                    <div className="frame__img">
                                    </div>
                                </div>

                                <div className="stats">
                                    <span>Length: 5' 7", Weight: 200 lbs.</span>
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