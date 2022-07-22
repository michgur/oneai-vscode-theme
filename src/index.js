const fs = require("fs").promises;

const theme = `{
  "name": "One AI theme",
  "type": "dark",
  "semanticHighlighting": true,
  "semanticTokenColors": {
    "enumMember": {
      "foreground": "#75fb4c"
    },
    "variable.constant": {
      "foreground": "#75fb48"
    },
    "variable.defaultLibrary": {
      "foreground": "#ea37e8"
    }
  },
  "tokenColors": [
    {
      "name": "unison punctuation",
      "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "haskell variable generic-type",
      "scope": "variable.other.generic-type.haskell",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "haskell storage type",
      "scope": "storage.type.haskell",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "support.variable.magic.python",
      "scope": "support.variable.magic.python",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "punctuation.separator.parameters.python",
      "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "variable.parameter.function.language.special.self.python",
      "scope": "variable.parameter.function.language.special.self.python",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "storage.modifier.lifetime.rust",
      "scope": "storage.modifier.lifetime.rust",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "support.function.std.rust",
      "scope": "support.function.std.rust",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "entity.name.lifetime.rust",
      "scope": "entity.name.lifetime.rust",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "variable.language.rust",
      "scope": "variable.language.rust",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "support.constant.edge",
      "scope": "support.constant.edge",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "regexp constant character-class",
      "scope": "constant.other.character-class.regexp",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "regexp operator.quantifier",
      "scope": "keyword.operator.quantifier.regexp",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "punctuation.definition",
      "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "Text",
      "scope": "variable.parameter.function",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Comment Markup Link",
      "scope": "comment markup.link",
      "settings": {
        "foreground": "#7f848e"
      }
    },
    {
      "name": "markup diff",
      "scope": "markup.changed.diff",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "diff",
      "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "inserted.diff",
      "scope": "markup.inserted.diff",
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "deleted.diff",
      "scope": "markup.deleted.diff",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "c++ function",
      "scope": "meta.function.c,meta.function.cpp",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "c++ block",
      "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "js/ts punctuation separator key-value",
      "scope": "punctuation.separator.key-value",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "js/ts import keyword",
      "scope": "keyword.operator.expression.import",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "math js/ts",
      "scope": "support.constant.math",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "math property js/ts",
      "scope": "support.constant.property.math",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "js/ts variable.other.constant",
      "scope": "variable.other.constant",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "java type",
      "scope": [
        "storage.type.annotation.java",
        "storage.type.object.array.java"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "java source",
      "scope": "source.java",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "meta.method.java",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "java instanceof",
      "scope": "keyword.operator.instanceof.java",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "java variable.name",
      "scope": "meta.definition.variable.name.java",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "operator logical",
      "scope": "keyword.operator.logical",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "operator bitwise",
      "scope": "keyword.operator.bitwise",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "operator channel",
      "scope": "keyword.operator.channel",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "support.constant.property-value.scss",
      "scope": "support.constant.property-value.scss,support.constant.property-value.css",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "CSS/SCSS/LESS Operators",
      "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "css color standard name",
      "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "css comma",
      "scope": "punctuation.separator.list.comma.css",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "css attribute-name.id",
      "scope": "support.constant.color.w3c-standard-color-name.css",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "css property-name",
      "scope": "support.type.vendored.property-name.css",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "js/ts module",
      "scope": "support.module.node,support.type.object.module,support.module.node",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "entity.name.type.module",
      "scope": "entity.name.type.module",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "js variable readwrite",
      "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "js/ts json",
      "scope": "support.constant.json",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "js/ts Keyword",
      "scope": [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof"
      ],
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "js/ts console",
      "scope": "support.type.object.console",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "js/ts support.variable.property.process",
      "scope": "support.variable.property.process",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "js console function",
      "scope": "entity.name.function,support.function.console",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "keyword.operator.misc.rust",
      "scope": "keyword.operator.misc.rust",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "keyword.operator.sigil.rust",
      "scope": "keyword.operator.sigil.rust",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "operator",
      "scope": "keyword.operator.delete",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "js dom",
      "scope": "support.type.object.dom",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "js dom variable",
      "scope": "support.variable.dom,support.variable.property.dom",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "keyword.operator",
      "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "C operator assignment",
      "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Punctuation",
      "scope": "punctuation.separator.delimiter",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Other punctuation .c",
      "scope": "punctuation.separator.c,punctuation.separator.cpp",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "C type posix-reserved",
      "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "keyword.operator.sizeof.c",
      "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "python parameter",
      "scope": "variable.parameter.function.language.python",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "python type",
      "scope": "support.type.python",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "python logical",
      "scope": "keyword.operator.logical.python",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "pyCs",
      "scope": "variable.parameter.function.python",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "python block",
      "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "python function-call.generic",
      "scope": "meta.function-call.generic.python",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "python placeholder reset to normal string",
      "scope": "constant.character.format.placeholder.other.python",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Operators",
      "scope": "keyword.operator",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Compound Assignment Operators",
      "scope": "keyword.operator.assignment.compound",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Compound Assignment Operators js/ts",
      "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "Keywords",
      "scope": "keyword",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Namespaces",
      "scope": "entity.name.namespace",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Variables",
      "scope": "variable",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Variables",
      "scope": "variable.c",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Language variables",
      "scope": "variable.language",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Java Variables",
      "scope": "token.variable.parameter.java",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Java Imports",
      "scope": "import.storage.java",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Packages",
      "scope": "token.package.keyword",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Packages",
      "scope": "token.package",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Functions",
      "scope": [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function"
      ],
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "Classes",
      "scope": "entity.name.type.namespace",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Classes",
      "scope": "support.class, entity.name.type.class",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Class name",
      "scope": "entity.name.class.identifier.namespace.type",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Class name",
      "scope": [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Class name php",
      "scope": "variable.other.class.php",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Type Name",
      "scope": "entity.name.type",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Keyword Control",
      "scope": "keyword.control",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Control Elements",
      "scope": "control.elements, keyword.operator.less",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Methods",
      "scope": "keyword.other.special-method",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "Storage",
      "scope": "storage",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Storage JS TS",
      "scope": "token.storage",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Java Storage",
      "scope": "token.storage.type.java",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Support",
      "scope": "support.function",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "Support type",
      "scope": "support.type.property-name",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Support type",
      "scope": "support.constant.property-value",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Support type",
      "scope": "support.constant.font-name",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Meta tag",
      "scope": "meta.tag",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Strings",
      "scope": "string",
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "Inherited Class",
      "scope": "entity.other.inherited-class",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Constant other symbol",
      "scope": "constant.other.symbol",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "Integers",
      "scope": "constant.numeric",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Constants",
      "scope": "constant",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Constants",
      "scope": "punctuation.definition.constant",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Tags",
      "scope": "entity.name.tag",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Attributes",
      "scope": "entity.other.attribute-name",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Attribute IDs",
      "scope": "entity.other.attribute-name.id",
      "settings": {
        "fontStyle": "normal",
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "Attribute class",
      "scope": "entity.other.attribute-name.class.css",
      "settings": {
        "fontStyle": "normal",
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Selector",
      "scope": "meta.selector",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading punctuation.definition.heading, entity.name.section",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "Units",
      "scope": "keyword.other.unit",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Bold",
      "scope": "markup.bold,todo.bold",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "Bold",
      "scope": "punctuation.definition.bold",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "markup Italic",
      "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "emphasis md",
      "scope": "emphasis md",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown headings",
      "scope": "entity.name.section.markdown",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      "scope": "punctuation.definition.heading.markdown",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "punctuation.definition.list.begin.markdown",
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading setext",
      "scope": "markup.heading.setext",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      "scope": "punctuation.definition.bold.markdown",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.markdown",
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      "scope": "punctuation.definition.list.markdown",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      "scope": [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "beginning.punctuation.definition.list.markdown",
      "scope": [
        "beginning.punctuation.definition.list.markdown"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      "scope": "punctuation.definition.metadata.markdown",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
      "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "Regular Expressions",
      "scope": "string.regexp",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "Escape Characters",
      "scope": "constant.character.escape",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded, variable.interpolation",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal.bad-ampersand.html",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Broken",
      "scope": "invalid.broken",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Deprecated",
      "scope": "invalid.deprecated",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Unimplemented",
      "scope": "invalid.unimplemented",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Property Name",
      "scope": "support.type.property-name.json",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      "scope": "support.type.property-name.json punctuation",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "laravel blade tag",
      "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "laravel blade @",
      "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "use statement for other classes",
      "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "error suppression",
      "scope": "keyword.operator.error-control.php",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "php instanceof",
      "scope": "keyword.operator.type.php",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "style double quoted array index normal begin",
      "scope": "punctuation.section.array.begin.php",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "style double quoted array index normal end",
      "scope": "punctuation.section.array.end.php",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "php illegal.non-null-typehinted",
      "scope": "invalid.illegal.non-null-typehinted.php",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "name": "php types",
      "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "php call-function",
      "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "php function-resets",
      "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.core.rust",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "php goto",
      "scope": "entity.name.goto-label.php,support.other.php",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "php logical/bitwise operator",
      "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "php regexp operator",
      "scope": "keyword.operator.regexp.php",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "php comparison",
      "scope": "keyword.operator.comparison.php",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "php heredoc/nowdoc",
      "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "python function decorator @",
      "scope": "meta.function.decorator.python",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "python function support",
      "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "parameter function js/ts",
      "scope": "function.parameter",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "brace function",
      "scope": "function.brace",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "parameter function ruby cs",
      "scope": "function.parameter.ruby, function.parameter.cs",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "constant.language.symbol.ruby",
      "scope": "constant.language.symbol.ruby",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "rgb-value",
      "scope": "rgb-value",
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "rgb value",
      "scope": "inline-color-decoration rgb-value",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "rgb value less",
      "scope": "less rgb-value",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "sass selector",
      "scope": "selector.sass",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "ts primitive/builtin types",
      "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "block scope",
      "scope": "block.scope.end,block.scope.begin",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "cs storage type",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "cs local variable",
      "scope": "entity.name.variable.local.cs",
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "scope": "token.info-token",
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "scope": "token.warn-token",
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "scope": "token.error-token",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "scope": "token.debug-token",
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "String interpolation",
      "scope": [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Reset JavaScript string interpolation expression",
      "scope": [
        "meta.template.expression"
      ],
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Import module JS",
      "scope": [
        "keyword.operator.module"
      ],
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "js Flowtype",
      "scope": [
        "support.type.type.flowtype"
      ],
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "js Flow",
      "scope": [
        "support.type.primitive"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "js class prop",
      "scope": [
        "meta.property.object"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "js func parameter",
      "scope": [
        "variable.parameter.function.js"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "js template literals begin",
      "scope": [
        "keyword.other.template.begin"
      ],
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "js template literals end",
      "scope": [
        "keyword.other.template.end"
      ],
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "js template literals variable braces begin",
      "scope": [
        "keyword.other.substitution.begin"
      ],
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "js template literals variable braces end",
      "scope": [
        "keyword.other.substitution.end"
      ],
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "js operator.assignment",
      "scope": [
        "keyword.operator.assignment"
      ],
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.assignment.go"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.arithmetic.go",
        "keyword.operator.address.go"
      ],
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "Go package name",
      "scope": [
        "entity.name.package.go"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "elm prelude",
      "scope": [
        "support.type.prelude.elm"
      ],
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "elm constant",
      "scope": [
        "support.constant.elm"
      ],
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "template literal",
      "scope": [
        "punctuation.quasi.element"
      ],
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "html/pug (jade) escaped characters and entities",
      "scope": [
        "constant.character.entity"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      "scope": [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class"
      ],
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "Clojure globals",
      "scope": [
        "entity.global.clojure"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Clojure symbols",
      "scope": [
        "meta.symbol.clojure"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Clojure constants",
      "scope": [
        "constant.keyword.clojure"
      ],
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "CoffeeScript Function Argument",
      "scope": [
        "meta.arguments.coffee",
        "variable.parameter.function.coffee"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Ini Default Text",
      "scope": [
        "source.ini"
      ],
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "Makefile prerequisities",
      "scope": [
        "meta.scope.prerequisites.makefile"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Makefile text colour",
      "scope": [
        "source.makefile"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Groovy import names",
      "scope": [
        "storage.modifier.import.groovy"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Groovy Methods",
      "scope": [
        "meta.method.groovy"
      ],
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "Groovy Variables",
      "scope": [
        "meta.definition.variable.name.groovy"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "Groovy Inheritance",
      "scope": [
        "meta.definition.class.inherited.classes.groovy"
      ],
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "HLSL Semantic",
      "scope": [
        "support.variable.semantic.hlsl"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "HLSL Types",
      "scope": [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl"
      ],
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "SQL Variables",
      "scope": [
        "text.variable",
        "text.bracketed"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "types",
      "scope": [
        "support.type.swift",
        "support.type.vb.asp"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "heading 1, keyword",
      "scope": [
        "entity.name.function.xi"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "heading 2, callable",
      "scope": [
        "entity.name.class.xi"
      ],
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "heading 3, property",
      "scope": [
        "constant.character.character-class.regexp.xi"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "heading 4, type, class, interface",
      "scope": [
        "constant.regexp.xi"
      ],
      "settings": {
        "foreground": "#4d4dff"
      }
    },
    {
      "name": "heading 5, enums, preprocessor, constant, decorator",
      "scope": [
        "keyword.control.xi"
      ],
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "heading 6, number",
      "scope": [
        "invalid.xi"
      ],
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "string",
      "scope": [
        "beginning.punctuation.definition.quote.markdown.xi"
      ],
      "settings": {
        "foreground": "#fbe94e"
      }
    },
    {
      "name": "comments",
      "scope": [
        "beginning.punctuation.definition.list.markdown.xi"
      ],
      "settings": {
        "foreground": "#7f848e"
      }
    },
    {
      "name": "link",
      "scope": [
        "constant.character.xi"
      ],
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "accent",
      "scope": [
        "accent.xi"
      ],
      "settings": {
        "foreground": "#75fbfd"
      }
    },
    {
      "name": "wikiword",
      "scope": [
        "wikiword.xi"
      ],
      "settings": {
        "foreground": "#75fb48"
      }
    },
    {
      "name": "language operators like '+', '-' etc",
      "scope": [
        "constant.other.color.rgb-value.xi"
      ],
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "elements to dim",
      "scope": [
        "punctuation.definition.tag.xi"
      ],
      "settings": {
        "foreground": "#7f848e"
      }
    },
    {
      "name": "C++/C#",
      "scope": [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition"
      ],
      "settings": {
        "foreground": "#ea37e8"
      }
    },
    {
      "name": "Markdown underscore-style headers",
      "scope": [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      "settings": {
        "foreground": "#ededed"
      }
    },
    {
      "name": "meta.brace.square",
      "scope": [
        " meta.brace.square"
      ],
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "name": "Comments",
      "scope": "comment, punctuation.definition.comment",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#7f848e"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Quote",
      "scope": "markup.quote.markdown",
      "settings": {
        "foreground": "#7f848e"
      }
    },
    {
      "name": "punctuation.definition.block.sequence.item.yaml",
      "scope": "punctuation.definition.block.sequence.item.yaml",
      "settings": {
        "foreground": "#a1a1ab"
      }
    },
    {
      "scope": [
        "constant.language.symbol.elixir"
      ],
      "settings": {
        "foreground": "#75fb4c"
      }
    },
    {
      "name": "js/ts italic",
      "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "comment",
      "scope": "comment.line.double-slash,comment.block.documentation",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "Python Keyword Control",
      "scope": "keyword.control.import.python,keyword.control.flow.python",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "markup.italic.markdown",
      "scope": "markup.italic.markdown",
      "settings": {
        "fontStyle": "italic"
      }
    }
  ],
  "colors": {
    "foreground": "#ededed",
    "focusBorder": "#4d4dff",
    "selection.background": "#706ef6",
    "scrollbar.shadow": "#000000",
    "activityBar.foreground": "#ededed",
    "activityBar.background": "#33323e",
    "activityBar.inactiveForeground": "#ffffff66",
    "activityBarBadge.foreground": "#ededed",
    "activityBarBadge.background": "#4d4dff",
    "sideBar.background": "#1d1c29",
    "sideBar.foreground": "#cccccc",
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": "#cccccc",
    "sideBarSectionHeader.border": "#cccccc33",
    "sideBarTitle.foreground": "#bbbbbb",
    "list.inactiveSelectionBackground": "#4a4953",
    "list.inactiveSelectionForeground": "#cccccc",
    "list.hoverBackground": "#28293c",
    "list.hoverForeground": "#cccccc",
    "list.activeSelectionBackground": "#8e8d93",
    "list.activeSelectionForeground": "#ffffff",
    "tree.indentGuidesStroke": "#585858",
    "list.dropBackground": "#383b3d",
    "list.highlightForeground": "#75fbfd",
    "list.focusBackground": "#8e8d93",
    "list.focusForeground": "#ffffff",
    "listFilterWidget.background": "#14141c",
    "listFilterWidget.outline": "#ffffff00",
    "listFilterWidget.noMatchesOutline": "#ee7d71",
    "statusBar.foreground": "#ffffff",
    "statusBar.background": "#4d4dff",
    "statusBarItem.hoverBackground": "#ffffff1f",
    "statusBar.debuggingBackground": "#ea37e8",
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.noFolderBackground": "#2d3269",
    "statusBar.noFolderForeground": "#ffffff",
    "statusBarItem.remoteBackground": "#75fb4c",
    "statusBarItem.remoteForeground": "#1d1c29",
    "titleBar.activeBackground": "#4a4953",
    "titleBar.activeForeground": "#cdcdcd",
    "titleBar.inactiveBackground": "#33323d",
    "titleBar.inactiveForeground": "#cccccc99",
    "titleBar.border": "#00000000",
    "menubar.selectionForeground": "#ffffff",
    "menubar.selectionBackground": "#ffffff09",
    "menu.foreground": "#cccccc",
    "menu.background": "#272533",
    "menu.selectionForeground": "#ffffff",
    "menu.selectionBackground": "#4a4953",
    "menu.selectionBorder": "#00000000",
    "menu.separatorBackground": "#777777",
    "menu.border": "#00000085",
    "button.background": "#4d4dff",
    "button.foreground": "#ffffff",
    "button.hoverBackground": "#5d5cf6",
    "button.secondaryForeground": "#ffffff",
    "button.secondaryBackground": "#3a3d51",
    "button.secondaryHoverBackground": "#45495e",
    "input.background": "#1d1c29",
    "input.border": "#00000000",
    "input.foreground": "#cccccc",
    "inputOption.activeBackground": "#4d4dff66",
    "inputOption.activeBorder": "#007acc00",
    "inputOption.activeForeground": "#ffffff",
    "input.placeholderForeground": "#a6a6a6",
    "textLink.foreground": "#75fbfd",
    "editor.background": "#14141c",
    "editor.foreground": "#a1a1ab",
    "editorLineNumber.foreground": "#858585",
    "editorCursor.foreground": "#aeafad",
    "editorCursor.background": "#000000",
    "editor.selectionBackground": "#75fbfd30",
    "editor.inactiveSelectionBackground": "#3a3d4177",
    "editorWhitespace.foreground": "#e4e4e429",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionHighlightBorder": "#495F77",
    "editor.findMatchBackground": "#515c6a",
    "editor.findMatchBorder": "#74879f",
    "editor.findMatchHighlightBackground": "#ea37e845",
    "editor.findMatchHighlightBorder": "#ffffff00",
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.findRangeHighlightBorder": "#ffffff00",
    "editor.rangeHighlightBackground": "#ffffff0b",
    "editor.rangeHighlightBorder": "#ffffff00",
    "editor.hoverHighlightBackground": "#264f7840",
    "editor.wordHighlightStrongBackground": "#4d4dff38",
    "editor.wordHighlightBackground": "#575757b8",
    "editor.lineHighlightBackground": "#ffffff0A",
    "editor.lineHighlightBorder": "#282828",
    "editorLineNumber.activeForeground": "#c6c6c6",
    "editorLink.activeForeground": "#4d4dff",
    "editorIndentGuide.background": "#404040",
    "editorIndentGuide.activeBackground": "#707070",
    "editorRuler.foreground": "#5a5a5a",
    "editorBracketMatch.background": "#0064001a",
    "editorBracketMatch.border": "#888888",
    "editor.foldBackground": "#264f784d",
    "editorOverviewRuler.background": "#25252500",
    "editorOverviewRuler.border": "#7f7f7f4d",
    "editorError.foreground": "#ee7d71",
    "editorError.background": "#B73A3400",
    "editorError.border": "#ffffff00",
    "editorWarning.foreground": "#fbe94e",
    "editorWarning.background": "#A9904000",
    "editorWarning.border": "#ffffff00",
    "editorInfo.foreground": "#75fbfd",
    "editorInfo.background": "#4490BF00",
    "editorInfo.border": "#4490BF00",
    "editorGutter.background": "#14141c",
    "editorGutter.modifiedBackground": "#75fbfdcc",
    "editorGutter.addedBackground": "#75fb4c",
    "editorGutter.deletedBackground": "#fd3131",
    "editorGutter.foldingControlForeground": "#c5c5c5",
    "editorCodeLens.foreground": "#999999",
    "editorGroup.border": "#444444",
    "diffEditor.insertedTextBackground": "#75fb4c23",
    "diffEditor.removedTextBackground": "#fd31311f",
    "diffEditor.border": "#444444",
    "panel.background": "#14141c",
    "panel.border": "#80808059",
    "panelTitle.activeBorder": "#e7e7e7",
    "panelTitle.activeForeground": "#e7e7e7",
    "panelTitle.inactiveForeground": "#e7e7e799",
    "badge.background": "#4a495a",
    "badge.foreground": "#ffffff",
    "terminal.foreground": "#cccccc",
    "terminal.selectionBackground": "#ffffff40",
    "terminalCursor.background": "#4d4dff",
    "terminalCursor.foreground": "#ffffff",
    "terminal.border": "#80808059",
    "terminal.ansiBlack": "#4d4952",
    "terminal.ansiBlue": "#4d4dff",
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBrightBlue": "#706ef9",
    "terminal.ansiBrightCyan": "#cafdfe",
    "terminal.ansiBrightGreen": "#85ffa8",
    "terminal.ansiBrightMagenta": "#f6c3f8",
    "terminal.ansiBrightRed": "#ee7d71",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#fefacc",
    "terminal.ansiCyan": "#75fbfd",
    "terminal.ansiGreen": "#75fb48",
    "terminal.ansiMagenta": "#ea37e8",
    "terminal.ansiRed": "#fd3131",
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiYellow": "#fbe94e",
    "breadcrumb.background": "#14141c",
    "breadcrumb.foreground": "#cccccccc",
    "breadcrumb.focusForeground": "#e0e0e0",
    "editorGroupHeader.tabsBackground": "#33323d",
    "tab.activeForeground": "#75fbfd",
    "tab.border": "#252526",
    "tab.activeBackground": "#14141c",
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": "#00000000",
    "tab.inactiveBackground": "#201f29",
    "tab.inactiveForeground": "#ffffff80",
    "tab.hoverBackground": "#1d1c29",
    "tab.hoverForeground": "#75fbfdaa",
    "scrollbarSlider.background": "#79797966",
    "scrollbarSlider.hoverBackground": "#646464b3",
    "scrollbarSlider.activeBackground": "#bfbfbf66",
    "progressBar.background": "#5d5cf6",
    "widget.shadow": "#0000005c",
    "editorWidget.foreground": "#cccccc",
    "editorWidget.background": "#2d2c37",
    "editorWidget.resizeBorder": "#8b8996",
    "pickerGroup.border": "#3f3f46",
    "pickerGroup.foreground": "#4f4dff",
    "debugToolBar.background": "#201f28",
    "debugToolBar.border": "#1d1c29",
    "notifications.foreground": "#cccccc",
    "notifications.background": "#201f28",
    "notificationToast.border": "#474747",
    "notificationsErrorIcon.foreground": "#ee7d71",
    "notificationsWarningIcon.foreground": "#fbe94e",
    "notificationsInfoIcon.foreground": "#75fbfd",
    "notificationCenter.border": "#474747",
    "notificationCenterHeader.foreground": "#cccccc",
    "notificationCenterHeader.background": "#33323d",
    "notifications.border": "#303031",
    "gitDecoration.addedResourceForeground": "#75fb4c",
    "gitDecoration.conflictingResourceForeground": "#706ef9",
    "gitDecoration.deletedResourceForeground": "#fd3131",
    "gitDecoration.ignoredResourceForeground": "#8c8c8c",
    "gitDecoration.modifiedResourceForeground": "#fbe94e",
    "gitDecoration.stageDeletedResourceForeground": "#ee7d71",
    "gitDecoration.stageModifiedResourceForeground": "#fbe94e",
    "gitDecoration.submoduleResourceForeground": "#75fbfd",
    "gitDecoration.untrackedResourceForeground": "#85ffa8",
    "editorMarkerNavigation.background": "#201f28",
    "editorMarkerNavigationError.background": "#f48771",
    "editorMarkerNavigationWarning.background": "#fbe94e",
    "editorMarkerNavigationInfo.background": "#75fbfd",
    "merge.currentHeaderBackground": "#6dacb1",
    "merge.currentContentBackground": "#2f4248",
    "merge.incomingHeaderBackground": "#323290",
    "merge.incomingContentBackground": "#1f1f47",
    "merge.commonHeaderBackground": "#383848",
    "merge.commonContentBackground": "#282838",
    "editorSuggestWidget.background": "#1d1c29",
    "editorSuggestWidget.border": "#454545",
    "editorSuggestWidget.foreground": "#d4d4d4",
    "editorSuggestWidget.highlightForeground": "#4d4dff",
    "editorSuggestWidget.selectedBackground": "#28293b",
    "editorHoverWidget.foreground": "#cccccc",
    "editorHoverWidget.background": "#1d1c26",
    "editorHoverWidget.border": "#454555",
    "peekView.border": "#4d4dff",
    "peekViewEditor.background": "#1d1c26",
    "peekViewEditorGutter.background": "#1d1c26",
    "peekViewEditor.matchHighlightBackground": "#fbe94e3a",
    "peekViewEditor.matchHighlightBorder": "#fbe94e",
    "peekViewResult.background": "#33323d",
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea37e84d",
    "peekViewResult.selectionBackground": "#6dacb1aa",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": "#1e1e1e",
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "icon.foreground": "#ededed",
    "checkbox.background": "#1d1c29",
    "checkbox.foreground": "#cccccc",
    "checkbox.border": "#00000000",
    "dropdown.background": "#1d1c29",
    "dropdown.foreground": "#cccccc",
    "dropdown.border": "#00000000",
    "minimapGutter.addedBackground": "#75fb4c",
    "minimapGutter.modifiedBackground": "#75fbfdcc",
    "minimapGutter.deletedBackground": "#fd3131",
    "minimap.findMatchHighlight": "#515c6a",
    "minimap.selectionHighlight": "#75fbfd30",
    "minimap.errorHighlight": "#ee7d71",
    "minimap.warningHighlight": "#fbe94e",
    "minimap.background": "#14141c",
    "sideBar.dropBackground": "#383b3d",
    "editorGroup.emptyBackground": "#14141c",
    "panelSection.border": "#80808059",
    "statusBarItem.activeBackground": "#FFFFFF25",
    "settings.headerForeground": "#ededed",
    "settings.focusedRowBackground": "#ffffff07",
    "walkThrough.embeddedEditorBackground": "#00000050",
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "editorGutter.commentRangeForeground": "#c5c5c5",
    "debugExceptionWidget.background": "#201f28",
    "debugExceptionWidget.border": "#1d1c29"
  }
}`;

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/dark.json", theme),
  ]))
  .catch(() => process.exit(1))
