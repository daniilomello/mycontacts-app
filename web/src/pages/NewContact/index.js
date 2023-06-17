import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import useNewContact from './useNewContact';

export default function NewContact() {
  const {
    contactFormRef,
    handleSubmit,
  } = useNewContact();

  return (
    <>
      <PageHeader title="Add new Contact" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Create Contact"
        onSubmit={handleSubmit}
      />
    </>
  );
}
