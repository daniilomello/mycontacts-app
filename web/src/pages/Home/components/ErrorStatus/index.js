import PropTypes from 'prop-types';
import { Container } from './styles';
import sad from '../../../../assets/images/icon-sad.svg';
import Button from '../../../../components/Button';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="Sad face emoji" height="120px" />
      <div className="details">
        <h3>Error on load the contacts</h3>

        <Button
          type="button"
          onClick={onTryAgain}
        >
          Try again
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
