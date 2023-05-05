import { render, screen } from '@testing-library/react'
import { Header } from '../components/Header'

describe('Heading tests', () => {
  it('should be visible', () => {
    render(<Header />)
    expect(screen.getByText(/Rick and Morty characters/i)).toBeVisible()
  })
})
