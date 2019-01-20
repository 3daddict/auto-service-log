import React, { Component } from "react";

const EditModal = ({ updateData, newData }) => (
  <div>
    <input name="newData" placeholder="update" value={newData} />
    <button onClick={updateData}>enter</button>
  </div>
);

export default EditModal;
