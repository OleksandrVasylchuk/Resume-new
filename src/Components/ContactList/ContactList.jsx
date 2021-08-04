import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selector';
import { FiPhone } from 'react-icons/fi';
import * as actions from '../../redux/actions';
import { List, Item, Btn, TextContacts } from './ContactList.styled'






//TOOLKIT - 2
export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));




    return (
      <List>
        {contacts.map(({ name, number, id }) =>
                
          <Item key={id}>
            <TextContacts>
              <FiPhone size="15" />
              {name}: {number}
            </TextContacts>
            <Btn
              type="button"
              onClick={() => onDeleteContact(id)}>
              Delete
            </Btn>
          </Item>
        )}

      </List>
    )
  
}
//REDUX - 1
// import { connect } from 'react-redux';

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);