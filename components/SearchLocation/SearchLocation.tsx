import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import scriptLoader from "react-async-loader  
export const SearchLocation = ({isScriptLoaded, isScriptLoadSucceed }:any) => {
  const [address, setAddress] = useState("");

  const handleChange = (value:any) => {
    setAddress(value)
  }

  const handleSelect = (value:any) => {
    setAddress(value)
  }

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Enter Address...",
                })}
              />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#a83232", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  } else {
    return <div></div>;
  }
}
