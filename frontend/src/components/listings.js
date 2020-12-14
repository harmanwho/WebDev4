/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect }  from "react";
import "../css/listings.css"
import Card from "./reusable/card";
import { paginate } from '../services/paginationService';
import CustomPagination from '../components/reusable/pagination';
import COLORS from "../utils/colors";


function Listings() {
    const [allData, setAllData] = useState([]);
    const [total, setTotal] = useState(null);
    const [pageSize] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState(paginate(allData, currentPage, pageSize));
    const [currentSort, setCurrentSort] = useState("default");

    const sortStyle = {
        color: COLORS.loafer
    }

    const fetchData = async function (url) {
        const _listings = await fetch(url)
        .then(res => res.json());
        setAllData(_listings);
    }

    const fetchCount = async function () {
        const _total = await fetch("/getCount")
        .then(res => res.json());
        setTotal(_total);
    }
    
    useEffect(() => {
        fetchData("/getListings");
    }, []);

    useEffect(() => {
        fetchCount();
    }, []);

    useEffect(() => {
        setPosts(paginate(allData, currentPage, pageSize));
    }, [allData, currentPage, pageSize]);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleSort = (url, sort) => {
        fetchData(url);
        setCurrentSort(sort);
    }

	return (
        <>
            <div className="container listings p-0 mt-4">
                <h1 className="main-heading text-center pb-2">Find Your Perfect Home out of <span className="listing-about">{total}</span> homes</h1>
                <h5 className="main-heading text-center pb-2">
                    <hr className="mt-0"/>
                    <span className="listing-about">Sort By: </span>
                    <a 
                        className={(currentSort === "default") ? "sort-link ml-2 sort-active" : "sort-link ml-2"}
                        onClick={() => {handleSort("/getListings", "default")}}
                        style={sortStyle}>
                        Default
                    </a>
                    <span className="ml-2">|</span>
                    <a 
                        className={(currentSort === "priceAsc") ? "sort-link ml-2 sort-active" : "sort-link ml-2"}
                        onClick={() => {handleSort("/getSortAsc", "priceAsc")}}
                        style={sortStyle}>
                        Price Low to High
                    </a>
                    <span className="ml-2">|</span>
                    <a 
                        className={(currentSort === "priceDesc") ? "sort-link ml-2 sort-active" : "sort-link ml-2"}
                        onClick={() => {handleSort("/getSortDesc", "priceDesc")}}
                        style={sortStyle}>
                        Price High to Low
                    </a>
                </h5>
                

                {posts.map (listing => 
                    <div className="col-6 p-2 d-inline-block" key={posts.indexOf(listing)}>
                        <Card element={listing} />
                    </div>     
                )}
                <CustomPagination 
                    itemsCount={allData.length}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
                
            </div>
        </>
	);
}
export default Listings;
