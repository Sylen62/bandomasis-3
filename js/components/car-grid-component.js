class CarGridComponent {
	constructor() {
		this.state = {
			cars: [],
		};
		this.init();
	}

	showError = (error) => alert(error);

	saveCars = (cars) => {
		this.state = { cars };
		this.render();
	};

	getCars = () => API.fetchCars(this.saveCars, this.showError);

	init = () => {
		this.getCars();
		this.htmlElement = document.createElement('div');
		this.htmlElement.innerHTML = `<h1>CarGridComponent</h1>`;
		this.render();
	};

	render = () => {
		const { cars } = this.state;
		if (cars.length === 0) {
			this.htmlElement.innerHTML = `<h1>Siunčiama...</h1>`;
		} else if (cars.length > 0) {
			this.htmlElement.innerHTML = `<h1>Parsiųsta!</h1>`;
		}
	};
}
