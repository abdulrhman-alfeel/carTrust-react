import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSlider from "react-slider";
import TourGridCard from "../components/TourGridCard";
import TourListCard from "../components/TourListCard";
import ToursListSearch from "../components/ToursListSearch";
import ToursPagination from "../components/ToursPagination";
import PageBanner from "../components/common/PageBanner";
import RelatedDesContainer from "../components/common/RelatedDesContainer";
import Loader from "../components/global/Loader";
import {
  useGetAllTourListQuery,
  useGetCategoriesQuery,
} from "../redux/api/apiSlice";
import {
  removeCategoryId,
  setCategoryId,
  setMaxPrice,
  setMinPrice,
  setSortBy
} from "../redux/features/filter/filterSlice";
import { setPage } from "../redux/features/pagination/paginationSlice";
const ToursList = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [listViewOpen, setListViewOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [toursList, setToursList] = useState([]);
  const { lngMode, currency } = useSelector((state) => state.lngMode);
  const [title, setTitle] = useState(lngMode == "en" ? "Sort By" : "ترتيب حسب");
  console.log(currency)
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination);
  const { countryId, cityId } = useSelector((state) => state.search);
  const { categoryIds, sortBy, minPrice, maxPrice } = useSelector(
    (state) => state.filter
  );
  const { data, isLoading, refetch } = useGetAllTourListQuery({
    countryId,
    cityId,
    categoryIds,
    sortBy,
    minPrice,
    maxPrice,
    offset: pagination?.page,
    limit: pagination?.limit,
  });
  const { data: categoriesData } = useGetCategoriesQuery();
  useEffect(() => {
    refetch();
    setTitle(lngMode == "en" ? "Sort By" : "ترتيب حسب");
  }, [
    categoryIds,
    sortBy,
    minPrice,
    maxPrice,
    countryId,
    cityId,
    lngMode,
    pagination,
    refetch,
  ]);
  useEffect(() => {
    setToursList(data?.data);
  }, [data]);
  if (isLoading) return <Loader />;
  // console.log(data);
  // handle sort filter
  const categories = categoriesData?.data;
  const handleSortFilter = (value) => {
    // if (value === "reset") {
    //   dispatch(
    //     setReset({
    //       categoryIds: [],
    //       minPrice: 0,
    //       maxPrice: "",
    //       sortBy: "",
    //     })
    //   );
    // }
    if (value === "srt") {
      dispatch(setSortBy(""));
    }
    if (value == "lth") {
      dispatch(setSortBy("1"));
    }
    if (value == "htl") {
      dispatch(setSortBy("0"));
    }
    if (value == "avgRating") {
      // dispatch(set);
    }
  };
  // handle select category
  const handleSelectCategory = (id) => {
    const index = categoryIds.indexOf(id);
    if (index === -1) {
      dispatch(setCategoryId(id));
    } else {
      dispatch(removeCategoryId(id));
    }
  };

  const handleSliderChange = (values) => {
    dispatch(setMinPrice(values[0]));
    dispatch(setMaxPrice(values[1]));
  };
  const getToursByCity = async (cityId) => {
    const res = await fetch(
      `https://jwlatadmin.com/api/tours/tours-by-city/${cityId}`
    );
    const data = await res.json();
    if (data?.success) {
      setToursList(data?.data);
    }
  };

  // handle pagination
  const handlePagination = (e) => {
    dispatch(setPage(parseInt(e.target.innerText)));
  };
  const backwardPagination = () => {
    // if (metaData?.page === 1) {
    //   return;
    // } else {
    //   dispatch(setPage(metaData?.page - 1));
    // }
    if (pagination?.page === 0) {
      return;
    } else {
      dispatch(setPage(pagination.page - 1));
    }
  };

  const forwardPagination = () => {
    // if (metaData?.page === totalPages) {
    //   return;
    // } else {
    //   dispatch(setPage(metaData?.page + 1));
    // }
    dispatch(setPage(pagination.page + 1));
  };
  return (
    <div>
      {/* <!-- BreadCrumb Starts -->   */}
      <section
        className="breadcrumb-main pb-20 pt-14"
        style={{ backgroundImage: "url(/images/bg/tour_list.png)" }}
      >
        <PageBanner path={lngMode == "en" ? "Tours List" : "قائمة الجولات"} />
      </section>
      {/* <!-- BreadCrumb Ends -->  */}

      {/* <!-- top Destination starts --> */}
      <section className="trending pt-6 pb-0 bg-lgrey">
        <div className="container">
          <div className="row flex-row-reverse">
            <ToursListSearch
              categories={categories}
              handleSelectCategory={handleSelectCategory}
              handleSliderChange={handleSliderChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              categoryIds={categoryIds}
            />
            <div className="col-lg-8">
              <div className="list-results d-flex align-items-center justify-content-between">
                <div className="list-results-sort">
                  <p className="m-0">
                    {lngMode == "en" ? "Showing" : "عرض"} {toursList?.length}{" "}
                    {lngMode == "en" ? "of" : "ل"} {toursList?.length}{" "}
                    {lngMode == "en" ? "Results" : "نتائج"}
                  </p>
                </div>
                <div className="click-menu d-flex gap-2 align-items-center justify-content-between">
                  <div
                    onClick={() => setListViewOpen(true)}
                    className={`change-grid  me-2 ${
                      listViewOpen && "f-active"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <i className="fa fa-bars rounded"></i>
                    </div>
                  </div>
                  <div
                    onClick={() => setListViewOpen(false)}
                    className={`change-grid  me-2 ${
                      listViewOpen || "f-active"
                    }`}
                    style={{
                      cursor: "pointer",
                      marginLeft: `${lngMode == "en" ? "0px" : "15px"}`,
                    }}
                  >
                    <div>
                      <i className="fa fa-th rounded"></i>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary d-block d-md-none"
                      onClick={toggleModal}
                    >
                      Filter{" "}
                    </button>

                    <div
                      className={`modal modal-bg ${
                        showModal ? "d-block" : "d-none"
                      }`}
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Filter
                            </h5>
                            <button
                              onClick={toggleModal}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">X</span>
                            </button>
                          </div>
                          <div class="p-4 body mt-12">
                          <h3 className="">
                            {lngMode == "en" ? "Categories Type" : "نوع الفئات"}
                          </h3>
                          <ul className="sidebar-category1">
                            {categories?.map((category, index) => (
                              <li key={index}>
                                <input
                                  type="checkbox"
                                  onChange={() =>
                                    handleSelectCategory(JSON.stringify(category?.id))
                                  }
                                />{" "}
                                {category?.name}
                                <span className="float-end">
                                  {category?.totalItem}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <h3 className="mt-5">Price</h3>
                          <div className="range-slider mt-0">
                            <p className="text-start mb-2">
                              {lngMode == "en" ? "Price Range" : "نطاق السعر"}
                            </p>
                            <ReactSlider
                              className="horizontal-slider"
                              thumbClassName="price-range-thumb"
                              trackClassName="price-range-track"
                              defaultValue={[minPrice, maxPrice]}
                              ariaLabel={["Lower thumb", "Upper thumb"]}
                              onChange={handleSliderChange}
                              pearling
                              minDistance={10}
                              max={2000}
                            />
                            <div className="clearfix"></div>
                            <div className="w-100 px-2">
                              <span className="min-value">{minPrice} $</span>
                              <span className="max-value">{maxPrice} $</span>
                            </div>
                          </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              onClick={toggleModal}
                              type="button"
                              className="btn btn-secondary"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="select-box "
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <div className="dropdown-heading" style={{ gap: "10px" }}>
                      <p>{title}</p>
                      <img
                        src="/images/clicons.png"
                        className={openDropdown && "open-icon"}
                      ></img>
                    </div>
                    {openDropdown && (
                      <div className="dropdown-option-box">
                        <p
                          onClick={() => (
                            setTitle("Sort By"), handleSortFilter("srt")
                          )}
                        >
                          {lngMode == "en" ? "Sort By" : "ترتيب حسب"}
                        </p>
                        <p
                          onClick={() => (
                            setTitle("Price: Low to High"),
                            handleSortFilter("lth")
                          )}
                        >
                          {lngMode == "en"
                            ? "Price: Low to High"
                            : "السعر: من الأقل إلى الأعلى"}
                        </p>
                        <p
                          onClick={() => (
                            setTitle("Price: High to Low"),
                            handleSortFilter("htl")
                          )}
                        >
                          {lngMode == "en"
                            ? "Price: High to Low"
                            : "السعر: من الأعلى إلى الأقل"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {listViewOpen || (
                <div className="row">
                  {toursList?.map((tour, index) => (
                    <TourGridCard key={index} tour={tour} />
                  ))}
                  {toursList?.length === 0 && (
                    <div className="no-tour-found">
                      <i>
                        {lngMode == "en"
                          ? "No tour found!"
                          : "لم يتم العثور على جولة!"}
                      </i>
                    </div>
                  )}
                  {toursList?.length > 6 && (
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a href="#" className="nir-btn">
                          Load More{" "}
                          <i className="fa fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {listViewOpen && (
                <div className="destination-list">
                  {toursList?.map((tour, index) => (
                    <TourListCard key={index} tour={tour} />
                  ))}
                  {toursList?.length === 0 && (
                    <div className="no-tour-found">
                      <i>No tour found!</i>
                    </div>
                  )}
                  {toursList?.length > 6 && (
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a href="#" className="nir-btn">
                          Load More{" "}
                          <i className="fa fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* pagination */}
              <div className="pagination-container">
                <ToursPagination
                  handlePagination={handlePagination}
                  forwardPagination={forwardPagination}
                  backwardPagination={backwardPagination}
                  activePage={pagination?.page}
                ></ToursPagination>
              </div>
            </div>
            <div className="col-lg-4 pe-lg-4">
              <div className="sidebar-sticky">
                <div className="list-sidebar">
                  <div className="sidebar-item mb-4 d-none d-md-block">
                    <h3 className="">
                      {lngMode == "en" ? "Categories Type" : "نوع الفئات"}
                    </h3>
                    <ul className="sidebar-category1">
                      {categories?.map((category, index) => (
                        <li key={index}>
                          <input
                            type="checkbox"
                            onChange={() =>
                              handleSelectCategory(JSON.stringify(category?.id))
                            }
                          />{" "}
                          {category?.name}
                          <span className="float-end">
                            {category?.totalItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>


                  <div className="sidebar-item mb-4 d-none d-md-block">
                    <h3 className="">Price</h3>
                    <div className="range-slider mt-0">
                      <p className="text-start mb-2">
                        {lngMode == "en" ? "Price Range" : "نطاق السعر"}
                      </p>
                      <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="price-range-thumb"
                        trackClassName="price-range-track"
                        defaultValue={[minPrice, maxPrice]}
                        ariaLabel={["Lower thumb", "Upper thumb"]}
                        onChange={handleSliderChange}
                        pearling
                        minDistance={10}
                        max={2000}
                      />
                      <div className="clearfix"></div>
                      <div className="w-100 px-2">
                        <span className="min-value">{minPrice}  {currency} </span>
                        <span className="max-value">{maxPrice}  {currency} </span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-item">
                    <h3>
                      {lngMode == "en"
                        ? "Related Destinations"
                        : "الوجهات ذات الصلة"}
                    </h3>
                    <RelatedDesContainer
                      relatedDestination={data?.related_cities}
                      getToursByCity={getToursByCity}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- top Destination ends --> */}

      {/* <!-- Discount action starts --> */}

      {/* <!-- Discount action Ends --> */}

      {/* <!-- partner starts --> */}
      {/* <OurPartners /> */}
      {/* <!-- partner ends --> */}
    </div>
  );
};

export default ToursList;
