import React from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import SearchBar from './SearchBar';


// function scramble(str1, str2) {

//   let arr1 = str1.split("").sort();
//   //let arr2 = str2.split("");
  
//   let result2 = str2.split("")
//   .filter(e => arr1.includes(e))
//   .sort()
//   .join('')
  
  
//   let result1 = arr1.join('')
  
//   return result1

//   if (result1 === result2 ){
//     return true
//     }else{
//       return false
//     }
//     }




class App extends React.Component {

  state = {
    data: data
  }

  changeSearchHandler = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm
    })
  }

  // checkedTerm

  changeStockHandler = () => {
    this.setState({
      checkedTerm:true
    })

  }



  searchChange

  render() {

    let searchedProducts = this.state.data.data.filter(c => c.name.toLowerCase().includes((this.state.searchTerm)))
    let onStockSearchedProducts = searchedProducts.filter(c => c.stocked === true)
    if (this.state.checkedTerm) {
      searchedProducts = onStockSearchedProducts;
    }
    return (
      <div className="App">
        {/* controlled Component */}


        <SearchBar searchChange={this.changeSearchHandler} stockChange={this.changeStockHandler} searchTerm={this.state.searchTerm} checkedTerm={this.state.checkedTerm}></SearchBar>




        {!this.state.searchTerm ?

          <div><FilterableProductTable products={this.state.data.data} /></div>

          :

          <FilterableProductTable products={searchedProducts} />

        }



      </div>
    );
  }
}
export default App;