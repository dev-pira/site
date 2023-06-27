import { Box } from "@mui/material"
import { Button } from "../Button"
import { Typography } from "../Typography"

const JobsFilter: React.FC = () => {
    const defaultWidth = '1345px'
    const defaultHeight = '88px'
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ marginLeft: '20px', width: defaultWidth, display: 'flex', height: defaultHeight, alignItems: 'center' }}>
                <Typography color="primary">Área de Atuação</Typography>
                <Box sx={{ width: '600px', display: 'flex', justifyContent: 'space-around', height: defaultHeight, alignItems: 'center' }}>
                    <Button color="contrast" type="rounded"> FrontEnd </Button>
                    <Button color="contrast" type="rounded"> BackEnd </Button>
                    <Button color="contrast" type="rounded"> DevOps </Button>
                    <Button color="contrast" type="rounded"> Produtos </Button>
                    <Button color="contrast" type="rounded"> Suporte </Button>
                </Box>
            </Box>

            <Box sx={{ width: '300px', display: 'flex', height: defaultHeight, alignItems: 'center' }}>
                <Button type="rounded">Escolher um local V</Button>
            </Box>

        </Box>
    )
}

export default JobsFilter