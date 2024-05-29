import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguages } from "../../context/LanguageContext";
import { translate } from "../../../utils/translations";

interface Suggestion {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
}

interface SearchInputProps {
  onSelectSuggestion: (lat: number, lon: number) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSelectSuggestion }) => {
  const { language } = useLanguages();
  const [query, setQuery] = useState("");

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        try {
          const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
              params: {
                q: query,
                format: "json",
                addressdetails: 1,
                limit: 5,
              },
            }
          );
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    const { lat, lon } = suggestion;
    onSelectSuggestion(parseFloat(lat), parseFloat(lon));
    setQuery(suggestion.display_name);
    setSuggestions([]);
  };

  return (
    <div className="w-56 p-2 rounded-md border flex ml-4 relative">
      <div className="w-10 flex justify-center items-center">
        <svg
          role="img"
          aria-hidden="true"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Pin"
            stroke="none"
            strokeWidth="1"
            fill="#aeb9c6"
            fillRule="evenodd"
          >
            <path d="M12 22c-5.333-5.054-8-9.054-8-12a8 8 0 1116 0c0 2.946-2.667 6.946-8 12zM6 10c0 2.008 1.969 5.156 6 9.207 4.031-4.051 6-7.2 6-9.207a6 6 0 10-12 0zm6 3a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"></path>
          </g>
        </svg>
      </div>
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        className="w-full outline-none"
        placeholder={translate("placeHolderTracker", language)}
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border rounded-md z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="p-2 border-b last:border-0 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
