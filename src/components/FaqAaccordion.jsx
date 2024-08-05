import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

export default function FaqAccordion() {
	return (
		<div>
			<p>QUESTION </p>
			<img
				src={plusIcon}
				alt="a plus icon which means you can click to see the question answer"
			></img>
			<p>ANSWER</p>
		</div>
	);
}
