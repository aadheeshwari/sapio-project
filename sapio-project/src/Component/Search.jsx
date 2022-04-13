import React from 'react'



const Search = ({setSearch}) => {

  return (

    <div >

        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">

        <input type="text"

        className="input"

        placeholder="Search"

        onChange={(ele)=>{setSearch(ele.target.value);}}

        />

        <button id='sea'>Search</button>



        </div>

    </div>

  )

}



export default Search