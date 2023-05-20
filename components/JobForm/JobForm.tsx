import { Box, Button, Container, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'

const JobForm: React.FC = () => {

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Título é obrigatório')
            .max(25, 'Titulo deve ter até 25 caracteres'),
        description: Yup.string()
            .max(250, 'Descrição deve ter até 250 caracteres'),
        company: Yup.string()
            .max(25, 'Empresa deve ter até 25 caracteres'),
        subscriptionLink: Yup.string()
            .required('Link da inscrição é obrigatório')
            .max(250, 'Link da inscrição deve ter até 250 caracteres')
    })

    return (
        <Box>
            <Container>
                <Formik initialValues={{title:'', description:'', company:'', location: '', subscriptionLink: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values)
                        setSubmitting(false)
                    }}>
                        {({touched, errors}) => (
                            <Form>
                                <Field
                                    as={TextField}
                                    type="text"
                                    name="title"
                                    label="Título"
                                    placeholder="Título da vaga de emprego"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    error={touched.title && errors.title}
                                    helperText={touched.title && errors.title}
                                />

                                <Field 
                                    as={TextField} 
                                    type="text"
                                    name="description" 
                                    label="Descrição"
                                    placeholder="Uma descrição curta para a vaga. Será usada na descrição do cartão da vaga." 
                                    variant="outlined" 
                                    margin="normal" 
                                    fullWidth 
                                    error={touched.description && errors.description}
                                    helperText={touched.description && errors.description}
                                />

                                <Field 
                                    as={TextField}
                                    type="text"
                                    name="company" 
                                    label="Empresa" 
                                    placeholder="Nome da empresa que está contratando para a vaga." 
                                    variant="outlined" 
                                    margin="normal" 
                                    fullWidth
                                    error={touched.company && errors.company}
                                    helperText={touched.company && errors.company}
                                />

                                <FormLabel error={touched.location && (errors.location != undefined || errors.location !== '')}>Localidade</FormLabel>
                                <Field name="location">
                                    {({field, form}:any) => (
                                       <div>
                                            <RadioGroup 
                                                {...field} 
                                                name="location" 
                                                onBlur={field.onBlur}
                                                onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                                                error
                                            >
                                                <FormControlLabel value="Piracicaba" control={<Radio />} label="Piracicaba" />
                                                <FormControlLabel value="Remoto" control={<Radio />} label="Remoto" />
                                                <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
                                            </RadioGroup>
                                       </div>
                                    )}
                                </Field>
                                <FormHelperText>{errors.location}</FormHelperText>

                                <Field 
                                    as={TextField} 
                                    type="text"
                                    name="subscriptionLink" 
                                    label="Link para inscrição" 
                                    placeholder="Link para inscrição ou e-mail para contato."
                                    variant="outlined"  
                                    margin="normal" 
                                    fullWidth
                                    error={touched.subscriptionLink && errors.subscriptionLink}
                                    helperText={touched.subscriptionLink && errors.subscriptionLink}
                                />

                                <Button type="submit">Enviar</Button>
                            </Form>
                        )}
                </Formik>
            </Container>
        </Box>
    )
}

export default JobForm