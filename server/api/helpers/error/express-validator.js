const { body, validationResult } = require("express-validator");
const userValidationRules = () => {
  return [
    // password must be at least 5 chars long
    body("password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .not()
      .isEmpty(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRules,
  validate,
};
