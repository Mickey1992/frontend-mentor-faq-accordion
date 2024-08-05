import "./App.css";
import starIcon from "./assets/images/icon-star.svg";
import FaqAccordion from "./components/FaqAaccordion";

function App() {
	return (
		<main>
			<section className="header">
				<img className="icon" src={starIcon} alt="a star icon" />
				<h2>FAQs</h2>
			</section>

			<section className="faqs">
				<FaqAccordion
					question="What is Frontend Mentor, and how will it help me"
					answer="aaa"
				/>

				<FaqAccordion
					question="What is Frontend Mentor, and how will it help me"
					answer="aaa"
				/>
			</section>
		</main>
	);
}

export default App;
