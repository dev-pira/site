import { Box } from "@mui/material"
import Image from "next/image"
import { Typography } from "../Typography"

const Initiatives: React.FC = () => {
    const defaultWidth = '1345px'
    return <Box id="iniciativas" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#F2F9FF'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '574px'}}>
            <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
                <Typography variant="h3">Iniciativas</Typography>
                <Typography>
                Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. 
                Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. 
                Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. 
                Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
                </Typography>
            </Box>
            <Image alt="" src="/images/Initiatives.png" width="451px" height="397px" />
        </Box>
    </Box>
}

export default Initiatives