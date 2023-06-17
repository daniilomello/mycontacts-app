/* eslint-disable react/jsx-one-expression-per-line */
import { Container } from './styles';
import emptyBox from '../../../../assets/images/icon-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Box Icon" height="70px" />
      <p>
        You have no contacts yet, please click on
        <strong>&nbsp; &quot;Add Contact&quot; &nbsp;</strong>
        to create your first one.
      </p>
    </Container>
  );
}
