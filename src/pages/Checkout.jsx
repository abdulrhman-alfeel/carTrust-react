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
import TopNavbar from "../components/Nav/TopNavbar";
import { checkout, fetchOptions, fetchTrims, paymentUrl } from "../redux/features/dataSlice";








// Sections

export default function Checkout() {

  const history = useNavigate();
  const urlData = window.location.search.split("?")[1];
  const manufacturer = urlData?.split("&")[1];
  const model = urlData?.split("&")[2];
  const year = urlData?.split("&")[3];
  const dispatch = useDispatch();
  const status = useSelector(state => state.status);
  const error = useSelector(state => state.data);
  const data = useSelector(state => state.trims);
  const payment_link = useSelector((state) => state.payment_link);

  const optionsArray = useSelector(state => state.options);
  const [trim, setTrim] = useState({});
  const [updated, setUpdated] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
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
  });

  const [formData, setFormData] = useState({
    cart_id: '4244b9fd-c7e9-4f16-8d3c-4fe7bf6c48ca',
    cart_description: 'testing order 123',
    cart_currency: 'SAR',
    cart_amount: 46.17,
    callback: 'http://localhost:3000/',
    return: 'http://localhost:3000/',
  });

 

  const handleChange = (key, value) => {
    setCheckoutData({
      ...checkoutData,
      [key]: value
    })
  }


  const handlePaymentChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handlePayment = async (e) => {

    dispatch(paymentUrl(21,'https://fwatiry.online/','1'));

    console.log(payment_link);

    if(payment_link){
    window.location.href =payment_link;

    }
    // history.push(payment_link);


    // e.preventDefault();

    // try {
    //   const response = await fetch('https://test.paytabs.sa/payment/request', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': 'SGJNG9J2RJ-J6TN6NMND6-DTJ9TL6GB6',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();
    //   console.log(result);

    //   // Handle the payment result and update UI accordingly
    // } catch (error) {
    //   console.error('Error during payment:', error);
    // }
  };


  const submitHandler = async () => {
    checkoutData.manufacturer_id = manufacturer;
    checkoutData.model_id = model;
    checkoutData.year_id = year;
    checkoutData.trim_id = trim?.id;
    await dispatch(checkout(checkoutData));
    setUpdated(true);
    if (status === "succeeded" && error?.success) {
      console.log("Success");
      toast.success("Submitted successfully");
    } else if (status === "succeeded" && !error.success && error?.errors) {
      let message = Object.values(error?.errors)[0][0];
      toast.error(message);
    }
  }

  useEffect(() => {
    dispatch(fetchTrims({ manufacturer, model, year }));
    dispatch(fetchOptions());
  }, [dispatch]);

  console.log(status, error)

  // useEffect(() => {
  //   if (status === "succeeded" && error?.message === "ok") {
  //     toast.success("Submitted successfully");
  //   }
  //   else if (status === "failed") {
  //     let message = Object.values(error?.errors)[0][0];
  //     toast.error(message);
  //   }

  //   return () => {

  //   }
  // }, [updated])

  return (
    <>
      <ToastContainer />
      <TopNavbar />

      {/* /////////////// */}
      <section style={{ background: "#F6F7F9" }} class="bg-light py-5">
        <div class="container" style={{ marginTop: "40px", }}>
          <div class="row">

            <div class="col-xl-8 col-lg-8 mb-4">

              <div class="card shadow-0 border">
                <div class="p-4">
                  <h5 class="card-title mb-3">Car Trims</h5>
                  {
                    status === "loading" ?
                      <Loading />
                      :
                      <CarSelectWrapper>
                        <CarSelect trims={data?.trims} onSelect={(val) => setTrim(val)} />
                      </CarSelectWrapper>
                  }
                  <hr class="my-4" />
                </div>
              </div>


              <div className="card shadow-0 border" style={{ marginTop: "30px" }}>
                <div class="p-4">
                  <h5 class="card-title mb-3">Guest checkout</h5>
                  <div style={{ width: "100%", background: "#F6F7F9", padding: "10px" }}>
                    <div class="row">

                      <div class="col-12 mb-3">
                        <p class="mb-0">Mileage KM</p>
                        <div class="form-outline">
                          <input type="text" id="typeText" placeholder="Mileage KM" class="form-control" onChange={(e) => handleChange("mileage", e.target.value)} />
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Address</p>
                        <div class="form-outline">
                          <input type="text" id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("address", e.target.value)} />
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Plate No</p>
                        <div class="form-outline">
                          <input type="text" id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("plato_no", e.target.value)} />
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Ct Score</p>
                        <div class="form-outline">
                          <input type="text" id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("ct_score", e.target.value)} />
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Promo Code Id</p>
                        <div class="form-outline">
                          <input type="text" id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("promo_code_id", e.target.value)} />
                        </div>
                      </div>

                      <div class="col-6">
                        <p class="mb-0">Car Color</p>
                        <div class="form-outline">
                          <select id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("color", e.target.value)}>
                            <option>Please choose...</option>
                            {
                              optionsArray?.colors?.map(opt => {
                                return (
                                  <option value={opt?.id}>{opt?.title}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>


                      <div class="col-6 mb-3">
                        <p class="mb-0">Purpose of use</p>
                        <div class="form-outline">
                          <select id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("purpose_of_use", e.target.value)}>
                            <option>Please choose...</option>
                            {
                              optionsArray?.purpose_of_use?.map(opt => {
                                return (
                                  <option value={opt?.id}>{opt?.title}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Origins</p>
                        <div class="form-outline">
                          <select id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("origin", e.target.value)}>
                            <option>Please choose...</option>
                            {
                              optionsArray?.origins?.map(opt => {
                                return (
                                  <option value={opt?.id}>{opt?.title}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Waranty provider</p>
                        <div class="form-outline">
                          <select id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("warranty", e.target.value)}>
                            <option>Please choose...</option>
                            {
                              ["manufacturer", "car_trust", "others", "no"]?.map(opt => {
                                return (
                                  <option value={opt}>{opt}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Maintenance History</p>
                        <div class="form-outline">
                          <select id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("maintenance_history", e.target.value)}>
                            <option>Please choose...</option>
                            {
                              ["available", "not_available"]?.map(opt => {
                                return (
                                  <option value={opt}>{opt}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Accidents</p>
                        <div class="form-outline">
                          <select id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("accident", e.target.value)}>
                            <option>Please choose...</option>
                            {
                              ["Low", "Medium", "Major", "No"]?.map(opt => {
                                return (
                                  <option value={opt}>{opt}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>

                      <div class="col-6 mb-3">
                        <p class="mb-0">Certified</p>
                        <div class="form-outline">
                          <select id="typeText" placeholder="Type here" class="form-control" onChange={(e) => handleChange("certified", e.target.value)}>
                            <option>Please choose...</option>
                            {
                              ["yes", "no"]?.map(opt => {
                                return (
                                  <option value={opt}>{opt}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>




                    </div>

                    {/* <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">Keep me up to date on news</label>
            </div> */}

                    {/* <hr class="my-4" /> */}

                    {/* <h5 class="card-title mb-3">Shipping info</h5> */}

                    <div class="row mb-3">
                      <div class="col-lg-6">
                        <div className="row">

                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p>Maintainance history </p>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" />
                            <label class="form-check-label" for="flexRadioDefault8">
                              Available <br />
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" checked />
                            <label class="form-check-label" for="flexRadioDefault8">
                              Not  Available <br />
                              {/* <small class="text-muted">3-4 days via Fedex </small> */}
                            </label>
                          </div>
                        </div>


                      </div>


                      <div class="col-lg-6">
                        <div className="row">
                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p>Is it inspected by car trust </p>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                              Express delivery <br />
                              {/* <small class="text-muted">3-4 days via Fedex </small> */}
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                              Express delivery <br />
                              {/* <small class="text-muted">3-4 days via Fedex </small> */}
                            </label>
                          </div>
                        </div>
                      </div>



                      <div class="col-lg-6">
                        <div className="row">

                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p>Maintainance history </p>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" />
                            <label class="form-check-label" for="flexRadioDefault4">
                              Express delivery <br />
                              {/* <small class="text-muted">3-4 days via Fedex </small> */}
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" checked />
                            <label class="form-check-label" for="flexRadioDefault4">
                              Express delivery <br />
                              {/* <small class="text-muted">3-4 days via Fedex </small> */}
                            </label>
                          </div>
                        </div>


                      </div>


                      <div class="col-lg-6">
                        <div className="row">
                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p>Is it inspected by car trust </p>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault6" />
                            <label class="form-check-label" for="flexRadioDefault6">
                              Express delivery <br />
                              {/* <small class="text-muted">3-4 days via Fedex </small> */}
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault6" checked />
                            <label class="form-check-label" for="flexRadioDefault6">
                              Express delivery <br />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <Wrapper className="col-xl-4 col-lg-4  justify-content-center" >

              <div className="row">

                <ColumnWrapper className="col-lg-12">
                  <h3>Service Summary</h3>
                  <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
                </ColumnWrapper>


                <ColumnWrapper className="col-4">
                  <img style={{ width: "130px" }} src={trim?.trim_image} alt="" />
                </ColumnWrapper>

                <ColumnWrapper className="col-6">
                  <p>{trim?.name}</p>
                </ColumnWrapper>


                <ColumnWrapper className="col-2">
                  <img src={bmw} alt="" />
                </ColumnWrapper>


                <ColumnWrapper className="col-lg-12">
                  <h3>Payment Method</h3>
                  <p>Please enter your payment method</p>
                </ColumnWrapper>
              </div>


              <div className="ms-lg-4 mt-4 mt-lg-0">
                <PaymentMethodWrapper className="d-flex justify-content-between">
                  <div className="m-2">
                    <input class="form-check-input" type="radio" name="payment_method"onChange={handlePaymentChange} id="payment_method" />
                    <label class="form-check-label" for="payment_method">
                      Apple Pay <br />
                    </label>
                  </div>
                  <img className="m-2" src={applepay} alt="" />
                </PaymentMethodWrapper>
                <PaymentMethodWrapper className="d-flex justify-content-between">
                  <div className="m-2">
                    <input class="form-check-input" type="radio" onChange={handlePaymentChange} name="payment_method" id="payment_method" />
                    <label class="form-check-label" for="payment_method">
                      Credit Card <br />
                    </label>
                  </div>
                  <div className="m-2">
                    <span><img src={visa} alt="" /></span>
                    <img src={mastercard} alt="" />
                  </div>
                </PaymentMethodWrapper>
                <PaymentMethodWrapper className="d-flex justify-content-between">
                  <div className="m-2">
                    <input class="form-check-input" type="radio" name="payment_method" onChange={handlePaymentChange} id="payment_method" />
                    <label class="form-check-label" for="payment_method">
                      Pay later <br />
                    </label>
                  </div>
                  <img className="m-2" src={cash} alt="" />
                </PaymentMethodWrapper>




              </div>






              <div class="ms-lg-4 mt-4 mt-lg-0">
                <div class="d-flex justify-content-between">
                  <p class="mb-2">Subtotal</p>
                  <p class="mb-2">SAR 195.90</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="mb-2">Tax:</p>
                  <p class="mb-2 text-danger">- SAR 60.00</p>
                </div>



                <hr />

                <div class="input-group mt-3 mb-4" style={{ background: "#F6F7F9" }}>
                  <input type="text" class="form-control border" name="" placeholder="Promo code" />
                  <button class="btn btn-light text-primary border">Apply</button>
                </div>

                <div class="d-flex justify-content-between">
                  <p class="mb-2">Total price:</p>
                  <p class="mb-2 fw-bold">$149.90</p>
                </div>
                {
                  status === "loading" ?
                    <Loading />
                    :
                    <PayButton onClick={handlePayment}>
                      Pay now

                    </PayButton>
                }

              </div>



            </Wrapper>
          </div>
        </div>
      </section>

    </>
  );



}


const Wrapper = styled.div`
   background:#FFF
`;

const CarSelectWrapper = styled.div`
   background:#FFF;
  //  height:250px;
`;

const PaymentMethodWrapper = styled.div`
margin-top:10px;
background:#F6F7F9;
border-radius: 10px;
width:100%

`;


const ColumnWrapper = styled.div`

margin-top:20px;
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
background: #2D3291;
color:white;
text-align: center;

 
`;





