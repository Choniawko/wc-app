export const normalize = (name: string): string =>
	name
		? `${name.substr(0, 1).toUpperCase()}${name.substr(1).toLowerCase()}`
		: ""
