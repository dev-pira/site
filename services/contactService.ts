interface ContactForm {
  name: string;
}

export async function sendContactMail(data: ContactForm) {
  return data;
}
