import NextImage from "next/image";
import PropTypes from "prop-types";
import { Empty } from 'antd';

export default function Image({src, alt, height, width, ...rest}) {
    if (!src) {
        return <Empty id={"no-image"} image={Empty.PRESENTED_IMAGE_SIMPLE} description={"No image"}/>
    }

    return <NextImage src={src} alt={alt} width={width} height={height} unoptimized={true} {...rest}/>
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
}

Image.defaultProps = {
    height: null,
    width: null
}