import React, { useState, useContext, useEffect } from "react";
import MemoryContext from "../../Context/MemoryContext/memoryContext";
import AlertContext from "../../Context/AlertContext/alertContext";

const Search = () => {
    const memoryContext = useContext(MemoryContext);
    const { filterMemory, clearFilter, filter } = memoryContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search !== "") {
            filterMemory(search);
        } else {
            clearFilter();
        }

        if (search !== "" && filter.length === 0) {
            setAlert("No such Title");
        }

        //eslint-disable-next-line
    }, [search]);

    const onChange = (e) => {
        setSearch((e.target.name = e.target.value));
    };

    return (
        <div className="flex justify-center">
            <input
                className="rounded-lg shadow-lg h-12 px-4 bg-white border-2 border-black w-96"
                placeholder="Search."
                type="text"
                name="search"
                value={search}
                onChange={onChange}
            />
        </div>
    );
};

export default Search;
