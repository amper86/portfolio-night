webpackJsonp([2],{0:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/sprite.svg";\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/images/icons/sprite.svg\n// module id = 0\n// module chunks = 0 1 2\n\n//# sourceURL=webpack:///./source/images/icons/sprite.svg?')},1:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/avatar.jpg";\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/images/avatar.jpg\n// module id = 1\n// module chunks = 0 1 2\n\n//# sourceURL=webpack:///./source/images/avatar.jpg?')},13:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(14);\n\n__webpack_require__(3);\n\n__webpack_require__(4);\n\nconsole.log('blog');\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/pages/blog/blog.js\n// module id = 13\n// module chunks = 2\n\n//# sourceURL=webpack:///./source/pages/blog/blog.js?")},14:function(module,exports,__webpack_require__){eval('var pug = __webpack_require__(2);\n\nfunction template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_mixins["socials"] = pug_interp = function(className, classStyle){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--Социалки className-вводим класс родительского блока--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--classStyle вводим имя модификатора для стилизации--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--стили в _socials.scss--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul" + (pug.attr("class", pug.classes([`socials ` + `${className}` + `__socials`], [true]), false, true)) + "\\u003E";\nvar socialMenu = [\n[\'vk\', \'https://vk.com/id3022300\'],\n[\'github\', \'https://github.com/amper86\'],\n[\'in\', \'https://ru.linkedin.com\']\n]\n// iterate socialMenu\n;(function(){\n  var $$obj = socialMenu;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var soc = $$obj[pug_index0];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"socials__item\\"\\u003E\\u003Ca" + (pug.attr("class", pug.classes([`socials__link ` + `socials__link_` + `${classStyle}`], [true]), false, true)+pug.attr("href", `${soc[1]}`, true, true)+" target=\\"_blank\\"") + "\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"socials__icon\\"\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + `#${soc[0]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var soc = $$obj[pug_index0];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"socials__item\\"\\u003E\\u003Ca" + (pug.attr("class", pug.classes([`socials__link ` + `socials__link_` + `${classStyle}`], [true]), false, true)+pug.attr("href", `${soc[1]}`, true, true)+" target=\\"_blank\\"") + "\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"socials__icon\\"\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + `#${soc[0]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["navigation"] = pug_interp = function(infoNav, className){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--infoNav принимает массив 0-путь ссылки 1-текст ссылки--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--className принимает названия можификатора у li--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"nav-list\\"\\u003E";\n// iterate infoNav\n;(function(){\n  var $$obj = infoNav;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {\n        var nav = $$obj[pug_index1];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli" + (pug.attr("class", pug.classes([\'nav-list__item \' + \'nav-list__item_\' + `${className}`], [true]), false, true)) + "\\u003E\\u003Ca" + (" class=\\"nav-list__link\\""+pug.attr("href", `${nav[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = nav[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index1 in $$obj) {\n      $$l++;\n      var nav = $$obj[pug_index1];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli" + (pug.attr("class", pug.classes([\'nav-list__item \' + \'nav-list__item_\' + `${className}`], [true]), false, true)) + "\\u003E\\u003Ca" + (" class=\\"nav-list__link\\""+pug.attr("href", `${nav[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = nav[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\npug_mixins["info-footer"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar info = [\n    [\'skype:\', \'skype_kdn\'],\n    [\'mailto:\', \'astahov@gmail.com\'],\n    [\'tel:\', \'+7 931 200 93 24\'],\n    [\'#\', \'Новосибирск\']\n]\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"footer__contact-list\\"\\u003E";\n// iterate info\n;(function(){\n  var $$obj = info;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {\n        var item = $$obj[pug_index4];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"footer__item\\"\\u003E\\u003Ca" + (" class=\\"footer_link\\""+pug.attr("href", `${item[0]}` + `${item[1]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index4 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index4];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"footer__item\\"\\u003E\\u003Ca" + (" class=\\"footer_link\\""+pug.attr("href", `${item[0]}` + `${item[1]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["copyright"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cp class=\\"copyright\\"\\u003E&copy;\\tВладимир Астахов | Создано с любовью в Loftschool | 2017\\u003C\\u002Fp\\u003E";\n};\npug_html = pug_html + "\\u003C!DOCTYPE html\\u003E\\n\\u003Chtml\\u003E\\n  \\u003Chead\\u003E\\n    \\u003Cmeta charset=\\"utf-8\\"\\u003E\\n    \\u003Cmeta content=\\"width=device-width, initial-scale=1\\" name=\\"viewport\\"\\u003E\\n    \\u003Cmeta content=\\"ie=edge\\" http-equiv=\\"x-ua-compatible\\"\\u003E\\n    \\u003Ctitle\\u003EБлог страница\\u003C\\u002Ftitle\\u003E\\u003C!--[if lt IE 9]\\u003E\\n    \\u003Cscript src=\\"http:\\u002F\\u002Fcdnjs.cloudflare.com\\u002Fajax\\u002Flibs\\u002Fhtml5shiv\\u002F3.7.2\\u002Fhtml5shiv.min.js\\"\\u003E\\u003C\\u002Fscript\\u003E\\u003C![endif]--\\u003E\\n  \\u003C\\u002Fhead\\u003E\\n  \\u003Cbody\\u003E\\n    \\u003Cdiv class=\\"wrapper\\"\\u003E\\n      \\u003Cheader class=\\"header\\"\\u003E";\npug_indent.push(\'        \');\npug_mixins["socials"](\'header\', \'header\');\npug_indent.pop();\npug_html = pug_html + "\\u003Ca class=\\"burger header__burger\\" href=\\"#\\"\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\n        \\u003Cdiv class=\\"header__greeting-container\\"\\u003E\\n          \\u003Cdiv class=\\"img-container header__img-container\\"\\u003E\\u003Cimg" + (" class=\\"img-container__avatar\\""+pug.attr("src", __webpack_require__(1), true, true)) + "\\u003E\\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"header__info info\\"\\u003E\\n            \\u003Ch2 class=\\"info__name\\"\\u003EВладимир Астахов\\u003C\\u002Fh2\\u003E\\n            \\u003Cp class=\\"info__description\\"\\u003EЛичный сайт веб разработчика\\u003C\\u002Fp\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\u003Ca class=\\"header__arrow\\" href=\\"#\\"\\u003E\\n          \\u003Csvg class=\\"header__arrow-icon\\"\\u003E\\n            \\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(0) + \'#arrow_down\', true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n          \\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\n      \\u003C\\u002Fheader\\u003E\\n      \\u003Ch1\\u003EБлог страница\\u003C\\u002Fh1\\u003E\\n      \\u003Cfooter class=\\"footer\\"\\u003E\\n        \\u003Cdiv class=\\"footer__container\\"\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col-left\\"\\u003E\\n            \\u003Cp\\u003EЭтот сайт я сделал в рамках обучения в Школе\\u003C\\u002Fp\\u003E\\n            \\u003Cp\\u003Eонлайн образования LoftSchool.\\u003C\\u002Fp\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col-center\\"\\u003E\\n            \\u003Cnav class=\\"footer__nav\\"\\u003E";\npug_indent.push(\'              \');\npug_mixins["navigation"]([[\'./works.html\', \'Мои работы\'], [\'./about.html\', \'Обо мне\'], [\'./blog.html\', \'Блог\'], [\'./index.html\', \'Авторизоваться\']], \'footer\');\npug_indent.pop();\npug_html = pug_html + "\\n            \\u003C\\u002Fnav\\u003E";\npug_indent.push(\'            \');\npug_mixins["socials"](\'footer\', \'footer\');\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col-right\\"\\u003E";\npug_indent.push(\'            \');\npug_mixins["info-footer"]();\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E";\npug_indent.push(\'        \');\npug_mixins["copyright"]();\npug_indent.pop();\npug_html = pug_html + "\\n      \\u003C\\u002Ffooter\\u003E\\n    \\u003C\\u002Fdiv\\u003E\\n  \\u003C\\u002Fbody\\u003E\\n\\u003C\\u002Fhtml\\u003E";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/pages/blog/blog.pug\n// module id = 14\n// module chunks = 2\n\n//# sourceURL=webpack:///./source/pages/blog/blog.pug?')}},[13]);