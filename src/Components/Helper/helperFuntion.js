
// This is a function to search any from given things
export const searchFilter = (From, searcher) => {
    const filtered = From.filter((ele) => {
        if (searcher) {
            return ele.name.common.toLowerCase().includes(searcher.toLowerCase());
        }
        return ele;
    }
    )
    return filtered;
}

//Sorting
export const SortHandler = (order, data, setData) => {
    const sortedData = [...data].sort((a, b) => {
        if (order === "Asc") {
            return a.name.common.localeCompare(b.name.common);
        } else {
            return b.name.common.localeCompare(a.name.common);
        }
    });
    setData(sortedData);
};