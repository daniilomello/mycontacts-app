/* eslint-disable react/jsx-one-expression-per-line */
import { Container } from './styles';
import emptyBox from '../../../../assets/images/icon-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Box Icon" height="70px" />
      <p>
        Você não possui contatos cadastrados. Clique no botão
        <strong>&quot;Novo Contato&quot;</strong>
        à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
