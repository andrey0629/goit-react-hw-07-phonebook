import { useEffect } from 'react';
import ContactForm from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import {
  Container,
  Title,
  SecondaryTitle,
} from './StyledComponents/App.styled';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
}
