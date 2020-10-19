/* eslint-disable no-undef */
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { Formik } from "formik"
import ProfileView from "./profile.view"
import { ProfileSchema } from "../../validation-schemas/profile-form.schema"
import { DEFAULT_EMAIL } from "../../config"

const useStyles = makeStyles({
  root: {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    background: "#fff",
    borderRadius: "10px",
    padding: "26px 0 44px",
    marginTop: "24px",
  },
})

const ProfileForm = ({ storageValue, setStorageValue }) => {
  const classes = useStyles()
  const [isOpenConfirm, setOpenConfirm] = useState(false)
  const [isOpenSuccess, setOpenSuccess] = useState(false)

  const handleOpenConfirm = (open) => {
    setOpenConfirm(!!open)
  }

  const handleOpenSuccess = (open) => {
    setOpenSuccess(!!open)
  }

  const onSubmitAsync = async (values, actions) => {
    try {
      handleOpenConfirm()
      setStorageValue(values)
      await fetch("/api/posts", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      handleOpenSuccess(true)
    } finally {
      actions.setSubmitting(false)
    }
  }

  const initialValues = {
    name: storageValue.name || "",
    email: storageValue.email || DEFAULT_EMAIL,
    phone: storageValue.phone || "",
  }

  return (
    <Box className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={onSubmitAsync}
        component={(formikBag) => (
          <ProfileView
            formikBag={formikBag}
            isOpenConfirm={isOpenConfirm}
            handleOpenConfirm={handleOpenConfirm}
            isOpenSuccess={isOpenSuccess}
            handleOpenSuccess={handleOpenSuccess}
          />
        )}
      />
    </Box>
  )
}

export default ProfileForm
