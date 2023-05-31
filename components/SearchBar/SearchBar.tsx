import { Search } from "@mui/icons-material"
import { Box, IconButton, Input, InputAdornment } from "@mui/material"

export interface SearchBarProps {
    placeholder?: string
    autoFocus?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({autoFocus, placeholder}:SearchBarProps) => {
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'center', padding: '15px 0'}}>
            <Box sx={{width: '1345px', display: 'flex'}}>
                <form method="GET" style={{width:'100%'}}>
                    <Input placeholder={placeholder} name="pesquisa" fullWidth autoFocus={autoFocus} endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    } />
                </form>
            </Box>
        </Box>
}

export default SearchBar