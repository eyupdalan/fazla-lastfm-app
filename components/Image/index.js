import NextImage from "next/image";

export default function Image({src, alt, height, width, ...rest}) {
    if (!src) {
        return <div>No Image</div>
    }

    return <NextImage src={src} alt={alt} width={width} height={height} {...rest}/>
}