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

	init = () => {
		this.state.loading = true;
		setTimeout(this.getCars, 2000);
		this.htmlElement = document.createElement('div');
		this.htmlElement.className = 'row';
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
				this.htmlElement.innerHTML += `
        <div class="card w-25 p-0">
          <img src="${car.img}" class="card-img-top h-50" />
          <div class="card-body">
            <h5 class="card-title">${car.model}</h5>
            <p class="card-text">Brand: ${car.brand}</p>
          </div>
			  </div>
        `;
			});
		}
	};
}
