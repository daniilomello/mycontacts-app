import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';
import arrow from '../../assets/images/icon-arrow-left.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Icone voltar" width="16px" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
