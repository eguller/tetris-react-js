(this["webpackJsonptetris-react-js"]=this["webpackJsonptetris-react-js"]||[]).push([[0],{1:function(t,e,n){t.exports={content:"Game_content__2Np0v",header:"Game_header__3blVf",matrix:"Game_matrix__1FwpS",controls:"Game_controls__sGFqi",controlsNext:"Game_controlsNext__sQewC",controlsScore:"Game_controlsScore__11eOJ",controlsLevel:"Game_controlsLevel__2nv5M",controlsButtons:"Game_controlsButtons__10Co-",controlsInfo:"Game_controlsInfo__2H7J3",btn:"Game_btn__3vWIp",btnNew:"Game_btnNew__3pc04",btnPause:"Game_btnPause__2USDv",gameOver:"Game_gameOver__3lpfO"}},10:function(t,e,n){t.exports={matrix:"Next_matrix__1dz8V",row:"Next_row__2NyQl"}},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),c=n(9),i=n.n(c),a=(n(16),n(3)),s=n(10),u=n.n(s),l={RED:1,BLUE:2,YELLOW:3,GREEN:4},f=l,v=n(8),m=n.n(v),j=n(0),d=function(t){var e=Object(r.useState)(t.tetromino),n=Object(a.a)(e,2),o=n[0],c=n[1];return Object(r.useEffect)((function(){c(t.tetromino)}),[t.tetromino]),Object(j.jsx)("div",{className:"".concat(m.a.tetromino," ").concat(h(o,m.a))})},h=function(t,e){var n=e.empty;return null==t?n:t.isFilled()?f.BLUE===t.color?e.blue:f.RED===t.color?e.red:f.GREEN===t.color?e.green:f.YELLOW===t.color?e.yellow:e.empty:e.empty},b=function(t,e){return null==t?null:t.map((function(e,n){return function(t,e,n){var r=t.map((function(t,n){return Object(j.jsx)(d,{tetromino:t},"".concat(e,"-").concat(n))}));return Object(j.jsx)("div",{className:n.row,children:r},e)}(e,n,t)}))},x=function(t){var e=Object(r.useState)(t.next),n=Object(a.a)(e,2),o=n[0],c=n[1];Object(r.useEffect)((function(){c(t.next)}),[t.next]);var i=null===o||void 0===o?void 0:o.tetrominos(),s=i?b(i):"";return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{class:"title",children:Object(j.jsx)("span",{children:"Next"})}),Object(j.jsx)("div",{className:u.a.matrix,children:s})]})},O=function(t){var e=Object(r.useState)(t.score),n=Object(a.a)(e,2),o=n[0],c=n[1];return Object(r.useEffect)((function(){c(t.score)}),[t.score]),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{class:"title",children:"Score"}),Object(j.jsx)("p",{class:"gameText",children:o})]})},p=function(t){var e=Object(r.useState)(t.level),n=Object(a.a)(e,2),o=n[0],c=n[1];return Object(r.useEffect)((function(){c(t.level)}),[t.level]),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{class:"title",children:"Level"}),Object(j.jsx)("p",{class:"gameText",children:o})]})},_=n(1),w=n.n(_),g=n(4),y=0,N=1,C=2,S=function(t,e){var n=null==t?y:t;return{isEmpty:function(){return n===y||n===C},isShadow:function(){return n===C},isFilled:function(){return n===N},color:e,state:n}},G=function t(e){var n=e.x,r=void 0===n?0:n,o=e.y,c=void 0===o?0:o,i=e.color,a=void 0===i?function(){var t=Math.floor(Math.random()*Object.keys(l).length);return l[Object.keys(l)[t]]}():i,s=e.state,u=r,f=c,v=a,m=s,j=m[0].length,d=m.length,h=function(){for(var t=[],e=0;e<d;e++)for(var n=0;n<j;n++)1===m[e][n]&&t.push({x:n+u,y:e+f});return t};return{rotate:function(e){for(var n=[],r=0;r<j;r++){n.push([]);for(var o=0;o<d;o++)n[r].push(m[d-o-1][r])}var c=t({x:u,y:f,color:v,state:n}),i=Math.min.apply(Math,Object(g.a)(c.matrixCoordinates().map((function(t){return t.x})))),a=Math.max.apply(Math,Object(g.a)(c.matrixCoordinates().map((function(t){return t.x})))),s=u,l=f;return i<0&&(s=u+Math.abs(i)),a>=e.width-1&&(s=u-(a-(e.width-1))),t({x:s,y:l,color:v,state:n})},move:function(e,n){return t(e)},moveLeft:function(){var e=u-1,n=f;return Math.min.apply(Math,Object(g.a)(h().map((function(t){return t.x}))))<=0&&(e=u),t({x:e,y:n,color:v,state:m})},moveRight:function(e){var n=u+1,r=f;return Math.max.apply(Math,Object(g.a)(h().map((function(t){return t.x}))))>=e.width-1&&(n=u),t({x:n,y:r,color:v,state:m})},moveDown:function(e){var n=t({x:u,y:f+1,color:a,state:s});return n.matrixCoordinates().every((function(t){return t.y<e.height&&!e.isFilled(t)}))?n:t({x:u,y:f,color:a,state:s})},x:u,y:f,isOnSamePosition:function(t){return u===t.x&&f===t.y},matrixCoordinates:h,color:v,tetrominos:function(){return function(t,e){for(var n=[],r=0;r<t.length;r++){for(var o=[],c=0;c<t[0].length;c++){var i=S();1===t[r][c]&&(i=S(N,e)),o.push(i)}n.push(o)}return n}(m,v)}}},L=function(){var t=G({state:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]}),e=G({state:[[1,1],[1,1]]}),n=G({state:[[1,1,0],[0,1,1],[0,0,0]]}),r=G({state:[[0,1,1],[1,1,0],[0,0,0]]}),o=G({state:[[1,0,0],[1,1,1],[0,0,0]]}),c=G({state:[[0,0,1],[1,1,1],[0,0,0]]}),i=G({state:[[1,1,1],[0,1,0],[0,0,0]]}),a=(G({state:[[1,0,1],[0,1,0],[1,0,1]]}),[t,e,n,r,o,c,i]),s=a[Math.floor(Math.random()*a.length)];return s},R=function(){return G({state:[[0,0,0],[0,0,0],[0,0,0]]})},E=function(t){var e,n=t.tetris,o=Object(r.useState)(t.tetris.state),c=Object(a.a)(o,2),i=c[0],s=c[1],u=function(t){s(t)};Object(r.useEffect)((function(){n.onStateChange(u)}),[n]),i.isStarted()&&(e=i.isRunning()?Object(j.jsx)("button",{onClick:n.pause,className:"".concat(w.a.btn," ").concat(w.a.btnPause),children:"Pause"}):Object(j.jsx)("button",{onClick:n.resume,className:"".concat(w.a.btn," ").concat(w.a.btnNew),children:"Resume"}));var l=b(i.visibleMatrix(),w.a),f=i.nextPiece(),v=f||R(),m=i.isGameOver()?Object(j.jsx)("div",{className:w.a.gameOver,children:Object(j.jsx)("p",{children:"Game Over"})}):"";return Object(j.jsxs)("div",{className:w.a.content,children:[Object(j.jsx)("div",{className:w.a.header,children:Object(j.jsx)("span",{children:"React Tetris"})}),Object(j.jsxs)("div",{className:w.a.matrix,children:[l,m]}),Object(j.jsxs)("div",{className:w.a.controls,children:[Object(j.jsx)("div",{className:w.a.controlsNext,children:Object(j.jsx)(x,{next:v})}),Object(j.jsx)("div",{className:w.a.controlsScore,children:Object(j.jsx)(O,{score:i.score()})}),Object(j.jsx)("div",{className:w.a.controlsLevel,children:Object(j.jsx)(p,{level:i.level()})}),Object(j.jsxs)("div",{className:w.a.controlsButtons,children:[Object(j.jsx)("div",{className:w.a.row,children:Object(j.jsx)("button",{onClick:n.start,className:"".concat(w.a.btn," ").concat(w.a.btnNew),children:"New Game"})}),Object(j.jsx)("div",{className:w.a.row,children:e})]}),Object(j.jsx)("div",{className:w.a.controlsInfo,children:Object(j.jsxs)("p",{class:"infoText",children:["Start/Pause/Resume: Space ",Object(j.jsx)("br",{}),"Rotate: Arrow Up ",Object(j.jsx)("br",{}),"Left: Arrow Left ",Object(j.jsx)("br",{}),"Right: Arrow Right ",Object(j.jsx)("br",{}),"Soft Drop: Arrow Down ",Object(j.jsx)("br",{})]})})]})]})},P=n(11),M=function(t,e){var n=t,r=e,o=!1,c=!1,i=!1,a=1,s=0,u=null,l=null,f=0,v=null,m=function(t,e){for(var n=[],r=0;r<t;r++){n[r]=[];for(var o=0;o<e;o++)n[r][o]=S()}return n},j=m(t,e),d=Object(g.a)(j),h=function(t){return j[t.y][t.x].isFilled()},b=function(t,e,n){return t+Math.pow(e,2)*n},x=function(t){var e=t.map((function(t){return t.slice()}));return null!=l&&l.matrixCoordinates().forEach((function(t){var n=S(N,l.color);e[t.y][t.x]=n})),e},O=function(t){return t.matrixCoordinates().some((function(t){return j[t.y][t.x].isFilled()}))},p=function(){c=!1,o=!1,i=!0},_=function(t){t.matrixCoordinates().forEach((function(e){j[e.y][e.x]=S(N,t.color)}))},w=function(t){if(null!=l){var e=t();null==e||O(e)||(l=e,d=x(j))}},y=function(){for(var n=0,r=t-1;r>=0;){if(j[r].every((function(t){return t.isEmpty()})))break;if(j[r].every((function(t){return t.isFilled()}))){j.splice(r,1);for(var o=[],c=0;c<e;c++)o.push(S());j.unshift(o),n++}else r--}return n},C=function(t){v&&v(t)};return{isRunning:function(){return c&&!o},isStarted:function(){return c},isPaused:function(){return o},start:function(){o=!1,c=!0,i=!1,a=1,s=0,j=m(n,r),l=L(),u=L(),d=x(j)},pause:function(){o=!0},resume:function(){o=!1},level:function(){return a},score:function(){return s},isFilled:h,isGameOver:function(){return i},moveCurrentPieceDown:function(){if(null!=l)if(O(l))p();else{var e=l.moveDown({isFilled:h,height:t});e.isOnSamePosition(l)?(_(e),l=u,u=L()):l=e;var n=y();(f+=n)>2&&(a++,f=0,C(a)),s=b(s,n,a),d=x(j)}},visibleMatrix:function(){return d},rotateCurrentPiece:function(){w((function(){return l.rotate({width:r})}))},moveLeft:function(){w((function(){return l.moveLeft()}))},moveRight:function(){w((function(){return l.moveRight({width:r})}))},nextPiece:function(){return u},onLevelChange:function(t){v=t}}},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{height:20,width:10},e=t.height,n=t.width,r=e,o=n,c=M(r,o),i=null,a=[];c.onLevelChange((function(t){return s(i,l(t))}));var s=function(t,e){return null!=t&&clearInterval(t),setInterval(f,e)},u=function(t){null!=t&&clearInterval(t)},l=function(t){return 900*Math.pow(.9,t-1)},f=function(){c.isRunning()&&(c.moveCurrentPieceDown(),c.isGameOver()&&u(i),v())},v=function(){a.forEach((function(t){return t(Object(P.a)({},c))}))},m=function(){c.resume(),v(),i=s(i,l(c.level()))},j=function(){c.isStarted()||(c.start(),v(),i=s(i,l(c.level())))},d=function(){c.isPaused()||(null!=i&&clearInterval(i),c.pause(),u(i),v())},h=function(){return c.isPaused()},b=function(){c.moveLeft(),v()},x=function(){c.moveRight(),v()},O=function(){c.rotateCurrentPiece(),v()};return{onStateChange:function(t){a.push(t)},isGameOver:function(){return c.gameOver},isRunning:function(){return c.isRunning()},isStarted:function(){return c.isStarted()},state:c,rotateCurrentPiece:O,moveLeft:b,moveRight:x,start:j,pause:d,isPaused:h,resume:m,tick:f,height:r,width:o}}();k.start(),document.addEventListener("keydown",(function(t){var e=t.key;k.isRunning()?"ArrowUp"===e?k.rotateCurrentPiece():"ArrowDown"===e?k.tick():"ArrowLeft"===e?k.moveLeft():"ArrowRight"===e?k.moveRight():" "===e&&k.pause():" "===e&&(k.isPaused()?k.resume():k.start())})),i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(E,{tetris:k})}),document.getElementById("root"))},8:function(t,e,n){t.exports={tetromino:"Cell_tetromino__VpulX",empty:"Cell_empty__1v9KP",red:"Cell_red__2T5b9",green:"Cell_green__1LJp3",blue:"Cell_blue__388TG",yellow:"Cell_yellow__3jpWg"}}},[[18,1,2]]]);
//# sourceMappingURL=main.671d02e5.chunk.js.map