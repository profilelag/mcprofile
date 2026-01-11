import fetch from "node-fetch";

const BASE = "https://mcprofile.io/api/v1";

export const java = {
	getPlayerByUsername: async (username) => {
		const response = await fetch(
			`${BASE}/java/username/${encodeURIComponent(username)}`,
		);
		if (!response.ok) throw new Error("Failed to fetch profile");
		return response.json();
	},
	getPlayerByUUID: async (uuid) => {
		const response = await fetch(
			`${BASE}/java/uuid/${encodeURIComponent(uuid)}`,
		);
		if (!response.ok) throw new Error("Failed to fetch profile");
		return response.json();
	},
};

export const bedrock = {
	getPlayerByUsername: async (gamertag) => {
		const response = await fetch(
			`${BASE}/bedrock/gamertag/${encodeURIComponent(gamertag)}`,
		);
		if (!response.ok) throw new Error("Failed to fetch profile");
		return response.json();
	},
	getPlayerByXUID: async (xuid) => {
		const response = await fetch(
			`${BASE}/bedrock/xuid/${encodeURIComponent(xuid)}`,
		);
		if (!response.ok) throw new Error("Failed to fetch profile");
		return response.json();
	},
	getPlayerByFUID: async (fuid) => {
		const response = await fetch(
			`${BASE}/bedrock/fuid/${encodeURIComponent(fuid)}`,
		);
		if (!response.ok) throw new Error("Failed to fetch profile");
		return response.json();
	},
};

export default { java, bedrock };
