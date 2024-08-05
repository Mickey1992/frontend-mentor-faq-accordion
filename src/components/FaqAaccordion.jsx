import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

import { useState } from "react";

export default function FaqAccordion({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	function handleIconClick() {
		setIsOpen((prev) => !prev);
	}

	return (
		<div className={"faq-accordion"}>
			<div className="question" onClick={handleIconClick}>
				<p>{question} </p>

				<img
					className="icon"
					src={isOpen ? minusIcon : plusIcon}
					alt="a plus icon which means you can click to see the question answer"
				></img>
			</div>
			<p className="answer" hidden={!isOpen}>
				{answer}
			</p>
		</div>
	);
}
