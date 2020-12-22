import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    width: "200px",
    height: "55px",
    color: "#fff !important",
    "& .MuiInputBase-input": {
      color: "#839BB7",
    },
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "& label": {
      color: "gray",
    },
    "& label.Mui-focused": {
      color: "#839BB7",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      color: "red"
    },
  },
}));

export default useStyles;
