import React from "react"
import { Form } from "formik"
import InputMask from "react-input-mask"
import { TextField, makeStyles, Box, Divider } from "@material-ui/core"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import PhoneIcon from "@material-ui/icons/Phone"
import Button from "../../ui/button"
import ConfirmModal from "../../ui/modals/confirm.modal"
import SuccessModal from "../../ui/modals/success.modal"

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "29px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    color: "#00BFA5",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: "39px",
      "&:first-of-type": {
        marginTop: "0",
      },
    },
  },
  input: {
    width: "254px",
    marginLeft: "45px",

    "& input": {
      fontSize: "14px",
      lineHeight: "19px",
      padding: "21px 0 17px 10px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid rgba(49, 49, 49, 0.4)",
      },
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-22px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      width: "180px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "254px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  divider: {
    backgroundColor: "#CAE7FE",
    height: "97px",
    marginLeft: "77px",
    marginRight: "30px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "35px",
      marginRight: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    margin: "0 auto",
    display: "flex",
    borderRadius: "36px",
  },
  icon: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}))

const ProfileView = ({
  formikBag,
  isOpenConfirm,
  handleOpenConfirm,
  isOpenSuccess,
  handleOpenSuccess,
}) => {
  const classes = useStyles()
  const { values, errors, handleChange } = formikBag

  return (
    <Form>
      <Box className={classes.flex}>
        <Box className={classes.inputBox}>
          <AssignmentIndIcon fontSize="large" className={classes.icon} />
          <TextField
            variant="outlined"
            placeholder={
              values.name ? values.name : "Укажите ваши имя и фамилию"
            }
            label="Фамилия и имя"
            InputLabelProps={{
              shrink: true,
            }}
            name="name"
            className={classes.input}
            error={!!errors.name}
            helperText={errors.name && "Вы неверно указали имя"}
            onChange={handleChange}
            type="text"
          />
        </Box>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Box className={classes.inputBox}>
          <AlternateEmailIcon fontSize="large" className={classes.icon} />
          <TextField
            variant="outlined"
            placeholder={values.email ? values.email : "Укажите ваш E-Mail"}
            label="E-Mail"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.input}
            name="email"
            error={!!errors.email}
            helperText={errors.email && "Вы неверно указали E-Mail"}
            onChange={handleChange}
          />
        </Box>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Box className={classes.inputBox}>
          <PhoneIcon fontSize="large" className={classes.icon} />
          <InputMask
            mask="+9 999 999 99 99"
            onChange={handleChange}
            name="phone"
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                variant="outlined"
                placeholder={
                  values.phone ? values.phone : "Укажите номер телефона"
                }
                label="Номер телефона"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
                error={!!errors.phone}
                helperText={errors.phone && "Вы неверно указали телефон"}
                type="tel"
              />
            )}
          </InputMask>
        </Box>
      </Box>
      <Button
        text="Сохранить изменения"
        isFill
        onClick={() => handleOpenConfirm(true)}
      />
      <ConfirmModal open={isOpenConfirm} onClose={handleOpenConfirm} />
      <SuccessModal open={isOpenSuccess} onClose={handleOpenSuccess} />
    </Form>
  )
}

export default ProfileView
