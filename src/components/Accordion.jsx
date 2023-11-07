import AccordionItem from './AccordionItem';
import '../css/style.css';
import { useState } from 'react';

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className='accordion'>
      {data.map((element, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={element.title}
          num={i}
          key={element.title}
        >{element.text}</AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
