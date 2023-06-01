/** @format */

import React, { useState, useLayoutEffect } from 'react';
import { apiCalling, getSortedItem } from './utils';

const App = () => {
	const [items, setItems] = useState([]);

	useLayoutEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		try {
			const response = await apiCalling();
			const sortedItems = getSortedItem(response);
			setItems(sortedItems);
		} catch (error) {
			console.error('Error In Catch:', { error });
		}
	};

	const toggleSelected = (itemId) => {
		setItems((prevItems) => {
			return prevItems?.map((item) => {
				if (item?.id === itemId) {
					return {
						...item,
						selected: !item?.selected,
					};
				}
				return item;
			});
		});
	};

	const renderHeader = () => {
		return (
			<p style={styles.headerStyle}>
				{'Assignment Tutoruu | Ref : Linked Job Post'}
			</p>
		);
	};
	const renderListItems = () => {
		return (
			<div>
				{items?.map((item, i) => (
					<div
						key={item.id}
						onClick={() => toggleSelected(item?.id)}
						style={{
							...styles.listItem,
							...{
								background: item.selected ? 'green' : 'lightgray',
							},
						}}>
						<p style={styles.indexStyle}>{i + 1} - </p>

						<div>
							<h3>{item?.name}</h3>
							<p>{item?.description}</p>
						</div>
					</div>
				))}
			</div>
		);
	};
	return (
		<>
			{renderHeader()}
			{renderListItems()}
		</>
	);
};
const styles = {
	indexStyle: { color: 'black', fontSize: 15 },
	headerStyle: { textAlign: 'center', fontSize: 30 },
	listItem: {
		borderRadius: 10,
		padding: 10,
		marginTop: 25,
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
		color: 'black',
	},
};

export default App;
