import NoDataFound from "./index";

const noDataFoundStory = {
    title: 'Components/NoDataFound',
    component: NoDataFound,
};

export const NoDataFoundStory = () => (
    <NoDataFound />
);

export const NoDataFoundWithCustomMessageStory = () => (
    <NoDataFound message={"No image"}/>
);


export default noDataFoundStory;