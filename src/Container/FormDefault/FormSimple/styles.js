import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#fff",
    marginTop: "5%",
    borderRadius: "20px",
    maxWidth: "500px",
  },
  button: {
    borderRadius: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    gap: "50px",
    alignItems: "center",
  },
}));

export default useStyles;
