webpackJsonp([1],{13:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(14);\n\n__webpack_require__(3);\n\n__webpack_require__(4);\n\nconsole.log('about');\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/pages/about/about.js\n// module id = 13\n// module chunks = 1\n\n//# sourceURL=webpack:///./source/pages/about/about.js?")},14:function(module,exports,__webpack_require__){eval('var pug = __webpack_require__(1);\n\nfunction template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_mixins["socials"] = pug_interp = function(className, classStyle){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--Социалки className-вводим класс родительского блока--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--classStyle вводим имя модификатора для стилизации--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--стили в _socials.scss--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul" + (pug.attr("class", pug.classes([`socials ` + `${className}` + `__socials`], [true]), false, true)) + "\\u003E";\nvar socialMenu = [\n[\'vk\', \'https://vk.com/id3022300\'],\n[\'github\', \'https://github.com/amper86\'],\n[\'in\', \'https://ru.linkedin.com\']\n]\n// iterate socialMenu\n;(function(){\n  var $$obj = socialMenu;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var soc = $$obj[pug_index0];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"socials__item\\"\\u003E\\u003Ca" + (pug.attr("class", pug.classes([`socials__link ` + `socials__link_` + `${classStyle}`], [true]), false, true)+pug.attr("href", `${soc[1]}`, true, true)+" target=\\"_blank\\"") + "\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"socials__icon\\"\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + `#${soc[0]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var soc = $$obj[pug_index0];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"socials__item\\"\\u003E\\u003Ca" + (pug.attr("class", pug.classes([`socials__link ` + `socials__link_` + `${classStyle}`], [true]), false, true)+pug.attr("href", `${soc[1]}`, true, true)+" target=\\"_blank\\"") + "\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"socials__icon\\"\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + `#${soc[0]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["navigation"] = pug_interp = function(infoNav, className){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--infoNav принимает массив 0-путь ссылки 1-текст ссылки--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--className принимает названия можификатора у li--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"nav-list\\"\\u003E";\n// iterate infoNav\n;(function(){\n  var $$obj = infoNav;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {\n        var nav = $$obj[pug_index1];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli" + (pug.attr("class", pug.classes([\'nav-list__item \' + \'nav-list__item_\' + `${className}`], [true]), false, true)) + "\\u003E\\u003Ca" + (" class=\\"nav-list__link\\""+pug.attr("href", `${nav[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = nav[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index1 in $$obj) {\n      $$l++;\n      var nav = $$obj[pug_index1];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli" + (pug.attr("class", pug.classes([\'nav-list__item \' + \'nav-list__item_\' + `${className}`], [true]), false, true)) + "\\u003E\\u003Ca" + (" class=\\"nav-list__link\\""+pug.attr("href", `${nav[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = nav[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["test"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar skills = {\nfrontend: ["Frontend", "HTML5", "CSS3", "JavaScript & jQuery"],\nbackend: ["Backend", "PHP", "mySQL", "Node.js & npm", "Mongo.db"],\nworkFlow: ["WorkFlow", "Git", "Gulp", "Bower"]\n};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"skills-list\\"\\u003E";\n// iterate skills\n;(function(){\n  var $$obj = skills;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {\n        var item = $$obj[pug_index2];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"skills-list__item\\"\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row__title\\"\\u003E" + (pug.escape(null == (pug_interp = item[0]) ? "" : pug_interp)) + "\\u003C\\u002Fdiv\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"skills-row__list\\"\\u003E";\nfor (var i=1; i<item.length; i++)\n{\npug_html = pug_html + "\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"skills-row__item\\"\\u003E\\n          ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row__container\\"\\u003E\\n            ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"skills-row__circle\\"\\u003E\\n              ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Ccircle class=\\"skills-row__image-bg\\" r=\\"55\\" cx=\\"55\\" cy=\\"55\\" fill=\\"none\\"\\u003E\\u003C\\u002Fcircle\\u003E\\n              ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Ccircle class=\\"skills-row__image-level\\" r=\\"55\\" cx=\\"55\\" cy=\\"55\\" transform=\\"rotate(-90 55 55)\\"\\u003E\\u003C\\u002Fcircle\\u003E\\n            ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\n            ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row__title-skill\\"\\u003E" + (pug.escape(null == (pug_interp = item[i]) ? "" : pug_interp)) + "\\u003C\\u002Fdiv\\u003E\\n          ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fli\\u003E";\n}\npug_html = pug_html + "\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index2 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index2];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"skills-list__item\\"\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row__title\\"\\u003E" + (pug.escape(null == (pug_interp = item[0]) ? "" : pug_interp)) + "\\u003C\\u002Fdiv\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"skills-row__list\\"\\u003E";\nfor (var i=1; i<item.length; i++)\n{\npug_html = pug_html + "\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"skills-row__item\\"\\u003E\\n          ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row__container\\"\\u003E\\n            ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"skills-row__circle\\"\\u003E\\n              ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Ccircle class=\\"skills-row__image-bg\\" r=\\"55\\" cx=\\"55\\" cy=\\"55\\" fill=\\"none\\"\\u003E\\u003C\\u002Fcircle\\u003E\\n              ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Ccircle class=\\"skills-row__image-level\\" r=\\"55\\" cx=\\"55\\" cy=\\"55\\" transform=\\"rotate(-90 55 55)\\"\\u003E\\u003C\\u002Fcircle\\u003E\\n            ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\n            ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"skills-row__title-skill\\"\\u003E" + (pug.escape(null == (pug_interp = item[i]) ? "" : pug_interp)) + "\\u003C\\u002Fdiv\\u003E\\n          ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fli\\u003E";\n}\npug_html = pug_html + "\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["info"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar contacts = [\n[\'skype_kdn\', \'skype_n_test\', \'skype:\'],\n[\'astahov@gmail.com\', \'envelope_n\', \'mailto:\'],\n[\'+7 931 200 93 24\', \'phone_n\', \'tel:\'],\n[\'Новосибирск, ул. Инская, д.14\', \'map_n\', \'#\']\n]\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"contacts__list\\"\\u003E";\n// iterate contacts\n;(function(){\n  var $$obj = contacts;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {\n        var contact = $$obj[pug_index3];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"contacts__item\\"\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"contacts-block\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg" + (pug.attr("class", pug.classes([\'contacts-block__icon \' + \'contacts-block__icon_\' + `${contact[1]}`], [true]), false, true)) + "\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + `#${contact[1]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003Ca" + (" class=\\"contacts-block__link\\""+pug.attr("href", `${contact[2]}` + `${contact[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = contact[0]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index3 in $$obj) {\n      $$l++;\n      var contact = $$obj[pug_index3];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"contacts__item\\"\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"contacts-block\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg" + (pug.attr("class", pug.classes([\'contacts-block__icon \' + \'contacts-block__icon_\' + `${contact[1]}`], [true]), false, true)) + "\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + `#${contact[1]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003Ca" + (" class=\\"contacts-block__link\\""+pug.attr("href", `${contact[2]}` + `${contact[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = contact[0]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["info-footer"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar info = [\n    [\'skype:\', \'skype_kdn\'],\n    [\'mailto:\', \'astahov@gmail.com\'],\n    [\'tel:\', \'+79312009324\'],\n    [\'#\', \'Новосибирск\']\n]\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"footer__contact-list\\"\\u003E";\n// iterate info\n;(function(){\n  var $$obj = info;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {\n        var item = $$obj[pug_index4];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"footer__item\\"\\u003E\\u003Ca" + (" class=\\"footer__link\\""+pug.attr("href", `${item[0]}` + `${item[1]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index4 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index4];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"footer__item\\"\\u003E\\u003Ca" + (" class=\\"footer__link\\""+pug.attr("href", `${item[0]}` + `${item[1]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["copyright"] = pug_interp = function(className){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cp" + (pug.attr("class", pug.classes([\'copyright \' + `${className}`], [true]), false, true)) + "\\u003E&copy;\\tВладимир Астахов | Создано с любовью в Loftschool | 2017\\u003C\\u002Fp\\u003E";\n};\npug_mixins["header"] = pug_interp = function(titleClass, titleText, descriptionText, ifHide){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cheader class=\\"header\\"\\u003E";\npug_indent.push(\'  \');\npug_mixins["socials"](\'header\', \'header\');\npug_indent.pop();\npug_html = pug_html + "\\u003Ca class=\\"burger header__burger\\" href=\\"#\\"\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"header__greeting-container\\"\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"img-container header__img-container\\"\\u003E\\u003Cimg" + (" class=\\"img-container__avatar\\""+pug.attr("src", __webpack_require__(2), true, true)) + "\\u003E\\u003C\\u002Fdiv\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"header__info info\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Ch2" + (pug.attr("class", pug.classes([`${titleClass}`], [true]), false, true)) + "\\u003E" + (pug.escape(null == (pug_interp = titleText) ? "" : pug_interp)) + "\\u003C\\u002Fh2\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cp class=\\"info__description\\"\\u003E" + (pug.escape(null == (pug_interp = descriptionText) ? "" : pug_interp)) + "\\u003C\\u002Fp\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\u003Ca" + (pug.attr("class", pug.classes([\'header__arrow \' + `${ifHide}`], [true]), false, true)+" href=\\"#\\"") + "\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"header__arrow-icon\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + \'#arrow_down\', true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fheader\\u003E";\n};\npug_html = pug_html + "\\u003C!DOCTYPE html\\u003E\\n\\u003Chtml\\u003E\\n  \\u003Chead\\u003E\\n    \\u003Cmeta charset=\\"utf-8\\"\\u003E\\n    \\u003Cmeta content=\\"width=device-width, initial-scale=1\\" name=\\"viewport\\"\\u003E\\n    \\u003Cmeta content=\\"ie=edge\\" http-equiv=\\"x-ua-compatible\\"\\u003E\\n    \\u003Ctitle\\u003EОбо мне\\u003C\\u002Ftitle\\u003E\\u003C!--[if lt IE 9]\\u003E\\n    \\u003Cscript src=\\"http:\\u002F\\u002Fcdnjs.cloudflare.com\\u002Fajax\\u002Flibs\\u002Fhtml5shiv\\u002F3.7.2\\u002Fhtml5shiv.min.js\\"\\u003E\\u003C\\u002Fscript\\u003E\\u003C![endif]--\\u003E\\n  \\u003C\\u002Fhead\\u003E\\n  \\u003Cbody\\u003E\\n    \\u003Cdiv class=\\"wrapper\\"\\u003E";\npug_indent.push(\'      \');\npug_mixins["header"](\'info__name\', \'Владимир Астахов\', \'Личный сайт веб разработчика\');\npug_indent.pop();\npug_html = pug_html + "\\n      \\u003Csection class=\\"about\\"\\u003E\\n        \\u003Cdiv class=\\"about__triangle-blog\\"\\u003E\\n          \\u003Csvg class=\\"about__triangle-icon\\" xmlns=\\"http:\\u002F\\u002Fwww.w3.org\\u002F2000\\u002Fsvg\\" viewbox=\\"0 0 1000 85\\" preserveAspectRatio=\\"none\\"\\u003E\\n            \\u003Cpolygon class=\\"about__triangle_left\\" fill=\\"#f2f0e8\\" points=\\"0,0 0,86 500.8,86 500.8,75.5\\"\\u003E\\u003C\\u002Fpolygon\\u003E\\n            \\u003Cpolygon class=\\"about__triangle_right\\" fill=\\"#eae8e2\\" points=\\"1000,0 1000,86 500,86 500,75.5\\"\\u003E\\u003C\\u002Fpolygon\\u003E\\n          \\u003C\\u002Fsvg\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\"about__left\\"\\u003E\\n          \\u003Cdiv class=\\"about__left-title\\"\\u003E\\n            \\u003Ch1 class=\\"block-title about__block-title\\"\\u003EОбо мне\\u003C\\u002Fh1\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"about__left-content\\"\\u003E\\n            \\u003Cdiv class=\\"user-description\\"\\u003E\\n              \\u003Cdiv class=\\"user-description__img-container\\"\\u003E\\u003Cimg" + (" class=\\"user-description__img\\""+pug.attr("src", __webpack_require__(15), true, true)) + "\\u003E\\u003C\\u002Fdiv\\u003E\\n              \\u003Cdiv class=\\"user-description__title\\"\\u003E\\n                \\u003Ch2 class=\\"block-subtitle\\"\\u003EКто я\\u003C\\u002Fh2\\u003E\\n              \\u003C\\u002Fdiv\\u003E\\n              \\u003Cdiv class=\\"user-description__text text-content\\"\\u003E\\n                \\u003Cp\\u003EЯ веб разработчик из Новосибирска. Мне 27 лет. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.\\u003C\\u002Fp\\u003E\\n                \\u003Cp\\u003EЭтот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите,как тут всё классно и красиво!\\u003C\\u002Fp\\u003E\\n              \\u003C\\u002Fdiv\\u003E\\n            \\u003C\\u002Fdiv\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\"about__right\\"\\u003E\\n          \\u003Cdiv class=\\"about__right-title\\"\\u003E\\n            \\u003Ch2 class=\\"block-subtitle\\"\\u003EЧем я могу быть вам полезен\\u003C\\u002Fh2\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"about__right-text text-content\\"\\u003E\\n            \\u003Cp\\u003EБольше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.\\u003C\\u002Fp\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"about__right-content\\"\\u003E";\npug_indent.push(\'            \');\npug_mixins["test"]();\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n      \\u003C\\u002Fsection\\u003E\\n      \\u003Csection class=\\"map\\"\\u003E\\n        \\u003Cdiv class=\\"map__contacts\\"\\u003E\\n          \\u003Cdiv class=\\"contacts\\"\\u003E\\n            \\u003Cdiv class=\\"contacts__title\\"\\u003E\\n              \\u003Cdiv class=\\"block-subtitle\\"\\u003EКонтакты\\u003C\\u002Fdiv\\u003E\\n            \\u003C\\u002Fdiv\\u003E";\npug_indent.push(\'            \');\npug_mixins["info"]();\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\"map__google\\"\\u003E\\n          \\u003C!--todo: нужно доделать адаптив под телефон и выставить font-size под брэйкпойнты--\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n      \\u003C\\u002Fsection\\u003E\\n      \\u003Cfooter class=\\"footer\\"\\u003E\\n        \\u003Cdiv class=\\"footer__container\\"\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col_left\\"\\u003E\\n            \\u003Cp\\u003EЭтот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool.\\u003C\\u002Fp\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col_center\\"\\u003E\\n            \\u003Cnav class=\\"footer__nav\\"\\u003E";\npug_indent.push(\'              \');\npug_mixins["navigation"]([[\'./works.html\', \'Мои работы\'], [\'./about.html\', \'Обо мне\'], [\'./blog.html\', \'Блог\'], [\'./index.html\', \'Авторизоваться\']], \'footer\');\npug_indent.pop();\npug_html = pug_html + "\\n            \\u003C\\u002Fnav\\u003E";\npug_indent.push(\'            \');\npug_mixins["socials"](\'footer\', \'footer\');\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col_right\\"\\u003E";\npug_indent.push(\'            \');\npug_mixins["info-footer"]();\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E";\npug_indent.push(\'        \');\npug_mixins["copyright"](\'footer__copyright\');\npug_indent.pop();\npug_html = pug_html + "\\n      \\u003C\\u002Ffooter\\u003E\\n    \\u003C\\u002Fdiv\\u003E\\n  \\u003C\\u002Fbody\\u003E\\n\\u003C\\u002Fhtml\\u003E";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/pages/about/about.pug\n// module id = 14\n// module chunks = 1\n\n//# sourceURL=webpack:///./source/pages/about/about.pug?')},15:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/about-photo.jpg";\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/images/about-photo.jpg\n// module id = 15\n// module chunks = 1\n\n//# sourceURL=webpack:///./source/images/about-photo.jpg?')}},[13]);