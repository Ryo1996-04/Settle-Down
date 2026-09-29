export const beds=[{name:'Twin',w:.965,l:1.905},{name:'Twin XL',w:.965,l:2.032},{name:'Full',w:1.372,l:1.905},{name:'Queen',w:1.524,l:2.032}];
export function placement(width,length,w,l,side=.6,foot=.6){
  for(const rotate of [false,true]){const fw=rotate?l:w,fl=rotate?w:l;if(fw+side<=width+.00001&&fl+foot<=length+.00001)return {x:0,y:0,w:fw,l:fl,rotate};}return null;
}
export function analyze(plan){
 const {width,length,room,occupants,height,light}=plan;
 if(!Number.isFinite(width)||!Number.isFinite(length)||width<1||length<1||width>20||length>20)throw Error('Enter clear interior width and length between 1 and 20 meters.');
 if(!['bedroom','bathroom','kitchen','living','study','laundry'].includes(room))throw Error('Choose a room purpose.');
 if(![1,2].includes(occupants)||!Number.isFinite(height)||height<100||height>230||!['bright','dim','none'].includes(light))throw Error('Check occupants, height and daylight settings.');
 const area=width*length,results=[];let furniture=null;
 if(room==='bedroom'){
   let options=occupants===2?[beds[3],beds[2]]:height>185?[beds[1],beds[3]]:area>=12?[beds[2],beds[0],beds[1]]:[beds[0],beds[1]];
   if(height>185)options=options.filter(b=>b.l>=2);
   const fit=options.map(b=>({b,p:placement(width,length,b.w+.16,b.l+.16,occupants===2?1.2:.6,.6)})).find(x=>x.p);
   if(fit){furniture={...fit.p,label:fit.b.name+' frame allowance'};results.push({type:'bed',title:'Suggested mattress size',metric:fit.b.name,description:`Mattress approx. ${Math.round(fit.b.w*100)} × ${Math.round(fit.b.l*100)} cm. Allow an extra 16 cm in frame width and length, plus ${occupants===2?'clearance on both sides of':'clearance on one side of'} 60 cm and 60 cm at the foot. ${fit.p.rotate?'A 90° rotation fits better.':''}`,query:`${fit.b.name} mattress`,product:fit.b.name==='Twin'?'vest':null});}
   else results.push({type:'bed',title:'Mattress size',metric:'Not enough space',description:'No candidate bed fits the occupants, height and clearance requirements. Remeasure usable space or move existing furniture before ordering.',query:null});
   const deskFit=furniture?placement(width-furniture.w-.6,length,.73,.5,0,.8)||placement(width,length-furniture.l-.6,.73,.5,0,.8):null;
   results.push({type:'desk',title:'Study corner',metric:deskFit?'73 × 50 cm':'Keep the walkway clear',description:deskFit?'A compact MICKE desk may also fit with 80 cm behind the chair. Check doors, windows, wardrobe access and outlets.':'A fixed desk is not recommended in this footprint. Consider a shared study space or measure for a folding desk.',query:deskFit?'MICKE desk 73 50':'folding desk',product:deskFit?'micke':null});
 }else{
   const config={study:{title:'Suggested desk',w:.73,l:.5,side:0,foot:.8,label:'73 × 50 cm',query:'small desk 73 50 cm',product:'micke'},living:{title:'Compact loveseat',w:1.5,l:.85,side:.6,foot:.6,label:'Up to 150 cm wide',query:'small loveseat 59 inch',product:null},kitchen:{title:'Rolling kitchen cart',w:.6,l:.4,side:0,foot:.9,label:'60 × 40 cm max.',query:'kitchen cart 24 inch small',product:null},bathroom:{title:'Narrow storage shelf',w:.35,l:.25,side:0,foot:.7,label:'35 × 25 cm max.',query:'narrow bathroom shelf 14 inch',product:null},laundry:{title:'Folding drying rack',w:1,l:.6,side:.3,foot:.6,label:'100 × 60 cm max.',query:'folding drying rack compact',product:null}}[room];
   const fit=placement(width,length,config.w,config.l,config.side,config.foot);if(fit)furniture={...fit,label:config.title};
   results.push({type:'furniture',title:config.title,metric:fit?config.label:'Not enough clear space',description:fit?`Based on the furniture footprint, leave ${Math.round(config.foot*100)} cm in front. This assumes an empty room; subtract fixed fixtures and door or cabinet swing areas.`:'This footprint cannot accommodate the furniture and circulation space. Adjust the usable area first.',query:fit?config.query:null,product:fit?config.product:null});
   const tips={study:['Study lighting','Add task lighting','Place your lamp opposite your writing hand to reduce shadows. Watch for glare and screen reflections.','desk task lamp','lamp'],living:['Where to start','Lighting and storage','Add a floor lamp if there is no overhead light. Discuss sofas and tables with roommates before buying.','floor lamp small room',null],kitchen:['Check your stove','Cookware compatibility','Check the stove type before buying cookware. Induction requires a compatible base.','induction compatible cookware',null],bathroom:['Bathroom lighting','Check moisture ratings','Choose fixtures rated for their intended environment. Contact your landlord before replacing fixed lighting.','damp rated bathroom light',null],laundry:['Carrying your laundry','A portable laundry bag','A lightweight folding laundry bag is often easier for shared laundry rooms or stairs.','laundry bag handles',null]}[room];
   results.push({type:'use',title:tips[0],metric:tips[1],description:tips[2],query:tips[3],product:tips[4]});
 }
 const base=room==='study'||room==='kitchen'?200:120;const lumens=Math.ceil(area*base*(light==='bright'?1:light==='dim'?1.2:1.4)/100)*100;
 results.push({type:'light',title:'Room lighting starting point',metric:`Approx. ${lumens.toLocaleString()} lm`,description:`For ${area.toFixed(1)} m² with ${light==='bright'?'Bright daylight':light==='dim'?'Limited daylight':'No daylight'}, this is the estimated total output of all lamps, including existing overhead lights. Adjust for shades, wall colors and comfort. Add task lighting where you work.`,query:room==='bathroom'?'damp rated LED light':'LED floor lamp dimmable'});
 return {area,results,furniture};
}
