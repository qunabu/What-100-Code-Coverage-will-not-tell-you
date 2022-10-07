import { fuzz, preset } from "fuzzing";

import { convert } from "./service";
const mockData = require("./mock.json");

const errors = fuzz(convert)
  .under(mockData, preset.string(), preset.string(), preset.number()) // select presets for each function argument
  .errors();

console.log(errors);
