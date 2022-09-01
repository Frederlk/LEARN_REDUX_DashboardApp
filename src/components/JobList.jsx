import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "../store/positions/positionsSelectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectFilters } from "../store/filters/filtersSelectors";

import { addFilter } from "../store/filters/filtersActions";

const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    const posititons = useSelector((state) => selectVisiblePositions(state, currentFilters));

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    return (
        <div className="job-list">
            {posititons.map((item) => (
                <JobPosition handleAddFilter={handleAddFilter} key={item.id} {...item} />
            ))}
        </div>
    );
};

export { JobList };
