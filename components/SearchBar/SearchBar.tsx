import { Search } from "@mui/icons-material"
import { IconButton, Input, InputAdornment } from "@mui/material"

export interface SearchBarProps {
    placeholder?: string
    autoFocus?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({autoFocus, placeholder}:SearchBarProps) => {
    return <form method="GET">
        <Input placeholder={placeholder} name="pesquisa" fullWidth autoFocus={autoFocus} endAdornment={
            <InputAdornment position="end">
                <IconButton type="submit">
                    <Search />
                </IconButton>
            </InputAdornment>
        } />
    </form>
}

export default SearchBar