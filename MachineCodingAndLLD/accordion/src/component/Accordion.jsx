import React, { useEffect, useReducer } from "react";

function deepCopy(obj) {
	if(typeof obj !== "object") return obj;

	const newObj = Array.isArray(obj) ? [] : {};

	for(const key in obj) {
		const value = obj[key];
		
		// date
		if(value instanceof Date) {
			newObj[key] = new Date(value.getTime());
		} else if(typeof value === "object") {
			newObj[key] = deepCopy(value);
		} else {
			newObj[key] = value;
		}
	}

	return newObj;
}

function toggleAccordion(accordion, accordionId) {
  if(accordion.id === accordionId) {
    accordion.isOpen = !accordion.isOpen;
    return true;
  } else if(Array.isArray(accordion?.children)) {
    let hasTheAccordion = false;
    
    for(const acc of accordion.children) {
      hasTheAccordion |= toggleAccordion(acc, accordionId);
    }

    if(!hasTheAccordion) {
      accordion.isOpen = false;
    }
    return hasTheAccordion;
  }

  return false;
}

const AccordionRenderer = ({
  accordions,
  id
}) => {

  const toggleAccordionCb = (accordionsState, accordionId) => {
    const tempAccordionState = deepCopy(accordionsState);
    
    for(const acc of tempAccordionState) {
      toggleAccordion(acc, accordionId);
    }
    
    return tempAccordionState;
  }



  const [accordionsState, toggleAccordionOpen] = useReducer(toggleAccordionCb, accordions);

  useEffect(() => {
    const accordionComponent = document.getElementById("accordion-renderer");
    accordionComponent.addEventListener("click", handleAccordionClick);

    return () => accordionComponent.removeEventListener("click", handleAccordionClick);
  }, [])

  const handleAccordionClick = (event) => {
    event.preventDefault();
    toggleAccordionOpen(event.target.id);
  }

  return (
    <div id="accordion-renderer">
      <Accordion accordions={accordionsState} />
    </div>
  )
}

/*
@Component
@prop accordions: Array<Accordion>
*/
const Accordion = ({
  accordions,
}) => {
  if(!Array.isArray(accordions)) {
    return null;
  }

  return (
    <div className="accordion-container">
      { accordions.map((accordion) => {
        const { id, title } = accordion;
        return (
          <div key={id} id={id} className="accordion">
            {title}
            {
              (accordion?.children && accordion?.isOpen ) && (
                <div style={{ marginLeft: "20px" }}>
                  <Accordion accordions={accordion.children} />
                </div>
              )
            }
          </div>
        )
      }) }
    </div>
  )
}

export default AccordionRenderer;