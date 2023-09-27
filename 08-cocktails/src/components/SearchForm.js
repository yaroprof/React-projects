import React from 'react'
// we can access to the context data: setSearchTerm 
import { useGlobalContext } from '../context'

// |-- Create a reference to the input element
// |   |-- Use React.useRef to create a reference, searchValue, to the input field
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  // create refference to input field value 
  const searchValue = React.useRef('')

  // |-- Automatically focus on the input field when the component loads
// |   |-- Use React.useEffect to set focus on the input field
// |   |-- The function searchValue.current.focus() sets the focus
  // automatic set focus on input field after fill input field by users.
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  // |-- Function searchCocktail for cocktail search
// |   |-- Handle the onChange event of the input field
// |   |-- Get the entered text using searchValue.current.value
// |   |-- Call the setSearchTerm function with the obtained text
// function to Cocktails search
  function searchCoctail() {
    setSearchTerm(searchValue.current.value)
  }

  // |-- Function handleSubmit to prevent page reload
// |   |-- Handle the onSubmit event of the form
// |   |-- Call the e.preventDefault() function to prevent page reload
// |
// prevent web-page after fill input
  function handleSubmit(e) {
    e.preventDefault()
  }


  // |-- Render the component
// |   |-- Return JSX code to create an HTML form for cocktail search
// |   |-- The <input> field has an onChange event to call the searchCocktail function on text change
// |   |-- The form has an onSubmit property to handle form submission
  return (
    <section className='section search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name='name'
            ref={searchValue}
            onChange={searchCoctail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm