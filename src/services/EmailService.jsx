function EmailService() {
  const serviceID = 'service_b12szmc';
  const publicKey = '6wKa5DA5EkZ1TQJTe';

  function sendEmailToAdmin(formData) {
    return window.emailjs.send(
      serviceID,
      'template_o7qqaf7',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      },
      publicKey
    );
  }

  function sendConfirmationToClient(formData) {
    return window.emailjs.send(
      serviceID,
      'template_2hzifxe',
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message
      },
      publicKey
    );
  }

  function handleEmailSending(formData) {
    return Promise.all([
      sendEmailToAdmin(formData),
      sendConfirmationToClient(formData)
    ]);
  }

  return {
    handleEmailSending
  };
}

export default EmailService;