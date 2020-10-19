import React from "react"
import Link from "next/link"
import { routes } from "../routes"
import { makeStyles } from "@material-ui/core/styles"
import {
  Badge,
  Box,
  Avatar,
  Typography,
  Container,
  Divider,
} from "@material-ui/core"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    height: "57px",
    padding: "20px 26px 0 0",
    [theme.breakpoints.down("xs")]: {
      padding: "17px 0 0 0",
    },
  },
  rightBox: {
    display: "flex",
    alignItems: "center",
  },
  avatarBox: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    marginLeft: "20px",
    color: "#fff",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  divider: {
    marginLeft: "20px",
    marginRight: "26px",
    backgroundColor: "#fff",
    width: "1px",
    height: "39px",
    alignSelf: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "24px",
      marginLeft: "14px",
      marginRight: "10px",
    },
  },
  avatar: {
    [theme.breakpoints.down("xs")]: {
      width: "24px",
      height: "24px",
    },
  },
  notifications: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "19px",
    },
  },
}))

const Header = ({ notifications, avatar, name }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root} component="header">
      <Box className={classes.rightBox}>
        {notifications ? (
          <Badge badgeContent={notifications} color="secondary" max={999}>
            <NotificationsNoneIcon
              htmlColor="#fff"
              fontSize="large"
              className={classes.notifications}
            />
          </Badge>
        ) : (
          <NotificationsNoneIcon
            htmlColor="#fff"
            fontSize="large"
            className={classes.notifications}
          />
        )}
        <Divider className={classes.divider} vertical flexItem />
        <Link href={routes.profile}>
          <Box className={classes.avatarBox}>
            <Avatar src={avatar} className={classes.avatar} />
            <Typography component="p" className={classes.name}>
              {name}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Container>
  )
}

export default Header
