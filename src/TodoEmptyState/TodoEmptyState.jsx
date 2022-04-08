import image from "../assets/nodata.svg"
import "./TodoEmptyState.css"


export function TodoEmptyState() {

    return (
        <div className="empty-state-container">
            <img src={image} alt="" width={"200px"} />
            <p>There are no tasks to display</p>
        </div>
    );
}