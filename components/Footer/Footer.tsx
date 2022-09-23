import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { Button } from "../Button"

const Footer: React.FC = () => {
    const items = [
        {label:'Sobre', link: '/'}, 
        {label:'Iniciativas', link: '#iniciativas'}, 
        {label:'Eventos', link: '/eventos'}
    ]
    return <AppBar position="static" color="transparent" sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '1108px'}}>
        <Typography>DEVPIRA</Typography>
        <Toolbar sx={{flexGrow: 1, justifyContent: 'end'}}>
            <Box >
            {items.map(item => (<Button variant="text" key={item.label} href={item.link}>{item.label}</Button>))}
            </Box>
        </Toolbar>
        </Box>
    </AppBar>
}

export default Footer