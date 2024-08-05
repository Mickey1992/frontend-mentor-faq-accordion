import "./App.css";
import starIcon from "./assets/images/icon-star.svg";
import FaqAccordion from "./components/FaqAaccordion";

function App() {
	return (
		<main>
			<img src={starIcon} alt="a star icon" />
			<h2>FAQs</h2>
			<FaqAccordion />
		</main>
	);
}

export default App;
