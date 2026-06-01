"use server";

import { headers } from "next/headers";
import { auth } from "./auth";

// Add new portfolio api call
export const addNewPortfolio = async (data) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			authorization: `Bearer ${token}`,
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
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`,
		{
			cache: "no-store",
			headers: {
				"Content-Type": "Application/json",
				authorization: `Bearer ${token}`,
			},
		},
	);
	return res.json();
};

// Edit single portfolio api call
export const editThisPortfolio = async (id, data) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "Application/json",
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		},
	);
	return res.json();
};

// Delete portfolio api call
export const deletePortfolio = async (id) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/portfolio/${id}`,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "Application/json",
				authorization: `Bearer ${token}`,
			},
		},
	);
	return res.json();
};

/* ========================================= */
// Add new client-review api call
export const addNewClientReview = async (data) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});

	return res.json();
};

// Get all portfolios api call
export const getAllClientReviews = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review`, {
		cache: "no-store",
	});
	return res.json();
};

// Get single client review api call
export const getThisReview = async (id) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${id}`, {
		cache: "no-store",
		headers: {
			"Content-Type": "Application/json",
			authorization: `Bearer ${token}`,
		},
	});
	return res.json();
};

// Edit single client review api call
export const editThisClientReview = async (id, data) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "Application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});
	return res.json();
};

// Delete portfolio api call
export const deleteClientReview = async (id) => {
	const { token } = await auth.api.getToken({
		headers: await headers(),
	});
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "Application/json",
			authorization: `Bearer ${token}`,
		},
	});
	return res.json();
};
