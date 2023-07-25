import { MenuItem } from "@mui/material";

export interface SelectItemProps {
  value: string;
  label: string;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, label }) => {
  return <MenuItem value={value}>{label}</MenuItem>;
};

export default SelectItem;
