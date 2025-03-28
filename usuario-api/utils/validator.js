const { body, validationResult } = require('express-validator');

module.exports = {
    userValidations: [
        body("_name")
            .notEmpty().withMessage("O nome é obrigatório.")
            .trim()
            .escape(),
            
        body("_email")
            .notEmpty().withMessage("Email é obrigatório")
            .isEmail().withMessage("Email inválido")
    ],
    
    validate: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
};