const { styled } = require("@mui/system");

const { Box } = require("@mui/material");
// import { styled } from "@mui/system";
// import { Box } from "@mui/material";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
