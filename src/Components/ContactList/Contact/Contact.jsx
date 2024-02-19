import { Button } from 'Components/Button/Button.styled';
import { ContainerLi, Person, Telefone } from './Contact.styled';

export const Contact = ({ contactList, onDelete }) => {
  return (
    <>
      {contactList.map(contactLists => (
        <ContainerLi key={contactLists.id}>
          <div>
            <p>
              <Person />
              {contactLists.name}
            </p>
            <p>
              <Telefone />
              {contactLists.number}
            </p>
          </div>
          <Button type="button" onClick={() => onDelete(contactLists.id)}>
            Delete
          </Button>
        </ContainerLi>
      ))}
    </>
  );
};
