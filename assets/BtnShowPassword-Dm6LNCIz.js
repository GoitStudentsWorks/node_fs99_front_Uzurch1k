import{j as e,r as c}from"./index-BIC-b-Eg.js";import{T as i,a as d,i as r}from"./Languages-CI7TjO2m.js";const h="_wrapp_1ejxp_1",u={wrapp:h},w=({children:s})=>e.jsxs("div",{className:u.wrapp,children:[e.jsx(i,{}),e.jsx(d,{}),s]}),f="_showPwdBtn_1t5v1_1",g="_eye_1t5v1_10",o={showPwdBtn:f,eye:g},y=({setIsPasswordVisible:s})=>{const t=c.useRef(),a=()=>{const n=t.current.firstElementChild;if(n.dataset.eye==="closed"){n.remove(),t.current.insertAdjacentHTML("afterbegin",`<svg width="20" height="20" class=${o.eye} data-eye="opened">
        <use href=${r}#icon-eye-on></use>
        </svg>`),s(!0);return}if(n.dataset.eye==="opened"){n.remove(),t.current.insertAdjacentHTML("afterbegin",`<svg width="20" height="20" class=${o.eye} data-eye="closed">
        <use href=${r}#icon-eye-off></use>
        </svg>`),s(!1);return}};return e.jsx("button",{type:"button",ref:t,onClick:a,className:o.showPwdBtn,children:e.jsx("svg",{width:"20",height:"20",className:o.eye,"data-eye":"closed",children:e.jsx("use",{href:`${r}#icon-eye-off`})})})};export{y as B,w as S};
//# sourceMappingURL=BtnShowPassword-Dm6LNCIz.js.map
