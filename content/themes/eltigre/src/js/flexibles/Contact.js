import Form from '../class/Form';
import { post } from '../utils/functions';

class Contact {
  constructor(className) {
    this.sections = document.querySelectorAll(`.${className}`);
    this.sections.forEach((section) => {
      new Section(section);
    });
  }
}

class Section {
  constructor(section) {
    this.section = section;
    this.form = new Form(section.querySelector('form'), {
      onSubmit: this.onSubmit,
    });
  }


  onSubmit = () => {
    post(
      {
        form: this.form.el,
        action: 'submit_contact_form',
      },
      this.onSubmitResponse,
      true
    );
  };

  onSubmitResponse = (res) => {
    const parsedRes = JSON.parse(res);
    if (parsedRes.success) {
      this.subject.form.submitButton.success(site.translation.contact.message_sent);
    } else {
      this.subject.form.displayErrors([site.translation.contact.error]);
      this.subject.form.submitButton.reset();
    }
  }
}

export default Contact;
