import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Avatar, Button } from "@material-ui/core"
import CreateIcon from "@material-ui/icons/Create"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%);",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    padding: "24px 28px 24px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "16px 13px 15px 10px",
    },
  },
  info: {
    display: "flex",
    alignItems: "center",
    width: "calc(100% - 180px)",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 33px)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 33px)",
    },
  },
  img: {
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px",
    },
  },
  name: {
    marginLeft: "42px",
    fontWeight: "600",
    color: "#fff",
    fontSize: "30px",
    lineHeight: "41px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "calc(100% - 122px)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "21px",
      maxWidth: "calc(100% - 102px)",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
      fontSize: "14px",
      lineHeight: "19px",
      maxWidth: "calc(100% - 50px)",
    },
  },
  button: {
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#fff",
    fontSize: "14px",
    lineHeight: "19px",
    height: "25px",
    [theme.breakpoints.down("sm")]: {
      "& .MuiButton-endIcon": {
        margin: "0",
      },
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      minWidth: "20px",
    },
  },
  textButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

const ProfileHeader = ({ avatar, name, isVisibleEdit, onEdit }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.info}>
        <Avatar src={avatar} className={classes.img} />
        <Typography className={classes.name}>{name}</Typography>
      </Box>
      <Button
        className={classes.button}
        endIcon={isVisibleEdit ? <CloseIcon /> : <CreateIcon />}
        onClick={() => onEdit()}
      >
        <Typography component="span" className={classes.textButton}>
          {isVisibleEdit ? "Закрыть" : "Редактировать"}
        </Typography>
      </Button>
    </Box>
  )
}

export default ProfileHeader
