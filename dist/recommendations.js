export const beds=[{name:'Twin',w:.965,l:1.905},{name:'Twin XL',w:.965,l:2.032},{name:'Full',w:1.372,l:1.905},{name:'Queen',w:1.524,l:2.032}];
export function placement(width,length,w,l,side=.6,foot=.6){
  for(const rotate of [false,true]){const fw=rotate?l:w,fl=rotate?w:l;if(fw+side<=width+.00001&&fl+foot<=length+.00001)return {x:0,y:0,w:fw,l:fl,rotate};}return null;
}
export function analyze(plan){
 const {width,length,room,occupants,height,light}=plan;
 if(!Number.isFinite(width)||!Number.isFinite(length)||width<1||length<1||width>20||length>20)throw Error('請填寫 1–20 公尺之間的室內淨寬與淨長。');
 if(!['bedroom','bathroom','kitchen','living','study','laundry'].includes(room))throw Error('請選擇房間用途。');
 if(![1,2].includes(occupants)||!Number.isFinite(height)||height<100||height>230||!['bright','dim','none'].includes(light))throw Error('請確認居住人數、身高與採光選項。');
 const area=width*length,results=[];let furniture=null;
 if(room==='bedroom'){
   let options=occupants===2?[beds[3],beds[2]]:height>185?[beds[1],beds[3]]:area>=12?[beds[2],beds[0],beds[1]]:[beds[0],beds[1]];
   if(height>185)options=options.filter(b=>b.l>=2);
   const fit=options.map(b=>({b,p:placement(width,length,b.w+.16,b.l+.16,occupants===2?1.2:.6,.6)})).find(x=>x.p);
   if(fit){furniture={...fit.p,label:fit.b.name+' 床架預留'};results.push({type:'bed',title:'建議床墊尺寸',metric:fit.b.name,description:`床墊約 ${Math.round(fit.b.w*100)} × ${Math.round(fit.b.l*100)} cm。估算床架另加 16 cm 長寬，${occupants===2?'兩側各留':'一側留'} 60 cm、床尾留 60 cm。${fit.p.rotate?'旋轉 90° 擺放較合適。':''}`,query:`${fit.b.name} mattress`,product:fit.b.name==='Twin'?'vest':null});}
   else results.push({type:'bed',title:'床墊尺寸',metric:'目前空間不足',description:'沒有候選床型能同時滿足人數、身高與預留走道。先重新量測可用範圍，或移除既有家具後再規劃；不要直接下單。',query:null});
   const deskFit=furniture?placement(width-furniture.w-.6,length,.73,.5,0,.8)||placement(width,length-furniture.l-.6,.73,.5,0,.8):null;
   results.push({type:'desk',title:'讀書角落',metric:deskFit?'73 × 50 cm':'先保留走道',description:deskFit?'初步可另放一張 MICKE 小桌；椅後預留 80 cm。仍須核對門窗、衣櫃開門和插座位置。':'目前不建議額外放固定書桌。可使用公共學習空間，或量好剩餘空間後選折疊桌。',query:deskFit?'MICKE desk 73 50':'folding desk',product:deskFit?'micke':null});
 }else{
   const config={study:{title:'建議工作桌',w:.73,l:.5,side:0,foot:.8,label:'73 × 50 cm',query:'small desk 73 50 cm',product:'micke'},living:{title:'小型雙人沙發',w:1.5,l:.85,side:.6,foot:.6,label:'寬 150 cm 內',query:'small loveseat 59 inch',product:null},kitchen:{title:'移動式收納推車',w:.6,l:.4,side:0,foot:.9,label:'60 × 40 cm 內',query:'kitchen cart 24 inch small',product:null},bathroom:{title:'窄型收納架',w:.35,l:.25,side:0,foot:.7,label:'35 × 25 cm 內',query:'narrow bathroom shelf 14 inch',product:null},laundry:{title:'折疊曬衣架',w:1,l:.6,side:.3,foot:.6,label:'100 × 60 cm 內',query:'folding drying rack compact',product:null}}[room];
   const fit=placement(width,length,config.w,config.l,config.side,config.foot);if(fit)furniture={...fit,label:config.title};
   results.push({type:'furniture',title:config.title,metric:fit?config.label:'可用範圍不足',description:fit?`以家具外徑估算，前方預留 ${Math.round(config.foot*100)} cm。這是假設空房的候選上限，請扣除既有設備、門扇及櫃門範圍。`:'目前尺寸不足以放入此類家具並保留動線，建議先調整擺放範圍。',query:fit?config.query:null,product:fit?config.product:null});
   const tips={study:['讀書照明','桌面補光','檯燈放在慣用手的另一側以減少手部陰影，留意眩光和螢幕反光。','desk task lamp','lamp'],living:['先買什麼','主燈與收納','無主燈可先加落地燈，沙發與茶几可和室友討論後再添購。','floor lamp small room',null],kitchen:['先核對爐具','鍋具相容性','查看爐具類型再買鍋具；電磁爐需選相容鍋底。','induction compatible cookware',null],bathroom:['浴室燈具','先確認防潮需求','潮濕處依產品適用環境選燈具，固定燈具的更換先聯絡房東。','damp rated bathroom light',null],laundry:['搬運方式','袋型洗衣籃','共用洗衣房或需要爬樓梯時，輕便可折疊的洗衣袋通常更好搬。','laundry bag handles',null]}[room];
   results.push({type:'use',title:tips[0],metric:tips[1],description:tips[2],query:tips[3],product:tips[4]});
 }
 const base=room==='study'||room==='kitchen'?200:120;const lumens=Math.ceil(area*base*(light==='bright'?1:light==='dim'?1.2:1.4)/100)*100;
 results.push({type:'light',title:'全室照明起點',metric:`約 ${lumens.toLocaleString()} lm`,description:`以 ${area.toFixed(1)} m²、${light==='bright'?'充足':light==='dim'?'偏少':'無自然光'}採光粗估多盞燈合計亮度，已包含現有主燈；依燈罩、牆色和實際感受調整。工作區另外補檯燈。`,query:room==='bathroom'?'damp rated LED light':'LED floor lamp dimmable'});
 return {area,results,furniture};
}
