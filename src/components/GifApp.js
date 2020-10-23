import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

function GifApp() {

    const [categories, setcategories] = useState(['Demon Slayer']);

    // const handleAdd = () => {
    //     setcategories([...categories, "nuevaCategoria"]);
    //         setcategories(cats => [...cats, 'Hunter x Hunter']);
    // }

    return (
        <div>
            <h2>Gif App</h2>
            <AddCategory setCategories={setcategories} />
            <hr />

            <ul>
                {categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )}
            </ul>
        </div>

    );
}

export default GifApp;