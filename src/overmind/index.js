import { state } from "./state";
import * as actions from "./actions";
import { createHook } from "overmind-react";

export const config = {
  state,
  actions
};

export const useOvermind = createHook();
