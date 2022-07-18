import { render } from '@testing-library/react'
import Image from '../../components/Image';

it('renders Image component', () => {
    const { container } = render(<Image  alt={"test"} src={"https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"} height={200} width={200}/>)
    expect(container).toMatchSnapshot()
})

it('renders Image component when image is not proper', () => {
    const { container } = render(<Image  alt={"test"} src={""} height={200} width={200}/>)
    expect(container.querySelector('[id="no-image"]')).not.toEqual(undefined);
})