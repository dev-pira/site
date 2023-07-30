import * as Yup from "yup";
import * as Nodemailer from "nodemailer";
import { Member } from "../models/member";

const contactFormSchema = Yup.object({
  name: Yup.string()
    .required("Nome é obrigatório")
    .max(256, "Nome deve ter até 256 caracteres"),
  email: Yup.string()
    .required("E-mail é obrigatório")
    .email()
    .max(256, "E-mail deve ter até 256 caracteres"),
  phoneNumber: Yup.string()
    .nullable()
    .max(19, "Telefone deve ter até 19 caracteres"),
  message: Yup.string()
    .required("Mensagem é obrigatório")
    .max(2048, "Mensagem deve ter até 2048 caracteres"),
});
interface ContactForm extends Yup.InferType<typeof contactFormSchema> {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface Response {
  status: number;
  json?: object;
}

export async function sendContactMail(data: ContactForm): Promise<Response> {
  // 1. Validar os dados do formulário
  try {
    await contactFormSchema.validate(data, { abortEarly: false });
  } catch (e) {
    if (e instanceof Yup.ValidationError) {
      return {
        status: 400,
        json: e.errors,
      };
    }
  }

  // 2. Enviar e-mails com os dados recebidos
  // 2.1: e-mail para contato@devpira.com.br
  const transporter = Nodemailer.createTransport({
    host: process.env.MAIL_HOST ?? "",
    port: Number(process.env.MAIL_PORT ?? 587),
    auth: {
      user: process.env.MAIL_USER ?? "",
      pass: process.env.MAIL_PASSWORD ?? "",
    },
  });

  const { html, plainText } = getEmailBodies(
    data.name,
    data.message,
    data.phoneNumber
  );

  const info = await transporter.sendMail({
    from: { name: data.name, address: data.email },
    to: "contato@devpira.com.br",
    subject: "[devpira.com.br] Nova Solicitação de Contato",
    text: plainText,
    html: html,
  });

  console.log("Message sent: %s", info.messageId);

  return {
    status: 200,
  };
}
// TODO: 2.2: e-mail para o usuário

function getEmailBodies(
  name: string,
  message: string,
  phoneNumber: string
): { html: string; plainText: string } {
  const phoneNumberSection = phoneNumber
    ? `
    <div>
      <p><strong>Telefone:</strong> ${phoneNumber}</p>
    </div>
  `
    : "";

  return {
    html: `
    <head>
        <meta charset="UTF-8" />
        <title>Contato de ${name}</title>
        <style>
            body {
                font-family: Roboto, sans-serif;
            }
        </style>
    </head>

    <body>
        <header>
            <h1>Contato de ${name}</h1>
        </header>
        <main>
            <div>
              <p><strong>Mensagem:</strong> ${message}</p>
            </div>
            ${phoneNumberSection}
        </main>
    </body>
    `,
    plainText: `
      Nova solicitação de Contato
      Mensagem recebida: ${message}
    `,
  };
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
