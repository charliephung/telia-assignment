(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{22:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}"undefined"!==typeof e&&e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},38:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(2),c=t(4),l=t(3),s=t(5);function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=t(0),m=t.n(o),u=t(24),d=t(22),h=t.n(d);t(38);function v(e){var a=e.className,t=void 0===a?"btn":a,n=e.addClass,r=void 0===n?"":n,c=e.children,l=i(e,["className","addClass","children"]),s=h()(t,r);return m.a.createElement("button",Object.assign({className:s},l),c)}t(40);var g=m.a.memo(function(e){var a=e.language,t=e.onCloseClick,n=i(e,["language","onCloseClick"]),r=a.shopping;return m.a.createElement("div",Object.assign({},n,{className:"shopping-cart box-shadow-3"}),m.a.createElement("div",{className:"shopping-cart__heading"},m.a.createElement("h2",null,r.heading0),m.a.createElement("p",null,r.info0),m.a.createElement("span",{onClick:t,className:"shopping-cart__close"},"X")),m.a.createElement("div",{className:"shopping-cart__body"},m.a.createElement(v,{addClass:h()("btn--green","color-white-1")},r.button0)))});t(42);function f(e){var a=e.children,t=e.addClass,n=void 0===t?"":t,r=i(e,["children","addClass"]);return m.a.createElement("div",Object.assign({className:"container "+n},r),a)}function p(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).node=m.a.createRef(),t.state={entry:{},observer:{}},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.node.current,t=this.props.config,n=void 0===t?{}:t;this.observer=new IntersectionObserver(function(a,t){var n=p(a,1)[0];e.setState(function(){return{entry:n,observer:t}})},n),this.observer.observe(a)}},{key:"componentWillUnmount",value:function(){var e=this.node.current;this.observer.unobserve(e)}},{key:"render",value:function(){var e="function"===typeof this.props.children?this.props.children(this.state):this.props.children,a=this.props,t=(a.config,i(a,["config"]));return m.a.createElement("div",Object.assign({},t,{ref:this.node}),e)}}]),a}(o.Component);function E(e){return m.a.createElement("img",Object.assign({alt:"dot"},e,{src:"/img/dot.png"}))}function C(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 108 43",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M48.986 15.54c-.545 0-1.089-.406-1.633-1.215-.356-.562-.533-.989-.533-1.28 0-.5.329-.962.989-1.389a3.885 3.885 0 0 1 2.151-.64h12.848c.816 0 1.225.375 1.225 1.123 0 .854-.23 1.634-.692 2.341-.46.707-.963 1.06-1.507 1.06h-4.178v14.107a4.2 4.2 0 0 1-.69 2.34c-.461.709-.965 1.062-1.508 1.062-.546 0-1.09-.405-1.634-1.218-.356-.561-.534-.987-.534-1.28v-15.01h-4.304zm15.632 11.4c.227.978.721 1.762 1.486 2.355.764.592 1.683.888 2.756.888.91 0 1.993-.312 3.253-.935.579-.292 1.115-.436 1.611-.436.66 0 .992.3.992.904 0 .541-.12 1.06-.357 1.558-.237.5-.542.863-.913 1.091a8.914 8.914 0 0 1-2.34 1.013 9.501 9.501 0 0 1-2.554.36 7.373 7.373 0 0 1-4.073-1.186 8.341 8.341 0 0 1-2.867-3.055 8.2 8.2 0 0 1-1.022-3.99c0-1.58.372-3.008 1.116-4.287.743-1.278 1.713-2.265 2.912-2.962a7.687 7.687 0 0 1 3.934-1.045c1.383 0 2.627.328 3.731.982 1.105.656 1.957 1.523 2.557 2.605.598 1.08.898 2.265.898 3.552 0 .666-.171 1.264-.512 1.794-.34.53-.718.795-1.13.795h-9.478zm17.387 6.11c-.95 0-1.773-.368-2.468-1.1-.697-.731-1.045-1.594-1.045-2.583V12.934c0-.453.321-.886.966-1.3a3.771 3.771 0 0 1 2.072-.618c.782 0 1.172.35 1.172 1.052v15.967c0 .269.057.492.174.666.116.175.322.325.617.449.337.144.507.433.507.866 0 .763-.212 1.46-.633 2.089-.423.63-.876.944-1.362.944zm6.421-17.904c-.56 0-1.143-.424-1.746-1.275-.41-.6-.614-1.066-.614-1.399 0-.517.366-1.005 1.099-1.46a4.401 4.401 0 0 1 2.362-.684c.905 0 1.358.394 1.358 1.181 0 .621-.125 1.218-.372 1.787-.248.57-.56 1.021-.938 1.352-.378.332-.76.498-1.149.498zm11.853 18.592c-1.515 0-2.889-.381-4.119-1.142a8.058 8.058 0 0 1-2.872-2.998c-.684-1.236-1.026-2.584-1.026-4.043 0-1.565.39-2.991 1.168-4.281.778-1.29 1.788-2.29 3.03-2.998a7.951 7.951 0 0 1 4.007-1.063c1.221 0 2.41.34 3.567 1.016.736-.486 1.472-.729 2.21-.729.777 0 1.166.36 1.166 1.078v11.829c0 .57-.11 1.12-.33 1.65-.222.528-.495.941-.821 1.237-.327.296-.647.444-.963.444-.484 0-1.01-.403-1.577-1.206a4.31 4.31 0 0 1-.442-.887 3.947 3.947 0 0 1-.68 1.204c-.283.34-.582.56-.899.666a4.45 4.45 0 0 1-1.419.223zM22.231 36.03c-7.014 2.842-11.03 1.936-13.248.164l-.032-.025C12.385 39.593 16.299 42 19.733 42c6.012 0 14.242-7.29 18.136-18.59-2.196 4.081-6.904 9.093-15.638 12.621zm66.195-2.982c-.496 0-1.034-.394-1.617-1.181-.345-.54-.517-.943-.517-1.212V19.062c0-.455.328-.89.986-1.306a3.905 3.905 0 0 1 2.119-.62c.797 0 1.196.352 1.196 1.056v11.593a4.01 4.01 0 0 1-.34 1.617c-.226.518-.506.922-.84 1.212-.334.29-.663.435-.987.435zM22.87 20.572c9.87-4.71 16.745-11.41 15.546-15.851-1.968-3.363-5.95-4.643-10.22-4.643C15.535.078 0 8.33 0 18.86c0 1.353.3 2.866.843 4.452 2.887 3.789 11.713 2.178 22.026-2.74zm4.706 10.878c5.472-3.16 9.386-7.124 11.192-11.348a41.11 41.11 0 0 0 1.167-9.765c0-.482-.023-.943-.066-1.386-.32 5.108-6.954 11.53-15.729 15.727-10.587 5.062-18.53 6.425-22.073 2.564 1.23 2.42 2.879 4.86 4.753 7.05 4.359 3.857 11.545 2.475 20.756-2.842zm72.987-1.645c.947 0 1.831-.265 2.652-.793v-7.2c-.78-.443-1.653-.666-2.62-.666-1.199 0-2.205.407-3.013 1.221-.81.814-1.216 1.835-1.216 3.06 0 1.228.406 2.264 1.216 3.108.808.847 1.802 1.27 2.98 1.27zm-32.103-9.162c-.993 0-1.84.287-2.54.857-.703.572-1.136 1.336-1.301 2.292h7.31a3.127 3.127 0 0 0-1.054-2.245c-.66-.603-1.466-.904-2.415-.904z"}))}function _(e){return m.a.createElement("svg",Object.assign({},e,{id:"people",viewBox:"0 0 700 700",width:"100%",height:"100%"}),m.a.createElement("title",null,"people"),m.a.createElement("path",{fill:"none",d:"M0 0h700v700H0z"}),m.a.createElement("path",{d:"M597.72 416a76.7 76.7 0 1 0-93-121.8 169.93 169.93 0 0 0-31.4-9.81 66.63 66.63 0 1 0-98-26 97.79 97.79 0 0 1 65.48 131.08c17.84-.06 32.74-.44 45.22-1A77.11 77.11 0 0 0 510.35 416a192.76 192.76 0 0 0-38.44 12.3 101 101 0 0 1 18.57 20.33c16.6 24.29 17.72 50.36 18.26 62.89a37.23 37.23 0 0 1-8.22 24.48c14.86.61 32.49 1 53.52 1 81.85 0 112.27-5.52 127.38-9.48 6-1.55 10.5-8.91 10.22-15.08-1.23-28.87-6.36-77.34-93.92-96.44zM228.08 428.27A193.36 193.36 0 0 0 189.66 416 77.24 77.24 0 0 0 214 388.45c9.8.45 21.08.78 34.11.93q5.36.06 11.11.08a97.58 97.58 0 0 1-5.88-51.88 98.14 98.14 0 0 1 71.39-79.19 66.65 66.65 0 1 0-117.43 5.18 67 67 0 0 0 19.38 20.8 170.76 170.76 0 0 0-31.4 9.8 76.71 76.71 0 1 0-93 121.81C14.71 435.1 9.6 483.57 8.35 512.43c-.26 6.16 4.27 13.57 10.25 15.08 15.1 4 45.52 9.48 127.38 9.48 21 0 38.66-.36 53.5-1a37.24 37.24 0 0 1-8.23-24.5c.08-2 .18-4.32.36-6.95.86-12.71 3.47-32 14.7-50.92q1.51-2.52 3.21-5a101.24 101.24 0 0 1 18.56-20.35z"}),m.a.createElement("path",{d:"M452 439.55c-13.5-9.55-32.26-17.88-58.3-23.55a77.15 77.15 0 0 0 23.85-26.62 76.74 76.74 0 1 0-135.08 0A77.12 77.12 0 0 0 306.31 416c-26.05 5.69-44.81 14-58.33 23.57a82.47 82.47 0 0 0-22.43 23.17c-8.86 14-11.59 28.51-12.63 40.85-.26 3.1-.42 6.06-.54 8.84-.26 6.17 4.27 13.52 10.25 15.1a199 199 0 0 0 25.28 4.73h.09c19.79 2.59 50.87 4.75 102 4.75s82.22-2.17 102-4.76h.05a199.38 199.38 0 0 0 25.31-4.73c6-1.58 10.5-8.92 10.24-15.1-.86-20.26-3.6-50.22-35.6-72.87z"}))}function N(e){return m.a.createElement("svg",Object.assign({},e,{id:"phone",viewBox:"0 0 24 24",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M23.45 20.959a1.81 1.81 0 0 0 0-2.553l-3.52-3.517a1.817 1.817 0 0 0-2.557 0l-1.343 1.34-.128.128a1.817 1.817 0 0 1-2.557 0l-5.75-5.74a1.81 1.81 0 0 1 0-2.553l.128-.128 1.343-1.34a1.81 1.81 0 0 0 0-2.553L5.542.526a1.817 1.817 0 0 0-2.557 0l-.66.668c-4.322 4.313-2.417 9.769 4.047 16.218l.174.165c6.46 6.45 11.926 8.355 16.246 4.042l.657-.66",fillRule:"evenodd"}))}function O(e){return m.a.createElement("svg",Object.assign({},e,{id:"map-marker",viewBox:"0 0 18 24",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M0 8.842A8.839 8.839 0 0 1 8.842 0a8.838 8.838 0 0 1 8.838 8.842C17.68 15.368 8.842 24 8.842 24S0 15.368 0 8.842zM8.842 4.42a4.422 4.422 0 0 0 0 8.842 4.422 4.422 0 0 0 0-8.842z",fillRule:"evenodd"}))}function w(e){return m.a.createElement("svg",Object.assign({},e,{id:"question",viewBox:"0 0 48 48",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M26.668 26.613c-1.013 1.485-.675 3.56-3.471 3.56-1.823 0-2.714-1.483-2.714-2.839 0-5.041 7.417-6.183 7.417-10.338 0-2.285-1.528-3.641-4.066-3.641-5.422 0-3.305 5.59-7.417 5.59-1.479 0-2.752-.888-2.752-2.583 0-4.152 4.747-7.837 9.912-7.837 5.424 0 10.759 2.497 10.759 8.47 0 5.512-6.312 7.628-7.668 9.618m-3.3 13.261A3.492 3.492 0 0 1 19.89 36.4c0-1.906 1.57-3.472 3.476-3.472a3.49 3.49 0 0 1 3.475 3.472 3.492 3.492 0 0 1-3.475 3.475m16.19-31.43c-8.594-8.592-22.522-8.592-31.114 0-8.59 8.591-8.59 22.519 0 31.112 8.592 8.592 22.52 8.592 31.114 0 8.591-8.593 8.591-22.52 0-31.113"}))}function j(e){return m.a.createElement("svg",Object.assign({},e,{id:"search",viewBox:"0 0 24 25",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M23.333 23.36a2.175 2.175 0 0 1-3.08 0l-3.347-3.35a10.855 10.855 0 0 1-6.008 1.806 10.867 10.867 0 0 1-7.704-3.194c-4.25-4.26-4.25-11.168.004-15.428A10.86 10.86 0 0 1 10.902 0c2.785 0 5.575 1.066 7.703 3.194 3.723 3.733 4.183 9.496 1.382 13.73l3.346 3.35a2.183 2.183 0 0 1 0 3.086zM10.902 2.727c-2.181 0-4.235.852-5.777 2.397-3.182 3.19-3.182 8.381 0 11.568a8.115 8.115 0 0 0 5.777 2.397c2.18 0 4.234-.852 5.777-2.397 3.185-3.19 3.185-8.382 0-11.568a8.121 8.121 0 0 0-5.777-2.397z",fillRule:"evenodd"}))}function k(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 48 48",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm0 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm0-26a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm13 12.976a5 5 0 1 1-10 .048 5 5 0 0 1 10-.048zm0 13a5 5 0 1 1-10 .048 5 5 0 0 1 10-.048zm0-26a5 5 0 1 1-10 .048 5 5 0 0 1 10-.048zM16 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm0 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm0-26a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"}))}function y(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 700 700",width:"100%",height:"100%"}),m.a.createElement("title",null,"shopping"),m.a.createElement("path",{fill:"none",d:"M0 0h700v700H0z"}),m.a.createElement("path",{d:"M277.52 232.93H367l-10.47-95.09a20.22 20.22 0 0 0-20.1-18h-52v-7.54a83.28 83.28 0 1 0-166.56 0v7.54H62.22a20.22 20.22 0 0 0-20.1 18L13.65 396.38a64.87 64.87 0 0 0 64.47 72h156.07l2.22-20.22 2.22-20.22 19.49-177a20.23 20.23 0 0 1 19.4-18.01zM158.29 112.29a42.84 42.84 0 1 1 85.68 0v7.54h-85.68v-7.54z"}),m.a.createElement("path",{d:"M686.35 599l-33.9-307.67a20.21 20.21 0 0 0-20.1-18h-63.5v-11.44q0-4.43-.41-8.76a91.86 91.86 0 0 0-4.2-20.22 93.34 93.34 0 0 0-177.45 0 91.86 91.86 0 0 0-4.2 20.22q-.41 4.32-.41 8.76v11.46h-67.72a20.22 20.22 0 0 0-20.1 18l-15 136.54-2.22 20.22-2.22 20.22L260.47 599a64.86 64.86 0 0 0 64.46 72h296.95a64.88 64.88 0 0 0 64.47-72zM475.51 209a52.89 52.89 0 0 1 52.9 52.9v11.46H422.62v-11.47a53.19 53.19 0 0 1 .73-8.76 52.52 52.52 0 0 1 7.94-20.22A52.88 52.88 0 0 1 475.51 209z"}))}function z(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 24 32",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M17.229 0H2.085C.94 0 0 .94 0 2.085v27.83C0 31.065.94 32 2.085 32h19.48a2.09 2.09 0 0 0 2.086-2.085V6.46L17.229 0zM5.568 27.482a1.045 1.045 0 1 1-2.09 0V25.95a1.045 1.045 0 1 1 2.09 0v1.532zm0-5.186a1.045 1.045 0 1 1-2.09 0v-1.532a1.045 1.045 0 1 1 2.09 0v1.532zm0-5.182a1.045 1.045 0 1 1-2.09 0v-1.531a1.045 1.045 0 1 1 2.09 0v1.531zM10 28.527H8.173a1.045 1.045 0 1 1 0-2.09H10a1.045 1.045 0 1 1 0 2.09zm0-11.9H8.173a1.045 1.045 0 1 1 0-2.09H10a1.045 1.045 0 1 1 0 2.09zm5.478 11.9H13.65a1.045 1.045 0 1 1 0-2.09h1.828a1.045 1.045 0 1 1 0 2.09zm0-11.9H13.65a1.045 1.045 0 1 1 0-2.09h1.828a1.045 1.045 0 1 1 0 2.09zm4.7 10.855a1.045 1.045 0 1 1-2.09 0V25.95a1.045 1.045 0 1 1 2.09 0v1.532zm0-5.186a1.045 1.045 0 1 1-2.09 0v-1.532a1.045 1.045 0 1 1 2.09 0v1.532zm0-5.182a1.045 1.045 0 1 1-2.09 0v-1.531a1.045 1.045 0 1 1 2.09 0v1.531z",fillRule:"evenodd"}))}function x(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 700 700",width:"100%",height:"100%"}),m.a.createElement("path",{fill:"none",d:"M0 0h700v700H0z"}),m.a.createElement("path",{d:"M614.37 10.33H258a36.8 36.8 0 0 0-36.81 36.81v121h58.33V66h313.33v428.58H362.51V600.9h251.86a36.8 36.8 0 0 0 36.81-36.81V47.14a36.8 36.8 0 0 0-36.81-36.81zM458.45 564.09a29.47 29.47 0 1 1 7.2-19.3 29.38 29.38 0 0 1-7.2 19.3z"}),m.a.createElement("path",{d:"M315.82 168.14H95.52a46.7 46.7 0 0 0-46.7 46.7V643a46.7 46.7 0 0 0 46.7 46.7h220.3a46.7 46.7 0 0 0 46.7-46.7V214.84a46.7 46.7 0 0 0-46.7-46.7zm-110.16 464.1a22.51 22.51 0 1 1 22.51-22.51 22.5 22.5 0 0 1-22.51 22.51zM239.55 264a17.52 17.52 0 0 1-9.62 2.87H181.4a17.51 17.51 0 0 1 0-35h48.53a17.52 17.52 0 0 1 9.62 32.13z"}))}function M(e){return m.a.createElement("img",Object.assign({alt:"liiga"},e,{src:"/img/liiga-logo.png"}))}function I(e){var a=e.className,t=void 0===a?"":a,n=e.addClass,r=void 0===n?"":n,c=i(e,["className","addClass"]),l=h()(t,r);return m.a.createElement("svg",Object.assign({className:l},c,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"user",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}),m.a.createElement("path",{fill:"currentColor",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}))}function H(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 700 700",width:"100%",height:"100%"}),m.a.createElement("title",null,"video-v2"),m.a.createElement("path",{fill:"none",d:"M0 0h700v700H0z"}),m.a.createElement("path",{d:"M618.48 95.67H81.53A70 70 0 0 0 11.6 165.6v368.8a70 70 0 0 0 69.94 69.93h536.94a70 70 0 0 0 69.92-69.93V165.6a70 70 0 0 0-69.92-69.93zM81.53 136.55h536.95a29.07 29.07 0 0 1 29 29v10h-595v-10a29.08 29.08 0 0 1 29.05-29zm367 226.65L306 445.47a15.26 15.26 0 0 1-22.89-13.22V267.73A15.26 15.26 0 0 1 306 254.52l142.48 82.27a15.26 15.26 0 0 1 .01 26.42zm170 200.24h-537a29.08 29.08 0 0 1-29.05-29v-10h595v10a29.08 29.08 0 0 1-29 29.01z"}))}t(44);var L=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={open:!0},t.onClick=function(){t.setState(function(e){return{open:!e.open}})},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"isControlled",value:function(){return void 0!==this.props.open}},{key:"render",value:function(){var e=this.props,a=e.open,t=e.onChange,n=e.className,r=void 0===n?"burger":n,c=e.addClass,l=i(e,["open","onChange","className","addClass"]),s=this.isControlled()?a:this.state.open,o=this.isControlled()?function(){return t(s)}:this.onClick,u=s?"burger-stack active ":"burger-stack",d=h()(r,c);return m.a.createElement("div",Object.assign({},l,{onClick:o,className:d}),m.a.createElement("div",{style:{backgroundColor:this.props.backgroundcolor||"",width:this.props.width||"",height:this.props.height||""},className:u}))}}]),a}(o.Component);L.defaultProps={onChange:function(){},addClass:"",backgroundcolor:"#b246ea"};var A=L;t(46);function S(e){var a=e.className,t=void 0===a?"":a,n=e.addClass,r=void 0===n?"":n,c=e.number,l=i(e,["className","addClass","number"]),s=h()(t,r);return m.a.createElement("div",{className:"cart"},m.a.createElement("svg",Object.assign({className:s},l,{"aria-hidden":"true",focusable:"false","data-prefix":"fas",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}),m.a.createElement("path",{fill:"currentColor",d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"})),m.a.createElement("span",{className:"cart-number"},void 0===c?0:c))}function B(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 32 26",width:"100%",height:"100%"}),m.a.createElement("path",{d:"M15.52 19.204c-1.62 0-2.93 1.391-2.93 3.11 0 1.72 1.31 3.112 2.93 3.112 1.618 0 2.928-1.392 2.928-3.111 0-1.713-1.31-3.111-2.929-3.111zm0-9.628c-3.066 0-6.15 1.247-8.486 3.734-.877.932-.877 2.448 0 3.387a2.168 2.168 0 0 0 3.189 0c1.47-1.556 3.374-2.33 5.302-2.33 1.922 0 3.826.774 5.297 2.33a2.163 2.163 0 0 0 3.188 0c.878-.932.884-2.448 0-3.387-2.342-2.487-5.426-3.741-8.49-3.734zm14.856-3.04C26.278 2.187 20.89 0 15.526 0 10.148 0 4.76 2.186.662 6.537c-.878.932-.878 2.448 0 3.386a2.168 2.168 0 0 0 3.188 0c3.226-3.426 7.441-5.132 11.674-5.138 4.227 0 8.436 1.706 11.668 5.138a2.163 2.163 0 0 0 3.189 0c.871-.932.871-2.448-.006-3.386z",fillRule:"evenodd"}))}var V=function(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 700 700",width:"100%",height:"100%"}),m.a.createElement("title",null,"email"),m.a.createElement("path",{fill:"none",d:"M0 0h700v700H0z"}),m.a.createElement("path",{d:"M102.18 102.08L319.07 319a43.74 43.74 0 0 0 61.85 0l113.23-113.27-.53-.53 51.55-51.56.53.53 52.1-52.09H102.18z"}),m.a.createElement("path",{d:"M596.71 205.16l-51.57 51.56L411.87 390a87.49 87.49 0 0 1-123.73 0l-267-267a43.19 43.19 0 0 0-6.59 22.74V554.2a43.84 43.84 0 0 0 43.75 43.72h583.4a43.84 43.84 0 0 0 43.72-43.72V145.8a43.24 43.24 0 0 0-6.6-22.8z"}))};var P=function(e){return m.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 48 48",width:"100%",height:"100%"}),m.a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}),m.a.createElement("path",{d:"M24.42 29.916c1.749-3.96 1.769-7.654 1.769-7.809 0-.838-.688-1.517-1.537-1.517-.85 0-1.538.68-1.538 1.517 0 .032-.017 3.21-1.514 6.596-1.95 4.417-5.415 7.002-10.297 7.685a1.52 1.52 0 0 0-1.306 1.716 1.531 1.531 0 0 0 1.738 1.29c5.925-.83 10.312-4.107 12.684-9.478m14.697 6.312c-4.003 0-4.88-1.418-4.998-1.656-.1-.688-.656-1.142-1.365-1.207-.728-.066-1.382.462-1.598 1.147-.01.03-1.023 3.152-4.289 5.373-.699.475-.875 1.42-.393 2.11.298.427.779.657 1.267.657.3 0 .605-.087.871-.268a14.833 14.833 0 0 0 4.38-4.641c1.175.817 3.074 1.52 6.125 1.52.85 0 1.537-.68 1.537-1.518s-.688-1.517-1.537-1.517m.615-5.421c-1.048 0-1.757-.178-2.108-.527-.724-.721-.704-2.837-.681-5.287.008-.871.017-1.859-.004-2.901-.14-7.01-5.307-12.097-12.286-12.097-6.775 0-12.288 5.44-12.288 12.127l.008.145c.001.015.106 1.572-.826 2.584-.62.674-1.633 1.016-3.008 1.016-.85 0-1.538.68-1.538 1.517 0 .838.688 1.517 1.538 1.517 2.278 0 4.056-.676 5.284-2.01 1.715-1.862 1.656-4.277 1.618-4.827.03-4.987 4.151-9.034 9.212-9.034 5.317 0 9.105 3.751 9.212 9.122.02.998.011 1.92.003 2.813-.03 3.258-.054 5.831 1.571 7.45.963.96 2.368 1.427 4.293 1.427.85 0 1.538-.68 1.538-1.518s-.689-1.517-1.538-1.517m-7.91-8.685c0-3.901-3.217-7.076-7.17-7.076s-7.169 3.175-7.169 7.076c0 4.696-3.302 8.493-7.853 9.028-.843.1-1.445.854-1.345 1.686a1.53 1.53 0 0 0 1.709 1.328 11.876 11.876 0 0 0 7.575-3.98c1.928-2.207 2.99-5.07 2.99-8.062 0-2.228 1.836-4.04 4.094-4.04 2.257 0 4.093 1.812 4.093 4.04 0 3.815-1.268 7.886-3.48 11.168-2.67 3.961-6.596 6.629-11.355 7.714a1.517 1.517 0 0 0-1.152 1.82 1.534 1.534 0 0 0 1.844 1.137c5.538-1.263 10.111-4.372 13.223-8.99 2.54-3.768 3.995-8.451 3.995-12.849m10.18 0c0 3.012-.063 4.819-.066 4.895a1.528 1.528 0 0 1-1.591 1.462 1.526 1.526 0 0 1-1.482-1.57c0-.018.064-1.834.064-4.787 0-7.636-6.536-14.087-14.273-14.087-3.84 0-7.482 1.47-10.259 4.14-2.785 2.677-4.318 6.21-4.318 9.947 0 .838-.688 1.517-1.537 1.517-.85 0-1.538-.679-1.538-1.517 0-4.563 1.863-8.868 5.247-12.12A17.815 17.815 0 0 1 24.652 5c4.61 0 8.969 1.814 12.272 5.11C40.198 13.372 42 17.64 42 22.121"}))},F=t(6),R=m.a.memo(function(e){var a=e.language,t=i(e,["language"]);return m.a.createElement("form",t,m.a.createElement(v,{addClass:h()("btn--green","color-white-1")},a.button3," \u276f"))});t(48);var T=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={username:"",password:"",checkbox:!1},t.onChange=function(e){var a="checkbox"===e.target.type?e.target.checked:e.target.value,n=e.target.name;t.setState(function(){return function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}({},n,a)})},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.checkbox,r=this.props,c=r.className,l=void 0===c?"username-form box-shadow-3":c,s=r.addClass,o=r.language,u=i(r,["className","addClass","language"]),d=h()(l,s);return m.a.createElement("form",Object.assign({},u,{className:d}),m.a.createElement("div",{className:"username-form__control"},m.a.createElement("div",{className:"username-form__group"},m.a.createElement("input",{value:a,onChange:this.onChange,id:"username",name:"username",className:"username-form__input",type:"text"}),m.a.createElement("label",{className:"username-form__label username-form__label--custom",htmlFor:"username"},o.inputPlaceholder2)),m.a.createElement("div",{className:"username-form__group"},m.a.createElement("input",{value:t,id:"password",onChange:this.onChange,name:"password",className:"username-form__input",type:"password"}),m.a.createElement("label",{className:"username-form__label username-form__label--custom",htmlFor:"password"},o.inputPlaceholder3))),m.a.createElement("div",{className:"username-form__control"},m.a.createElement(v,{addClass:h()("btn--green","color-white-1")},o.button1," \u276f")),m.a.createElement("div",{className:"username-form__control"},m.a.createElement("div",{className:"username-form__group"},m.a.createElement("label",{className:"username-form__label__checkbox",htmlFor:"remember"},o.checkbox0,m.a.createElement("input",{checked:n,id:"remember",name:"checkbox",onChange:this.onChange,className:"username-form__checkbox",type:"checkbox"}),m.a.createElement("span",{className:"username-form__checkbox__mark"}))),m.a.createElement("a",{className:"username-form__link",href:"/"},o.link0)))}}]),a}(o.PureComponent),q=(t(50),function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=void 0===a?"mobile-form box-shadow-3":a,n=e.addClass,r=void 0===n?"":n,c=e.language,l=i(e,["className","addClass","language"]),s=h()(t,r);return m.a.createElement("form",Object.assign({className:s},l),m.a.createElement("input",{placeholder:c.inputPlaceholder1,className:"mobile-form__input"}),m.a.createElement(v,{addClass:h()("btn--green","color-white-1")},c.button1," \u276f"))}}]),a}(o.PureComponent)),J=(t(52),m.a.memo(function(e){var a=e.children,t=e.addClass,n=void 0===t?"":t,r=e.showSlide,c=void 0===r?0:r;return m.a.createElement("div",{className:"slider "+n},m.a.createElement("div",{style:{marginLeft:"-".concat(100*c,"%")},className:"slides"},m.a.Children.map(a,function(e){return m.a.createElement("div",{className:"slide "+n},e)})))})),D=(t(54),function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.addClass,n=void 0===t?"":t,r=e.children,c=i(e,["className","addClass","children"]);return void 0===a?a="nav "+n:a+=" "+n,m.a.createElement("nav",Object.assign({},c,{className:a}),r)}}]),a}(o.Component));D.List=function(e){var a=e.className,t=e.addClass,n=void 0===t?"":t,r=e.children,c=i(e,["className","addClass","children"]);return void 0===a?a="nav-list "+n:a+=" "+n,m.a.createElement("ul",Object.assign({},c,{className:a}),r)},D.Item=function(e){var a=e.className,t=e.addClass,n=void 0===t?"":t,r=e.children,c=i(e,["className","addClass","children"]);return void 0===a?a="nav-item "+n:a+=" "+n,m.a.createElement("li",Object.assign({},c,{className:a}),r)},D.Link=function(e){var a=e.className,t=e.addClass,n=void 0===t?"":t,r=e.href,c=void 0===r?"":r,l=e.children,s=i(e,["className","addClass","href","children"]);return void 0===a?a="nav-link "+n:a+=" "+n,m.a.createElement("a",Object.assign({href:c},s,{className:a}),l)};t(56);var G=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={activeItem:0},t.onLoginTabClick=function(e){t.setState(function(a){return a.activeItem===e?null:{activeItem:e}})},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.className,n=void 0===t?"login-form box-shadow-1":t,r=a.addClass,c=void 0===r?"":r,l=(a.onCloseClick,a.language),s=i(a,["className","addClass","onCloseClick","language"]),o=l.login,u=[o.nav0,o.nav1,o.nav2],d=[o.listItem0,o.listItem1,o.listItem2,o.listItem3,o.listItem4,o.listItem5],v=[[V,o.navFooter1],[_,o.navFooter2],[P,o.navFooter3]],g=this.state.activeItem,b=h()(n,c),E=[q,T,R];return m.a.createElement("div",Object.assign({},s,{className:b}),m.a.createElement(f,{addClass:"login-form__outer-container"},m.a.createElement("h1",{className:"login-form__heading color-gray-1"},o.heading0),m.a.createElement(D,{addClass:"color-gray-1"},m.a.createElement(D.List,{addClass:"login-form__list"},u.map(function(a,t){return m.a.createElement(D.Item,{onClick:function(){return e.onLoginTabClick(t)},key:t,addClass:"login-form__item"},a)}),m.a.createElement("div",{className:h()("login-form__item__underbar","login-form__item__underbar--active--".concat(g))})))),m.a.createElement("div",{className:"login-form__body"},m.a.createElement(f,{addClass:"login-form__container"},m.a.createElement("div",{className:"login-form__container__left"},m.a.createElement(J,{addClass:"login-form__slider",showSlide:g},E.map(function(e,a){return m.a.createElement(e,{language:o,key:a})}))),m.a.createElement("div",null),m.a.createElement("div",{className:"login-form__container__right"},m.a.createElement("h3",null,o.listHeading),m.a.createElement("ul",null,d.map(function(e,a){return m.a.createElement("li",{key:a},e)})))),m.a.createElement(f,{style:{backgroundColor:"white"}},m.a.createElement(D,null,m.a.createElement(D.List,{addClass:"login-form__footer"},v.map(function(e,a){var t=p(e,2),n=t[0],r=t[1];return m.a.createElement(D.Item,{addClass:"login-form__footer__item",key:a},m.a.createElement(n,null),r)}))))))}}]),a}(o.PureComponent),U=Object(F.b)(G,function(e){return{language:e.language}}),W=(t(58),["FI","SV","EN"]),X=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.showLanguage,t=void 0===a||a,n=e.activeItem,r=void 0===n?null:n,c=e.onItemClick,l=void 0===c?function(){}:c,s=e.updateLanguage,o=void 0===s?function(){}:s,u=e.language,d=i(e,["showLanguage","activeItem","onItemClick","updateLanguage","language"]),v=u.navbar,g=[[A,v.item0],[I,v.item1],[S,""]];return m.a.createElement(D,d,m.a.createElement(D.List,null,m.a.createElement(C,{className:"navbar__brand"})),m.a.createElement("span",{className:h()("navbar__span",{"navbar__span navbar__span--show":t})},m.a.createElement("ul",null,W.map(function(e,a){return m.a.createElement("li",{onClick:function(){return o(e.toLowerCase())},key:a},e)}))),m.a.createElement(D.List,{addClass:"right"},g.map(function(e,a){var t=p(e,2),n=t[0],c=t[1];return m.a.createElement(D.Item,{key:a,addClass:h()("navbar__item",{"navbar__item navbar__item--active":r===a}),onClick:function(){return l(a)}},m.a.createElement(n,{open:0===r,addClass:"navbar__icon"}),m.a.createElement("span",{className:"navbar__item__text"},c))})))}}]),a}(o.Component);t(60);function K(e){var a=e.placeHolder;return m.a.createElement("div",{className:"searchbox"},m.a.createElement("div",{className:"searchbox-contain"},m.a.createElement("input",{placeholder:a,className:"searchbox-input"}),m.a.createElement("span",{className:"searchbox-button"},m.a.createElement(j,{className:"searchbox-icon"}))))}t(62);var Q=m.a.memo(function(e){var a=e.className,t=void 0===a?"menu":a,n=e.addClass,r=void 0===n?"":n,c=e.language,l=(e.onCloseClick,i(e,["className","addClass","language","onCloseClick"])),s=c.menu,o=[[O,s.nav0],[w,s.nav1],[_,s.nav2],[N,s.nav3]],u=[[x,s.item0],[z,s.item1],[B,s.item2],[E,s.item3],[H,s.item4],[k,s.item5],[y,s.item6],[M,s.item7]],d=h()(t,r);return m.a.createElement("div",Object.assign({},l,{className:d}),m.a.createElement("div",{className:"box-shadow-1"},m.a.createElement(f,{addClass:"menu__container"},m.a.createElement(D,{addClass:"menu__nav"},m.a.createElement(D.List,{addClass:"menu__list"},o.map(function(e,a){var t=p(e,2),n=t[0],r=t[1];return m.a.createElement(D.Item,{key:a,className:"menu__item"},m.a.createElement(n,{className:"menu__icon"})," ",r)})),m.a.createElement("div",{className:"menu__left"},m.a.createElement(K,{placeHolder:s.searchbox})))),m.a.createElement("div",{style:{backgroundColor:"white"}},m.a.createElement(f,{addClass:"menu__content"},u.map(function(e,a){var t=p(e,2),n=t[0],r=t[1];return m.a.createElement("div",{key:a,className:"menu__content__item"},m.a.createElement(n,{className:"menu__content__icon"}),r)})))))}),Y=(t(64),[{Comp:Q,id:0,animation:"drop"},{Comp:U,id:1,animation:"drop"},{Comp:g,id:2,animation:"slide-right"}]),Z=m.a.memo(function(e){e.addClass;var a=e.onClick,t=i(e,["addClass","onClick"]);return m.a.createElement("div",Object.assign({},t,{onClick:a,className:"navbar__background"}))}),$=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={activeItem:null},t.onItemClick=function(e){t.setState(function(a){return e===a.activeItem?{activeItem:null}:{activeItem:e}})},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"renderContent",value:function(e,a,t){var n=this;if(e[a]){var r=e[a],c=r.Comp,l=r.id,s=r.animation;return[m.a.createElement(u.CSSTransition,{timeout:300,key:l,classNames:s},m.a.createElement(c,{language:t,style:{transition:"300ms all ease"},onCloseClick:2===l?function(){return n.onItemClick(null)}:void 0})),m.a.createElement(u.CSSTransition,{timeout:1e3,key:10,classNames:"fade"},m.a.createElement(Z,{onClick:function(){return n.onItemClick(null)}}))]}return null}},{key:"render",value:function(){var e=this,a=this.state.activeItem,t=this.props,n=t.language,r=t.updateLanguage;return console.log("Render"),m.a.createElement(m.a.Fragment,null,m.a.createElement(b,{config:{threshold:1}},function(t){var c=t.entry;return m.a.createElement(f,{addClass:h()("navbar__container--fixed","box-shadow-1")},m.a.createElement(X,{language:n,updateLanguage:r,activeItem:a,onItemClick:e.onItemClick,showLanguage:1===c.intersectionRatio}))}),m.a.createElement(u.TransitionGroup,null,this.renderContent(Y,a,n)))}}]),a}(o.PureComponent);a.default=Object(F.b)($,function(e){return{language:e.language,updateLanguage:e.updateLanguage}})}}]);
//# sourceMappingURL=2.c2fad4b2.chunk.js.map