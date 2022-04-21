
function B(newProp) {
	newProp.bye = "no"
	return (
		<div>
			<h1>YE B WAALA HAI</h1>
			<A name={newProp.name} />
		</div>
	)
}

function A(prop) {
	return (
		<div>
			<h1>This is the name property {prop.name}</h1>
			<h1>This is the class property {prop.class}</h1>
		</div>
	)
}

function App() {
	return (
		<div>
			<B name="Tyagi ji" class="elite" />
			<B name="Tyagi ji bhai" class="elite" />
			<B name="Tyagi ji dost" class="elite" />
		</div>
	);
}

export default App;
