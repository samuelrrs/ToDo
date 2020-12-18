import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px",
    gap: "50px",
    marginTop: "5%",
    borderRadius: "20px",
  },
  button: {
    borderRadius: "50px",
  },
}));

export default useStyles;
