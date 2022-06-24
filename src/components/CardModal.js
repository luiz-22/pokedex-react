import '../css/CardModal.css'

const CardModal = () => {

    return (
        <article>

            <div className='modal'>

                <div className="wrapper">
                    <div className="card">
                        <div className="card__body">
                            <div className="card__head">
                                <div className="main-info">
                                    <div className="pre-evo">
                                        <span className="pre-evo__badge"></span>
                                        <span className="pre-evo__badge-front"></span>
                                        <span className="pre-evo__title">Stage 2</span>
                                        <div className="pre-evo__img">
                                            <img src="https://i.imgur.com/zouvGCL.png" alt="" />
                                        </div>
                                    </div>
                                    <span className="evolves-from">Evolves from Charmeleon</span>
                                    <span className="put-card">Put Charizard on the Stage 1 card</span>
                                    <h1 className="name">Charizard</h1>
                                    <span className="hp">120 HP</span>
                                    <span className="energy"></span>
                                </div>

                                <div className="frame">
                                    <div className="frame__img">
                                    </div>
                                </div>

                                <div className="stats">
                                    <span>Flame Pokémon. Length: 5' 7", Weight: 200 lbs.</span>
                                </div>

                                <ul className="attacks">
                                    <li className="attack pkmn-power">
                                        <p>
                                            <strong>Pokémon Power: Energy Burn</strong> As often as you like during your turn
                                            <em>(before your attack)</em>, you may turn<br /> all Energy attached to Charizard into
                                            <span className="energy inline"></span> Energy for the rest of the turn.
                                            This power can&rsquo;t be used if Charizard<br />is Asleep, Confused, or Paralyzed.
                                        </p>
                                    </li>
                                    <li className="attack">
                                        <div className="attack-cost">
                                            <span className="energy small"></span>
                                            <span className="energy small"></span>
                                            <span className="energy small"></span>
                                            <span className="energy small"></span>
                                        </div>
                                        <p>
                                            <strong>Fire Spin</strong> Discard 2 Energy cards attached<br /> to Charizard in order to
                                            use this attack.
                                        </p>
                                        <div className="attack-dmg">100</div>
                                    </li>
                                </ul>
                                <ul className="type-info">
                                    <li>
                                        <span>weakness</span>
                                        <span className="energy smaller water"></span>
                                    </li>
                                    <li>
                                        <span>resistance</span>
                                        <span className="energy smaller fighting"></span><span className="modifier">-30</span>
                                    </li>
                                    <li>
                                        <span>retreat cost</span>
                                        <span className="energy smaller colorless"></span>
                                        <span className="energy smaller colorless"></span>
                                        <span className="energy smaller colorless"></span>
                                    </li>
                                </ul>
                            </div>

                            <div className="desc">
                                <div className="desc__borderside"></div>
                                <span className="desc__text">Spits fire that is hot enough to melt boulders. Known to unintentionally
                                    cause forest fires.&nbsp;&nbsp;&nbsp;LV. 76&nbsp;&nbsp;&nbsp;#6</span>
                            </div>

                            <div className="footer">
                                <p><strong>Illus. Mitsuhiro Arita</strong></p>
                                <p>&copy; 1995, 96, 98, 99 Nintendo, Creatures, GAMEFREAK. &copy; 1999 Wizards.</p>
                                <p><strong>4/102</strong></p>
                                <p><i className="fa fa-fw fa-star"></i></p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </article>

    )
}

export default CardModal