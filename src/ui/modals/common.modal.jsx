import React, { useContext } from "react"
import classnames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import { Modal, Box, Typography } from "@material-ui/core"
import { ReferenceContext } from "../../profile/profile.page"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-end",
    },
  },
  root: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "318px",
    maxWidth: "600px",
    width: "100%",
    color: "#828282",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      height: "70%",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      justifyContent: "flex-start",
      paddingTop: "65px",
    },
  },
  rootMiniMobile: {
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      paddingTop: "29px",
    },
  },
  title: {
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    color: "rgba(49, 49, 49, 0.7)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      lineHeight: "25px",
    },
  },
}))

const CommonModal = ({ open, onClose, title, mini, children }) => {
  const classes = useStyles()
  const miniModalMobile = classnames(classes.root, classes.rootMiniMobile)

  const referenceRoot = useContext(ReferenceContext)

  return (
    <Modal
      disablePortal
      open={open}
      onClose={onClose}
      className={classes.modal}
      container={() => referenceRoot.current}
    >
      <Box className={mini ? miniModalMobile : classes.root}>
        <Typography className={classes.title}>{title}</Typography>
        {children}
      </Box>
    </Modal>
  )
}

export default CommonModal
