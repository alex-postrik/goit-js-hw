function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var i,o,r,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,a=setTimeout(h,t),l?b(e):f}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function h(){var e=g();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,r-(e-c)):n}(e))}function w(e){return a=void 0,p&&i?b(e):(i=o=void 0,f)}function O(){var e=g(),n=T(e);if(i=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),b(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=y(t)||0,v(n)&&(l=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=o=a=void 0},O.flush=function(){return void 0===a?f:w(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const b={formRef:document.querySelector(".feedback-form"),emailRef:document.querySelector('input[name="email"]'),messageRef:document.querySelector('textarea[name="message"]')},j={email:"",message:""},T=localStorage.getItem("");b.formRef.addEventListener("input",e(t)((function(e){const{name:t,value:n}=e.target;j[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),b.formRef.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(j)})),function(){const e=JSON.parse(T);e&&(b.emailRef.value=e.email,b.messageRef.value=e.message)}();
//# sourceMappingURL=03-feedback.370ab864.js.map