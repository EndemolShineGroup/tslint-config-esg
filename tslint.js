module.exports = {
  extends: ['tslint-eslint-rules'],
  rules: {

    /**
     * ES6
     */
    'ter-arrow-body-style'            : [true, 'always'],
    'ter-arrow-parens'                : [true, 'always'],
    'ter-arrow-spacing'               : true,
    'no-var-keyword'                  : true,

    /**
     * Variables
     */
    'no-shadowed-variable'            : true,
    'no-unused-variable'              : true,
    'no-use-before-declare'           : true,

    /**
     * Possible errors
     */
    'trailing-comma'                  : [true, {'multiline': 'always'}],
    'no-conditional-assignment'       : true,
    'no-console'                      : true,
    'no-debugger'                     : true,
    'ban'                             : [true, ['alert']],
    'no-constant-condition'           : true,
    'no-duplicate-case'               : true,
    'no-empty'                        : true,
    'no-ex-assign'                    : true,
    'no-extra-boolean-cast'           : true,
    'no-extra-semi'                   : true,
    'no-inner-declarations'           : true,
    'no-invalid-regexp'               : true,
    'ter-no-irregular-whitespace'     : true,
    'ter-no-sparse-arrays'            : true,
    'use-isnan'                       : true,

    /**
     * Best practices
     */
    'curly'                           : true,
    'switch-default'                  : true,
    'triple-equals'                   : true,
    'ter-indent'                      : [true, 2, {
      'SwitchCase': 2,
      'VariableDeclarator': 2,
      'outerIIFEBody': 2,
      'FunctionDeclaration': {
        'body': 2,
      },
      'FunctionExpression': {
        'body': 2,
      },
    }],
    'forin'                           : true,
    'no-arg'                          : true,
    'no-eval'                         : true,
    'no-switch-case-fall-through'     : true,
    'label-position'                  : true,
    'no-unused-expression'            : true,
    'no-construct'                    : true,
    'no-duplicate-variable'           : [true, 'check-parameters'],
    'no-string-throw'                 : true,
    'radix'                           : true,

    /**
     * Style
     */
    'brace-style'                     : [
      true,
      '1tbs',
      {
        'allowSingleLine' : true,
      },
    ],
    'quotemark'                       : [true, 'single', 'jsx-double'],
    'variable-name'                   : [true, 'check-format', 'allow-pascal-case', 'ban-keywords'],
    'eofline'                         : true,
    'no-consecutive-blank-lines'      : [true, 2],
    'no-trailing-whitespace'          : true,
    'one-variable-per-declaration'    : true,
    'semi'                            : [true, 'always'],
    'comment-format'                  : [true],
  },
};
