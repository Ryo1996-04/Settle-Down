// Generate a static English edition from the shared implementation.
// All translations are reviewed in locales/en.json; IDs, rules and saved state stay shared.
const fs=require('fs'),path=require('path');
const dictionary=JSON.parse(fs.readFileSync(path.join(__dirname,'locales/en.json'),'utf8'));
const keys=Object.keys(dictionary).sort((a,b)=>b.length-a.length);
const expression=new RegExp(keys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
const directory=path.join(__dirname,'dist/en');fs.mkdirSync(directory,{recursive:true});
let errors=[];
for(const name of ['index.html','data.js','app.js','planner.js','recommendations.js']){
 let content=fs.readFileSync(path.join(__dirname,'dist',name),'utf8').replace(expression,key=>dictionary[key]);
 if(name==='index.html')content=content.replace('lang="zh-Hant"','lang="en"').replace('href="styles.css"','href="/styles.css"').replace('src="app.js"','src="/en/app.js"');
 if(name==='planner.js')content=content.replaceAll("'./vendor/","'../vendor/");
 // Keep the language switch self-labelled in both languages, in either edition.
 content=content.replace('value="zh">Traditional Chinese</option>','value="zh">繁體中文</option>');
 const audit=content.replaceAll('繁體中文','').replace('Language / 語言','Language');
 const residual=audit.split('\n').filter(line=>/[\u3400-\u9fff]/.test(line));
 if(residual.length)errors.push({name,untranslated:residual});
 fs.writeFileSync(path.join(directory,name),content);
}
if(errors.length){console.error(JSON.stringify(errors,null,2));process.exit(1)}
console.log('English edition generated: 5 files; no untranslated Chinese text.');
