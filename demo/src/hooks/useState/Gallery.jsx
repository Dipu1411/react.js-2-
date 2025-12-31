import { sculptureList } from "./data";
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length - 1;

    function handlePrevClick() {
        if (hasPrev) setIndex(index - 1);
    }

    function handleNextClick() {
        if (hasNext) setIndex(index + 1);
    }

    function handleShowMore() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index % sculptureList.length];

    return (
        <>
            <div>
                <button onClick={handlePrevClick} disabled={!hasPrev}>Previous</button>
                <button onClick={handleNextClick} disabled={!hasNext}>Next</button>
                <h2>{sculpture.name}</h2>
                <h3>{sculpture.artist}</h3>
                <h3> ({index + 1} of {sculptureList.length})</h3><br />
                <button onClick={handleShowMore}>{showMore ? "Hide" : "Show"} details </button><br /><br />
                {showMore && <p>{sculpture.description}</p>}
                <img src={sculpture.url} alt={sculpture.alt} />

            </div>
        </>
    )

}