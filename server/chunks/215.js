exports.id=215,exports.ids=[215],exports.modules={8828:(e,t,n)=>{"use strict";n.d(t,{H:()=>AdminContextProvider,O:()=>useAdminContext});var r=n(997),l=n(6689);let u=(0,l.createContext)({admin:{isAdmin:null,nama:null,posisi:null},setAdmin:()=>{}}),s={isAdmin:null,nama:null,posisi:null},AdminContextProvider=({children:e})=>{let[t,n]=(0,l.useState)(s);return r.jsx(u.Provider,{value:{admin:t,setAdmin:n},children:e})},useAdminContext=()=>{let e=(0,l.useContext)(u);if(!e)throw Error("useAdminContext must be used within a AdminContextProvider");return e}},3970:(e,t,n)=>{"use strict";n.d(t,{D:()=>useVoterContext,f:()=>VoterContextProvider});var r=n(997),l=n(6689);let u=(0,l.createContext)({voter:{isVoter:null,nis:null,nama:null,kelas:null,jurusan:null},setVoter:()=>{}}),s={isVoter:null,nis:null,nama:null,kelas:null,jurusan:null},VoterContextProvider=({children:e})=>{let[t,n]=(0,l.useState)(s);return r.jsx(u.Provider,{value:{voter:t,setVoter:n},children:e})},useVoterContext=()=>{let e=(0,l.useContext)(u);if(!e)throw Error("useVoterContext must be used within a VoterContextProvider");return e}},3215:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>App});var r=n(997);n(3663);var l=n(8828),u=n(3970);function App({Component:e,pageProps:t}){return r.jsx(l.H,{children:r.jsx(u.f,{children:r.jsx(e,{...t})})})}},3663:()=>{}};