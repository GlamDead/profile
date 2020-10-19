/* eslint-disable security/detect-non-literal-fs-filename */
import React from "react"
import classnames from "classnames"
import { useRouter } from "next/router"
import { getPageName, getBreadcrumbs } from "../utils/routes"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "17px 0 32px",
    [theme.breakpoints.down("xs")]: {
      padding: "17px 0 10px",
    },
  },
  pageName: {
    color: "white",
    textTransform: "uppercase",
    marginBottom: "10px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: "19px",
    },
  },
  breadcrumbs: {
    display: "flex",
  },
  text: {
    fontSize: "14px",
    lineHeight: "19px",
    color: "#fff",
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  link: {
    cursor: "pointer",
  },
}))

const Breadcrumbs = () => {
  const classes = useStyles()
  const router = useRouter()
  const breadcrumbs = getBreadcrumbs(router.pathname)
  const linkClass = classnames(classes.text, classes.link)

  return (
    <Box className={classes.root}>
      <Typography component="p" className={classes.pageName}>
        {getPageName(router && router.route)}
      </Typography>
      <Box className={classes.breadcrumbs}>
        {breadcrumbs.length !== 0 &&
          breadcrumbs.map((breadcrumb, index) => (
            <Box key={index} className={classes.breadcrumbs}>
              {index !== 0 && (
                <Typography className={classes.text} component="span">
                  /
                </Typography>
              )}
              <Typography
                component="a"
                className={linkClass}
                onClick={() => router.push(breadcrumb.link)}
              >
                {breadcrumb.name}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default Breadcrumbs
