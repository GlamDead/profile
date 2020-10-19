import React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CloseIcon from "@material-ui/icons/Close"
import CommonModal from "./common.modal"
import Button from "../button"

const useStyles = makeStyles({
  closeIcon: {
    position: "absolute",
    top: "19px",
    right: "19px",
    cursor: "pointer",
  },
  buttons: {
    marginTop: "32px",
    "& button:last-of-type": {
      marginTop: "28px",
    },
  },
})

const ConfirmModal = ({ open, onClose }) => {
  const classes = useStyles()

  return (
    <CommonModal open={open} onClose={onClose} title="Сохранить изменения?">
      <CloseIcon className={classes.closeIcon} onClick={() => onClose()} />
      <Box className={classes.buttons}>
        <Button text="Сохранить" isFill submit />
        <Button text="Не сохранять" onClick={onClose} />
      </Box>
    </CommonModal>
  )
}

export default ConfirmModal
