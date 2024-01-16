import React, { useState } from "react";
import DropdownMenu from "./common/DropdownMenu";
import ReactSlider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./global/Loader";
import {
  useGetAllCountryQuery,
  useGetCitiesByCountryQuery,
} from "../redux/api/apiSlice";
import { setCityId, setCountryId } from "../redux/features/search/searchSlice";
import MultiSelectCategories from "./common/MultiSelectCategories";

const ToursListSearch = ({
  categories,
  handleSelectCategory,
  handleSliderChange,
  maxPrice,
  minPrice,
  categoryIds,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { lngMode } = useSelector((state) => state.lngMode);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllCountryQuery();
  const { data: citiesData } = useGetCitiesByCountryQuery({
    countryId: selectedCountry,
  });
  if (isLoading) {
    return <Loader />;
  }
  const countries = data?.data || [];
  const cities = citiesData?.data || [];
  const handleSelectCountry = (id) => {
    setSelectedCountry(id);
    dispatch(setCountryId(id));
  };
  const handleSelectCity = (id) => {
    dispatch(setCityId(id));
  };
  const formattedCategories = categories?.map((entry) => ({
    value: entry.id,
    level: entry.name,
  }));
  // console.log(selectedOption);
  return (
    <div
      className="form-main"
      style={{
        marginTop: "-50px",
        marginBottom: "50px",
        "@media (max-width: 600px)": {
          marginTop: "-200px",
          marginBottom: "30px",
        },
      }}
    >
      {/* <div
        className="section-shape top-0"
        style={{
          backgroundImage: "url(/images/shape-pat.png)",
        }}
      ></div> */}
      <div className="">
        <div className="row align-items-center form-content rounded position-relative ">
          <div className="col-lg-2 p-0">
            <h4 className="form-title form-title1 text-center p-4 py-5 white bg-theme mb-0 rounded-start d-lg-flex align-items-center">
              <i className="icon-location-pin fs-1 me-1"></i>{" "}
              {lngMode == "en" ? "Find Your Holidays" : "ابحث عن عطلاتك"}
            </h4>
          </div>
          <div className="col-lg-10 px-4">
            <div className="form-content-in d-lg-flex align-items-center">
              <div className="form-group me-2">
                <DropdownMenu
                  selectedTxt={"Select Country"}
                  data={countries}
                  handleSelect={handleSelectCountry}
                />
              </div>
              <div className="form-group me-2">
                <DropdownMenu
                  selectedTxt={"Select City"}
                  data={cities}
                  handleSelect={handleSelectCity}
                />
              </div>
          
              <div className="form-group mb-0 text-center">
                <button className="nir-btn w-100">
                  <i className="fa fa-search mr-2"></i>{" "}
                  {lngMode == "en" ? "Search now" : "ابحث الان"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursListSearch;
