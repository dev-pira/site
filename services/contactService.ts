import * as Yup from "yup";
import { Member } from "../models/member";

const contactFormSchema = Yup.object({
  name: Yup.string()
    .required("Nome é obrigatório")
    .max(256, "Nome deve ter até 256 caracteres"),
  email: Yup.string()
    .required("E-mail é obrigatório")
    .max(250, "E-mail deve ter até 250 caracteres"),
  phoneNumber: Yup.string()
    .nullable()
    .max(25, "Telefone deve ter até 25 caracteres"),
  message: Yup.string()
    .required("Mensagem é obrigatório")
    .max(25, "Mensagem deve ter até 25 caracteres"),
});
interface ContactForm extends Yup.InferType<typeof contactFormSchema> {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export async function sendContactMail(data: ContactForm): Promise<void> {
  // 1. Validar os dados do formulário
  await contactFormSchema.validate(data, { abortEarly: false });

  // 2. Enviar e-mails com os dados recebidos
  // 2.1: e-mail para contato@devpira.com.br
  // 2.2: e-mail para o usuário
}

export function fetchMembersData(): Member[] {
  return [
    {
      name: "Gabriel Cesar",
      job: "Desenvolvedor Full Stack @ DEVPIRA",
      profileUrl: "http://linkedin.com/in/gabriel-cesar-mello/",
      portraitUrl:
        "https://media.licdn.com/dms/image/D4D35AQExvCFyDQ-B4Q/profile-framedphoto-shrink_800_800/0/1680104169571?e=1690336800&v=beta&t=AxcTB6Ey_VksTA2LmaF0ZyrOb63YvAPIpb4Xhj049eY",
    },
    {
      name: "Murilo Beltrame",
      job: "Solution Architect @ Ambev Tech",
      profileUrl: "https://www.linkedin.com/in/murilobeltrame/",
      portraitUrl:
        "https://media.licdn.com/dms/image/C4E03AQFAZlS-74Dx4g/profile-displayphoto-shrink_800_800/0/1607965784040?e=1695254400&v=beta&t=5md7sTLMfjoPjh06hsKCgwF0kg5Om2VncO8hGE3BcO0",
    },
    {
      name: "Alexandre Ballestero de Paula",
      job: "Desenvolvedor Delphi @ Projeto ACBr",
      profileUrl: "https://www.linkedin.com/in/abpaula77/",
      portraitUrl:
        "https://media.licdn.com/dms/image/D4D03AQGiCdAeggTyUQ/profile-displayphoto-shrink_800_800/0/1687351973250?e=1695254400&v=beta&t=SN3NKs7cu-qGd9ytuzWCPGmqCygJOxoaEV8dD95AzDI",
    },
    {
      name: "Fábio Baldin",
      job: "Coordenador de Agilidade @ Ticket",
      profileUrl: "https://www.linkedin.com/in/fabiobaldin/",
      portraitUrl:
        "https://media.licdn.com/dms/image/C4D03AQH0KC5ZE_yhgA/profile-displayphoto-shrink_800_800/0/1587782908662?e=1695254400&v=beta&t=T_PeRR0wGrlNiyA75ZiolL5WLN1wsB1J7vWtvVHlNbQ",
    },
    {
      name: "(Lalli) Naiade Lameirão de Lima",
      job: "Flutter Senior Developer @ ioasys",
      profileUrl: "https://www.linkedin.com/in/naiadelalli/",
      portraitUrl:
        "https://media.licdn.com/dms/image/D4D03AQES5b8R3EyRjA/profile-displayphoto-shrink_800_800/0/1688420415313?e=1695254400&v=beta&t=SihP67-2bkPFsgkzGmr7Gd9iNABs6ifzHXrDX44a8t4",
    },
  ];
}
