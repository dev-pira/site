import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { Button } from "../Button"

const Navbar: React.FC = () => {
    const defaultWidth = '1345px'
    const items = [
        {label:'Sobre', link: '/'}, 
        {label:'Iniciativas', link: '#iniciativas'}, 
        {label:'Eventos', link: '/eventos'}
    ]
    return <AppBar position="static" color="transparent" sx={{display: 'flex', alignItems: 'center', boxShadow: 'none'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: defaultWidth}}>
        <Typography>DEVPIRA</Typography>
        <Toolbar sx={{flexGrow: 1, justifyContent: 'center'}}>
            <Box >
            {items.map(item => (<Button variant="text" key={item.label} href={item.link}>{item.label}</Button>))}
            </Box>
        </Toolbar>
        <Button variant="contained">Call to Action</Button>
        </Box>
    </AppBar>
}

export default Navbar