/** @format */

import { useState, useEffect } from "react";

const useDeals = () => {
	const [deals, setDeals] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/ofertas")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setDeals(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching deals:", error);
				setError(error);
				setLoading(false);
			});
	}, []);

	return { deals, loading, error };
};

export default useDeals;
