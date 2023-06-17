import PropTypes from 'prop-types';
import magnify from '../../../../assets/images/icon-search.svg';
import { Container } from './styles';

export default function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnify} alt="Search Icon" height="40px" />
      <p>
        Nenhum resultado foi encontrado para
        <strong>{` ${searchTerm}`}</strong>
      </p>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
