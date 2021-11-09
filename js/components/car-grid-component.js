class CarGridComponent {
	constructor() {
		this.state = {
			cars: [],
			loading: false,
		};
		this.init();
	}

	showError = (error) => alert(error);

	saveCars = (cars) => {
		this.state = { cars, loading: false };
		this.render();
	};

	getCars = () => API.fetchCars(this.saveCars, this.showError);

	wrapChild = (element) => {
		const wrapper = document.createElement('div');
		wrapper.className = 'col-lg-6';
		wrapper.append(element);
		return wrapper;
	};

	init = () => {
		this.state.loading = true;
		setTimeout(this.getCars, 2000);
		this.htmlElement = document.createElement('div');
		this.htmlElement.className = 'row g-3';
		this.render();
	};

	render = () => {
		const { cars, loading } = this.state;
		if (loading) {
			this.htmlElement.innerHTML =
				'<div class="d-flex align-items-center justify-content-center" style="height:100vh;"><img src="assets/loading.gif" /></div>';
		} else if (cars.length > 0) {
			this.htmlElement.innerHTML = '';
			this.state.cars.forEach((car) => {
				const carCard = new CarCardComponent(car);
				carCard.htmlElement = this.wrapChild(carCard.htmlElement);
				this.htmlElement.appendChild(carCard.htmlElement);
			});
		}
	};
}
