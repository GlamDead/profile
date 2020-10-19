import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { List, Divider } from "@material-ui/core"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import PhoneIcon from "@material-ui/icons/Phone"
import ProfileCard from "./profile.card"
import { DEFAULT_EMAIL } from "../../config"

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    background: "#fff",
    borderRadius: "10px",
    padding: "1px 0",
    marginTop: "24px",
    position: "relative",
  },
  devider: {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    width: "100%",
    backgroundColor: "#CAE7FE",
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
}))

const ProfileInfo = ({ storageValue }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      <ProfileCard
        icon={<AlternateEmailIcon fontSize="large" className={classes.img} />}
        text={storageValue.email || DEFAULT_EMAIL}
      />
      <Divider className={classes.devider} />
      <ProfileCard
        icon={<PhoneIcon fontSize="large" className={classes.img} />}
        text={storageValue.phone || "Укажите номер телефона"}
      />
    </List>
  )
}

export default ProfileInfo
