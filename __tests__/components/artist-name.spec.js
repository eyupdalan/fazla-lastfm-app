import { render } from '@testing-library/react'
import ArtistName from '../../components/ArtistName';

it('renders Artist Name component', () => {
    const { container } = render(<ArtistName name={"test"} mbid={"deneme"} />)
    expect(container).toMatchSnapshot()
})
