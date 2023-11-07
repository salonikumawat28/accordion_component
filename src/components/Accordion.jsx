import AccordionItem from "./AccordionItem";
import "../css/style.css";

function Accordion({data}) {
    return(
        <div className="accordion">
            {data.map((element, i) => <AccordionItem title={element.title} text={element.text} num={i} key={element.title}/>)}
        </div>
    );
}

export default Accordion;