import EmojiListItems from "./EmojiListItems"
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import '../App.css'

export function EmojiList({ datos:items,itemsPerPage }) {


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,items]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        
        setItemOffset(newOffset);
    };
    return (
        <>
            <EmojiListItems datos={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName='page-box'
                className="lista"
                previousClassName='previusNext'
                nextClassName='previusNext'
            />
        </>
    );
}