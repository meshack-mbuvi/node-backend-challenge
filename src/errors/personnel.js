const Errors = {
  USR_01: "Phone or Password is invalid."
};

export const handlePersonnelErrors = (code, status, field) => {
  return {
    status,
    field,
    code: code,
    message: Errors[code]
  };
};
