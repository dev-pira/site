import { render, screen } from '@testing-library/react'
import JobCard, { JobCardProps } from './JobCard'
import '@testing-library/jest-dom'


describe('JobCard deve ', () => {
    it('renderizar companhia quando informado', () => {
        const companyName = "Company"
        const props: JobCardProps = {
            id: "1",
            title: "Title",
            description: "Short Description",
            company: companyName,
            location: "Some"
        }
        render(<JobCard {...props} />)
        const companyLabel = screen.queryByText(companyName)
        expect(companyLabel).toBeInTheDocument()
    })

    it('não renderizar companhia quando não informado', () => {
        const props: JobCardProps = {
            id: "1",
            title: "Title",
            description: "Short Description",
            location: "Some"
        }
        render(<JobCard {...props} />)
        const companyLabel = screen.queryByText("Company")
        expect(companyLabel).not.toBeInTheDocument()
    })
})