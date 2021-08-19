System.register("chunks:///_virtual/Rubik.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Cube.ts"],(function(o){"use strict";var r,s,i,e,p,n;return{setters:[function(o){r=o.createClass},function(o){s=o.cclegacy,i=o._decorator},function(o){e=o.CUBE_COLOR_POSITION,p=o.CUBE_COLOR_TYPE,n=o.Cube_Info}],execute:function(){var u,l,a;s._RF.push({},"32043HDAidPTokQ7vY7WWdf","Rubik",void 0);var t=i.ccclass;i.property,o("default",t("Rubik")((a=l=function(){function o(){this.rubikCubeInfo=[],this.saveRubikInfoName="Rubik_N_CubeInfo",this.rubikColorType=[],this.NORMAL_RUBIK_3X3=[{arrColorType:[5,0,2,0,1,0],isInFormula:!1,posi:0,posj:0,posk:0},{arrColorType:[0,0,2,0,1,0],isInFormula:!1,posi:0,posj:0,posk:1},{arrColorType:[0,6,2,0,1,0],isInFormula:!1,posi:0,posj:0,posk:2},{arrColorType:[5,0,2,0,0,0],isInFormula:!1,posi:0,posj:1,posk:0},{arrColorType:[0,0,2,0,0,0],isInFormula:!1,posi:0,posj:1,posk:1},{arrColorType:[0,6,2,0,0,0],isInFormula:!1,posi:0,posj:1,posk:2},{arrColorType:[5,0,2,0,0,3],isInFormula:!1,posi:0,posj:2,posk:0},{arrColorType:[0,0,2,0,0,3],isInFormula:!1,posi:0,posj:2,posk:1},{arrColorType:[0,6,2,0,0,3],isInFormula:!1,posi:0,posj:2,posk:2},{arrColorType:[5,0,0,0,1,0],isInFormula:!1,posi:1,posj:0,posk:0},{arrColorType:[0,0,0,0,1,0],isInFormula:!1,posi:1,posj:0,posk:1},{arrColorType:[0,6,0,0,1,0],isInFormula:!1,posi:1,posj:0,posk:2},{arrColorType:[5,0,0,0,0,0],isInFormula:!1,posi:1,posj:1,posk:0},{arrColorType:[0,6,0,0,0,0],isInFormula:!1,posi:1,posj:1,posk:2},{arrColorType:[5,0,0,0,0,3],isInFormula:!1,posi:1,posj:2,posk:0},{arrColorType:[0,0,0,0,0,3],isInFormula:!1,posi:1,posj:2,posk:1},{arrColorType:[0,6,0,0,0,3],isInFormula:!1,posi:1,posj:2,posk:2},{arrColorType:[5,0,0,4,1,0],isInFormula:!1,posi:2,posj:0,posk:0},{arrColorType:[0,0,0,4,1,0],isInFormula:!1,posi:2,posj:0,posk:1},{arrColorType:[0,6,0,4,1,0],isInFormula:!1,posi:2,posj:0,posk:2},{arrColorType:[5,0,0,4,0,0],isInFormula:!1,posi:2,posj:1,posk:0},{arrColorType:[0,0,0,4,0,0],isInFormula:!1,posi:2,posj:1,posk:1},{arrColorType:[0,6,0,4,0,0],isInFormula:!1,posi:2,posj:1,posk:2},{arrColorType:[5,0,0,4,0,3],isInFormula:!1,posi:2,posj:2,posk:0},{arrColorType:[0,0,0,4,0,3],isInFormula:!1,posi:2,posj:2,posk:1},{arrColorType:[0,6,0,4,0,3],isInFormula:!1,posi:2,posj:2,posk:2}]}var s=o.prototype;return s.Clone=function(o){for(var r=new Array(o.length),s=0;s<o.length;s++){var i=new n;i.posi=o[s].posi,i.posj=o[s].posj,i.posk=o[s].posk,i.arrColorType=[o[s].arrColorType[0],o[s].arrColorType[1],o[s].arrColorType[2],o[s].arrColorType[3],o[s].arrColorType[4],o[s].arrColorType[5]],i.isInFormula=o[s].isInFormula,r[s]=i}return r},s.GetArrayCubeInfo=function(){return this.rubikCubeInfo},s.SetArrayCubeInfo=function(o){this.rubikCubeInfo=o},s.SetDefault3x3Cube=function(){this.rubikCubeInfo=this.Clone(this.NORMAL_RUBIK_3X3)},s.SaveCurrentCubies=function(){cc.sys.localStorage.setItem(this.saveRubikInfoName,JSON.stringify(this.rubikCubeInfo))},s.LoadCubies=function(){var o=cc.sys.localStorage.getItem(this.saveRubikInfoName);o&&o.length>0?this.rubikCubeInfo=JSON.parse(o):this.SetDefault3x3Cube()},s.CheckCubiesSolve=function(){var o=(3+Math.sqrt(9+4*(this.rubikCubeInfo.length-8)))/4,r=o*o*o;this.rubikColorType.length!=r&&(this.rubikColorType=new Array(r));for(var s=0;s<this.rubikCubeInfo.length;s++){var i=this.rubikCubeInfo[s].posi*o*o+this.rubikCubeInfo[s].posj*o+this.rubikCubeInfo[s].posk;this.rubikColorType[i]=this.rubikCubeInfo[s].arrColorType}return 0!=this.CheckMatchedFloor(3)&&(console.log("matched floor3"),0!=this.CheckMatchedFloor(2)&&(console.log("matched floor2"),this.CheckMatchedFloor(1)&&console.log("matched floor1"),this.rubikColorType[0][0]==this.rubikColorType[o*o][0]&&this.rubikColorType[0][0]==this.rubikColorType[2*o*o][0]&&(console.log("----rubik solve---"),!0)))},s.CheckMatchedFloor=function(o){var r=(3+Math.sqrt(9+4*(this.rubikCubeInfo.length-8)))/4,s=(o-1)*r*r,i=o*r*r,n=this.rubikColorType[s],u=this.rubikColorType[i-1];if(n[e.COLOR_DOWN]!=u[e.COLOR_DOWN])return!1;if(n[e.COLOR_UP]!=u[e.COLOR_UP])return!1;for(var l=1;l<r*r-1;l++){var a=this.rubikColorType[l+s];if(a&&6==a.length)for(var t=0;t<6;t++)if(a[t]!=p.COLOR_NONE)if(n[t]!=p.COLOR_NONE){if(a[t]!=n[t])return!1}else if(u[t]!=p.COLOR_NONE&&a[t]!=u[t])return!1}return!0},r(o,null,[{key:"instance",get:function(){return null==o._instance&&(o._instance=new o),o._instance}}]),o}(),l._instance=null,u=a))||u);s._RF.pop()}}}));

