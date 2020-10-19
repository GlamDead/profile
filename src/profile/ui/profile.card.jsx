import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "74px",
    height: "94px",
    color: "#00BFA5",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "70px",
      marginLeft: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "62px",
      marginLeft: "12px",
    },
  },
  text: {
    marginLeft: "45px",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#313131",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "19px",
      marginLeft: "12px",
    },
  },
}))

const ProfileCard = ({ icon, text }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {icon}
      <Typography className={classes.text}>{text}</Typography>
    </Box>
  )
}

export default ProfileCard
