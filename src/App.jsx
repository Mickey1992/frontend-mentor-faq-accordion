import "./App.css";
import starIcon from "./assets/images/icon-star.svg";
import FaqAccordion from "./components/FaqAaccordion";

function App() {
	return (
		<main className="faqs">
			<section className="header">
				<img className="icon" src={starIcon} alt="a star icon" />
				<h2>FAQs</h2>
			</section>

			<FaqAccordion />
		</main>
	);
}

export default App;
