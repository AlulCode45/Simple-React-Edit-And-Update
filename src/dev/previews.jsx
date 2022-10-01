import React from "react";
import App from "../App";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
