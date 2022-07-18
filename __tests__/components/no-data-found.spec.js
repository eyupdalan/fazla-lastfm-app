import { render } from '@testing-library/react'
import NoDataFound from '../../components/NoDataFound';

it('renders NoDataFound component', () => {
    const { container } = render(<NoDataFound />)
    expect(container).toMatchSnapshot()
})
