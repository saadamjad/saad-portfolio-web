/** @format */

const publicKey =
	'93d471ea85d1937e713e8aafffb32090&endpoint=generate&results=20';
const baseUrl = 'https://api.parser.name';

const apiCalling = async () => {
	const url = `${baseUrl}/?api_key=${publicKey}`;
	const response = await fetch(url);
	const data = await response.json();

	const filteredData = data?.data?.map(({ name, email }, index) => {
		const { firstname } = name;
		return { name: firstname?.name, description: email, id: index };
	});

	return filteredData;
};

const getSortedItem = (items) =>
	items.sort((a, b) => a.name.localeCompare(b.name));

export { apiCalling, getSortedItem };
