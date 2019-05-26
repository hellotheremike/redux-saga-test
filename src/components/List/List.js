import React from 'react';

const Row = ({ item }) => (
    <div className="row">
        {item.row}
    </div>
);

const List = ({ items }) => (
    <div className="list">
        {
            items.map(item => <Row key={item.id} item={item}/>)
        }
    </div>
);

export default List;
