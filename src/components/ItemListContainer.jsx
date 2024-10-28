import React from 'react';

function ItemListContainer( {texto} ) {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{texto}</h2>
        </div>
    );
}

export default ItemListContainer;