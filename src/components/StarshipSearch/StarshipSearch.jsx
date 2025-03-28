//src/components/StarshipSearch/StarshipSearch.jsx
import { useState } from "react";


const StarshipSearch = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()//no refresh
        onSearch(searchInput)//call function
        setSearchInput("")//reset
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search for a Starship"
                value={searchInput}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default StarshipSearch;