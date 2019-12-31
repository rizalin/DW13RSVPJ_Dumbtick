import React from "react";
import axios from "axios";

const API = "http://localhost:5000/api/v1/";

export function getCategoryList() {
  axios.get(`${API}categories`);
}

export function getCategory(id) {}
