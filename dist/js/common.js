!function(n){function e(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,e),t.l=!0,t.exports}var r=window.webpackJsonp;window.webpackJsonp=function(a,s,i){for(var l,o,c,u=0,p=[];u<a.length;u++)o=a[u],t[o]&&p.push(t[o][0]),t[o]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(n[l]=s[l]);for(r&&r(a,s,i);p.length;)p.shift()();if(i)for(u=0;u<i.length;u++)c=e(e.s=i[u]);return c};var a={},t={4:0};e.e=function(n){function r(){l.onerror=l.onload=null,clearTimeout(o);var e=t[n];0!==e&&(e&&e[1](new Error("Loading chunk "+n+" failed.")),t[n]=void 0)}var a=t[n];if(0===a)return new Promise(function(n){n()});if(a)return a[2];var s=new Promise(function(e,r){a=t[n]=[e,r]});a[2]=s;var i=document.getElementsByTagName("head")[0],l=document.createElement("script");l.type="text/javascript",l.charset="utf-8",l.async=!0,l.timeout=12e4,e.nc&&l.setAttribute("nonce",e.nc),l.src=e.p+"./js/"+n+".js";var o=setTimeout(r,12e4);return l.onerror=l.onload=r,i.appendChild(l),s},e.m=n,e.c=a,e.d=function(n,r,a){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:a})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e.oe=function(n){throw console.error(n),n}}([function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/sprite.svg";\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/images/icons/sprite.svg\n// module id = 0\n// module chunks = 4\n\n//# sourceURL=webpack:///./source/images/icons/sprite.svg?')},function(module,exports,__webpack_require__){"use strict";eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      var valB = pug_style(b[key]);\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    val += '';\n    if (val[val.length - 1] !== ';') \n      return val + ';';\n    return val;\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  if (typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(12).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/pug-runtime/index.js\n// module id = 1\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?")},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/avatar.jpg";\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/images/avatar.jpg\n// module id = 2\n// module chunks = 4\n\n//# sourceURL=webpack:///./source/images/avatar.jpg?')},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/normalize.css/normalize.css\n// module id = 3\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?")},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/scss/main.scss\n// module id = 4\n// module chunks = 4\n\n//# sourceURL=webpack:///./source/scss/main.scss?")},,,,,,,,function(module,exports){eval("/* (ignored) */\n\n//////////////////\n// WEBPACK FOOTER\n// fs (ignored)\n// module id = 12\n// module chunks = 4\n\n//# sourceURL=webpack:///fs_(ignored)?")}]);