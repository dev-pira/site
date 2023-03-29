import { render, screen } from '@testing-library/react'
import JobCard, { JobCardProps } from './JobCard'
import '@testing-library/jest-dom'


describe('JobCard deve ', () => {
    it('não renderizar botão Participar quando o link de inscrição for omitido', () => {
        const props: JobCardProps = {
            color: 'primary',
            title: 'job',
            dateTime: new Date(2020, 1, 1),
            detailsLink: ''
        }
        render(<JobCard {...props} />)
        const button = screen.queryByRole('link', { name: /Participar/ })
        expect(button).not.toBeInTheDocument()
    })

    it('deve renderizar botão Participar quando o link de inscrição for informado e a data do evento estiver no futuro', () => {
        const date = new Date()
        date.setDate(date.getDate() + 1)
        const props: JobCardProps = {
            color: 'primary',
            title: 'job',
            dateTime: date,
            detailsLink: '',
            subscribeLink: 'subscribelink'
        }
        render(<JobCard {...props} />)
        const button = screen.getByRole('link', { name: /Participar/ })
        expect(button).toBeInTheDocument()
    })

    it('não deve renderizar botão Participar quando o link de inscrição for informado e a data do evento estiver no passado', () => {
        const date = new Date()
        date.setDate(date.getDate() - 1)
        const props: JobCardProps = {
            color: 'primary',
            title: 'job',
            dateTime: date,
            detailsLink: '',
            subscribeLink: 'subscribelink'
        }
        render(<JobCard {...props} />)
        const button = screen.queryByRole('link', { name: /Participar/ })
        expect(button).not.toBeInTheDocument()
    })
})