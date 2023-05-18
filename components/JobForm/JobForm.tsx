import { Box, Container, FormControl, TextField } from "@mui/material"

const JobForm: React.FC = () => {
    return (
        <Box>
            <Container>
                <FormControl sx={{width: '100%'}}>
                    <TextField id="title" label="Título" variant="outlined" placeholder="Título da vaga de emprego." margin="normal" fullWidth />

                    <TextField id="description" label="Descrição" variant="outlined" placeholder="Uma descrição para a vaga." margin="normal" fullWidth />

                    {/* <InputLabel htmlFor="description">Descrição</InputLabel>
                    <Input id="description" aria-describedby="description-description"></Input>
                    <FormHelperText id="description-description">A descripção da vaga.</FormHelperText>

                    <InputLabel htmlFor="company">Empresa</InputLabel>
                    <Input id="company" aria-describedby="company-description"></Input>
                    <FormHelperText id="company-description">Para qual empresa é a vaga.</FormHelperText>

                    <InputLabel htmlFor="enrollmentUrl">Link pra inscrição/Email para contato</InputLabel>
                    <Input id="enrollmentUrl" aria-describedby="enrollmentUrl-description"></Input>
                    <FormHelperText id="enrollmentUrl-description">Link pra inscrição da vaga ou email para contato.</FormHelperText> */}
                </FormControl>
            </Container>
        </Box>
    )
}

export default JobForm