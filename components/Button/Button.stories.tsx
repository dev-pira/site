import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const props: ButtonProps = {
  children: "Hello World",
};

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    disabled: {
      type: "boolean",
      description: "Desabilita o funcionamento do Botão",
    },
    expanded: {
      type: "boolean",
      description:
        "Define se o botão terá aparência expandida, ou seja, se ocupará toda a extenção horizontal do container",
    },
    variant: {
      options: ["text", "contained"],
      control: { type: "radio" },
      description:
        "Define o estilo de apresentação do Botão. Enquanto `contained` é a apresentação padrão, `text` apresenta o botão apenas como texto.",
    },
    color: {
      options: ["primary", "transparent", "feature", "contrast"],
      control: { type: "radio" },
      description:
        "Define a cor do Botão conforme o estilo pré-definido. `primary` é o valor padrão com fundo azul escuro. `transparent` como o nome diz, apresenta apenas as bordas e o texto em cor de contraste. `feature` tras o botão em cor de destaque. `contrast` traz o botão em esquema de cores invertidas do padrão, com fundo claro e texto escuro.",
    },
    type: {
      options: ["normal", "rounded"],
      control: { type: "radio" },
      description:
        "Enquanto o `normal` apresenta a definição padrão do Botão, `rounded` apresenta o Botão com cantos ainda mais arredondados.",
    },
    onClick: {
      type: "function",
      description:
        "Define função de manipulação quando o usuário clicar no Botão",
    },
    href: {
      type: "string",
      description:
        "Define o endereço de internet para onde o usuário será direcionado quando clicar sobre o Botào.",
    },
  },
};

export default meta;
export const Default: StoryObj<typeof Button> = {
  args: props,
};
