import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { Button } from "../Button"

const Footer: React.FC = () => {
    const items = ['Sobre', 'Iniciativas', 'Eventos']
    const defaultWidth = '1345px'
    return <AppBar position="static" color="transparent" sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '1108px'}}>
        <Typography>DEVPIRA</Typography>
        <Toolbar sx={{flexGrow: 1, justifyContent: 'end'}}>
            <Box >
            {items.map(item => (<Button variant="text" key={item}>{item}</Button>))}
            </Box>
        </Toolbar>
        </Box>
    </AppBar>
}

export default Footer