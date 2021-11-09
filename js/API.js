const baseURL = 'http://localhost:3000';

class API {
	static fetchCars = (success, failure) => {
		fetch(`${baseURL}/car`)
			.then((res) => res.json())
			.then(success)
			.catch(failure);
	};

	static deleteCarById = (id, success, failure) => {
		fetch(`${baseURL}/car/${id}`, { method: 'DELETE' })
			.then(success)
			.catch(failure);
	};
}
