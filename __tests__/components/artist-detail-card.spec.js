import { render } from '@testing-library/react'
import ArtistDetailCard from '../../components/ArtistDetailCard';

it('renders Artist Detail Card component', () => {
    const { container } = render(<ArtistDetailCard  artist={"test"} name={"test"} mbid={"test"} image={"https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"} playCount={5000} listeners={6000} />)
    expect(container).toMatchSnapshot()
})
