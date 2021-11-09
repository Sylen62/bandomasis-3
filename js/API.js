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

// const showError = (error) => console.error('Klaida:', error);

// API.fetchCars(
// 	(data) => console.log('Gauti duomenys:', data),
// 	(error) => showError(error)
// );

// API.deleteCarById(
// 	'1',
// 	(data) => console.log('Sėkminai ištrinta:', data),
// 	(error) => showError(error)
// );
