import { Box, Button, Container, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { Field, Form, Formik } from "formik"
import * as Yup from 'yup'
import { CreateJobRequest } from "../../models/model"

export interface JobFormProps {
    action: (data: CreateJobRequest) => Promise<void>
}

const JobForm: React.FC<JobFormProps> = ({ action }: JobFormProps) => {

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Título é obrigatório')
            .max(25, 'Titulo deve ter até 25 caracteres'),
        description: Yup.string()
            .max(144, 'Descrição deve ter até 144 caracteres'),
        company: Yup.string()
            .max(25, 'Empresa deve ter até 25 caracteres'),
        location: Yup.string()
            .oneOf(['Piracicaba', 'Remoto', 'Outro'])
            .required('Localidade é obrigatória'),
        enrollmentUrl: Yup.string()
            .required('Link da inscrição é obrigatório')
            .max(250, 'Link da inscrição deve ter até 250 caracteres')
    })

    return (
        <Box sx={{ padding: '25px' }}>
            <Container>
                <Formik initialValues={{ title: '', description: '', company: '', location: '', enrollmentUrl: '' }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        console.log(values)
                        let location: 'Piracicaba' | 'Remoto' | 'Outro' = 'Outro'
                        switch (values.location) {
                            case 'Piracicaba':
                                location = 'Piracicaba'
                                break;
                            case 'Remoto':
                                location = 'Remoto'
                                break;
                        }
                        await action({
                            title: values.title,
                            company: values.company,
                            description: values.description,
                            enrollmentUrl: values.enrollmentUrl,
                            location
                        })
                        setSubmitting(false)
                    }}>
                    {({ touched, errors }) => (
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

                            <Field name="location">
                                {({ field, form }: any) => (
                                    <div>
                                        <FormLabel>Localidade</FormLabel>
                                        <RadioGroup
                                            {...field}
                                            name="location"
                                            onBlur={field.onBlur}
                                            onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                                            row
                                        >
                                            <FormControlLabel value="Piracicaba" control={<Radio />} label="Piracicaba" />
                                            <FormControlLabel value="Remoto" control={<Radio />} label="Remoto" />
                                            <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
                                        </RadioGroup>
                                        <FormHelperText error={true}>{errors.location}</FormHelperText>
                                    </div>
                                )}
                            </Field>

                            <Field
                                as={TextField}
                                type="text"
                                name="enrollmentUrl"
                                label="Link para inscrição"
                                placeholder="Link para inscrição ou e-mail para contato."
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                error={touched.enrollmentUrl && errors.enrollmentUrl}
                                helperText={touched.enrollmentUrl && errors.enrollmentUrl}
                            />
                            <Button type="submit" size="large" fullWidth>Enviar</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Box>
    )
}

export default JobForm