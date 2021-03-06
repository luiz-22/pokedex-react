import Card from "./Card";
import "../css/Main.css";

const Main = (props) => {
  return (
    <section className="grid-fluid">
      {props.search.map((el) => (
        <Card
          key={el.name}
          el={el}
          setModal={props.setModal}
          setDescription={props.setDescription}
          setLoader={props.setLoader}
        />
      ))}
    </section>
  );
};

export default Main;
