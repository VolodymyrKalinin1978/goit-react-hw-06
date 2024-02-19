import { Contact } from './Contact/Contact';

import { ContainerList } from './ContactList.styled';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ContainerList>
      <Contact contactList={contactList} onDelete={onDelete} />
    </ContainerList>
  );
};