System.register("chunks:///_virtual/camera-controller.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,r,n,i,a,s,l,h,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,s=t.Vec3,l=t.Vec2,h=t.Quat,u=t.Component}],execute:function(){var c,p,m,f,C;i._RF.push({},"362e5llnR1MRr4gkiI6PYdB","camera-controller",void 0);var y=a.ccclass,v=a.property;t("CameraController",(c=y("CameraController"),p=v({type:cc.Node}),c((C=e((f=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,r(e,"camera3d",C,n(e)),e.inputController=null,e.rotateController=null,e.posDefault=new s,e.isChangePos=!1,e.minMove=new l(8,8),e.maxMove=new l(30,30),e.defaultCameraQuat=h.IDENTITY,e}o(e,t);var i=e.prototype;return i.start=function(){this.inputController=this.node.getComponent("InputController"),this.rotateController=this.camera3d.getComponent("RotateController"),this.posDefault=this.node.getPosition()},i.update=function(t){if(this.inputController)if(this.isChangePos&&this.inputController.IsTouchEnd())this.node.setPosition(this.posDefault),this.isChangePos=!1;else if(this.inputController.IsDoubleTouch())this.camera3d.setRotation(this.defaultCameraQuat);else if(this.inputController.IsTouchMove()){var e=this.inputController.GetMoveVector();if(Math.abs(e.x)>this.minMove.x||Math.abs(e.y)>this.minMove.y){var o=Math.min(e.x,this.maxMove.x);e.x<0&&(o=Math.max(e.x,-this.maxMove.x));var r=Math.min(e.y,this.maxMove.y);e.y<0&&(r=Math.max(e.y,-this.maxMove.y));var n=new s(this.posDefault.x+o,this.posDefault.y+r,this.posDefault.z);this.node.setPosition(n),this.isChangePos=!0;var i=new l(0,0);Math.abs(e.x)>Math.abs(e.y)?e.x<0?i.y=1:i.y=-1:e.y>0?i.x=1:i.x=-1,this.rotateController.RotateAround(new s(i.x,i.y,0),1)}}},e}(u)).prototype,"camera3d",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=f))||m));i._RF.pop()}}}));

System.register("chunks:///_virtual/cube-manager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./rotate-controller.ts","./global.ts","./game-controller.ts","./Cube.ts","./Rubik.ts"],(function(e){"use strict";var t,i,n,a,o,r,s,u,c,l,b,R,h,C,p,f,O,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.createClass,a=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,u=e.Node,c=e.Vec3,l=e.Component},function(e){b=e.ROTATE_TYPE},function(e){R=e.default},function(e){h=e.default},function(e){C=e.CUBE_COLOR_TYPE,p=e.CUBE_COLOR_POSITION,f=e.CUBE_COLOR,O=e.Cube_Info},function(e){d=e.default}],execute:function(){var g,k,y,z,S,_,v,L,N,D,E,m,G;r._RF.push({},"81a37Uk86FMxb/QhON3/b3W","cube-manager",void 0);var I=s.ccclass,P=s.property;e("default",(g=I("CubeManager"),k=P({type:cc.Integer}),y=P(),z=P({type:cc.Node}),S=P(u),g((G=m=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,a(t,"RubikSize",L,o(t)),a(t,"DisplaySize",N,o(t)),a(t,"textRotate",D,o(t)),a(t,"canvasNode",E,o(t)),t.isGenerate=!1,t.rotateController=null,t.rotateInput=null,t.isAnyCubeRotating=!1,t}i(t,e);var r=t.prototype;return r.onLoad=function(){t.__instacne=this.node.getComponent("CubeManager")},r.start=function(){this.rotateController=this.node.getComponent("RotateController"),this.canvasNode&&(this.rotateInput=this.canvasNode.getComponent("ApInput"))},r.update=function(e){if(R.instance.IsLoadres()&&0==this.isGenerate&&(d.instance.LoadCubies(),this.LoadRubik(d.instance.GetArrayCubeInfo()),this.isGenerate=!0),this.isGenerate&&(this.UpdateCubiesStatus(),this.rotateInput&&0==this.isAnyCubeRotating)){var t=this.rotateInput.PopRotate();t!=b.NONE&&this.RotateCube(t)}},r.GetRubikSize=function(){return this.RubikSize},r.LoadRubik=function(e){var t=(3+Math.sqrt(9+4*(e.length-8)))/4;this.RubikSize=t;for(var i=1*t/2,n=0,a=0,o=0,r=0;r<e.length;r++){var s=e[r];n=.5-i+1*s.posk,a=i-.5-1*s.posi,o=i-.5-1*s.posj;var u=cc.instantiate(R.instance.GetPrefab("cube"));u.setPosition(0,0,0),u.name="cube"+(s.posi*t*t+s.posj*t+s.posk),this.node.addChild(u),u.getComponent("Cube").InitCubeInfo(s,new c(n,a,o))}var l=this.DisplaySize/t;this.node.setScale(l,l,l)},r.GenerateRubik=function(){var e=1*this.RubikSize/2,t=0,i=0,n=0;i=e-.5;for(var a=4*this.RubikSize*this.RubikSize-6*this.RubikSize+8,o=new Array(a),r=0,s=0;s<this.RubikSize;s++){this.RubikSize,this.RubikSize;s>0&&s<=this.RubikSize-2&&2*this.RubikSize+2*this.RubikSize-2,n=e-.5;for(var u=0;u<this.RubikSize;u++){t=.5-e;for(var l=0;l<this.RubikSize;l++){var b=new O;b.posi=s,b.posj=u,b.posk=l,b.arrColorType=[C.COLOR_NONE,C.COLOR_NONE,C.COLOR_NONE,C.COLOR_NONE,C.COLOR_NONE,C.COLOR_NONE];var h,f,g,k,y,z;if(h=0==l,f=l==this.RubikSize-1,g=0==s,k=s==this.RubikSize-1,y=0==u,z=u==this.RubikSize-1,h&&(b.arrColorType[p.COLOR_LEFT]=C.COLOR_5),f&&(b.arrColorType[p.COLOR_RIGHT]=C.COLOR_6),g&&(b.arrColorType[p.COLOR_UP]=C.COLOR_2),k&&(b.arrColorType[p.COLOR_DOWN]=C.COLOR_4),y&&(b.arrColorType[p.COLOR_FRONT]=C.COLOR_1),z&&(b.arrColorType[p.COLOR_BACK]=C.COLOR_3),h||f||g||k||y||z){var S=cc.instantiate(R.instance.GetPrefab("cube"));S.setPosition(0,0,0),S.name="cube"+(b.posi*this.RubikSize*this.RubikSize+b.posj*this.RubikSize+b.posk),this.node.addChild(S),o[r]=b,r++,S.getComponent("Cube").InitCubeInfo(b,new c(t,i,n))}t+=1}n-=1}i-=1}var _=this.DisplaySize/this.RubikSize;this.node.setScale(_,_,_),d.instance.SetArrayCubeInfo(o)},r.GetPrefabColor=function(e){switch(h.instance.currentRubikColor[e]){case f.YELLOW:return R.instance.GetPrefab("cubey");case f.ORANGE:return R.instance.GetPrefab("cubeo");case f.BLUE:return R.instance.GetPrefab("cubeb");case f.RED:return R.instance.GetPrefab("cuber");case f.GREEN:return R.instance.GetPrefab("cubeg");case f.WHILE:return R.instance.GetPrefab("cubew")}return R.instance.GetPrefab("cuben")},r.RotateCube=function(e){switch(e){case b.x:case b.xa:case b.y:case b.ya:case b.z:case b.za:for(var t=0;t<this.node.children.length;t++){var i=this.node.children[t].getComponent("Cube");e==b.x?(i.DoRotate(b.la),i.DoRotate(b.R)):e==b.y?(i.DoRotate(b.u),i.DoRotate(b.Da)):e==b.ya?(i.DoRotate(b.ua),i.DoRotate(b.D)):e==b.xa?(i.DoRotate(b.l),i.DoRotate(b.Ra)):e==b.z?(i.DoRotate(b.f),i.DoRotate(b.Ba)):e==b.za&&(i.DoRotate(b.fa),i.DoRotate(b.B))}break;default:for(var n=0;n<this.node.children.length;n++){this.node.children[n].getComponent("Cube").DoRotate(e)}}var a=d.instance.CheckCubiesSolve();if(this.textRotate){var o=this.textRotate.getComponent("cc.RichText");o&&(o.string.length>22&&(o.string=""),o.string+=" "+e,a&&(o.string="rubik solved"))}},r.UpdateCubiesStatus=function(){var e=this;this.isAnyCubeRotating=!1,this.node.children.forEach((function(t){t.getComponent("RotateController").IsRotating()&&(e.isAnyCubeRotating=!0)}))},n(t,null,[{key:"instance",get:function(){return t.__instacne}}]),t}(l),m.__instacne=null,L=t((v=G).prototype,"RubikSize",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),N=t(v.prototype,"DisplaySize",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),D=t(v.prototype,"textRotate",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(v.prototype,"canvasNode",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=v))||_));r._RF.pop()}}}));

