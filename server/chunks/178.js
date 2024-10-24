"use strict";exports.id=178,exports.ids=[178],exports.modules={1178:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(997),l=t(6689),n=t(2667),o=t(5478),i=t(6543),d=t(1717),m=t(7497),c=t(7105),x=t(5641),p=t(7112),u=t(6993),f=t(9101);t(3252);var h=t(2664),b=t(8828),g=t(1656),j=t(9926),N=e([d,c,x,p,h,g,j]);[d,c,x,p,h,g,j]=N.then?(await N)():N,j.z.object({page:j.z.number(),limit:j.z.number(),search:j.z.string(),offset:j.z.number(),totalPages:j.z.number(),totalRows:j.z.number(),totalDatas:j.z.number(),admins:j.z.union([j.z.array(j.z.object({id:j.z.number(),nama:j.z.string(),posisi:j.z.nativeEnum(u.iV)})),j.z.null()])});let w=j.z.object({no:j.z.number(),nama:j.z.string().min(1,{message:"Nama is required!"}).max(100),password:j.z.string().max(100),posisi:j.z.nativeEnum(u.iV)}),v={page:1,limit:10,search:"",offset:0,totalPages:0,totalRows:0,totalDatas:0,admins:null},y={no:0,nama:"",password:"",posisi:u.iV.Kordinator},__WEBPACK_DEFAULT_EXPORT__=e=>{let{register:s,handleSubmit:t,formState:{errors:a},reset:j,setValue:N,getValues:D}=(0,x.useForm)({resolver:(0,g.zodResolver)(w)}),{admin:P}=(0,b.O)(),[z,C]=(0,l.useState)(""),[k,S]=(0,l.useState)(0),[A]=(0,c.useDebounce)(z,500),[I,_]=(0,l.useState)(v),{page:Z,limit:E,offset:R,totalPages:V,totalRows:F,totalDatas:B,admins:O}=I,[T,K]=(0,l.useState)(!1),[$,L]=(0,l.useState)(!1),[U,q]=(0,l.useState)(!1),getAdmin=async()=>{try{let e=await p.e.get("/admin/staf",{params:{page:Z,limit:E,search:A}});_({...I,offset:e.data.offset,totalPages:e.data.totalPages,totalRows:e.data.totalRows,totalDatas:e.data.totalData,admins:e.data.result})}catch(e){(0,o.Z)(e)}},handleCreateData=async e=>{(0,i.Z)();try{await p.e.post("/admin/staf",e),(0,n.Z)("Data Berhasil Dibuat!"),j(y),K(!1),getAdmin()}catch(e){(0,o.Z)(e)}},handleUpdateData=async e=>{(0,i.Z)();try{await p.e.patch(`/admin/staf/${k}`,e),(0,n.Z)("Data Berhasil Diubah!"),j(y),L(!1),K(!1),getAdmin()}catch(e){(0,o.Z)(e)}},handleDeleteData=(e,s,t)=>{(0,h.Z)(e,s,t)},handleDeleteAllData=(e,s,t)=>{(0,d.Z)(e,s,t)},W=(0,c.useDebouncedCallback)(e=>{_({...I,page:e})},200);return(0,l.useEffect)(()=>{q(!0),j(y),L(!1),K(!1),getAdmin(),q(!1)},[e]),(0,l.useEffect)(()=>{getAdmin()},[A,Z,E]),r.jsx("div",{className:"w-full",children:T?r.jsx("div",{className:"flex justify-center items-center font-['Poppins'] bg-white rounded-2xl border shadow-md",children:(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("button",{className:"flex items-center m-4 group gap-2",onClick:e=>{e.preventDefault(),K(!1),L(!1),j(y)},children:[r.jsx(f.ArrowLeft,{size:20,color:"#57534e"}),r.jsx("a",{className:"font-['Poppins'] text-sm text-stone-600 font-bold group-hover:underline cursor-pointer",children:"Back"})]}),r.jsx("hr",{className:"border rounded-full"}),(0,r.jsxs)("form",{onSubmit:t($?handleUpdateData:handleCreateData),className:"w-full",autoComplete:"off",children:[(0,r.jsxs)("div",{className:"text-stone-600 font-bold p-4 w-full lg:grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"my-2 lg:my-0",children:[r.jsx("label",{htmlFor:"nama",children:"Nama :"}),r.jsx("input",{spellCheck:!1,type:"text",className:`font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full ${a.nama?"focus:border-rose-500 border-rose-500":"focus:border-stone-800"} border rounded-lg p-2`,id:"nama",...s("nama")}),a.nama&&r.jsx("p",{className:"font-['Inter'] text-rose-500 font-bold text-sm mx-1",children:a.nama.message})]}),(0,r.jsxs)("div",{className:"my-2 lg:my-0",children:[(0,r.jsxs)("label",{htmlFor:"password",children:[$?"Password Baru":"Password"," :"]}),r.jsx("input",{spellCheck:!1,type:"text",className:`font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full ${a.password?"focus:border-rose-500 border-rose-500":"focus:border-stone-800"} border rounded-lg p-2`,id:"nis",...s("password")}),a.password&&r.jsx("p",{className:"font-['Inter'] text-rose-500 font-bold text-sm mx-1",children:a.password.message})]}),(0,r.jsxs)("div",{className:"my-2 lg:my-0",children:[r.jsx("p",{children:"Posisi :"}),(0,r.jsxs)("select",{className:"font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full focus:border-stone-800 border rounded-lg p-2 cursor-pointer",id:"posisi",...s("posisi"),children:["Developer"===P.posisi&&r.jsx("option",{value:u.iV.Developer,children:u.iV.Developer.toString()}),r.jsx("option",{value:u.iV.Kordinator,children:u.iV.Kordinator.toString()}),r.jsx("option",{value:u.iV.Pengawas,children:u.iV.Pengawas.toString()})]})]})]}),r.jsx("hr",{className:"border rounded-full"}),r.jsx("div",{className:"flex justify-start flex-row-reverse m-4 gap-4",children:$?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{className:"bg-emerald-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-emerald-600 cursor-pointer group",type:"submit",children:[r.jsx(f.Save,{size:24,color:"#ffffff"}),r.jsx("p",{className:"font-['Poppins'] text-sm text-white block",children:"Simpan"})]}),(0,r.jsxs)("button",{className:"bg-rose-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-rose-600 cursor-pointer group",onClick:e=>{e.preventDefault(),handleDeleteData(D("nama"),`/admin/staf/${k}`,()=>{j(y),L(!1),K(!1),getAdmin()})},children:[r.jsx(f.Trash2,{size:24,color:"#ffffff"}),r.jsx("p",{className:"font-['Poppins'] text-sm text-white block",children:"Hapus"})]})]}):(0,r.jsxs)("button",{className:"bg-emerald-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-emerald-600 cursor-pointer group",type:"submit",children:[r.jsx(f.Plus,{size:24,color:"#ffffff"}),r.jsx("p",{className:"font-['Poppins'] text-sm text-white block",children:"Buat"})]})})]})]})}):(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"Pengawas"===P.posisi?"hidden":"relative",children:(0,r.jsxs)("div",{className:"flex justify-start gap-4 pb-2 flex-wrap",children:[(0,r.jsxs)("button",{className:"bg-white rounded-xl shadow-md lg:pr-2 border flex items-center hover:bg-slate-50 cursor-pointer group relative",onClick:e=>{e.preventDefault(),K(!0)},children:[r.jsx(f.PlusCircle,{size:32,color:"#10b981",className:"m-2"}),r.jsx("div",{className:"border-l h-8 border lg:block hidden"}),r.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-bold lg:block hidden m-2",children:"Tambah"})]}),r.jsx(m.Z,{func:()=>{handleDeleteAllData(B,"/admin/staf",()=>{_({...v,offset:0,totalRows:0,totalPages:0,totalDatas:0,admins:[]})})}})]})}),(0,r.jsxs)("div",{className:"overflow-y-auto overflow-x-auto bg-white rounded-2xl mt-2 shadow-md",children:[(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:justify-between p-2",children:[(0,r.jsxs)("form",{className:"flex items-center w-full gap-2",onSubmit:e=>{e.preventDefault()},children:[r.jsx("label",{htmlFor:"search",children:r.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:"Search"})}),r.jsx("input",{spellCheck:!1,autoComplete:"off",id:"search",name:"search",className:"flex-1 lg:flex-none font-['Inter'] text-stone-600 font-medium outline-none bg-transparent my-1 focus:border-stone-800 border rounded-lg px-2",type:"text",value:z,required:!0,onChange:e=>{_({...I,page:1}),C(e.target.value)}})]}),(0,r.jsxs)("form",{className:"flex items-center w-full lg:justify-end",children:[r.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:"Rows per page :"}),(0,r.jsxs)("select",{name:"page",className:"p-1 cursor-pointer outline-none font-['Inter'] text-sm text-stone-600 font-medium",required:!0,value:E,onChange:e=>{_({...I,page:1,limit:parseInt(e.target.value)})},children:[r.jsx("option",{value:10,children:"10"}),r.jsx("option",{value:20,children:"20"})]})]})]}),(0,r.jsxs)("table",{className:"w-full",children:[r.jsx("thead",{className:"border",children:(0,r.jsxs)("tr",{className:"bg-rose-500 text-white font-['Poppins'] font-bold text-sm lg:text-base",children:[r.jsx("th",{className:"m-2 p-1 border",children:"No"}),r.jsx("th",{className:"m-2 p-1 border",children:"Nama"}),r.jsx("th",{className:"m-2 p-1 border",children:"Posisi"})]})}),r.jsx("tbody",{className:"border",children:null===O||U?Array(E).fill(0).map((e,s)=>(0,r.jsxs)("tr",{className:"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base",children:[r.jsx("td",{className:"m-2 p-1 border",children:r.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),r.jsx("td",{className:"m-2 p-1 border",children:r.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),r.jsx("td",{className:"m-2 p-1 border",children:r.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})})]},s)):O.length>0?O.map((e,s)=>(0,r.jsxs)("tr",{className:"Pengawas"===P.posisi?"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base":"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base hover:bg-slate-50 cursor-pointer",onClick:async()=>{if("Pengawas"!==P.posisi){try{let s=await p.e.get(`/admin/staf/${e.id}`);N("nama",s.data.nama),N("password",s.data.password),N("posisi",s.data.posisi),S(s.data.id)}catch(e){(0,o.Z)(e)}L(!0),K(!0)}},children:[r.jsx("td",{className:"border",children:s+1}),r.jsx("td",{className:"border",children:e.nama}),r.jsx("td",{className:"border",children:e.posisi})]},e.id)):r.jsx("tr",{children:r.jsx("td",{colSpan:3,className:"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base",children:"No Data Available"})})})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between p-2",children:[(0,r.jsxs)("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium bg-slate-100 rounded-full px-2 py-1",children:[R+1,"-",E*Z>F?F:E*Z," of"," ",F]}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[r.jsx("button",{className:"p-2 hover:bg-slate-50 rounded-full cursor-pointer",onClick:()=>{Z>1&&W(Z-1)},children:r.jsx(f.ChevronLeft,{size:16,color:"#57534e"})}),r.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:Z}),r.jsx("button",{className:"p-2 hover:bg-slate-50 rounded-full cursor-pointer",onClick:()=>{Z<V&&W(Z+1)},children:r.jsx(f.ChevronRight,{size:16,color:"#57534e"})})]})]})]})]})})};a()}catch(e){a(e)}})}};