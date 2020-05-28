import _ from "lodash";
import React from "react";

SearchInput.propTypes = {};

function SearchInput({ onSubmit }) {
  const handleSearchTermChange = _.debounce(text => {
    if (!onSubmit) return;
    const formValues = {
      text
    };
    onSubmit(formValues);
  }, 500);

  return (
    <form>
      <span>Search: </span>
      <input
        type="text"
        onChange={e => handleSearchTermChange(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
