(this["webpackJsonpemotion-trash-can-2021"]=this["webpackJsonpemotion-trash-can-2021"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(16),r=a.n(n),c=(a(22),a(4)),i=a(5),o=a(2),l=(a(23),a(24),a(0)),u=function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h4",{className:"home__message",children:"\ub9ce\uc774 \ud798\ub4e4\uc5c8\uc9c0?"}),Object(l.jsx)("h4",{className:"home__message2",children:"\uc18d \uc369\uc774\ub358 \uac10\uc815 \uc5ec\uae30\uc5d0 \ub450\uace0 \uac00."}),Object(l.jsx)(i.b,{to:"/1",children:Object(l.jsx)("button",{className:"home__button",children:"\uc2dc\uc791\ud558\uae30"})})]})},j=(a(34),function(){var e=Object(s.useRef)(),t=Object(s.useState)(""),a=Object(c.a)(t,2),n=a[0],r=a[1],i=function(e){r(e.target.value)};return Object(s.useEffect)((function(){var t=e.current;return t&&t.addEventListener("keyup",i),function(){t&&t.removeEventListener("keyup",i)}}),[]),[e,n]}),b=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=Object(s.useRef)(),a=Object(s.useState)(0),n=Object(c.a)(a,2),r=n[0],i=n[1],o=Object(s.useState)(""),l=Object(c.a)(o,2),u=l[0],j=l[1],b=function(t){var a=t.target.value;if(i(a.length),j(a),a.length>e)return t.target.value=a.substring(0,e),i(e),alert("".concat(e,"\uc790\ub97c \ucd08\uacfc\ud558\uc600\uc2b5\ub2c8\ub2e4.")),-1};return Object(s.useEffect)((function(){var e=t.current;return e&&e.addEventListener("keyup",b),function(){e&&e.removeEventListener("keyup",b)}}),[]),{textarea:t,textcount:r,text:u}}(500),a=t.textarea,n=t.textcount,r=t.text,o=j(),u=Object(c.a)(o,2),b=u[0],f=u[1],m=j(),d=Object(c.a)(m,2),p=d[0],h=d[1];return Object(l.jsxs)("div",{className:"paper",children:[Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("img",{className:"note__image",src:"https://emotion-trash-can-2021-side.s3.ap-northeast-2.amazonaws.com/assets/paper.jpg",alt:""}),Object(l.jsx)("input",{ref:b,className:"note__to",placeholder:"...\uc5d0\uac8c(\ud544\uc218)"}),Object(l.jsx)("textarea",{ref:a,className:"note__textarea",placeholder:"\uac10\uc815\uc744 \ud45c\ucd9c\ud558\uc138\uc694.(\ud544\uc218)"}),Object(l.jsx)("input",{ref:p,className:"note__from",placeholder:"...\ub85c\ubd80\ud130(\ud544\uc218)"}),Object(l.jsxs)("span",{className:"note__textcount",children:["(",n," / ",500,")"]})]}),Object(l.jsxs)("div",{className:"move-button",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("button",{className:"move-button__previous",children:"prev"})}),Object(l.jsx)(i.b,{to:{pathname:"/2",state:{dataTo:f,dataFrom:h,text:r}},children:Object(l.jsx)("button",{className:"move-button__next",children:"next"})})]})]})},f=a(15),m=(a(35),function(e){var t=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useState)([]),n=Object(c.a)(a,2),r=n[0],i=n[1],o=function(e){e.preventDefault();var t=[];if(e.dataTransfer.items){if(e.dataTransfer.items.length>3)return alert("\uc774\ubbf8\uc9c0 \ud30c\uc77c \ucca8\ubd80\ub294 \ucd5c\ub300 3\uc7a5\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4."),-1;Array.prototype.forEach.call(e.dataTransfer.items,(function(e){if("image"!==e.type.split("/")[0])return alert("\uc774\ubbf8\uc9c0 \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."),-1;var a=e.getAsFile();t.push({fileName:a.name,fileUrl:URL.createObjectURL(a)})}))}else{if(e.dataTransfer.files.length>3)return alert("\uc774\ubbf8\uc9c0 \ud30c\uc77c \ucca8\ubd80\ub294 \ucd5c\ub300 3\uc7a5\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4."),-1;Array.prototype.forEach.call(e.dataTransfer.files,(function(e){if("image"===e.type.split("/")[0])return alert("\uc774\ubbf8\uc9c0 \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."),-1;t.push({fileName:e.name,fileUrl:URL.createObjectURL(e)})}))}i(t)},l=function(e){e.preventDefault()};Object(s.useEffect)((function(){var t=e.current;return t&&(t.addEventListener("drop",o),t.addEventListener("dragover",l)),function(){t&&(t.removeEventListener("drop",o),t.removeEventListener("dragover",l))}}),[]);var u=function(e){var t=[];return e.target.files?e.target.files.length>3?(alert("\uc774\ubbf8\uc9c0 \ud30c\uc77c \ucca8\ubd80\ub294 \ucd5c\ub300 3\uc7a5\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4."),-1):(Array.prototype.forEach.call(e.target.files,(function(e){t.push({fileName:e.name,fileUrl:URL.createObjectURL(e)})})),void i(t)):-1};return Object(s.useEffect)((function(){var e=t.current;return e&&e.addEventListener("change",u),function(){e&&e.removeEventListener("change",u)}}),[]),{dragdropElement:e,inputFileElement:t,files:r}}(),a=t.dragdropElement,n=t.inputFileElement,r=t.files,o=Object(s.useState)(e.location.state),u=Object(c.a)(o,1)[0];return u?""===u.dataTo||""===u.dataFrom||""===u.text?(alert("3\uac00\uc9c0 \ud56d\ubaa9 \ubaa8\ub450 \uc791\uc131\ud574\uc8fc\uc138\uc694."),e.history.push("/1"),-1):Object(l.jsxs)("div",{className:"paperimage",children:[Object(l.jsx)("h4",{className:"paperimage__message",children:"\uc9c0\uc6b0\uace0 \uc2f6\uc740 \uc0ac\uc9c4\uc774 \uc788\ub098\uc694?"}),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("label",{htmlFor:"input-type",ref:a,className:"dropbox",children:[Object(l.jsx)("input",{ref:n,id:"input-type",type:"file",accept:"image/*",multiple:!0}),0!==r.length?Object(l.jsx)("div",{className:"dropbox__images",children:r.map((function(e,t){return Object(l.jsx)("img",{title:e.fileName,src:e.fileUrl,alt:e.fileName},t)}))}):Object(l.jsxs)("p",{children:["\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ub123\uc5b4\uc8fc\uc138\uc694.",Object(l.jsx)("br",{}),"(\ub4dc\ub798\uadf8\ub4dc\ub86d or \ud074\ub9ad)",Object(l.jsx)("br",{}),"(\ucd5c\ub300 3\uc7a5)",Object(l.jsx)("br",{}),"(\ud544\uc218 \uc544\ub2d8)"]})]}),Object(l.jsxs)("div",{className:"move-button",children:[Object(l.jsx)(i.b,{to:"/1",children:Object(l.jsx)("button",{className:"move-button__previous",children:"prev"})}),Object(l.jsx)(i.b,{to:{pathname:"/3",state:Object(f.a)(Object(f.a)({},u),{},{files:r})},children:Object(l.jsx)("button",{className:"move-button__next",children:"next"})})]})]})]}):(alert("\ud648\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),e.history.push("/"),-1)}),d=(a(36),function(e){var t=Object(s.useState)(e.location.state),a=Object(c.a)(t,1)[0],n=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=function(t){e.current.muted?(e.current.muted=!1,t.target.classList.replace("fa-volume-mute","fa-volume-up")):(e.current.muted=!0,t.target.classList.replace("fa-volume-up","fa-volume-mute"))};return Object(s.useEffect)((function(){var e=t.current;return e&&e.addEventListener("click",a),function(){e&&e.removeEventListener("click",a)}}),[]),[e,t]}(),r=Object(c.a)(n,2),o=r[0],u=r[1];return Object(s.useEffect)((function(){return window.addEventListener("beforeunload",(function(){return e.history.push("/"),-1})),function(){window.removeEventListener("beforeunload",(function(){return e.history.push("/"),-1}))}}),[]),void 0===a?(alert("\ud648\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),e.history.push("/"),-1):Object(l.jsxs)("div",{className:"readpaper",children:[Object(l.jsx)("div",{className:"readpaper__content",children:Object(l.jsxs)("p",{className:"readpaper__text",children:[a.dataTo," \uc5d0\uac8c..",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),a.text,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),a.dataFrom," (\uc73c)\ub85c\ubd80\ud130.."]})}),Object(l.jsxs)("div",{className:"readpaper__icon",children:[Object(l.jsx)("audio",{ref:o,src:"https://emotion-trash-can-2021-side.s3.ap-northeast-2.amazonaws.com/assets/starlight-island.wav",autoPlay:!0,loop:!0}),Object(l.jsx)("i",{ref:u,className:"fas fa-volume-up"}),Object(l.jsx)(i.b,{to:{pathname:"/4",state:{files:a.files}},children:Object(l.jsx)("i",{className:"fas fa-burn"})})]})]})}),p=(a(37),function(){var e=function(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){var t=e.current;t&&setTimeout((function(){t.classList.add("display-none")}),700)}),[]),e}();return Object(l.jsx)("div",{ref:e,className:"loading",children:Object(l.jsx)("div",{className:"loading__circle"})})}),h=(a(38),function(e){var t=e.files;return Object(l.jsx)("div",{className:"imagebox",children:t.map((function(e,t){return Object(l.jsx)("img",{className:"imagebox__image",src:e.fileUrl,alt:e.fileName,title:e.fileName},t)}))})}),O=(a(39),function(e){var t=Object(s.useState)(e.location.state),a=Object(c.a)(t,1)[0];return Object(s.useEffect)((function(){return window.addEventListener("beforeunload",(function(){return e.history.push("/"),-1})),function(){window.removeEventListener("beforeunload",(function(){return e.history.push("/"),-1}))}}),[]),a?Object(l.jsxs)("div",{className:"fireimage",children:[a.files?Object(l.jsx)(h,{files:a.files}):null,Object(l.jsx)("audio",{src:"https://emotion-trash-can-2021-side.s3.ap-northeast-2.amazonaws.com/assets/fire.mp3",autoPlay:!0,loop:!0}),Object(l.jsx)("div",{className:"flame"}),Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("i",{class:"fas fa-home"})})]}):(alert("\ud648\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),e.history.push("/"),-1)}),v=["https://emotion-trash-can-2021-side.s3.ap-northeast-2.amazonaws.com/assets/sky1.jpg","https://emotion-trash-can-2021-side.s3.ap-northeast-2.amazonaws.com/assets/sky2.jpg","https://emotion-trash-can-2021-side.s3.ap-northeast-2.amazonaws.com/assets/sky3.jpg","https://emotion-trash-can-2021-side.s3.ap-northeast-2.amazonaws.com/assets/sky4.jpg"];var x=function(){var e=Object(s.useState)(!0),t=Object(c.a)(e,2),a=t[0],n=t[1];setTimeout((function(){n(!1)}),700);var r,j=(r=v)[Math.floor(Math.random()*r.length)];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{}),Object(l.jsx)("img",{className:"background-image",src:j,alt:""}),a?null:Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(o.a,{path:"/1",component:b}),Object(l.jsx)(o.a,{path:"/2",component:m}),Object(l.jsx)(o.a,{path:"/3",component:d}),Object(l.jsx)(o.a,{path:"/4",component:O})]})})]})};r.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d971b3f5.chunk.js.map