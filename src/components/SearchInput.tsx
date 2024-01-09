import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchQuery: string) => void; // This is the function that will be called when the form is submitted
}

function SearchInput({ onSearch }: SearchInputProps) {
  const inputElement = useRef<HTMLInputElement>(null);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchQuery = inputElement.current?.value; // This is the value of the input element
    onSearch(searchQuery!); // This calls the onSearch function passed as a prop
    // console.log(searchQuery); // debug
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputElement}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
