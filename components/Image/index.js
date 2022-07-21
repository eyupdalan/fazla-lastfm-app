import NextImage from "next/image";
import PropTypes from "prop-types";
import NoDataFound from "../NoDataFound";

export default function Image({src, alt, height, width, ...rest}) {
    if (!src) {
        return <NoDataFound message={"No image"}/>
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