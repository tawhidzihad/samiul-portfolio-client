// Add new portfolio api call
export const addNewPortfolio = async (data) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
		},
		body: JSON.stringify(data),
	});

	return res.json();
};

// Get all portfolios api call
export const getAllPortfolios = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`, {
		cache: "no-store",
	});
	return res.json();
};

// Get single portfolios api call
export const getThisPortfolio = async (id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`,
		{
			cache: "no-store",
		},
	);
	return res.json();
};

// Edit single portfolio api call
export const editThisPortfolio = async (id, data) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(data),
		},
	);
	return res.json();
};

// Delete portfolio api call
export const deletePortfolio = async (id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "Application/json",
			},
		},
	);
	return res.json();
};
