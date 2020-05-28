import _ from "lodash";
import React, { useCallback } from "react";

SearchInput.propTypes = {};

function SearchInput({ onSubmit }) {
  const handleSearchTermChange = useCallback(
    _.throttle(text => {
      console.log("throttle");
      if (!onSubmit) return;
      const formValues = {
        text
      };
      onSubmit(formValues);
    }, 1000),
    [onSubmit]
  );

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
