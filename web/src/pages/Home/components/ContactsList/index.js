import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/images/icon-arrow-top.svg';
import edit from '../../../../assets/images/icon-edit.svg';
import del from '../../../../assets/images/icon-trash.svg';

import { Card, ListHeader } from './styles';

export default function ContactsList({
  orderBy,
  filteredContacts,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={onToggleOrderBy}>
          <span>Name</span>
          <img src={arrow} alt="Arrow Icon" height="16px" />
        </button>
      </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <h3>{contact.name}</h3>
              {contact.category.name && <small>{contact.category.name}</small>}
            </div>

            {contact.email && <p>{contact.email}</p>}
            {contact.phone && <p>{contact.phone}</p>}
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Icon Edit" height="24" />
            </Link>
            <button
              type="button"
              onClick={() => onDeleteContact(contact)}
            >
              <img src={del} alt="Icon Delete" height="24" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
