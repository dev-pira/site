import { Box } from "@mui/material"
import Image from "next/image"
import { Typography } from "../Typography"

const About: React.FC = () => {
    const defaultWidth = '1345px'
    return <Box id="sobre" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '453px'}}>
            <Image alt="" src="/images/About.svg" width="451px" height="277px" />
            <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
                <Typography variant="h3">Sobre o DEVPIRA</Typography>
                <Typography>
                Somos uma comunidade feita de "pessoal do TI" para "pessoal do TI", desde programadores, POs, QAs, PMs, designers e até quem não trabalha na área, mas ama pessoas e tecnologia!
                Não temos fins lucrativos, nosso intuito é disseminar o conhecimento sobre tecnologia em Piracicaba, "aonde o peixe pára" mas a tecnologia avança!
                Mantenha-se atualizado com as práticas modernas de mercado e desperte nas pessoas o interesse sobre a área.
                </Typography>
            </Box>
        </Box>
    </Box>
}

export default About
