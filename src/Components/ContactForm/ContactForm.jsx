import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getContacts } from '../../redux/selector';
import { MdPerson } from "react-icons/md";
import { MdStayPrimaryPortrait } from "react-icons/md";
import { Forma, Input, Label, Button } from './ContactForm.styled'



//TOOLKIT - 2
export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const newContact = () => {
    const includeName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const includeNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (name === '' || number === '') {
      alert('Please enter all fields!');
      return true;
    }

    if (includeName.includes(name)) {
      alert(`${name} is already in contacts`);
      return true;
    } else if (includeNumber.includes(number)) {
      alert(`${number} is already in contacts`);
      return true;
    }
  };

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetName();
    resetNumber();

    if (newContact()) {
      return;
    }

    dispatch(actions.addContact(name, number));
  };

  const resetName = () => {
    setName('');
  };
  const resetNumber = () => {
    setNumber('');
  };

  
    return (
      <Forma onSubmit={handleSubmit}>
        <Label >
          <MdPerson></MdPerson>
          Name
          <Input
            
            type="text"
            name="name"
            value={name}
            placeholder="Oleksandr Vasylchuk"
            onChange={handleChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            maxLength="33"
          />
        </Label>

        <Label >
          <MdStayPrimaryPortrait></MdStayPrimaryPortrait>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            placeholder="000-00-00"
            onChange={handleChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            maxLength="20"
          />
        </Label>
        <Button  type="submit">
          Add contact
        </Button>
      </Forma>
    );
}


// REDUX - 1
// import { connect } from 'react-redux';
// const mapStateToProps = state => ({
//   contacts: state.contacts.contacts,
// });

// const mapToDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapToDispatchToProps)(ContactForm);

// export default function ContactForm({onSubmit}) {
//  const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChangeName = event => {
//     setName(event.currentTarget.value);
//   };

//   const handleChangeNumber = event => {
//     setNumber(event.currentTarget.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     onSubmit(name, number);
//     resetName();
//     resetNumber();
//   };

//   const resetName = () => {
//     setName('');
//   };

//   const resetNumber = () => {
//     setNumber('');
//   };


//     return (
//       <Forma onSubmit={handleSubmit}>
//         <Label >
//           <MdPerson></MdPerson>
//           Name
//           <Input
            
//             type="text"
//             name="name"
//             value={name}
//             placeholder="Oleksandr Vasylchuk"
//             onChange={handleChangeName}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             maxLength="33"
//           />
//         </Label>

//         <Label >
//           <MdStayPrimaryPortrait></MdStayPrimaryPortrait>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             placeholder="000-00-00"
//             onChange={handleChangeNumber}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             maxLength="20"
//           />
//         </Label>
//         <Button  type="submit">
//           Add contact
//         </Button>
//       </Forma>
//     );
  
// }
