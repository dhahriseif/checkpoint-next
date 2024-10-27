"use client";
import { data } from "../data";

const initialState = {
  movies: data,
};


const Reducer = (state = initialState, action) => {
  let payload, type = action;
  return type.type;
};

export default Reducer;
