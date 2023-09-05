import { TextField } from "@mui/material";

export interface InputProps {
  id: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ id, label }: InputProps) => {
  return <TextField id={id} label={label} />;
};

export default Input;
