import React from 'react';
import Card from './Card'

function FilterableProductTable(props) {
    return (
        <div>
            {props.products.map(e => {
            return <Card category={e.category} name={e.name} price={e.price} stocked={e.stocked}/>
        })}

        </div>

    );
}

export default FilterableProductTable;