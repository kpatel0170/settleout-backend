// Messages for the authentication and profile settings
module.exports = {
  MESSAGE: {
    // Authorization
    INCORRECT_PASSWORD: {
      data: "password",
      message: "Your password is not correct",
    },

    EMAIL_NOT_EXISTS: {
      data: "email",
      message: "Email does not exists",
    },
    EMAIL_ALREADY_EXISTS: {
      data: "email",
      message: "Email already exists",
    },

    LOGIN_SUCCESS: {
      message: "Login SuccessFull",
    },
    USER_PROFILE_GET: {
      message: "User profile fetched Successfully",
    },

    LOGOUT: {
      message: "Successfully logout.",
      status: 200,
    },
    // USER
    USER_REGISTERED: {
      message: "User has been registered successfully.",
    },

    // Bad Request or invalid data
    BAD_REQUEST: {
      message: "The request cannot be fulfilled due to bad syntax",
    },
    MISSING_FIELDS: {
      message: "Fields are missing",
    },
    // Report Error
    ERROR_FETCH_DATA: {
      message: "Error while fetching data from database",
    },
    CREATE_COMMENT: {
      message: "Comment has been generated successfully.",
    },
    UPDATE_USER: {
      message: "Profile has been updated successfully.",
    },
    GET_USER: {
      message: "Profile has been fetched successfully.",
    },
    RESET_PASSWORD: {
      message: "OTP has sent to the email to reset the Password",
    },
    INCORRECT_OTP: {
      message: "Your OTP is not correct",
    },
    RESET_PASSWORD_SUCCESS: {
      message: "Your password has been changed successfully.",
    },
    OTP_VERIFIED_SUCCESS:{
      message:"OTP has been verified successfully."
    },
    OTP_SEND:{
      message:"Otp has been sent successfully."
    },

    // Delete
    DELETE_SUCCESS:{
      message:"Post has been deleted successfully."
    }
  },
};