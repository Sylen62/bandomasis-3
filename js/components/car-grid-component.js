class CarGridComponent {
	constructor() {
		this.state = {
			cars: [],
		};
		this.init();
	}

	init = () => {
		this.htmlElement = document.createElement('div');
		this.htmlElement.innerHTML = `<h1>CarGridComponent</h1>`;
	};
}