System.register("chunks:///_virtual/global.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,i;return{setters:[function(t){n=t.createClass},function(t){e=t.cclegacy,i=t._decorator}],execute:function(){var r,a,c;e._RF.push({},"bc7f75Yp7RA7ovPd6ScLeAz","global",void 0);var s=i.ccclass;i.property,t("default",s("Global")((c=a=function(){function t(){this.initialized=!1,this.prefabs={}}var e=t.prototype;return e.Init=function(){var t=this;this.initialized||cc.resources.loadDir("Prefabs",(function(n,e){e&&e.forEach((function(n){t.prefabs[n.data._name.toLowerCase()]=n})),t.initialized=!0}))},e.IsLoadres=function(){return this.initialized},e.GetPrefab=function(t){return this.prefabs[t]},n(t,null,[{key:"instance",get:function(){return null==t._instance&&(t._instance=new t),t._instance}}]),t}(),a._instance=null,r=c))||r);e._RF.pop()}}}));

System.register("chunks:///_virtual/input-controller.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./game-controller.ts"],(function(t){"use strict";var o,e,i,h,n,c,s;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,i=t._decorator,h=t.Vec2,n=t.Vec3,c=t.Component},function(t){s=t.default}],execute:function(){var u;e._RF.push({},"dfe8fhSsftEu5rjOUoMW3fv","input-controller",void 0);var r=i.ccclass;i.property,t("InputController",r("InputController")(u=function(t){function e(){for(var o,e=arguments.length,i=new Array(e),c=0;c<e;c++)i[c]=arguments[c];return(o=t.call.apply(t,[this].concat(i))||this).posTouchStart=new h,o.posTouchMove=new h,o.posTouchEnd=new h,o.isTouchMove=!1,o.isTouchEnd=!0,o.isTouchStart=!1,o.timeDoubleTap=.35,o.touchSize=new cc.Size,o.canvasSize=new cc.Size,o.canvasAnchor=new h,o.nodePosition=new n,o.timePreTouchStart=0,o.timeCurrentTouchStart=0,o.arrayDeltaTimeTouch=[],o.indextDeltaTimeTouch=-1,o}o(e,t);var i=e.prototype;return i.start=function(){var t=cc.find("Canvas");this.canvasSize=t.getContentSize(),this.canvasAnchor=t.getAnchorPoint(),this.touchSize=this.node.getContentSize(),this.touchSize.width*=this.node.getScale().x,this.touchSize.height*=this.node.getScale().y,console.log("node size: "+this.touchSize+" canvas size: "+this.canvasSize),this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this)},i.update=function(t){},i.SetTouchSize=function(t){this.touchSize=t},i.onTouchStart=function(t){var o=this.GetRealPosTouch(t.getLocation());this.IsOutTouchArea(o)||(this.timePreTouchStart=this.timeCurrentTouchStart,this.timeCurrentTouchStart=s.instance.GetCurrentTime(),this.isTouchStart=!0,this.isTouchEnd=!1,this.posTouchStart=o)},i.onTouchEnd=function(t){var o=this.GetRealPosTouch(t.getLocation());this.isTouchMove=!1,this.isTouchEnd=!0,this.isTouchStart=!1,this.IsOutTouchArea(o)||(this.posTouchEnd=o,this.indextDeltaTimeTouch=-1)},i.onTouchMove=function(t){var o=this.GetRealPosTouch(t.getLocation());this.IsOutTouchArea(o)?(this.isTouchEnd=!0,this.isTouchMove=!1):(this.posTouchMove=o,this.isTouchEnd=!1,this.isTouchMove=!0)},i.IsTouchStart=function(){return this.isTouchStart},i.IsTouchEnd=function(){return this.isTouchEnd},i.IsTouchMove=function(){return this.isTouchMove},i.GetMoveVector=function(){var t=new h(0,0);return(this.isTouchMove||this.isTouchEnd)&&(t.x=this.posTouchMove.x-this.posTouchStart.x,t.y=this.posTouchMove.y-this.posTouchStart.y),t},i.IsOutTouchArea=function(t){this.node.worldPosition;return t.x<-this.touchSize.width/2||t.x>this.touchSize.width/2||(t.y<-this.touchSize.height/2||t.y>this.touchSize.height/2)},i.GetRealPosTouch=function(t){var o=new h(t.x,t.y);return.5==this.canvasAnchor.x&&(o.x-=this.node.worldPosition.x),.5==this.canvasAnchor.y&&(o.y-=this.node.worldPosition.y),o},i.IsDoubleTouch=function(){return this.timeCurrentTouchStart!=this.timePreTouchStart&&this.timeCurrentTouchStart-this.timePreTouchStart<this.timeDoubleTap},i.GetPosTouchStart=function(){return this.posTouchStart},i.GetPosTouchMove=function(){return this.posTouchMove},i.GetPosTouchEnd=function(){return this.posTouchEnd},i.SetTouchStartToMove=function(){this.posTouchStart=this.posTouchMove},i.SetNodePosition=function(t){},i.SetDeltaTimeTouch=function(t){this.arrayDeltaTimeTouch=t},i.IsTouchOnDeltaTime=function(){if(0==this.isTouchStart)return!1;if(this.indextDeltaTimeTouch<0)return this.indextDeltaTimeTouch=0,console.log("input first touch"),!0;var t=GameManager.instance.GetCurrentTime()-this.timeCurrentTouchStart;return t>this.arrayDeltaTimeTouch[this.indextDeltaTimeTouch]&&(console.log("input touch : "+this.indextDeltaTimeTouch+" deltatime: "+t),this.indextDeltaTimeTouch++,!0)},e}(c))||u);e._RF.pop()}}}));

