class CarCardComponent {
	static usdToEuro = 0.86;

	constructor(props) {
		this.props = props;
		this.init();
	}

	convertCurrency = ({ amount, currency }) => {
		if (currency === '$') return amount * CarCardComponent.usdToEuro;
		else return amount;
	};

	formatFuelType = (fuelType) => {
		return (
			fuelType[0].toUpperCase() +
			fuelType.slice(1, fuelType.length).toLowerCase()
		);
	};

	init = () => {
		const { id, brand, model, year, fuelTypes, price, img } = this.props;
		this.htmlElement = document.createElement('article');
		this.htmlElement.className = 'card p-0 bg-dark text-white';
		this.htmlElement.innerHTML = `
      <img src="${img}" class="card-img-top" style="height:400px;object-fit: cover;" />
      <div class="card-body">
        <h5 class="card-title text-center">${model}</h5>
        <div class="d-flex flex-column justify-content-start">
          <span class="card-text"><strong>Brand:</strong> ${brand}</span>
          <span class="card-text"><strong>Year:</strong> ${year}</span>
          <span class="card-text"><strong>Fuel type:</strong> ${this.formatFuelType(
						fuelTypes
					)}</span>
          <span class="card-text"><strong>Price:</strong> ${this.convertCurrency(
						price
					)} €</span>
        </div>
      </div>
    `;
	};
}
