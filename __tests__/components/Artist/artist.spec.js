import { render } from '@testing-library/react'
import Artist from '../../../components/Artist';

it('renders Artist component', () => {
    const { container } = render(<Artist />)
    expect(container).toMatchSnapshot()
})
