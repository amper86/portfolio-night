webpackJsonp([3],{354:function(module,exports,__webpack_require__){eval("__webpack_require__(48);\nmodule.exports = __webpack_require__(355);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi babel-polyfill ./source/pages/blog/blog.js\n// module id = 354\n// module chunks = 3\n\n//# sourceURL=webpack:///multi_babel-polyfill_./source/pages/blog/blog.js?")},355:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(356);\n\n__webpack_require__(72);\n\n__webpack_require__(73);\n\n__webpack_require__(52);\n\n__webpack_require__(53);\n\n__webpack_require__(54);\n\n__webpack_require__(357);\n\n__webpack_require__(358);\n\n__webpack_require__(359);\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/pages/blog/blog.js\n// module id = 355\n// module chunks = 3\n\n//# sourceURL=webpack:///./source/pages/blog/blog.js?")},356:function(module,exports,__webpack_require__){eval('var pug = __webpack_require__(69);\n\nfunction template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_mixins["socials"] = pug_interp = function(className, classStyle){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--Социалки className-вводим класс родительского блока--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--classStyle вводим имя модификатора для стилизации--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--стили в _socials.scss--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul" + (pug.attr("class", pug.classes([`socials ` + `${className}` + `__socials`], [true]), false, true)) + "\\u003E";\nvar socialMenu = [\n[\'vk\', \'https://vk.com/id3022300\'],\n[\'github\', \'https://github.com/amper86\'],\n[\'in\', \'https://ru.linkedin.com\']\n]\n// iterate socialMenu\n;(function(){\n  var $$obj = socialMenu;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var soc = $$obj[pug_index0];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"socials__item\\"\\u003E\\u003Ca" + (pug.attr("class", pug.classes([`socials__link ` + `socials__link_` + `${classStyle}`], [true]), false, true)+pug.attr("href", `${soc[1]}`, true, true)+" target=\\"_blank\\"") + "\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"socials__icon\\"\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(11) + `#${soc[0]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var soc = $$obj[pug_index0];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"socials__item\\"\\u003E\\u003Ca" + (pug.attr("class", pug.classes([`socials__link ` + `socials__link_` + `${classStyle}`], [true]), false, true)+pug.attr("href", `${soc[1]}`, true, true)+" target=\\"_blank\\"") + "\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"socials__icon\\"\\u003E\\n        ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(11) + `#${soc[0]}`, true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["navigation"] = pug_interp = function(infoNav, className){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--infoNav принимает массив 0-путь ссылки 1-текст ссылки--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C!--className принимает названия можификатора у li--\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"nav-list\\"\\u003E";\n// iterate infoNav\n;(function(){\n  var $$obj = infoNav;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {\n        var nav = $$obj[pug_index1];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli" + (pug.attr("class", pug.classes([\'nav-list__item \' + \'nav-list__item_\' + `${className}`], [true]), false, true)) + "\\u003E\\u003Ca" + (" class=\\"nav-list__link\\""+pug.attr("href", `${nav[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = nav[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index1 in $$obj) {\n      $$l++;\n      var nav = $$obj[pug_index1];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli" + (pug.attr("class", pug.classes([\'nav-list__item \' + \'nav-list__item_\' + `${className}`], [true]), false, true)) + "\\u003E\\u003Ca" + (" class=\\"nav-list__link\\""+pug.attr("href", `${nav[0]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = nav[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\npug_mixins["info-footer"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar info = [\n    [\'skype:\', \'amper1131\'],\n    [\'mailto:\', \'o.mullakaev@gmail.com\'],\n    [\'tel:\', \'+7 9262735292\'],\n    [\'#\', \'Москва\']\n]\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cul class=\\"footer__contact-list\\"\\u003E";\n// iterate info\n;(function(){\n  var $$obj = info;\n  if (\'number\' == typeof $$obj.length) {\n      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {\n        var item = $$obj[pug_index4];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"footer__item\\"\\u003E\\u003Ca" + (" class=\\"footer__link\\""+pug.attr("href", `${item[0]}` + `${item[1]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index4 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index4];\npug_html = pug_html + "\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cli class=\\"footer__item\\"\\u003E\\u003Ca" + (" class=\\"footer__link\\""+pug.attr("href", `${item[0]}` + `${item[1]}`, true, true)) + "\\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Ful\\u003E";\n};\npug_mixins["copyright"] = pug_interp = function(className){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cp" + (pug.attr("class", pug.classes([\'copyright \' + `${className}`], [true]), false, true)) + "\\u003E&copy;\\tОлег Муллакаев | Создано с любовью в Loftschool | 2017\\u003C\\u002Fp\\u003E";\n};\npug_mixins["header"] = pug_interp = function(titleClass, titleText, descriptionText, ifHide){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + "\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cheader class=\\"header\\"\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"header__bg\\"\\u003E\\u003Cimg" + (" class=\\"header__bg-img\\""+pug.attr("src", __webpack_require__(70), true, true)) + "\\u003E\\u003C\\u002Fdiv\\u003E";\npug_indent.push(\'  \');\npug_mixins["socials"](\'header\', \'header\');\npug_indent.pop();\npug_html = pug_html + "\\u003Ca class=\\"burger header__burger\\" href=\\"#\\"\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"burger__line\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"header__greeting-container\\"\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"img-container header__img-container\\"\\u003E\\u003Cimg" + (" class=\\"img-container__avatar\\""+pug.attr("src", __webpack_require__(71), true, true)) + "\\u003E\\u003C\\u002Fdiv\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cdiv class=\\"header__info info\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Ch2" + (pug.attr("class", pug.classes([`${titleClass}`], [true]), false, true)) + "\\u003E" + (pug.escape(null == (pug_interp = titleText) ? "" : pug_interp)) + "\\u003C\\u002Fh2\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cp class=\\"info__description\\"\\u003E" + (pug.escape(null == (pug_interp = descriptionText) ? "" : pug_interp)) + "\\u003C\\u002Fp\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\n  ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fdiv\\u003E\\u003Ca" + (pug.attr("class", pug.classes([\'header__arrow \' + `${ifHide}`], [true]), false, true)+" href=\\"#\\"") + "\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Csvg class=\\"header__arrow-icon\\"\\u003E\\n      ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003Cuse" + (pug.attr("xlink:href", __webpack_require__(11) + \'#arrow_down\', true, true)) + "\\u003E\\u003C\\u002Fuse\\u003E\\n    ";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fsvg\\u003E\\u003C\\u002Fa\\u003E\\n";\npug_html = pug_html + pug_indent.join("");\npug_html = pug_html + "\\u003C\\u002Fheader\\u003E";\n};\npug_html = pug_html + "\\u003C!DOCTYPE html\\u003E\\n\\u003Chtml\\u003E\\n  \\u003Chead\\u003E\\n    \\u003Cmeta charset=\\"utf-8\\"\\u003E\\n    \\u003Cmeta content=\\"width=device-width, initial-scale=1\\" name=\\"viewport\\"\\u003E\\n    \\u003Cmeta content=\\"ie=edge\\" http-equiv=\\"x-ua-compatible\\"\\u003E\\n    \\u003Ctitle\\u003EМой блог\\u003C\\u002Ftitle\\u003E\\u003C!--[if lt IE 9]\\u003E\\n    \\u003Cscript src=\\"http:\\u002F\\u002Fcdnjs.cloudflare.com\\u002Fajax\\u002Flibs\\u002Fhtml5shiv\\u002F3.7.2\\u002Fhtml5shiv.min.js\\"\\u003E\\u003C\\u002Fscript\\u003E\\u003C![endif]--\\u003E\\n  \\u003C\\u002Fhead\\u003E\\n  \\u003Cbody\\u003E\\n    \\u003Cdiv class=\\"wrapper\\"\\u003E";\npug_indent.push(\'      \');\npug_mixins["header"](\'info__title\', \'БЛОГ\', \'Статьи, которые я написал\', \'hide\');\npug_indent.pop();\npug_html = pug_html + "\\n      \\u003Csection class=\\"blog\\"\\u003E\\n        \\u003Cdiv class=\\"blog__triangle-blog\\"\\u003E\\n          \\u003Csvg class=\\"blog__triangle-icon\\" xmlns=\\"http:\\u002F\\u002Fwww.w3.org\\u002F2000\\u002Fsvg\\" viewbox=\\"0 0 1000 85\\" preserveAspectRatio=\\"none\\"\\u003E\\n            \\u003Cpolygon class=\\"blog__triangle_left\\" fill=\\"#faf8f0\\" points=\\"0,0 0,86 500.8,86 500.8,75.5\\"\\u003E\\u003C\\u002Fpolygon\\u003E\\n            \\u003Cpolygon class=\\"blog__triangle_right\\" fill=\\"#faf8f0\\" points=\\"1000,0 1000,86 500,86 500,75.5\\"\\u003E\\u003C\\u002Fpolygon\\u003E\\n          \\u003C\\u002Fsvg\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\"blog__aside\\"\\u003E\\n          \\u003Cul class=\\"article-titles blog__article-titles\\"\\u003E\\n            \\u003Cli class=\\"article-titles__item article-titles__item_active\\" data-item=\\"2\\"\\u003E\\u003Ca class=\\"article-titles__link\\" href=\\"#\\"\\u003EСамое важное в SASS\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\n            \\u003Cli class=\\"article-titles__item\\" data-item=\\"1\\"\\u003E\\u003Ca class=\\"article-titles__link\\" href=\\"#\\"\\u003EПриемы в верстке, без которых не обходится ни один сайт\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\n          \\u003C\\u002Ful\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\"blog__content\\"\\u003E\\n          \\u003Cul class=\\"article-list blog__article-list\\"\\u003E\\n            \\u003Cli class=\\"article-list__item\\" data-text=\\"2\\"\\u003E\\n              \\u003Ch3 class=\\"article-list__title\\"\\u003EСамое важное в SASS\\u003C\\u002Fh3\\u003E\\u003Cspan class=\\"article-list__date\\"\\u003E22 ноября 2016\\u003C\\u002Fspan\\u003E\\n              \\u003Cdiv class=\\"article-list__text-content\\"\\u003E\\n                \\u003Cp\\u003EТаким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.\\u003C\\u002Fp\\u003E\\n                \\u003Cp\\u003EНе следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.\\u003C\\u002Fp\\u003E\\n              \\u003C\\u002Fdiv\\u003E\\n            \\u003C\\u002Fli\\u003E\\n            \\u003Cli class=\\"article-list__item\\" data-text=\\"1\\"\\u003E\\n              \\u003Ch3 class=\\"article-list__title\\"\\u003EПриемы в верстке, без которых не обойдется ни один сайт\\u003C\\u002Fh3\\u003E\\u003Cspan class=\\"article-list__date\\"\\u003E13 ноября 2016\\u003C\\u002Fspan\\u003E\\n              \\u003Cdiv class=\\"article-list__text-content\\"\\u003E\\n                \\u003Cp\\u003EТаким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.\\u003C\\u002Fp\\u003E\\n                \\u003Cp\\u003EНе следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.\\u003C\\u002Fp\\u003E\\n                \\u003C!--Todo: посмотреть неиспользуемы классы в article-titles и article-list!!!--\\u003E\\n              \\u003C\\u002Fdiv\\u003E\\n            \\u003C\\u002Fli\\u003E\\n          \\u003C\\u002Ful\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n      \\u003C\\u002Fsection\\u003E\\n      \\u003Cfooter class=\\"footer\\"\\u003E\\n        \\u003Cdiv class=\\"footer__container\\"\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col_left\\"\\u003E\\n            \\u003Cp\\u003EЭтот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool.\\u003C\\u002Fp\\u003E\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col_center\\"\\u003E\\n            \\u003Cnav class=\\"footer__nav\\"\\u003E";\npug_indent.push(\'              \');\npug_mixins["navigation"]([[\'./works.html\', \'Мои работы\'], [\'./about.html\', \'Обо мне\'], [\'./blog.html\', \'Блог\'], [\'./index.html\', \'Авторизоваться\']], \'footer\');\npug_indent.pop();\npug_html = pug_html + "\\n            \\u003C\\u002Fnav\\u003E";\npug_indent.push(\'            \');\npug_mixins["socials"](\'footer\', \'footer\');\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n          \\u003Cdiv class=\\"footer__col footer__col_right\\"\\u003E";\npug_indent.push(\'            \');\npug_mixins["info-footer"]();\npug_indent.pop();\npug_html = pug_html + "\\n          \\u003C\\u002Fdiv\\u003E\\n        \\u003C\\u002Fdiv\\u003E";\npug_indent.push(\'        \');\npug_mixins["copyright"](\'footer__copyright\');\npug_indent.pop();\npug_html = pug_html + "\\n      \\u003C\\u002Ffooter\\u003E\\n    \\u003C\\u002Fdiv\\u003E\\n  \\u003C\\u002Fbody\\u003E\\n\\u003C\\u002Fhtml\\u003E";;return pug_html;};\nmodule.exports = template;\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/pages/blog/blog.pug\n// module id = 356\n// module chunks = 3\n\n//# sourceURL=webpack:///./source/pages/blog/blog.pug?')},357:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nmodule.exports = $(function () {\n\n    $('.article-titles__link').on('click', function (e) {\n        e.preventDefault();\n\n        var menuItem = $(this).parent();\n        var menuAttr = menuItem.attr('data-item');\n        var textItem = $('[data-text=' + menuAttr + ']');\n        var textItemOffset = textItem.offset().top;\n\n        //console.log(textItemOffset);\n        //$(document).off('scroll');\n\n        $('.article-titles__item').removeClass('article-titles__item_active');\n        menuItem.addClass('article-titles__item_active');\n\n        //$(window).scrollTop(textItemOffset);\n        //console.log(textItem.scrollTop(textItemOffset));\n        //window.scrollTo(0, textItemOffset);\n        $('html, body').stop().animate({ 'scrollTop': textItemOffset }, 300, 'swing');\n    });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/js/blog-link.js\n// module id = 357\n// module chunks = 3\n\n//# sourceURL=webpack:///./source/js/blog-link.js?")},358:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nmodule.exports = $(function () {\n  $(window).on('scroll', function () {\n    var aside = $('.blog__aside');\n    var sectionBlog = $('.blog');\n    var $window = $(window);\n    //const content = $('.blog__content');\n\n    if ($window.scrollTop() >= sectionBlog.offset().top) {\n      aside.addClass('blog__aside_fixed');\n    } else {\n      aside.removeClass('blog__aside_fixed');\n    }\n\n    $('.article-list__item').each(function () {\n      var textElem = $(this);\n\n      if ($window.scrollTop() >= textElem.offset().top - 200 && $window.scrollTop() <= textElem.offset().top + textElem.height()) {\n        var attrElem = textElem.attr('data-text');\n        var menuElem = $('[data-item=' + attrElem + ']');\n\n        $('.article-titles__item').removeClass('article-titles__item_active');\n        menuElem.addClass('article-titles__item_active');\n      }\n    });\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/js/blog-scroll.js\n// module id = 358\n// module chunks = 3\n\n//# sourceURL=webpack:///./source/js/blog-scroll.js?")},359:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nmodule.exports = $(function () {\n  if ($(document).width() <= 768) {\n    //console.log($(document).width());\n    $('.blog__aside').on('click', function () {\n      //console.log('test');\n      $(this).toggleClass('blog__aside_mobile');\n    });\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/js/blog-mobile.js\n// module id = 359\n// module chunks = 3\n\n//# sourceURL=webpack:///./source/js/blog-mobile.js?")},52:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nmodule.exports = $(function () {\n  var burgerButton = document.querySelector('.burger');\n\n  burgerButton.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    var burgerButtonActive = 'burger_active';\n\n    if (burgerButton.classList.contains(burgerButtonActive)) {\n      burgerButton.classList.remove(burgerButtonActive);\n    } else {\n      burgerButton.classList.add(burgerButtonActive);\n    }\n\n    var navList = document.querySelector('.nav-list');\n    var navListMenu = 'nav-list_menu';\n\n    if (navList.classList.contains(navListMenu)) {\n      navList.classList.remove(navListMenu);\n    } else {\n      navList.classList.add(navListMenu);\n    }\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/js/menu.js\n// module id = 52\n// module chunks = 0 1 3\n\n//# sourceURL=webpack:///./source/js/menu.js?")},53:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nmodule.exports = $(function () {\n  $(window).on('scroll', function () {\n    var $header = $('.header');\n    var $window = $(window);\n    var $headerBg = $('.header__bg');\n\n    /*console.log('test');\r\n    console.log($window.scrollTop() + ' scrollTop');\r\n    console.log($header.height() + ' header');*/\n\n    if ($window.scrollTop() <= $header.height()) {\n\n      /*console.log('hi');\r\n      console.log($window.scrollTop() + ' scrollTop');\r\n      console.log($header.height() + ' header');*/\n\n      var windowScroll = -($window.scrollTop() / $header.height() * 100) / 10;\n      /*console.log(windowScroll);*/\n      $headerBg.css('transform', 'translate3d(0, ' + windowScroll + '%, 0)');\n    }\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/js/scroll-parallax.js\n// module id = 53\n// module chunks = 0 1 3\n\n//# sourceURL=webpack:///./source/js/scroll-parallax.js?")},54:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nmodule.exports = $(function () {\n  $('.header__arrow').on('click', function (e) {\n    e.preventDefault();\n\n    var headerHeight = $('.header').height();\n    $('html, body').animate({ 'scrollTop': headerHeight }, 400, 'swing');\n  });\n\n  $('.about-me__arrow-link').on('click', function (e) {\n    e.preventDefault();\n\n    $('html, body').animate({ 'scrollTop': '0' }, 400, 'swing');\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/js/arrow-up-down.js\n// module id = 54\n// module chunks = 0 1 3\n\n//# sourceURL=webpack:///./source/js/arrow-up-down.js?")}},[354]);