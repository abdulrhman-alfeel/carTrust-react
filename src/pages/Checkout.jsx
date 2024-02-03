import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import bmw from "../assets/img/BMW.png";
import applepay from "../assets/img/applepay.png";
import cash from "../assets/img/cash.png";
import mastercard from "../assets/img/mastercard.png";
import visa from "../assets/img/visa.png";
import CarSelect from "../components/Elements/CarSelect";
import { Loading } from "../components/Elements/Loading";
import Select from "react-select";
import Slider from "react-slick";

import TopNavbar from "../components/Nav/TopNavbar";

import {
  checkout,
  fetchOptions,
  fetchTrims,
  paymentUrl,
} from "../redux/features/dataSlice";

import { Avatar, Button, Flex, Icon, Text } from "@chakra-ui/react";

import {
  FiBatteryCharging,
  FiCrosshair,
  FiHeart,
  FiMoreHorizontal,
  FiUsers,
} from "react-icons/fi";
import Statslodin from "./function/useSHM";

import imag_3 from "../assets/img/car_select_1.png";
import imag_4 from "../assets/img/car_select_2.png";
import imag_5 from "../assets/img/car_select_3.png";
import uuid4 from "uuid4";
import iconfail from "../assets/img/close.png";

// Sections

export default function Checkout() {
  const [width, setWidth] = useState(window.innerWidth);
  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const urlData = window.location.search.split("?")[1];
  const manufacturer = urlData?.split("&")[1];
  const model = urlData?.split("&")[2];
  const year = urlData?.split("&")[3];
  const icon = urlData?.split("&")[4];
  const Brand = urlData?.split("&")[5];
  const ModelName = urlData?.split("&")[6];
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.data);
  const data = useSelector((state) => state.trims);
  const payment_link = useSelector((state) => state.payment_link);
  const optionsArray = useSelector((state) => state.options);
  const [trim, setTrim] = useState();

  const [select_Car, setSelect_Cart] = useState(1);
  const [select_Car_text, setSelect_Cart_text] = useState(0);
  const [virfayflay, setVirfayflay] = useState(false);
  const [borderRadius, setBorder] = useState("14px");
  const [Rowing, setRowing] = useState(false);
  const [witing, setWiting] = useState(false);
  const [fontTitl, setFont] = useState({
    titlesub: "0.8em",
    titleHome: "20px",
  });
  const [updated, setUpdated] = useState(false);
  const checklocal = JSON.parse(localStorage.getItem("checkoutData"));
  const [checkoutData, setCheckoutData] = useState(
    checklocal !== null
      ? checklocal
      : {
          service_type: "evaluation",
          payload: {
            mileage: "",
            address: "",
            color: "",
            purpose_of_use: "",
            warranty: "",
            origin: "",
            maintenance_history: "",
            certified: "",
            accident: "",
            plato_no: "",
            ct_score: "",
            promo_code_id: "",
            manufacturer_id: manufacturer,
            model_id: model,
            year_id: year,
            trim_id: trim,
          },

          total_payable: "25",
          service_amount: "180",
          discount_amount: null,
          // promocod_id:null,
          cart_id: null,
        }
  );

  const [formData, setFormData] = useState({
    // cart_id: '4244b9fd-c7e9-4f16-8d3c-4fe7bf6c48ca',
    cart_description: "testing order 123",
    cart_currency: "SAR",
    cart_amount: 46.17,
    callback: "http://localhost:3000/",
    return: "http://localhost:3000/",
  });

  const handleChange = (key, value) => {
    setCheckoutData({
      ...checkoutData,
      payload: {
        ...checkoutData.payload,
        [key]: value,
      },
    });
  };

  const handlePaymentChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const virfy_data = () => {
    if (
      checkoutData.payload.certified.length > 0 &&
      checkoutData.payload.color.length > 0 &&
      checkoutData.payload.maintenance_history.length > 0 &&
      checkoutData.payload.manufacturer_id.length > 0 &&
      checkoutData.payload.mileage.length > 0 &&
      checkoutData.payload.model_id.length > 0 &&
      checkoutData.payload.origin.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = async () => {
    try {
      checkoutData.payload.manufacturer_id = manufacturer;
      checkoutData.payload.model_id = model;
      checkoutData.payload.year_id = year;
      checkoutData.payload.trim_id = trim;

      if (user !== null) {
        if (parseInt(trim) > 0) {
          if (virfy_data()) {
            setCheckoutData((prevData) => ({
              ...prevData,
              payload: {
                ...prevData.payload,
                trim_id: trim,
              },
            }));
            setUpdated(true);
            if (status === "succeeded" && error?.success) {
              toast.success("Submitted successfully");
            } else if (
              status === "succeeded" &&
              !error.success &&
              error?.errors
            ) {
              console.log(status);
              let message = Object.values(error?.errors)[0][0];
              toast.error(message);
            }
            console.log(checkoutData, "checkoutData");
            const response = await dispatch(checkout(checkoutData));
            console.log(response, "cart_iddddddddd");
            const cart = response.payload.cart_id;
            console.log(cart, "cart_iddddddddd");

            if (cart) {
              console.log("Cart ID exists:", checkoutData);

              // const paymentUrleResponse =await dispatch(paymentUrl({ cart, return_url: "https://freemarkate.com/Seccessing_py", amount: 25, string: "h" }));
              const paymentUrleResponse = await dispatch(
                paymentUrl({
                  cart,
                  return_url: "https://cartrust.tech",
                  amount: 25,
                  string: "h",
                })
              );

              const chack = {
                ...checkoutData,
                cart_id: cart,
              };
              localStorage.setItem("checkoutData", JSON.stringify(chack));
              localStorage.setItem(
                "cart_id",
                JSON.stringify({
                  cart,
                  return_url: "https://cartrust.tech",
                  amount: 25,
                  string: "h",
                  requestId: paymentUrleResponse.meta.requestId,
                })
              );
              console.log(paymentUrleResponse.meta.requestId);
              console.log(
                paymentUrleResponse,
                paymentUrleResponse.meta.requestId
              );
              window.location.href = paymentUrleResponse.payload;
            } else {
              alert("hello no cart ");
              console.log("Cart ID is undefined");
            }
            if (payment_link && status === "succeeded" && error?.success) {
              console.log("Hellloooooooooooo");
              console.log(payment_link);
              window.location.href = payment_link;
            }
          } else {
            alert("يجب اكمال البيانات ");
          }
        } else {
          alert("يجب اختيار نوع السيارة ");
        }
      } else {
        history(`/login`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      window.location.href = "#trims_data";
      setTimeout(() => {
        checklocal !== null ? setVirfayflay(true) : setVirfayflay(false);

        dispatch(fetchTrims({ manufacturer, model, year }));
        dispatch(fetchOptions());
      }, 2000);
    } catch (err) {
      console.log(err);
    }

    // console.log(data?.trims, "trimssss");
  }, [dispatch]);

  useEffect(() => {
    try {
      setTimeout(() => {
        data?.trims?.length > 0 ? setWiting(true) : setWiting(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }, [data?.trims]);
  let slid;

  if (window.innerWidth < 960) {
    slid = 400;
  } else {
    slid = 470;
  }
  let height;
  if (window.innerWidth < 970 && window.innerWidth > 600) {
    height = "45vh";
  } else {
    height = "32vh";
  }

  if (data?.trims?.length > 2) {
    slid = window.innerWidth / slid;
  } else if (data?.trims?.length <= 1) {
    slid = 1;
  } else {
    slid = 2;
  }

  var settings = {
    infinite: true,
    speed: 600,
    slidesToShow: slid,
    slidesToScroll: slid,
    autoplay: true,
    arrows: false,
  };

  const NaveEvltion = () => {
    console.log(data?.trims);
    return data?.trims.length > 2 ? (
      <Slider
        style={{
          // position: "relative",
          // right: '50%',
          // left: '-3%',
          // transition:"2s",
          animation: " 3s linear infinite;",
        }}
        {...settings}
      >
        {boxTrims()}
      </Slider>
    ) : (
      <Flex justify="flex-end" align="center">
        {boxTrims()}
      </Flex>
    );
  };

  const boxTrims = () => {
    return data?.trims?.map((pic) => {
      console.log(pic);
      return (
        <Flex
          onClick={() => {
            {
              handleTrimSelect(pic);
              setSelect_Cart(pic.id);
            }
          }}
          m={10}
          mb={20}
          pb={5}
          // w={ window.innerWidth  > 970 ?'35%' : '80%'}
          w={"30vh"}
          overflow={"hidden"}
          h={slid > 2 ? height : null}
          background="#F6F7F9"
          style={{
            transition: "2s",
          }}
          className="box_car"
          animation={select_Car === pic.id ? "all 3s linear infinite" : null}
          _focus={{ border: "solid 2px #2D3291" }}
          // _hover={{border:""}}
          border={select_Car === pic.id ? "solid 2px #2D3291" : "2px #fff"}
          borderRadius={borderRadius}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexDir="row" p={20} justifyContent="space-between">
            <Flex
              className="drow_car"
              // border="solid 2px #000"
              onClick={() => {
                handleTrimSelect(pic);
                select_Car_text !== pic.id && pic.name.length > 11
                  ? setSelect_Cart_text(pic.id)
                  : setSelect_Cart_text(0);
                // null
              }}
              flexDir="column"
            >
              <Text 
              // border='solid 2px #000'
              maxH='43%'
              overflow='hidden'
              fontSize="0.9em" fontWeight="bold" display="flex">
                {pic.name.substring(0, 14)}
                {pic.name.length > 14 ? (
                  <Icon
                    display={pic.name.length > 14 ? "flex" : "none"}
                    onClick={() => {
                      pic.name.length > 14
                        ? setSelect_Cart_text(pic.id)
                        : setSelect_Cart_text(0);
                    }}
                    as={FiMoreHorizontal}
                  />
                ) : null}
              </Text>
              {pic.name.length > 14 ? (
                <Text
                  className="name_drow"
                  style={{
                    width: "12em",
                    overflow: "auto",
                    wordBreak: "break-all",
                    whiteSpace: "normal",
                  }}
                  zIndex={2}
                  // display={select_Car_text === pic.id?'flex':'none'}
                  backgroundColor="#fff"
                  position="absolute"
                  // top={0}
                  fontSize="1em"
                  p={15}
                  color="#2D3291"
                  borderRadius={borderRadius}
                  opacity="80%"
                  fontWeight="bold"
                >
                  {pic.name}
                </Text>
              ) : null}
              <Text color="var(--Secondary-300, #90A3BF)">{ModelName}</Text>
            </Flex>
            <img width="20%" height="50%" src={icon} />
          </Flex>
          <Flex m={10} h="40%" justify="center" borderRadius={borderRadius}>
            <img
              borderRadius={borderRadius}
              width="80%"
              height="80%"
              src={pic.trim_image}
            />
          </Flex>
          <Flex
            animation=" 3s linear 1s infinite running slidein"
            justifyContent="center"
          >
            <Button
              className="startNow"
              // className={select_Car === pic.id ? "buttonamait": null}
              w="90%"
              h="2.4em"
              color={select_Car === pic.id ? "#fff" : "#2D3291"}
              // mb={25}
              animation={
                select_Car === pic.id ? "all 3s linear infinite" : null
              }
              backgroundColor={select_Car === pic.id ? "#2D3291" : "#fff"}
              // _focus={{
              //   backgroundColor:'#2D3291',
              //   color:'#fff'
              //  }}
              mt={15}
              mb={15}
              border="solid 1px #2D3291"
              // p={3}
              fontWeight={700}
              borderWidth={2}
              borderRadius="0.3em" // bgColor={value == 1 ? 'gray.600' : 'gray.400'}
              onClick={() => handleTrimSelect(pic)}
            >
              ابدأ الآن
            </Button>
          </Flex>
        </Flex>
      );
    });
  };

  const handleTrimSelect = (val) => {
    setTrim(val.id);
    console.log(val, "select cars");

    setCheckoutData((prevData) => ({
      ...prevData,
      payload: {
        ...prevData.payload,
        trim_id: val.id,
      },
    }));
  };

  const Modals = () => {
    return (
      <section
        onClick={() => {
          setVirfayflay(false);
        }}
        className="topics-section "
        style={{
          // display: "none",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          backgroundColor: "#00000099",
          zIndex: 999,
        }}
        id="exampleModalsfg"
      >
        <div
          className="modal-dialog"
          style={{
            // border:'solid 2px #000',
            width: "70vh",
            // width: "100%",
            // height: "40vh",
            padding: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#fff",
            // alignItems:'center',
            alignSelf: "center",
          }}
        >
          <button
            onClick={() => {
              setVirfayflay(false);
              alert("hllow");
            }}
            style={{
              // border: "solid 2px #000",
              alignSelf: "flex-end",
              width: "5vh",
              height: "4vh",
            }}
            // type="a"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div
            style={{
              // border:'solid 2px',
              textAlign: "center",
              height: "100%",
            }}
            className="modal-content"
          >
            <div className="modal-body">
              <h1 className="modal-title">لم يتم تنفيذ العملية</h1>
              {/* <h5>{message}</h5> */}
              <img style={{ marginTop: "2em" }} src={iconfail} width="40%" />

              <p id="size"></p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const array_w = [
    { id: 1, name: "manufacturer" },
    { id: 2, name: "car_trust" },
    { id: 3, name: "others" },
    { id: 1, name: "no" },
  ];

  const Svg = (p: JSX.IntrinsicElements["svg"]) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 10"
      focusable="false"
      role="presentation"
      {...p}
    />
  );

  const DropdownIndicator = () => (
    <div css={{ color: "#00579F", height: 24, width: 32 }}>
      <Svg style={{ border: "2px #000" }}>
        <path
          d="M12.9188 0H6.68877H1.07877C0.118772 0 -0.361228 1.16 0.318772 1.84L5.49877 7.02C6.32877 7.85 7.67877 7.85 8.50877 7.02L10.4788 5.05L13.6888 1.84C14.3588 1.16 13.8788 0 12.9188 0Z"
          fill="#90A3BF"
        />
      </Svg>
    </div>
  );

  const Stayle_selct = {
    control: (provided) => ({
      ...provided,
      // border: "solid 2px #000",
      width: "100%",
      borderRadius: "8px",
      padding: "1px 4px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: "46px",
      fontSize: "14px",
      minHeight: "56px",
      boxShadow: "none",
      float: "right",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#4d90fe",
      },
    }),
    icon: (provid) => ({
      ...provid,
      border: "solid 2px #000",
      width: "100%",
      background: "#000",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "4px",

      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      marginTop: "4px",
      zIndex: 999,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "300px",
      overflowY: "auto",
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "8px 12px",
      color: state.isSelected ? "#000" : "#333",
      backgroundColor: state.isSelected ? "#fff" : "#fff",
      "&:hover": {
        backgroundColor: "#f4f4f4",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    }),
  };

  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <ToastContainer />
        <TopNavbar />
        {/* borderRadius:{borderRadius}/}
      {/* /////////////// */}
        <section
          id="trims_data"
          style={{ marginTop: "3%", background: "#F6F7F9" }}
          className="bg-light py-5"
        >
          <div className="container" style={{ marginTop: "40px" }}>
            <div className="row" style={{ flexDirection: "row-reverse" }}>
              <div className="col-xl-8 col-lg-8 mb-4 ">
                <div
                  className="card shadow-0 "
                  style={{ border: "none", borderRadius: borderRadius }}
                >
                  <div style={{ padding: "5px" }}>
                    <Flex
                      w="100%"
                      flexDir="row-reverse"
                      justifyContent="space-between"
                      align="center"
                      // border="solid 1px #000"
                      // flexDir='row'
                      // m={11}
                      // ml={21}
                    >
                      <Flex
                        flexDir="column"
                        align="flex-end"
                        justify="flex-start"
                        m={11}
                        ml={21}
                      >
                        <Text
                          //  fontFamily="Plus Jakarta Sans"
                          fontWeight={700}
                          fontStyle="normal"
                          fontSize={fontTitl.titleHome}
                        >
                          {/* Car Trims */}
                          طراز السيارات
                        </Text>
                        <Text
                          fontSize={fontTitl.titlesub}
                          color="var(--Secondary-300, #90A3BF)"
                        >
                          {/* Please select your car trim */}
                          الرجاء تحديد طراز سيارتك
                        </Text>
                      </Flex>
                      <Text
                        m={10}
                        color="var(--Secondary-300, #90A3BF)"
                        fontSize="14px"
                      >
                        {data?.trims?.length} نوع
                      </Text>
                    </Flex>
                    {/* // <Loading /> */}
                    <div className={window.innerWidth > 1000 ? "p-4" : "p-sm"}>
                      {
                        // status === "loading"  & data?.trims?.length <= 0?
                        witing ? <NaveEvltion /> : <Statslodin />
                      }
                    </div>
                  </div>
                </div>

                {/* تفاصيل التقييم  */}
                <div
                  className="card shadow-0 "
                  style={{
                    width: "100%",
                    border: "none",
                    borderRadius: borderRadius,
                    marginTop: "30px",
                  }}
                >
                  <div
                    style={{
                      padding: "1.7rem ",
                      width: "100%",
                      paddingLeft: "2rem",
                    }}
                  >
                    <Flex align="flex-end" flexDir="column" className="mb-4">
                      <h5
                        className="card-title"
                        style={{
                          fontWeight: 700,
                          fontSize: fontTitl.titleHome,
                        }}
                      >
                        تفاصيل التقييم
                      </h5>
                      <Text
                        fontSize={fontTitl.titlesub}
                        color="var(--Secondary-300, #90A3BF)"
                      >
                        الرجاء تحديد بيانات تقييم سيارتك
                      </Text>
                    </Flex>
                    <div
                      style={{
                        borderRadius: borderRadius,
                        width: "100%",
                        background: "#F6F7F9",
                        padding: "4%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection:
                            window.innerWidth < 960 ? "column" : "row",
                        }}
                        class={!Rowing ? "row" : null}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                          }}
                          className="col-12 mb-3"
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            عدد الكيلومترات كم
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <input
                              style={{
                                textAlign: "right",
                                height: "3em",
                              }}
                              value={checkoutData.payload.mileage}
                              type="text"
                              id="typeText"
                              placeholder=" حدد عدد الكيلومترات كم "
                              class="form-control"
                              onChange={(e) =>
                                handleChange("mileage", e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div
                          style={{
                            width: window.innerWidth > 960 ? "50%" : "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                          className={!Rowing ? "col-6 mb-3" : "mb-3"}
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            لون السيارة
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <Select
                              isRtl
                              // placeholder=
                              placeholder={
                                checkoutData.payload.color.length > 0
                                  ? checkoutData.payload.color
                                  : "حدد لون السيارة"
                              }
                              components={{ DropdownIndicator, null: null }}
                              className="select-image"
                              // value={checkoutData.payload.color}
                              isSearchable={false}
                              onChange={(e) => handleChange("color", e.title)}
                              // value={}
                              options={optionsArray?.colors?.map(
                                (manufacturer, index) => manufacturer
                              )}
                              formatOptionLabel={(country) => (
                                <div
                                  key={country.id}
                                  className="country-option"
                                >
                                  <span>{country.title}</span>
                                  <span
                                    style={{
                                      width: "2em",
                                      height: "2em",
                                      borderRadius: "20%",
                                      boxShadow:
                                        "0 4px 10px rgba(0, 0, 0, 0.07)",
                                      backgroundColor: country.color_code,
                                      color: country.color_code,
                                    }}
                                  >
                                    ...
                                  </span>
                                </div>
                              )}
                              styles={Stayle_selct}
                            />
                          </div>
                        </div>

                        {/* <div class="col-6 mb-3"> */}
                        <div
                          style={{
                            width: window.innerWidth > 960 ? "50%" : "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                          className={!Rowing ? "col-6 mb-3" : "mb-3"}
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            الغرض من الاستخدام
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <Select
                              isRtl
                              className="select-image"
                              // placeholder="حدد الغرض من الاستخدام "
                              placeholder={
                                checkoutData.payload.purpose_of_use.length > 0
                                  ? checkoutData.payload.purpose_of_use
                                  : "حدد الغرض من الاستخدام "
                              }
                              // value={checkoutData.payload.purpose_of_use}
                              components={{ DropdownIndicator, null: null }}
                              isSearchable={false}
                              onChange={(e) =>
                                handleChange("purpose_of_use", e.title)
                              }
                              // value={}
                              options={optionsArray?.purpose_of_use?.map(
                                (opt, index) => opt
                              )}
                              formatOptionLabel={(country) => (
                                <div
                                  key={country.id}
                                  className="country-option"
                                >
                                  <span>{country.title}</span>
                                </div>
                              )}
                              styles={Stayle_selct}
                            />
                          </div>
                        </div>

                        {/* <div class="col-6 mb-3"> */}
                        <div
                          style={{
                            width: window.innerWidth > 960 ? "50%" : "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                          className={!Rowing ? "col-6 mb-3" : "mb-3"}
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            وارد المركبة
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <Select
                              isRtl
                              className="select-image"
                              components={{ DropdownIndicator, null: null }}
                              // placeholder="حدد الاصول"
                              placeholder={
                                checkoutData.payload.origin.length > 0
                                  ? checkoutData.payload.origin
                                  : "  حدد وارد المركبه"
                              }
                              isSearchable={false}
                              onChange={(e) => handleChange("origin", e.title)}
                              // value={}
                              options={optionsArray?.origins?.map((opt) => opt)}
                              formatOptionLabel={(oopt) => (
                                <div key={oopt.id} className="oopt-option">
                                  <span>{oopt.title}</span>
                                </div>
                              )}
                              styles={Stayle_selct}
                            />
                          </div>
                        </div>

                        {/* <div class="col-6 mb-3"> */}
                        <div
                          style={{
                            width: window.innerWidth > 960 ? "50%" : "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                          className={!Rowing ? "col-6 mb-3" : "mb-3"}
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            مزود الضمان
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <Select
                              isRtl
                              className="select-image"
                              components={{ DropdownIndicator, null: null }}
                              // placeholder="حدد مزود الضمان"
                              placeholder={
                                checkoutData.payload.warranty.length > 0
                                  ? checkoutData.payload.warranty
                                  : "حدد مزود الضمان"
                              }
                              // value={checkoutData.payload.warranty}
                              isSearchable={false}
                              onChange={(e) => handleChange("warranty", e.name)}
                              // value={}
                              options={array_w?.map((opt) => opt)}
                              formatOptionLabel={(oopt) => (
                                <div key={oopt.id} className="oopt-option">
                                  <span>{oopt.name}</span>
                                </div>
                              )}
                              styles={Stayle_selct}
                            />
                          </div>
                        </div>

                        {/* <div class="col-6 mb-3"> */}
                        <div
                          style={{
                            width: window.innerWidth > 960 ? "50%" : "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                          className={!Rowing ? "col-6 mb-3" : "mb-3"}
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            سجل الصيانة
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <Select
                              isRtl
                              className="select-image"
                              components={{ DropdownIndicator, null: null }}
                              // placeholder="حدد تاريخ الصيانة"
                              isSearchable={false}
                              // value={checkoutData.payload.maintenance_history}
                              placeholder={
                                checkoutData.payload.maintenance_history
                                  .length > 0
                                  ? checkoutData.payload.maintenance_history
                                  : "حدد تاريخ الصيانة"
                              }
                              onChange={(e) =>
                                handleChange("maintenance_history", e.name)
                              }
                              // value={}
                              options={[
                                { id: 1, name: "available" },
                                { id: 2, name: "not_available" },
                              ]?.map((opt) => opt)}
                              formatOptionLabel={(oopt) => (
                                <div key={oopt.id} className="oopt-option">
                                  <span>{oopt.name}</span>
                                </div>
                              )}
                              styles={Stayle_selct}
                            />
                          </div>
                        </div>
                        {/* <div class="col-6 mb-3"> */}
                        <div
                          style={{
                            width: window.innerWidth > 960 ? "50%" : "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                          className={!Rowing ? "col-6 mb-3" : "mb-3"}
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            الحوادث
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <Select
                              isRtl
                              className="select-image"
                              components={{ DropdownIndicator, null: null }}
                              placeholder={
                                checkoutData.payload.accident.length > 0
                                  ? checkoutData.payload.accident
                                  : "حدد الحوادث "
                              }
                              isSearchable={false}
                              onChange={(e) => handleChange("accident", e.name)}
                              // value={checkoutData.payload.accident}
                              options={[
                                { id: 1, name: "Low" },
                                { id: 2, name: "Medium" },
                                { id: 3, name: "Major" },
                                { id: 4, name: "No" },
                              ]?.map((opt) => opt)}
                              formatOptionLabel={(oopt) => (
                                <div key={oopt.id} className="oopt-option">
                                  <span>{oopt.name}</span>
                                </div>
                              )}
                              styles={Stayle_selct}
                            />
                          </div>
                        </div>
                        {/* <div class="col-6 mb-3"> */}
                        <div
                          style={{
                            width: window.innerWidth > 960 ? "50%" : "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                          }}
                          className={!Rowing ? "col-6 mb-3" : "mb-3"}
                        >
                          <p className="mb-3" style={{ fontWeight: 700 }}>
                            معلومات الضمان
                          </p>
                          <div
                            style={{ width: "100%" }}
                            className="form-outline"
                          >
                            <Select
                              isRtl
                              className="select-image"
                              components={{ DropdownIndicator, null: null }}
                              // placeholder="اختر معتمداً"
                              isSearchable={false}
                              placeholder={
                                checkoutData.payload.certified.length > 0
                                  ? checkoutData.payload.certified
                                  : "اختر معتمداً"
                              }
                              onChange={(e) =>
                                handleChange("certified", e.name)
                              }
                              // value={checkoutData.payload.certified}
                              options={[
                                { id: 1, name: "yes" },
                                { id: 2, name: "no" },
                              ]?.map((opt) => opt)}
                              formatOptionLabel={(oopt) => (
                                <div key={oopt.id} className="oopt-option">
                                  <span>{oopt.name}</span>
                                </div>
                              )}
                              styles={Stayle_selct}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-lg-6">
                          <div className="row">
                            <div style={{ margin: "10px" }}>
                              <div
                                className="con-lg-12"
                                style={{ margin: "20px", textAlign: "right" }}
                              >
                                <p> تاريخ الصيانة </p>
                              </div>
                              <Flex justifyContent="space-around">
                                <div className="col-lg-6 responsev-m">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault1"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{ marginLeft: "5px" }}
                                    for="flexRadioDefault2"
                                  >
                                    غير متاح <br />
                                    {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                  </label>
                                </div>
                                <div className="col-lg-6 responsev-m">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault1"
                                    id="flexRadioDefault1"
                                    // checked
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{ marginLeft: "5px" }}
                                    for="flexRadioDefault1"
                                  >
                                    متاح
                                    <br />
                                    {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                  </label>
                                </div>
                              </Flex>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div className="row">
                            <div style={{ margin: "10px" }}>
                              <div
                                className="con-lg-12"
                                style={{ margin: "20px", textAlign: "right" }}
                              >
                                <p>هل تم فحصها لدى كارترست</p>
                              </div>
                              <Flex justifyContent="space-around">
                                <div className="col-lg-6 responsev-m">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault2"
                                    id="flexRadioDefault2"
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{ marginLeft: "5px" }}
                                    for="flexRadioDefault2"
                                  >
                                    نعم <br />
                                    {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                  </label>
                                </div>
                                <div className="col-lg-6 responsev-m">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault2"
                                    id="flexRadioDefault2"
                                    // checked
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{ marginLeft: "5px" }}
                                    for="flexRadioDefault2"
                                  >
                                    لا <br />
                                    {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                  </label>
                                </div>
                              </Flex>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div className="row">
                            <div style={{ margin: "10px" }}>
                              <div
                                className="con-lg-12"
                                style={{ margin: "20px", textAlign: "right" }}
                              >
                                <p>هل المركبة معدلة</p>
                              </div>
                              <Flex justifyContent="space-around">
                                <div className="col-lg-6 responsev-m">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault3"
                                    id="flexRadioDefault3"
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{ marginLeft: "5px" }}
                                    for="flexRadioDefault3"
                                  >
                                    نعم <br />
                                    {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                  </label>
                                </div>
                                <div className="col-lg-6 responsev-m">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault3"
                                    id="flexRadioDefault3"
                                    // checked
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{ marginLeft: "5px" }}
                                    // for="flexRadioDefault3"
                                  >
                                    لا <br />
                                    {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                  </label>
                                </div>
                              </Flex>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div className="row">
                            <div style={{ margin: "20px", textAlign: "right" }}>
                              <div className="con-lg-12">
                                <p style={{ marginRight: "30px" }}>أصل</p>
                              </div>
                              <Flex
                                w="98%"
                                margin="auto"
                                mt="20px"
                                justifyContent="space-around"
                              >
                                <div
                                  style={{ marginLeft: "-15px" }}
                                  className="col-lg-6 responsev-m"
                                >
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault6"
                                    id="flexRadioDefault6"
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{
                                      fontSize:
                                        window.innerWidth < 960
                                          ? "0.8em"
                                          : null,
                                      marginLeft: "15px",
                                    }}
                                    for="flexRadioDefault6"
                                  >
                                    KSA/GCC استيراد <br />
                                    {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                  </label>
                                </div>
                                <div className="col-lg-6 responsev-m">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault6"
                                    id="flexRadioDefault6"
                                    // checked
                                  />
                                  <label
                                    class="form-check-label"
                                    style={{
                                      fontSize:
                                        window.innerWidth < 960
                                          ? "0.8em"
                                          : null,
                                      marginLeft: "5px",
                                    }}
                                    for="flexRadioDefault6"
                                  >
                                    استيراد اخر <br />
                                  </label>
                                </div>
                              </Flex>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ملخص الخدمة  */}
              <Wrapper
                style={{
                  width: window.innerWidth < 960 ? "90%" : null,
                  margin: window.innerWidth < 960 ? "auto" : null,
                  borderRadius: borderRadius,
                  paddingLeft: "2%",
                  paddingRight: "2%",
                }}
                className=" col-xl-4 col-lg-4   justify-content-center"
              >
                <div className="row  mt-2">
                  <ColumnWrapper
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                    }}
                    className="col-lg-12 mt-4"
                  >
                    <h3
                      style={{ fontSize: fontTitl.titleHome, fontWeight: 700 }}
                    >
                      ملخص الخدمة
                    </h3>
                    {/* <p
                    style={{
                      // width: "90%",
                      marginBottom: "10%",
                      color: "var(--Secondary-300, #90A3BF)",
                      fontSize: fontTitl.titlesub,
                    }}
                  >
                قد تتغير الأسعار اعتمادًا على مدة الإيجار وسعر السيارة المستأجرة.
                  </p> */}
                  </ColumnWrapper>

                  {data?.trims
                    ?.filter((item) => item.id === select_Car)
                    .map((pic) => (
                      <Flex w="100%" justifyContent="space-between">
                        <Flex
                          // w="20rem"
                          h="8em"
                          borderRadius={borderRadius}
                          align="center"
                          // border='solid 2px #000'
                          // justifyContent='center'
                          // backgroundColor="#F6F7F9"
                        >
                          <Avatar margin="auto" w="100%" src={pic.trim_image} />
                        </Flex>
                        <Flex
                          w="60%"
                          p={10}
                          align="flex-start"
                          justify="center"
                          flexDir="column"
                        >
                          <Text
                            w="90%"
                            overflow="hidden"
                            h="30%"
                            // border='solid 2px #000'
                            fontFamily="Plus Jakarta Sans"
                            fontWeight={700}
                            fontStyle="normal"
                            marginLeft={"10px"}
                            fontSize="110%"
                          >
                            {pic.name}
                          </Text>
                          <Flex
                            // w="60%"
                            fontFamily="Plus Jakarta Sans"
                            fontWeight={700}
                            fontStyle="normal"
                            fontSize="1em"
                            // border="solid 5px  #000"
                            justifyContent="space-around"
                          >
                            <Text
                              w="40%"
                              textAlign="center"
                              overflow="hidden"
                              // pl={10}
                              // mr={20}
                            >
                              {Brand}
                            </Text>
                            <Text w="50%">{ModelName}</Text>
                          </Flex>
                        </Flex>
                        <Flex
                          w="25%"
                          // mr={20}
                          justify="flex-end"
                          align="center"
                          className="col-2"
                        >
                          <img
                            width={window.innerWidth < 960 ? "50%" : "30%"}
                            style={{ maxHeight: "100%" }}
                            src={icon}
                            alt=""
                          />
                        </Flex>
                      </Flex>
                    ))}

                  <ColumnWrapper
                    style={{
                      // fontFamily: "Plus Jakarta Sans" ,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                    }}
                    className="col-lg-12"
                  >
                    <hr style={{ color: "var(--Secondary-300, #90A3BF)  " }} />
                    <h3
                      style={{ fontSize: fontTitl.titleHome, fontWeight: 700 }}
                    >
                      طريقة الدفع
                    </h3>
                    <p
                      style={{
                        fontSize: fontTitl.titlesub,
                        color: "var(--Secondary-300, #90A3BF)",
                      }}
                    >
                      الرجاء إدخال طريقة الدفع الخاصة بك
                    </p>
                  </ColumnWrapper>
                </div>
                <div className="mt-5 mt-lg-4">
                  <PaymentMethodWrapper
                    style={{
                      paddingRight: "8px",
                      flexDirection: "row-reverse",
                    }}
                    className="d-flex justify-content-between"
                  >
                    <Flex
                      w="55%"
                      flexDir="row-reverse"
                      justifyContent="flex-start"
                      className="mt-2 "
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment_method"
                        onChange={handlePaymentChange}
                        id="payment_method"
                        style={{ marginLeft: "5px" }}
                      />
                      <label
                        style={{ fontWeight: 700, marginLeft: "15px" }}
                        class="form-check-label"
                        for="payment_method"
                      >
                        دفع ابل
                      </label>
                    </Flex>
                    <Avatar
                      className="m-3"
                      w="10%"
                      h="10%"
                      src={applepay}
                      alt=""
                    />
                  </PaymentMethodWrapper>
                  <PaymentMethodWrapper
                    style={{
                      paddingRight: "8px",
                      flexDirection: "row-reverse",
                    }}
                    className="d-flex justify-content-between"
                  >
                    <Flex
                      w="55%"
                      flexDir="row-reverse"
                      justifyContent="flex-start"
                      className="mt-2 "
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_method"
                        onChange={handlePaymentChange}
                        id="payment_method"
                      />
                      <label
                        style={{
                          marginRight: "10px",
                          fontWeight: 700,
                          marginLeft: "15px",
                        }}
                        className="form-check-label"
                        for="payment_method"
                      >
                        بطاقة إئتمان
                      </label>
                    </Flex>
                    <Flex m={10} justifyContent="flex-start">
                      <span>
                        <Avatar src={visa} alt="" />
                      </span>
                      <Avatar src={mastercard} alt="" />
                    </Flex>
                  </PaymentMethodWrapper>

                  <PaymentMethodWrapper
                    style={{
                      paddingRight: "8px",
                      flexDirection: "row-reverse",
                    }}
                    className="d-flex justify-content-between p-1"
                  >
                    <Flex
                      w="55%"
                      h={"10%"}
                      flexDir="row-reverse"
                      justifyContent="flex-start"
                      className="mt-2 "
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_method"
                        onChange={handlePaymentChange}
                        id="payment_method"
                      />
                      <label
                        className="form-check-label"
                        style={{
                          fontWeight: 700,
                          marginRight: "15px",
                          marginLeft: "15px",
                          marginBottom: "1%",
                        }}
                        for="payment_method"
                      >
                        ادفع لاحقا
                      </label>
                    </Flex>
                    <Avatar
                      style={{ marginLeft: "20px" }}
                      w={window.innerWidth < 1100 ? "9%" : "10%"}
                      h={window.innerWidth < 1100 ? "9%" : "10%"}
                      src={cash}
                      alt=""
                    />
                  </PaymentMethodWrapper>

                  <hr
                    style={{
                      marginTop: "8%",
                      background: "var(--Secondary-300, #90A3BF)",
                    }}
                  />
                </div>

                <div className=" mt-5 mt-lg-4">
                  <div
                    style={{ flexDirection: "row-reverse" }}
                    className="d-flex justify-content-between"
                  >
                    <p
                      className="mb-3"
                      style={{
                        fontSize: fontTitl.titlesub,
                        color: "var(--Secondary-300, #90A3BF)",
                      }}
                    >
                      المجموع الفرعي
                    </p>
                    <p
                      className="mb-3"
                      style={{ fontSize: fontTitl.titlesub, fontWeight: 700 }}
                    >
                      SAR 25.00
                    </p>
                  </div>
                  {/* <div class="d-flex justify-content-between">
                  <p class="mb-3" style={{fontSize:fontTitl.titlesub,color:'var(--Secondary-300, #90A3BF)'}}>Tax:</p>
                  <p class="mb-3" style={{fontSize:fontTitl.titlesub,fontWeight:700}}>- SAR 25.00</p>
                </div> */}

                  <Flex
                    h="56px"
                    // border="solid 1px #000"
                    overflow="hidden"
                    borderRadius="10px"
                    justifyContent="space-between"
                    style={{ background: "#F6F7F9" }}
                  >
                    <input
                      id="myInput"
                      type="text"
                      style={{
                        marginLeft: "10%",
                        // border: "none",
                        // borderColor: "#F6F7F9",
                        background: "#F6F7F9",
                        fontSize: "10px",
                      }}
                      name=""
                      placeholder="تطبيق الرمز الترويجي "
                    />
                    <Button
                      style={{
                        fontSize: "12px",
                        margin: "3%",
                        fontWeight: 600,
                        background: "#F6F7F9",
                      }}
                      border="none"
                    >
                      قدم الآن
                    </Button>
                  </Flex>
                  <div
                    style={{ marginTop: "10%", flexDirection: "row-reverse" }}
                    class="d-flex justify-content-between"
                  >
                    <Flex align="flex-end" flexDir="column">
                      <p class="mb-2">السعر الكلي:</p>
               
                    </Flex>

                    <p class="mb-2 fw-bold" style={{ fontSize: "20px" }}>
                      25.00 SAR
                    </p>
                  </div>
                  <Flex justify="center" m={10}>
                    {status === "loading" ? (
                      <Loading />
                    ) : (
                      <Button
                        backgroundColor="#2D3291"
                        borderRadius="10px"
                        color="#fff"
                        border="none"
                        p={10}
                        w="100%"
                        onClick={submitHandler}
                      >
                        ادفع الان
                      </Button>
                    )}
                  </Flex>
                </div>
              </Wrapper>
            </div>
          </div>
        </section>
      </div>
      {virfayflay === true ? <Modals /> : null}
      {/* {virfayflay === true? <Modals/> : null} */}
    </>
  );
}

const Wrapper = styled.div`
  background: #fff;
`;

const CarSelectWrapper = styled.div`
  background: #fff;
  //  height:250px;
`;

const PaymentMethodWrapper = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  background: #f6f7f9;
  border-radius: 10px;
  width: 100%;
`;

const ColumnWrapper = styled.div`
  margin-top: 20px;
`;

const PayButton = styled.button`
  width: 350px;
  // height: 40px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  // gap: 8px;
  // flex-shrink: 0;
  border-radius: 8px;
  background: #2d3291;
  color: white;
  text-align: center;
`;
