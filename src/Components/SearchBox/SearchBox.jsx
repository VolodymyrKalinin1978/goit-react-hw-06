import { useId } from 'react';

import { ContainerSearch, Input, Label } from './SearchBox.styled';

export const SearchBox = ({ serchFilter, handleChange }) => {
  const searchId = useId();
  return (
    <ContainerSearch>
      <Label htmlFor={searchId}>Find contacts by name</Label>
      <Input type="text" name="search" id={searchId} value={serchFilter} onChange={handleChange} />
    </ContainerSearch>
  );
};
