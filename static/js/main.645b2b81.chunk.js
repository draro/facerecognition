(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),r=a.n(s),o=(a(15),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),p=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign in"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},h=a(8),d=a.n(h),g=(a(16),function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(d.a,{className:"Tilt br2 shadow-2",options:{max:35},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner"}," ")))}),b=(a(17),function(e){var t=e.onInputChange,a=e.onSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"Davide will detect faces in your pics. Give it a try"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form pa4 br3 shadow-5 center"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),f=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry counts is ....")),i.a.createElement("div",{className:"white f1"},a))},w=(a(18),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signinPassword:e.target.value})},a.onSubmitSigIn=function(){fetch("https://desolate-cove-87201.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signinPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signinPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.onSubmitSigIn,type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{href:"#0",className:"f6 link dim black db pointer",onClick:function(){return e("register")}},"Register")))))}}]),t}(n.Component),E=a(9),N=a.n(E),C=(a(19),a(20),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSigIn=function(){fetch("https://desolate-cove-87201.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.onSubmitSigIn,type:"submit",value:"Register"})))))}}]),t}(n.Component)),y={particles:{number:{value:150,density:{enable:!0,value_area:800}}}},k={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://desolate-cove-87201.herokuapp.com/imageUrl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://desolate-cove-87201.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){Object.assign(e.state.user,{entries:t})})).catch((function(e){return t.state(400).json(e)})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log("ERROR!!!!!!!",e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(k):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=k,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(N.a,{className:"particles",params:y}),i.a.createElement(p,{isSignedIn:t,onRouteChange:this.onRouteChange}),i.a.createElement(g,null),"home"===n?i.a.createElement("div",null,i.a.createElement(f,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(b,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),i.a.createElement(w,{box:s,imageUrl:a})):"signin"===n?i.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.645b2b81.chunk.js.map