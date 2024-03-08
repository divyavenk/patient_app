import React, { useState } from "react";
import "./home.css";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [formData, setFormData] = useState({
    patientId: "",
    name: "",
    fatherOrHusbandName: "",
    occupation: "",
    address: "",
    phoneNumber: "",
    age: "",
    mobileNumber: "",
    email: "",
    chiefComplaints: "",
    modelities: "",
    intelligence: "",
    memory: "",
    reaction: "",
    desires: "",
    aversions: "",
    dreams: "",
    salt: "",
    sweet: "",
    butter: "",
    sleepiwithside: "",
    spice: "",
    sour: "",
    ghee: "",
    fruits: "",
    milk: "",
    egg: "",
    nonveg: "",
    vegetables: "",
    thermals: "",
    stools: "",
    urine: "",
    sweat: "",
    gpe: "",
    pulse: "",
    nails: "",
    weight: "",
    extras: "",
    diagnosis: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("/api/formdata", formData);
      // console.log(response.data);
      if (formData.patientId === "") {
        formData.patientId = uuidv4();
      }
      const response = await fetch(
        "http://localhost:5000/api/user/createpatient",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      //const data = await response.json();
      console.log(response);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div class="container">
      <div class="header">
        <h1>THE HOMEOPATHIC HEALING CENTRE</h1>
        <h2>Bangalore (Karnataka) India</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="form-group div-sub1" style={{ display: "flex" }}>
          <div>
            <div class="div-left">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label for="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />

              <label for="fatherOrHusbandName">Father's/Husband's Name:</label>
              <input
                type="text"
                id="fatherOrHusbandName"
                name="fatherOrHusbandName"
                value={formData.fatherOrHusbandName}
                onChange={handleChange}
              />

              <label for="occupation">Occupation:</label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              <label for="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div class="div-right">
              <label for="caseSheetNo">Case Sheet No:</label>
              <input
                type="text"
                id="caseSheetNo"
                name="caseSheetNo"
                value={formData.caseSheetNo}
                onChange={handleChange}
              ></input>

              <label for="createdDate">Date:</label>
              <input
                type="text"
                id="createdDate"
                name="createdDate"
                value={formData.createdDate}
                onChange={handleChange}
              ></input>

              <label for="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              ></input>

              <label for="mobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              ></input>

              <label for="email">Email Id:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
        <br></br>
        <div class="form-group"></div>
        <div class="form-group">
          <label class="lable-bold" for="chiefComplaints">Chief Complaints:</label>
          <textarea
            id="chiefComplaints"
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="form-group">
          <label class="lable-bold" for="modelities">Modelities:</label>
          <textarea
            id="modelities"
            name="modelities"
            value={formData.modelities}
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="form-group">
          <label class="lable-bold" for="pastHistory">Past History:</label>
          <textarea
            id="pastHistory"
            name="pastHistory"
            value={formData.pastHistory}
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="form-group">
          <label class="lable-bold" for="familyHistory">Family History:</label>
          <textarea
            id="familyHistory"
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="form-group">
          <label  class="lable-bold">Mental Plane:</label>
          <br></br>
          <label for="intelligence">Intelligence</label>
          <input
            type="text"
            id="intelligence"
            name="intelligence"
            value={formData.intelligence}
            onChange={handleChange}
          ></input>
          <br></br>
          <label for="memory">Memory</label>
          <input
            type="text"
            id="memory"
            name="memory"
            value={formData.memory}
            onChange={handleChange}
          ></input>
          <br></br>
        </div>
        <div class="form-group">
          <label  class="lable-bold" for="reaction">Reaction To Animals & Insects:</label>
          <textarea
            type="text"
            id="reaction"
            name="reaction"
            value={formData.reaction}
            onChange={handleChange}
          ></textarea>
        </div>
        <hr class="solid"></hr>
        <div class="form-group div-sub">
          <label  class="lable-bold" for="reaction">Personal History:</label>
          <div>
            <div class="div-left">
              <label  for="desires">
                Desires:
              </label>
              <input
                type="text"
                id="desires"
                name="desires"
                value={formData.desires}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="aversions">
                Aversions:
              </label>
              <input
                type="text"
                id="aversions"
                name="aversions"
                value={formData.aversions}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="sleepwithside">
                Sleep with side:
              </label>
              <input
                type="text"
                id="sleepwithside"
                name="sleepwithside"
                value={formData.sleepiwithside}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="spice">
                Spice:
              </label>
              <input
                type="text"
                id="spice"
                name="spice"
                value={formData.spice}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="sour">
                Sour:
              </label>
              <input
                type="text"
                id="sour"
                name="sour"
                value={formData.sour}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="milk">
                Milk:
              </label>
              <input
                type="text"
                id="milk"
                name="milk"
                value={formData.milk}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="egg">
                Egg:
              </label>
              <input
                type="text"
                id="egg"
                name="egg"
                value={formData.egg}
                onChange={handleChange}
              ></input>
            </div>
            <div class="div-right">
              <label  for="dreams">
                Dreams:
              </label>
              <input
                type="text"
                id="dreams"
                name="dreams"
                value={formData.dreams}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="salt">
                Salt:
              </label>
              <input
                type="text"
                id="salt"
                name="salt"
                value={formData.salt}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="sweet">
                Sweet:
              </label>
              <input
                type="text"
                id="sweet"
                name="sweet"
                value={formData.sweet}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="butter">
                Butter:
              </label>
              <input
                type="text"
                id="butter"
                name="butter"
                value={formData.butter}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="ghee">
                Ghee:
              </label>
              <input
                type="text"
                id="ghee"
                name="ghee"
                value={formData.ghee}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="fruits">
                Fruits:
              </label>
              <input
                type="text"
                id="fruits"
                name="fruits"
                value={formData.fruits}
                onChange={handleChange}
              ></input>

              <br></br>
              <label  for="nonveg">
                Non-Veg:
              </label>
              <input
                type="text"
                id="nonveg"
                name="nonveg"
                value={formData.nonveg}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="vegetables">
                Vegetables:
              </label>
              <input
                type="text"
                id="vegetables"
                name="vegetables"
                value={formData.vegetables}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
        <hr class="solid"></hr>
        <div class="form-group div-sub">
          <div>
            <div class="div-left">
              <label  for="thermals">
                Thermals:
              </label>
              <input
                type="text"
                id="thermals"
                name="thermals"
                value={formData.thermals}
                onChange={handleChange}
              ></input>

              <label  for="stools">
                Stools:
              </label>
              <input
                type="text"
                id="stools"
                name="stools"
                value={formData.stools}
                onChange={handleChange}
              ></input>
              <label  for="gpe">
                GPE:
              </label>
              <input
                type="text"
                id="gpe"
                name="gpe"
                value={formData.gpe}
                onChange={handleChange}
              ></input>
              <br></br>
              <label  for="pulse">
                Pulse:
              </label>
              <input
                type="text"
                id="pulse"
                name="pulse"
                value={formData.pulse}
                onChange={handleChange}
              ></input>
            </div>
            <div class="div-right">
              <label  for="urine">
                Urine:
              </label>
              <input
                type="text"
                id="urine"
                name="urine"
                value={formData.urine}
                onChange={handleChange}
              ></input>

              <label  for="sweat">
                Sweat:
              </label>
              <input
                type="text"
                id="sweat"
                name="sweat"
                value={formData.sweat}
                onChange={handleChange}
              ></input>
              <label  for="nails">
                Nails:
              </label>
              <input
                type="text"
                id="nails"
                name="nails"
                value={formData.nails}
                onChange={handleChange}
              ></input>

              <label  for="weight">
                Weight:
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              ></input>

              <label  for="extras">
                Extras:
              </label>
              <input
                type="text"
                id="extras"
                name="extras"
                value={formData.extras}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>
        <hr class="solid"></hr>
        <div class="form-group">
          <label for="diagnosis">Diagnosis:</label>
          <textarea
            type="text"
            id="diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
          ></textarea>
        </div>
        <br></br>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Home;
