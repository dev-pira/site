import { Select as MuiSelect } from "@mui/material"

export interface SelectProps {
    children?: React.ReactNode,
    label?: string,
    labelId?: string,
    id: string,
    value?: string,
    onChange?: (event: any, child?: any) => void,
}

const Select: React.FC<SelectProps> = ({children, label, labelId, id, value, onChange}) => {
    return <MuiSelect
    label={label}
    labelId={labelId}
    id={id}
    value={value}
    onChange={onChange}
  >{children}</MuiSelect>
}

export default Select