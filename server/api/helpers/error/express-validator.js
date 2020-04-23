const { body, validationResult } = require("express-validator");
const userValidationRules = () => {
  return [
    body("email")
    
    .not()
    .isEmpty().withMessage("Please provide an email")
    .isEmail(),
    // password must be at least 5 chars long
    body("password")
      .not()
      .isEmpty().withMessage("Please provide a password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  console.log(errors.array());
  return res.status(422).json({
    errors: errors.array(),
  });
};

module.exports = {
  userValidationRules,
  validate,
};
