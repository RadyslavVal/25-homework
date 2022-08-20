import React, { useState } from 'react';
import Contact from './Contact/Contact.js'
import './Contacts.css';
import { contacts } from '../../../service.js'


const Contacts = () => {
    const [list] = useState(contacts);
    const [search, setSearch] = useState("");
    const [checkedMale, setCheckedMale] = useState(true);
    const [checkedFemale, setCheckedFemale] = useState(true);
    const [checkedNoGender, setCheckedNoGender] = useState(true);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleChangeMale = () => {
        setCheckedMale(!checkedMale)
    }
    const handleChangeFemale = () => {
        setCheckedFemale(!checkedFemale)
    }
    const handleChangeNoGender = () => {
        setCheckedNoGender(!checkedNoGender)
    }

    let checked = {
        "male": checkedMale,
        "female": checkedFemale,
        "undefined": checkedNoGender,
    }

    const filteredList = list.filter((contact) => {
        const checkFilter = (contact.firstName + contact.lastName + contact.phone)
            .toLowerCase()
            .includes(search.toLowerCase());

        const checkBoxes = checked[String(contact.gender)];

        return checkFilter && checkBoxes;
    });

    return (
        <div className="contacts-container">
            <input placeholder='Search contact...' type="text" className="contacts-search" onChange={handleSearchChange}></input>
            <form className="contacts-genders">
                <div>
                    <input type="checkbox" id="male" name="gender" value="male" className='checkBox' onChange={handleChangeMale} checked={checkedMale} />
                    <label htmlFor="male">Чол.</label>
                </div>
                <div>
                    <input type="checkbox" id="female" name="gender" value="female" className='checkBox' onChange={handleChangeFemale} checked={checkedFemale} />
                    <label htmlFor="female">Жін.</label>
                </div>
                <div>
                    <input type="checkbox" id="undefined" name="gender" value={undefined} className='checkBox' onChange={handleChangeNoGender} checked={checkedNoGender} />
                    <label htmlFor="undefined">Не вказано</label>
                </div>
            </form>
            <div className="contacts">
                {filteredList.map((contact, i) => <Contact data={contact} key={i} />)}
            </div >
        </div >
    );
}

export default Contacts;