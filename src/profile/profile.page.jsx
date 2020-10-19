import React, { useState, useRef, createContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import Header from "../ui/header"
import Breadcrumbs from "../ui/breadcrumbs"
import { DEFAULT_AVATAR, DEFAULT_NAME } from "../config"
import ProfileHeader from "./ui/profile.header"
import ProfileInfo from "./ui/profile.info"
import ProfileForm from "./ui/profile.form"
import { getAbbreviatedName } from "../utils/names"
import useLocalStorageValue from "../hooks/use-local-storage-value"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1365px",
    padding: "0 23px 0 34px",
    margin: "0 auto",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url('/gradient.png')",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: "url('/gradient-mobile.png')",
      backgroundSize: "100%",
      padding: "0 10px 0 10px",
    },
  },
}))

export const ReferenceContext = createContext("")

const ProfilePage = () => {
  const classes = useStyles()
  const [isVisibleEdit, setVisibleEdit] = useState(false)
  const rootReference = useRef({})
  const [storageValue, setStorageValue] = useLocalStorageValue()

  const onEdit = () => {
    setVisibleEdit(!isVisibleEdit)
  }

  return (
    <Container component="div" className={classes.root} ref={rootReference}>
      <Header
        avatar={DEFAULT_AVATAR}
        name={getAbbreviatedName(storageValue.name || DEFAULT_NAME)}
      />
      <Breadcrumbs />
      <ProfileHeader
        avatar={DEFAULT_AVATAR}
        name={storageValue.name || DEFAULT_NAME}
        isVisibleEdit={isVisibleEdit}
        onEdit={onEdit}
      />
      <ReferenceContext.Provider value={rootReference}>
        {isVisibleEdit ? (
          <ProfileForm
            storageValue={storageValue}
            setStorageValue={setStorageValue}
          />
        ) : (
          <ProfileInfo storageValue={storageValue} />
        )}
      </ReferenceContext.Provider>
    </Container>
  )
}

export default ProfilePage
