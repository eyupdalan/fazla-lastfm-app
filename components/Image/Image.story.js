import Image from "./index";

const imageStory = {
    title: 'Components/Image',
    component: Image,
};

export const ImageStory = () => (
    <Image  alt={"test"} src={"https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg"} height={200} width={200}/>
);

export const NoImageStory = () => (
    <Image  alt={"test"} src={""} height={200} width={200}/>
);


export default imageStory;