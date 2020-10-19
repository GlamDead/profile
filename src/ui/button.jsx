import React from "react"
import classnames from "classnames"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    borderRadius: "41px",
    display: "flex",
    margin: "0 auto",
    minWidth: "202px",
    padding: "15px 26px",
    "& .MuiButton-label": {
      textTransform: "none",
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "600",
    },
  },
  buttonFill: {
    backgroundColor: "#01BDA7",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1A78C2",
    },
  },
  buttonNotFill: {
    border: "1px solid #01BDA7",
    color: "#01BDA7",
    "&:hover": {
      border: "1px solid #1A78C2",
      color: "#1A78C2",
      backgroundColor: "#fff",
    },
  },
})

const ButtonStyled = ({ text, isFill, submit, onClick }) => {
  const classes = useStyles()
  const fillButton = classnames(classes.button, classes.buttonFill)
  const notFillButton = classnames(classes.button, classes.buttonNotFill)

  return (
    <Button
      className={isFill ? fillButton : notFillButton}
      type={submit ? "submit" : "button"}
      onClick={() => onClick && onClick()}
    >
      {text}
    </Button>
  )
}

export default ButtonStyled
