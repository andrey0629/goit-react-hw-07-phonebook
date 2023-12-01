import { styled } from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #787882;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const ContactText = styled.p`
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #f87979;
  border-radius: 100px;
  box-shadow: rgba(187, 44, 44, 0.2) 0 -25px 18px -14px inset,rgba(187, 44, 44, 0.15) 0 1px 2px,rgba(187, 44, 44, 0.15) 0 2px 4px,rgba(187, 44, 44, 0.15) 0 4px 8px,rgba(187, 44, 44, 0.15) 0 8px 16px,rgba(187, 44, 44, 0.15) 0 16px 32px;
  color: #020d04;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:hover {
  box-shadow: rgba(187, 44, 44, 0.35) 0 -25px 18px -14px inset,rgba(187, 44, 44, 0.25) 0 1px 2px,rgba(187, 44, 44, 0.25) 0 2px 4px,rgba(187, 44, 44, 0.25) 0 4px 8px,rgba(187, 44, 44, 0.25) 0 8px 16px,rgba(187, 44, 44, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
`

 
export { List, ListItem, ContactText, DeleteButton };
