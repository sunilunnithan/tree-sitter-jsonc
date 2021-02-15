const json = require("tree-sitter-json/grammar");

module.exports = grammar(json, {
  name: "jsonc",

  extras: ($) => [/\s/, $.comment],

  rules: {
    _value: ($) =>
      choice(
        $.object,
        $.array,
        $.number,
        $.string,
        $.true,
        $.false,
        $.null,
        $.comment
      ),

    comment: ($) =>
      token(
        choice(seq("//", /.*/), seq("/*", /[^*]*\*+([^/*][^*]*\*+)*/, "/"))
      ),
  },
});