System.register("chunks:///_virtual/rotate-controller.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,a,s,i,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){a=t.cclegacy,s=t._decorator,i=t.Quat,o=t.Vec3,r=t.Component}],execute:function(){var n;t("ROTATE_TYPE",void 0),a._RF.push({},"e3177sKDvRKe55pheeHXC3q","rotate-controller",void 0);var c,u=s.ccclass;s.property;!function(t){t.NONE="",t.x="x",t.xa="x'",t.y="y",t.ya="y'",t.z="z",t.za="z'",t.U="U",t.Ua="U'",t.u="u",t.ua="u'",t.D="D",t.Da="D'",t.d="d",t.da="d'",t.R="R",t.Ra="R'",t.r="r",t.ra="r'",t.L="L",t.La="L'",t.l="l",t.la="l'",t.B="B",t.Ba="B'",t.b="b",t.ba="b'",t.F="F",t.Fa="F'",t.f="f",t.fa="f'",t.M="M",t.Ma="M'",t.E="E",t.Ea="E'",t.S="S",t.Sa="S'"}(c||(c=t("ROTATE_TYPE",{})));t("default",u("RotateController")(n=function(t){function a(){for(var e,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))||this).timeRotateStart=0,e.isRotate=!1,e.timeRotate=0,e.rorateAxis=new o,e.rotateAngle=0,e.targetAngle=new o,e.targetQuat=new i,e}e(a,t);var s=a.prototype;return s.start=function(){this.timeRotateStart=0,this.rotateAngle=90,this.timeRotate=1},s.update=function(t){if(this.isRotate)if(this.timeRotateStart+=t,this.timeRotateStart>=this.timeRotate)this.isRotate=!1,this.node.setRotation(this.targetQuat);else{var e=new i;i.fromAxisAngle(e,this.rorateAxis,this.rotateAngle/this.timeRotate*t*(3.14159265/180));var a=new i,s=new i;this.node.getRotation(a),i.multiply(s,e,a),this.node.setRotation(s)}},s.DoRotate=function(t){if(this.isRotate)return!1;switch(t){case c.x:case c.Ma:case c.R:case c.r:case c.La:case c.la:this.rorateAxis=new o(-1,0,0);break;case c.xa:case c.M:case c.Ra:case c.ra:case c.L:case c.l:this.rorateAxis=new o(1,0,0);break;case c.y:case c.U:case c.u:case c.Da:case c.da:case c.Ea:this.rorateAxis=new o(0,-1,0);break;case c.ya:case c.Ua:case c.ua:case c.D:case c.d:case c.E:this.rorateAxis=new o(0,1,0);break;case c.F:case c.f:case c.Ba:this.rorateAxis=new o(0,0,-1);break;case c.Fa:case c.fa:case c.B:this.rorateAxis=new o(0,0,1)}this.isRotate=!0,this.timeRotateStart=0;var e=new i;i.fromAxisAngle(e,this.rorateAxis,this.rotateAngle*(3.14159265/180));var a=new i;return this.node.getRotation(a),i.multiply(this.targetQuat,e,a),!0},s.SetTimeRotate=function(t){this.timeRotate=t},s.RotateAround=function(t,e){var a=new i;i.fromAxisAngle(a,t,e*(3.14159265/180));var s=new i,o=new i;this.node.getRotation(s),i.multiply(o,a,s),this.node.setRotation(o)},s.IsRotating=function(){return this.isRotate},a}(r))||n);a._RF.pop()}}}));

System.register("chunks:///_virtual/Cube.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./rotate-controller.ts","./global.ts","./cube-manager.ts"],(function(e){"use strict";var o,t,r,a,s,n,i,O,C;return{setters:[function(e){o=e.inheritsLoose},function(e){t=e.cclegacy,r=e._decorator,a=e.Node,s=e.Vec3,n=e.Component},function(e){i=e.ROTATE_TYPE},function(e){O=e.default},function(e){C=e.default}],execute:function(){var c;e({CUBE_COLOR:void 0,CUBE_COLOR_POSITION:void 0,CUBE_COLOR_TYPE:void 0,CUBE_TYPE:void 0}),t._RF.push({},"e6043S8S0pP2I0Tiwi1sSmz","Cube",void 0);var u,l,R,h,f=r.ccclass;r.property;!function(e){e[e.CENTER=0]="CENTER",e[e.CORNER=1]="CORNER",e[e.EDGE=2]="EDGE",e[e.NONE=3]="NONE"}(u||(u=e("CUBE_TYPE",{}))),function(e){e[e.NONE=0]="NONE",e[e.RED=1]="RED",e[e.YELLOW=2]="YELLOW",e[e.ORANGE=3]="ORANGE",e[e.WHILE=4]="WHILE",e[e.BLUE=5]="BLUE",e[e.GREEN=6]="GREEN"}(l||(l=e("CUBE_COLOR",{}))),function(e){e[e.COLOR_NONE=0]="COLOR_NONE",e[e.COLOR_1=1]="COLOR_1",e[e.COLOR_2=2]="COLOR_2",e[e.COLOR_3=3]="COLOR_3",e[e.COLOR_4=4]="COLOR_4",e[e.COLOR_5=5]="COLOR_5",e[e.COLOR_6=6]="COLOR_6"}(R||(R=e("CUBE_COLOR_TYPE",{}))),function(e){e[e.COLOR_LEFT=0]="COLOR_LEFT",e[e.COLOR_RIGHT=1]="COLOR_RIGHT",e[e.COLOR_UP=2]="COLOR_UP",e[e.COLOR_DOWN=3]="COLOR_DOWN",e[e.COLOR_FRONT=4]="COLOR_FRONT",e[e.COLOR_BACK=5]="COLOR_BACK"}(h||(h=e("CUBE_COLOR_POSITION",{})));e("Cube_Info",(function(){this.arrColorType=[],this.isInFormula=!1,this.posi=0,this.posj=0,this.posk=0})),e("default",f("Cube")(c=function(e){function t(){for(var o,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(o=e.call.apply(e,[this].concat(r))||this).scalerate=.025,o.normalScale=1-o.scalerate,o.SCALE_L=new s(o.scalerate,o.normalScale,o.normalScale),o.SCALE_R=new s(o.scalerate,o.normalScale,o.normalScale),o.SCALE_U=new s(o.normalScale,o.scalerate,o.normalScale),o.SCALE_D=new s(o.normalScale,o.scalerate,o.normalScale),o.SCALE_F=new s(o.normalScale,o.normalScale,o.scalerate),o.SCALE_B=new s(o.normalScale,o.normalScale,o.scalerate),o.POS_L=new s(-(.5-o.scalerate/2),0,0),o.POS_R=new s(.5-o.scalerate/2,0,0),o.POS_U=new s(0,.5-o.scalerate/2,0),o.POS_D=new s(0,-(.5-o.scalerate/2),0),o.POS_F=new s(0,0,.5-o.scalerate/2),o.POS_B=new s(0,0,-(.5-o.scalerate/2)),o.cubeType=u.NONE,o.cubeInfo=null,o.nodeCube=null,o.rotateController=null,o}o(t,e);var r=t.prototype;return r.start=function(){this.rotateController=this.node.getComponent("RotateController")},r.InitCubeInfo=function(e,o){this.cubeInfo=e;var t=O.instance.GetPrefab("cuben"),r=cc.instantiate(t);r.setScale(this.normalScale,this.normalScale,this.normalScale),this.nodeCube=new a,this.nodeCube.addChild(r),this.nodeCube.setPosition(o),this.AddCubeColor(this.cubeInfo.arrColorType),this.node.addChild(this.nodeCube)},r.AddCubeColor=function(e){var o=null,t=0;if(e[h.COLOR_LEFT]!=R.COLOR_NONE){var r=C.instance.GetPrefabColor(e[h.COLOR_LEFT]);o=cc.instantiate(r),this.nodeCube.addChild(o),o.setScale(this.SCALE_L),o.setPosition(this.POS_L),t++}if(e[h.COLOR_RIGHT]!=R.COLOR_NONE){var a=C.instance.GetPrefabColor(e[h.COLOR_RIGHT]);o=cc.instantiate(a),this.nodeCube.addChild(o),o.setScale(this.SCALE_R),o.setPosition(this.POS_R),t++}if(e[h.COLOR_UP]!=R.COLOR_NONE){var s=C.instance.GetPrefabColor(e[h.COLOR_UP]);o=cc.instantiate(s),this.nodeCube.addChild(o),o.setScale(this.SCALE_U),o.setPosition(this.POS_U),t++}if(e[h.COLOR_DOWN]!=R.COLOR_NONE){var n=C.instance.GetPrefabColor(e[h.COLOR_DOWN]);o=cc.instantiate(n),this.nodeCube.addChild(o),o.setScale(this.SCALE_D),o.setPosition(this.POS_D),t++}if(e[h.COLOR_FRONT]!=R.COLOR_NONE){var i=C.instance.GetPrefabColor(e[h.COLOR_FRONT]);o=cc.instantiate(i),this.nodeCube.addChild(o),o.setScale(this.SCALE_F),o.setPosition(this.POS_F),t++}if(e[h.COLOR_BACK]!=R.COLOR_NONE){var O=C.instance.GetPrefabColor(e[h.COLOR_BACK]);o=cc.instantiate(O),this.nodeCube.addChild(o),o.setScale(this.SCALE_B),o.setPosition(this.POS_B),t++}this.cubeType=3==t?u.CORNER:2==t?u.EDGE:u.CENTER},r.DoRotate=function(e){var o=C.instance.GetRubikSize();switch(e){case i.L:case i.La:if(0==this.cubeInfo.posk&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.R:case i.Ra:if(this.cubeInfo.posk==o-1&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.U:case i.Ua:if(0==this.cubeInfo.posi&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.D:case i.Da:if(this.cubeInfo.posi==o-1&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.M:case i.Ma:if(0!=this.cubeInfo.posk&&this.cubeInfo.posk!=o-1&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.F:case i.Fa:if(0==this.cubeInfo.posj&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.B:case i.Ba:if(this.cubeInfo.posj==o-1&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.l:case i.la:if(this.cubeInfo.posk!=o-1&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.r:case i.ra:if(0!=this.cubeInfo.posk&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.u:case i.ua:if(this.cubeInfo.posi!=o-1&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.d:case i.da:if(0!=this.cubeInfo.posi&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0;break;case i.f:case i.fa:if(this.cubeInfo.posj!=o-1&&this.rotateController.DoRotate(e))return this.UpdateCubeInfo(e),!0}return!1},r.UpdateCubeInfo=function(e){var o=C.instance.GetRubikSize()-1,t=0;switch(e){case i.L:case i.l:case i.M:case i.Ra:case i.ra:t=this.cubeInfo.posi,this.cubeInfo.posi=o-this.cubeInfo.posj,this.cubeInfo.posj=t,t=this.cubeInfo.arrColorType[h.COLOR_UP],this.cubeInfo.arrColorType[h.COLOR_UP]=this.cubeInfo.arrColorType[h.COLOR_BACK],this.cubeInfo.arrColorType[h.COLOR_BACK]=this.cubeInfo.arrColorType[h.COLOR_DOWN],this.cubeInfo.arrColorType[h.COLOR_DOWN]=this.cubeInfo.arrColorType[h.COLOR_FRONT],this.cubeInfo.arrColorType[h.COLOR_FRONT]=t;break;case i.R:case i.r:case i.La:case i.la:case i.Ma:t=this.cubeInfo.posj,this.cubeInfo.posj=o-this.cubeInfo.posi,this.cubeInfo.posi=t,t=this.cubeInfo.arrColorType[h.COLOR_UP],this.cubeInfo.arrColorType[h.COLOR_UP]=this.cubeInfo.arrColorType[h.COLOR_FRONT],this.cubeInfo.arrColorType[h.COLOR_FRONT]=this.cubeInfo.arrColorType[h.COLOR_DOWN],this.cubeInfo.arrColorType[h.COLOR_DOWN]=this.cubeInfo.arrColorType[h.COLOR_BACK],this.cubeInfo.arrColorType[h.COLOR_BACK]=t;break;case i.U:case i.u:case i.Da:case i.da:t=this.cubeInfo.posj,this.cubeInfo.posj=o-this.cubeInfo.posk,this.cubeInfo.posk=t,t=this.cubeInfo.arrColorType[h.COLOR_FRONT],this.cubeInfo.arrColorType[h.COLOR_FRONT]=this.cubeInfo.arrColorType[h.COLOR_RIGHT],this.cubeInfo.arrColorType[h.COLOR_RIGHT]=this.cubeInfo.arrColorType[h.COLOR_BACK],this.cubeInfo.arrColorType[h.COLOR_BACK]=this.cubeInfo.arrColorType[h.COLOR_LEFT],this.cubeInfo.arrColorType[h.COLOR_LEFT]=t;break;case i.Ua:case i.ua:case i.D:case i.d:t=this.cubeInfo.posk,this.cubeInfo.posk=o-this.cubeInfo.posj,this.cubeInfo.posj=t,t=this.cubeInfo.arrColorType[h.COLOR_FRONT],this.cubeInfo.arrColorType[h.COLOR_FRONT]=this.cubeInfo.arrColorType[h.COLOR_LEFT],this.cubeInfo.arrColorType[h.COLOR_LEFT]=this.cubeInfo.arrColorType[h.COLOR_BACK],this.cubeInfo.arrColorType[h.COLOR_BACK]=this.cubeInfo.arrColorType[h.COLOR_RIGHT],this.cubeInfo.arrColorType[h.COLOR_RIGHT]=t;break;case i.F:case i.f:case i.Ba:t=this.cubeInfo.posk,this.cubeInfo.posk=o-this.cubeInfo.posi,this.cubeInfo.posi=t,t=this.cubeInfo.arrColorType[h.COLOR_LEFT],this.cubeInfo.arrColorType[h.COLOR_LEFT]=this.cubeInfo.arrColorType[h.COLOR_DOWN],this.cubeInfo.arrColorType[h.COLOR_DOWN]=this.cubeInfo.arrColorType[h.COLOR_RIGHT],this.cubeInfo.arrColorType[h.COLOR_RIGHT]=this.cubeInfo.arrColorType[h.COLOR_UP],this.cubeInfo.arrColorType[h.COLOR_UP]=t;break;case i.Fa:case i.fa:case i.B:t=this.cubeInfo.posi,this.cubeInfo.posi=o-this.cubeInfo.posk,this.cubeInfo.posk=t,t=this.cubeInfo.arrColorType[h.COLOR_LEFT],this.cubeInfo.arrColorType[h.COLOR_LEFT]=this.cubeInfo.arrColorType[h.COLOR_UP],this.cubeInfo.arrColorType[h.COLOR_UP]=this.cubeInfo.arrColorType[h.COLOR_RIGHT],this.cubeInfo.arrColorType[h.COLOR_RIGHT]=this.cubeInfo.arrColorType[h.COLOR_DOWN],this.cubeInfo.arrColorType[h.COLOR_DOWN]=t}},r.GetCubeInfo=function(){return this.cubeInfo},t}(n))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/game-controller.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./global.ts","./ui-canvas.ts","./Cube.ts","./Rubik.ts"],(function(t){"use strict";var n,e,o,c,i,r,a,s,u,l,f,p;return{setters:[function(t){n=t.inheritsLoose,e=t.createClass},function(t){o=t.cclegacy,c=t._decorator,i=t.systemEvent,r=t.SystemEventType,a=t.macro,s=t.Component},function(t){u=t.default},function(t){l=t.default},function(t){f=t.CUBE_COLOR},function(t){p=t.default}],execute:function(){var m,y,E;o._RF.push({},"ee6ccT8emJA17BOvUrVuQva","game-controller",void 0);var h=c.ccclass;c.property,t("default",h("GameController")((E=y=function(t){function o(){for(var n,e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return(n=t.call.apply(t,[this].concat(o))||this).timeTotal=0,n.currentRubikColor=[f.NONE,f.RED,f.YELLOW,f.ORANGE,f.WHILE,f.BLUE,f.GREEN],n}n(o,t);var c=o.prototype;return c.onLoad=function(){o._instance=this.node.getComponent("GameController"),u.instance.Init(),i.on(r.KEY_DOWN,this.onKeyDown,this)},c.onDestroy=function(){i.off(r.KEY_DOWN,this.onKeyDown,this)},c.start=function(){},c.update=function(t){this.timeTotal+=t},c.GetCurrentTime=function(){return this.timeTotal},c.onKeyDown=function(t){switch(console.log("keydown: "+t.keyCode),t.keyCode){case a.KEY.back:case a.KEY.backspace:l.instance.ShowExitPopUp(!0)}},c.ExitGame=function(){p.instance.SaveCurrentCubies(),cc.game.end()},e(o,null,[{key:"instance",get:function(){return o._instance}}]),o}(s),y._instance=null,m=E))||m);o._RF.pop()}}}));

System.register("chunks:///_virtual/ap-input.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./rotate-controller.ts"],(function(t){"use strict";var e,r,i,o,n,h,a,u,s,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,h=t._decorator,a=t.Vec2,u=t.Vec3,s=t.Component},function(t){c=t.ROTATE_TYPE}],execute:function(){var l,p,A,x,d;n._RF.push({},"f889eTb8udPX6PxCuq8nndA","ap-input",void 0);var y=h.ccclass,I=h.property;t("ApInput",(l=y("ApInput"),p=I(cc.Node),l((d=e((x=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),h=0;h<r;h++)n[h]=arguments[h];return e=t.call.apply(t,[this].concat(n))||this,i(e,"debugDragArea",d,o(e)),e.inputController=null,e.minMove=new a(120,120),e.touchAreaTop=new a,e.touchAreabottom=new a,e.touchAreaRight=new a,e.touhcAreaLeft=new a,e.touchAreaCenterHorizontal=new a,e.touchAreaCenterVertical=new a,e.rotateQueue=[],e.maxRotateQueue=10,e.currentIndex=-1,e}r(e,t);var n=e.prototype;return n.start=function(){this.rotateQueue=new Array(this.maxRotateQueue),this.currentIndex=-1,this.inputController=this.node.getComponent("InputController");var t=this.node.getContentSize(),e=new cc.Size(t.width/1.7,t.height/1.2);this.UpdateDragArea(e),this.inputController.SetTouchSize(e),this.inputController.SetNodePosition(new u(0,0,0));var r=new a(0,0);this.touchAreaTop.x=r.y+e.height/6,this.touchAreaTop.y=r.y+e.height/2,this.touchAreaCenterHorizontal.x=r.y-e.height/6,this.touchAreaCenterHorizontal.y=r.y+e.height/6,this.touchAreabottom.x=r.y-e.height/2,this.touchAreabottom.y=r.y-e.height/6,this.touchAreaRight.x=r.x+e.width/6,this.touchAreaRight.y=r.x+e.width/2,this.touchAreaCenterVertical.x=r.x-e.width/6,this.touchAreaCenterVertical.y=r.x+e.width/6,this.touhcAreaLeft.x=r.x-e.width/2,this.touhcAreaLeft.y=r.x-e.width/6},n.UpdateDragArea=function(t){null!=this.debugDragArea&&this.debugDragArea.setScale(t.width/100,t.height/100,1)},n.update=function(t){if(this.inputController&&this.inputController.IsTouchMove()){var e,r=this.inputController.GetPosTouchStart(),i=this.inputController.GetMoveVector(),o=this.inputController.IsDoubleTouch();if(Math.abs(i.x)>this.minMove.x||Math.abs(i.y)>this.minMove.y)Math.abs(i.x)>Math.abs(i.y)?this.IsInArea(r.y,this.touchAreaTop)?e=o?i.x>0?c.ua:c.u:i.x>0?c.Ua:c.U:this.IsInArea(r.y,this.touchAreaCenterHorizontal)?e=o?i.x>0?c.f:c.fa:i.x>0?c.F:c.Fa:this.IsInArea(r.y,this.touchAreabottom)&&(e=o?i.x>0?c.d:c.da:i.x>0?c.D:c.Da):this.IsInArea(r.x,this.touhcAreaLeft)?e=o?i.y>0?c.la:c.l:i.y>0?c.La:c.L:this.IsInArea(r.x,this.touchAreaCenterVertical)?e=o?i.y>0?c.Ba:c.B:i.y>0?c.Ma:c.M:this.IsInArea(r.x,this.touchAreaRight)&&(e=o?i.y>0?c.r:c.ra:i.y>0?c.R:c.Ra),this.PushRotate(e),this.inputController.SetTouchStartToMove()}},n.PushRotate=function(t){this.currentIndex<this.maxRotateQueue-1&&this.currentIndex++,this.currentIndex<0&&(this.currentIndex=0),this.rotateQueue[this.currentIndex]=t},n.PopRotate=function(){if(this.currentIndex>=0){for(var t=this.rotateQueue[0],e=0;e<this.currentIndex;e++)this.rotateQueue[e]=this.rotateQueue[e+1];return this.currentIndex--,t}return c.NONE},n.IsInArea=function(t,e){return t>e.x&&t<e.y},e}(s)).prototype,"debugDragArea",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=x))||A));n._RF.pop()}}}));

System.register("chunks:///_virtual/ui-canvas.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./rotate-controller.ts","./game-controller.ts","./cube-manager.ts"],(function(t){"use strict";var n,e,i,o,a,r,c,s,u,l,p,f,h;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.createClass,o=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){r=t.cclegacy,c=t._decorator,s=t.Node,u=t.Component},function(t){l=t.default,p=t.ROTATE_TYPE},function(t){f=t.default},function(t){h=t.default}],execute:function(){var y,v,x,P,E,d,R,b,g;r._RF.push({},"fb722vQ185E7pYLR03jpZfs","ui-canvas",void 0);var U=c.ccclass,_=c.property;t("default",(y=U("UiCanvas"),v=_({type:l}),x=_(s),y((g=b=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return n=t.call.apply(t,[this].concat(i))||this,o(n,"testRotate",d,a(n)),o(n,"ExitPopUP",R,a(n)),n}e(n,t);var r=n.prototype;return r.onLoad=function(){n._instance=this.node.getComponent("UiCanvas")},r.start=function(){this.ShowExitPopUp(!1)},r.OnButtonRotate=function(t,n){var e=p.x;"xa"==n?e=p.xa:"y"==n?e=p.y:"ya"==n?e=p.ya:"z"==n?e=p.z:"za"==n&&(e=p.za),h.instance.RotateCube(e),this.testRotate&&this.testRotate.DoRotate(e)},r.ShowExitPopUp=function(t){this.ExitPopUP&&(this.ExitPopUP.active=t)},r.OnButtonExitNo=function(){this.ShowExitPopUp(!1)},r.OnButtonExitYes=function(){f.instance.ExitGame()},i(n,null,[{key:"instance",get:function(){return n._instance}}]),n}(u),b._instance=null,d=n((E=g).prototype,"testRotate",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=n(E.prototype,"ExitPopUP",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=E))||P));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./rotate-controller.ts","./global.ts","./ui-canvas.ts","./game-controller.ts","./cube-manager.ts","./Cube.ts","./Rubik.ts","./camera-controller.ts","./input-controller.ts","./ap-input.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});