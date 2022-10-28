import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Form, SearchField, SearchButton } from './SearchForm.styled';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState(query);

  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleQuerySubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    setSearchParams({ query: `${searchQuery}` });
  };

  return (
    <Form onSubmit={handleQuerySubmit}>
      <SearchField
        type="text"
        value={searchQuery}
        autocomplete="off"
        placeholder="Search movie"
        onChange={handleQueryChange}
      ></SearchField>
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};
