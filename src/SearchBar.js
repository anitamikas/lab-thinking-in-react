import React from 'react';

function SearchBar(props) {
    let searchHandler = (event) => {
        //here I am lifting the state up
        props.searchChange(event.currentTarget.value)
    }

    let stockHandler = (event) => {
        //here I am lifting the state up
        props.stockChange(event.currentTarget.checked)
    }
    return (


        <div className="Searchbar">

            <input type='text' name='searchbar' id='searchbar' placeholder='Search...'
                onChange={searchHandler} value={props.searchTerm} />
                <br />
                <label>On stock only:</label>
          <input type="checkbox" name="stocked" onChange={stockHandler} checked={props.checkedTerm} />
        </div>

    );
}

export default SearchBar;