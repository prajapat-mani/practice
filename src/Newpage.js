import React, { useState } from "react";
import { useEffect } from "react";

const Newpage = () => {

    const[responseData, setResponseData]=useState();

  const [settingdata, setSettingdata] = useState({
    organisationDesc: "",
    panNumber: "",
    city: "",
    PhoneNumber: "",
    Website: "",
  });

  const naaam = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setSettingdata({ ...settingdata, [name]: val });
  };

  const Newfunction = async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"), "tokennnnn");
    const { organisationDesc, panNumber, PhoneNumber, Website, city } =
      settingdata;

    await fetch(
      "https://epsoft-invoices.herokuapp.com/api/auth/setting-update-profile",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
        body: JSON.stringify({
          organisationDesc,
          panNumber,
          PhoneNumber,
          Website,
          city,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // setResponseData(response?.data)

        

      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    
    Getdata()


  },[]);

  const Getdata = async () => {
console.log(localStorage.getItem("token"));

    await fetch("https://epsoft-invoices.herokuapp.com/api/auth/user-profile", {
      method: "GET",
      headers: {
        "content-type": "Apllication/JSON",
        Authorization: JSON.parse (localStorage.getItem("token")),
      },
    }).then((response)=>response.json())
    .then((response)=>{
        setSettingdata(response?.data)
        
    }).catch((error)=>{

        console.log(error)
    })
  }

  return (
    <>
      <form onSubmit={Newfunction}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="container">
              <div className="text-center">
                <h1>Settings</h1>
                <p>Edit your organisation's setting and public profile</p>
              </div>

              <h4 className=""> Contact Information</h4>
              <div className="d-flex">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <label for="country" class="form-label mb-0">
                    country
                  </label>
                  <input
                    class="form-control"
                    name="country"
                    value={settingdata?.city}
                    onChange={naaam}
                    placeholder="country"
                  ></input>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-6 ms-2">
                  <label for="Pan Number" class="form-label mb-0">
                    Pan Number
                  </label>
                  <input
                    class="form-control"
                    placeholder="enter pan number"
                    onChange={naaam}
                  ></input>
                </div>
              </div>

              <div className="d-flex">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <label for="City" class="form-label mb-0">
                    City
                  </label>
                  <input
                    class="form-control"
                    name="city"
                    value={settingdata.city}
                    onChange={naaam}
                    placeholder="enter city name"
                  ></input>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-6 ms-2">
                  <label for="Website" class="form-label mb-0">
                    Website
                  </label>
                  <input
                    class="form-control"
                    placeholder="website"
                    namw="website"
                    value={settingdata.website}
                    onChange={naaam}
                  ></input>
                </div>
              </div>

              <div className="d-flex">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <label for="phone number" class="form-label mb-0">
                    phone number
                  </label>
                  <input
                    class="form-control"
                    name="phoneNumber"
                    value={settingdata.phoneNumber}
                    onChange={naaam}
                    placeholder=" enter the phoneNumber"
                  ></input>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-6 ms-2">
                  <label for="postalCode" class="form-label mb-0">
                    postalCode
                  </label>
                  <input
                    class="form-control"
                    placeholder="postalCode"
                    onChange={naaam}
                    name="postalCode"
                    value={settingdata.postalCode}
                  ></input>
                </div>
              </div>

              <div className="d-flex">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <label for="addressLine1" class="form-label mb-0">
                    addressLine1
                  </label>
                  <input
                    class="form-control"
                    name="addressLine1"
                    value={settingdata.addressLine1}
                    onChange={naaam}
                    placeholder="enter city addressLine1"
                  ></input>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-6 ms-2">
                  <label for="addressLine2" class="form-label mb-0">
                    addressLine2
                  </label>
                  <input
                    class="form-control"
                    placeholder="enter addressLine2"
                    name="addressLine2"
                    value={settingdata.addressLine2}
                    onChange={naaam}
                  ></input>
                </div>
              </div>

              <div className="">
                <label for="organisationDesc" class="form-label mb-0">
                  organisationDesc
                </label>
                <input
                  class="form-control"
                  name="organisationDesc"
                  value={settingdata.organisationDesc}
                  onChange={naaam}
                  placeholder="organisationDesc"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default Newpage;
