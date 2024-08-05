import "./App.css";
import starIcon from "./assets/images/icon-star.svg";
import FaqAccordion from "./components/FaqAaccordion";

import { FAQS } from "./FAQS";

function App() {
	return (
		<main>
			<section className="header">
				<img className="icon" src={starIcon} alt="a star icon" />
				<h2>FAQs</h2>
			</section>

			<section className="faqs">
				{FAQS.map(({ question, answer }) => (
					<FaqAccordion
						question={question}
						answer={answer}
						key={question}
					/>
				))}
			</section>
		</main>
	);
}

export default App;
