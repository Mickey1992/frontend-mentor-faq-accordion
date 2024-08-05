import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

export default function FaqAccordion({ question, answer }) {
	return (
		<div className="faq-accordion">
			<div className="question">
				<p>{question} </p>
				<img
					className="icon"
					src={plusIcon}
					alt="a plus icon which means you can click to see the question answer"
				></img>
			</div>
			<p className="answer">{answer}</p>
		</div>
	);
}
