import Foods from "./sections/foods";
import Header from "./sections/Header";
import Work from "./sections/Work";
import Popular from "./sections/Popular";

export default function App() {
	return (
		<div>
			<Header />
			<Foods />
			<Work/>
			<Popular />
		</div>
	);
}
