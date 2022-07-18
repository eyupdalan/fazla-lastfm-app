import {Empty} from "antd";

export default function NoDataFound() {
    return (
        <Empty id={"no-data-found"} image={Empty.PRESENTED_IMAGE_DEFAULT} description={"No data found"}/>
    );
}
