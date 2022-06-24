import Card from './Card'
import '../css/Main.css'

const Main = (props) => {

    return (
        <section className='grid-fluid' >
            {/* {props.search.map(el => <p key={el.name}>{el.name}</p>)} */}
            {props.search.map(el => <Card el={el}/>)}
        </section>
    )
}


export default Main