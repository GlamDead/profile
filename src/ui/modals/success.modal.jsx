import React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CommonModal from "./common.modal"
import Button from "../button"

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginTop: "42px",
    [theme.breakpoints.down("xs")]: {
      "& button": {
        display: "none",
      },
    },
  },
}))

const SuccessModal = ({ open, onClose }) => {
  const classes = useStyles()

  return (
    <CommonModal
      open={open}
      onClose={onClose}
      title="Данные успешно сохранены"
      mini
    >
      <Box className={classes.buttons}>
        <Button text="Хорошо" onClick={onClose} />
      </Box>
    </CommonModal>
  )
}

export default SuccessModal
