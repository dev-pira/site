import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

const Navbar: React.FC = () => {
    const defaultWidth = '1345px'
    const items = ['Sobre', 'Iniciativas', 'Eventos']
    return <AppBar position="static" color="transparent" sx={{display: 'flex', alignItems: 'center', boxShadow: 'none'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: defaultWidth}}>
        <Typography>DEVPIRA</Typography>
        <Toolbar sx={{flexGrow: 1, justifyContent: 'center'}}>
            <Box >
            {items.map(item => (<Button key={item}>{item}</Button>))}
            </Box>
        </Toolbar>
        <Button variant="contained">Call to Action</Button>
        </Box>
    </AppBar>
}

export default Navbar