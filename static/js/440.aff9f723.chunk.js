"use strict";(self.webpackChunkcodename1447=self.webpackChunkcodename1447||[]).push([[440],{4059:(e,o,t)=>{t.r(o),t.d(o,{default:()=>l});var a=t(5043),s=t(8551),n=t(2414),c=t(3204),i=t(579);const l=()=>{const[e,o]=(0,a.useState)({top:"40%",left:"40%"}),[t,l]=(0,a.useState)("CATCH ME"),[r,d]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[m,p]=(0,a.useState)(!1),[b,x]=(0,a.useState)(""),[j,f]=(0,a.useState)(!1),y=()=>{if(!r){const e=window.innerHeight-150,t=window.innerWidth-150,a=Math.random()*e+"px",s=Math.random()*t+"px";o({top:a,left:s})}};(0,a.useEffect)((()=>{if(!r){const e=setInterval(y,500);return()=>clearInterval(e)}}),[r]);const k=()=>{p(!1),h(!0)};return(0,i.jsxs)("div",{className:"catch-section-mobile",onTouchMove:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:"catch-me-container-mobile",style:e,onTouchStart:()=>{r||(d(!0),l("YOU CAUGHT ME!"),h(!0))},children:(0,i.jsxs)("div",{className:"catch-box",children:[(0,i.jsx)("img",{src:s,alt:"Catch Me",className:"catch-image"}),(0,i.jsx)("div",{className:"hover-text",children:t})]})}),u&&(0,i.jsx)("div",{className:"mb-modal",children:(0,i.jsxs)("div",{className:"mb-modal-content",children:[(0,i.jsx)("span",{className:"close",onClick:()=>{h(!1),d(!1),l("CATCH ME")},children:"\xd7"}),(0,i.jsx)("img",{src:n,alt:"LinkedIn Profile",className:"profile-pic"}),(0,i.jsx)("h2",{children:"Hi there! You caught me!"}),(0,i.jsx)("p",{children:"In the future, it won't be so easy to catch me. Stay tuned for updates!"}),(0,i.jsxs)("div",{className:"contact-info",children:[(0,i.jsx)("p",{children:"Get in touch:"}),(0,i.jsxs)("button",{onClick:()=>{const e=`https://api.whatsapp.com/send?phone=${encodeURIComponent("+441158883068")}&text=${encodeURIComponent("Hello! I caught you and would love to connect.")}`;window.open(e,"_blank")},className:"catch-contact-button",children:[(0,i.jsx)(c.EcP,{className:"catch-icon"}),"Contact via WhatsApp"]}),(0,i.jsxs)("button",{onClick:()=>{window.location.href=`mailto:contact@abdelkodoushachani.uk?subject=${encodeURIComponent("I Caught You!")}&body=${encodeURIComponent("Hello! I caught you and would love to connect. Please let me know how I can reach you.")}`},className:"catch-contact-button",children:[(0,i.jsx)(c.maD,{className:"catch-icon"}),"Contact via Email"]})]}),(0,i.jsx)("p",{children:"Your Voice Matters: Share Your Thoughts Anonymously"}),(0,i.jsxs)("button",{onClick:()=>{h(!1),p(!0),f(!1)},className:"catch-contact-button",children:[(0,i.jsx)(c.Q5j,{className:"su-icon"}),"Anonymous Feedback"]})]})}),m&&(0,i.jsx)("div",{className:"f-modal-overlay",onClick:k,children:(0,i.jsxs)("div",{className:"f-modal-content",onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(c.Q5j,{className:"su-icon",size:60}),(0,i.jsx)("h2",{children:"Anonymous Feedback Welcome"}),(0,i.jsx)("p",{className:"feedback-anonymous-text",children:"Feel free to share your thoughts anonymously about your experience with me, my website, or our communication. Your insights drive innovation and improvement. Thank you!"}),j?(0,i.jsxs)("div",{className:"feedback-submitted-message",children:[(0,i.jsx)(c.A7C,{className:"validation-icon",size:40}),"Your Feedback Matters Thank You for Helping Shape My Journey!"]}):(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault();const o=new FormData;o.append("entry.255952891",b),fetch("https://docs.google.com/forms/d/e/1FAIpQLSdUJhu3l9oYzEYr3Bcn0fk6E3Ccq9ez-bqP3aNPv2ushqnG0w/formResponse",{method:"POST",body:o,mode:"no-cors"}).then((()=>{f(!0),x(""),setTimeout((()=>{k()}),2e3)})).catch((e=>{console.error("Error submitting feedback:",e),alert("There was an error submitting your feedback. Please try again.")}))},children:[(0,i.jsx)("textarea",{value:b,onChange:e=>x(e.target.value),placeholder:"Type your anonymous feedback here...",rows:"3",required:!0}),(0,i.jsx)("br",{}),(0,i.jsxs)("button",{type:"submit",className:"f-modal-submit-button",children:[(0,i.jsx)(c.Q5j,{className:"su-icon"}),"Anonymous Feedback"]})]}),(0,i.jsx)("button",{className:"f-modal-close-button",onClick:k,children:"Close"})]})})]})}},8551:(e,o,t)=>{e.exports=t.p+"static/media/hero.4428324d16ca694c388e.png"},2414:(e,o,t)=>{e.exports=t.p+"static/media/linkden.2d1f8b7809fef75307f9.jpg"}}]);
//# sourceMappingURL=440.aff9f723.chunk.js.map