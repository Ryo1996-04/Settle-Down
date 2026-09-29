export const rooms = [
  {id:'all',name:'全部空間',en:'All spaces',icon:'grid',description:'先確認租屋處已有什麼，再勾選你準備好的物品。'},
  {id:'bedroom',name:'臥室',en:'Bedroom',icon:'bed',description:'第一晚先睡好。床墊、床單與床架的尺寸要一起確認。'},
  {id:'bathroom',name:'浴室',en:'Bathroom',icon:'bath',description:'洗澡、盥洗與基本清潔，抵達當天就能用得上。'},
  {id:'kitchen',name:'廚房',en:'Kitchen',icon:'cup',description:'從一人份料理開始；合租時先和室友確認共用物品。'},
  {id:'living',name:'客廳',en:'Living room',icon:'sofa',description:'先留走道與活動空間，再添家具、照明和收納。'},
  {id:'study',name:'書房',en:'Study space',icon:'desk',description:'書桌、椅子與工作照明，準備一個能安心讀書的角落。'},
  {id:'laundry',name:'洗衣與日用',en:'Laundry & essentials',icon:'basket',description:'洗衣、打掃和生活小物，讓日常真正運轉起來。'}
];
// Planning allowances in USD, not retailer quotations. One purchase unit per row.
const raw = {
bedroom:[
['mattress','床墊','先量床架內徑；Twin 與 Twin XL 不同長。','arrival',200,'twin mattress'],
['frame','床架','有附床架可直接勾選；另外確認是否需要床箱。','week',100,'twin bed frame'],
['sheets','床包與床單','先確認床墊長、寬與厚度再選尺寸。','arrival',25,'twin xl sheet set'],
['pillow','枕頭與枕套','至少 1 組，枕套材質以易洗為主。','arrival',20,'bed pillow pillowcase'],
['comforter','棉被／被套','依當地氣候與室內暖氣調整厚度。','arrival',40,'twin comforter set'],
['protector','床墊保潔墊','依床墊尺寸挑選，可拆洗款較方便。','week',20,'waterproof mattress protector twin'],
['curtains','窗簾與免鑽孔窗簾桿','先量窗框並確認租約允許的安裝方式。','week',30,'blackout curtains tension rod'],
['hangers','衣架','先準備 10–20 支，再依衣櫃空間補買。','arrival',8,'clothes hangers 20 pack'],
['nightstand','床邊桌','小房間可先以既有收納箱代替。','later',25,'small bedside table'],
['underbed','床底收納盒','確認床底淨高與抽拉空間。','later',20,'under bed storage box']
],
bathroom:[
['towels','浴巾與毛巾','各 2 條，方便換洗輪替。','arrival',20,'bath towel set'],
['toiletries','牙刷、牙膏、洗髮精、沐浴乳','可先用旅行組，安頓後再補大瓶裝。','arrival',20,'toiletries essentials set'],
['toiletpaper','衛生紙','第一晚就需要，先買小包裝。','arrival',8,'toilet paper'],
['showercurtain','浴簾、內襯與掛鉤','有玻璃淋浴門可略過，先量寬度。','arrival',20,'shower curtain liner hooks'],
['bathmat','防滑浴室地墊','確認可清洗，並留意地板材質相容性。','week',12,'non slip bath mat'],
['bathclean','馬桶刷與浴室清潔用品','合租時先約定採買與清潔分工。','week',15,'toilet brush bathroom cleaner'],
['plunger','馬桶吸盤','在需要之前先備妥。','week',10,'toilet plunger'],
['bathbin','浴室垃圾桶與垃圾袋','小空間可選窄型或腳踏款。','week',12,'small bathroom trash can']
],
kitchen:[
['cookware','平底鍋與小湯鍋','確認爐具：電磁爐需要相容鍋底。','week',25,'nonstick cookware set'],
['dinnerware','碗、盤、杯與餐具','一人先準備各 2 件，室友不一定共用。','arrival',20,'dinnerware cutlery set'],
['knife','菜刀與砧板','生熟食分開處理；依台面大小挑選。','week',20,'kitchen knife cutting board'],
['dishsoap','洗碗精、海綿與廚房擦巾','確認洗碗機清潔劑與手洗洗碗精用途不同。','arrival',10,'dish soap sponge kitchen towels'],
['foodstorage','保鮮盒','可堆疊款省空間，確認微波使用標示。','week',15,'food storage containers'],
['ricecooker','小電鍋／飯鍋','常煮飯再買；先確認宿舍小家電規定。','later',30,'small rice cooker'],
['kettle','快煮壺','先確認是否已有，選美規插頭與當地電壓款。','week',20,'electric kettle 120v'],
['kitchenbin','廚房垃圾桶與袋','先量櫃邊空間，再選垃圾袋容量。','week',20,'kitchen trash can'],
['utensils','鍋鏟、湯勺與開罐器','不沾鍋搭配矽膠或木製工具。','week',12,'silicone kitchen utensils can opener'],
['dryingrack','瀝水架','確認水槽旁可用寬度。','later',15,'compact dish drying rack']
],
living:[
['floorlamp','落地燈','先確認客廳是否有主燈，避免佔用走道。','week',30,'floor lamp small room'],
['sofa','小型沙發／單椅','先量門寬、电梯與房間；可和室友分攤。','later',200,'small loveseat sofa'],
['sidetable','邊桌','先確認真正需要放置什麼，少買一張也可以。','later',20,'small side table'],
['shelf','收納層架','高櫃按說明固定，先詢問房東鑽牆規定。','later',45,'storage shelving unit'],
['doormat','門口地墊','先量門口寬度，避免卡住門扇。','week',12,'indoor doormat'],
['rug','地毯','確認地板可用的防滑墊材質。','later',45,'small area rug']
],
study:[
['desk','書桌','先看房東是否已附；深度至少能放下你的設備。','week',70,'small student desk'],
['chair','可調整書椅','先試坐；椅後保留拉出和通行空間。','week',70,'adjustable desk chair'],
['desklamp','檯燈','留意燈泡是否另購，搭配可調角度燈具。','week',20,'desk task lamp'],
['powerstrip','防突波延長線','確認安全認證與額定負載，勿串接延長線。','arrival',18,'UL listed surge protector'],
['chargers','充電器與轉接頭','核對設備輸入電壓；轉接頭不等於變壓器。','arrival',20,'USB C charger US plug'],
['stationery','筆記本、筆與資料夾','先準備上課用量，依課程需求補齊。','week',12,'student stationery supplies'],
['laptopstand','筆電架','確認桌深、螢幕高度與是否需外接鍵盤。','later',25,'adjustable laptop stand'],
['ethernet','網路線／路由器','先問房東或宿舍網路設備與自設規則。','later',35,'wifi router ethernet cable']
],
laundry:[
['hamper','洗衣籃／洗衣袋','需走樓梯或去洗衣房，可選好搬運的袋型。','week',15,'laundry hamper bag'],
['detergent','洗衣精','依洗衣機 HE 標示挑選，用量遵循包裝。','week',12,'HE laundry detergent'],
['dryerack','折疊曬衣架','先量展開尺寸和走道，依衣物洗標晾曬。','later',25,'folding clothes drying rack'],
['cleaning','掃把、畚箕與拖把','依木地板、磁磚或地毯選清潔方式。','week',25,'broom dustpan mop'],
['wipes','抹布與家用清潔劑','入住先擦拭常接觸表面。','arrival',10,'microfiber cleaning cloth household cleaner'],
['toolkit','捲尺與基本工具組','買家具前先量尺寸，組裝工具可能不附。','week',20,'tape measure basic tool kit'],
['firstaid','基本急救用品','備妥 OK 繃、紗布等，個人藥物另行確認。','arrival',15,'first aid supplies kit'],
['umbrella','雨傘與可重複使用購物袋','依當地天氣及通勤方式準備。','week',15,'umbrella reusable shopping bags']
]};
export const items = Object.entries(raw).flatMap(([room,rows])=>rows.map(([id,name,note,priority,estimate,query])=>({id,room,name,note,priority,estimate,query})));
export const priorities = {arrival:'抵達先買',week:'一週內補齊',later:'之後添購'};
export const merchants = ['Amazon','Target','Walmart','IKEA'];
export function searchUrl(store,query){const q=encodeURIComponent(query);return {Amazon:`https://www.amazon.com/s?k=${q}`,Target:`https://www.target.com/s?searchTerm=${q}`,Walmart:`https://www.walmart.com/search?q=${q}`,IKEA:`https://www.ikea.com/us/en/search/?q=${q}`}[store];}
export const products = [
{id:'lack',item:'sidetable',room:'living',store:'IKEA',name:'LACK 小型邊桌',subtitle:'35 × 35 × 35 cm · 白色',price:9.99,badge:'省空間小物',url:'https://www.ikea.com/us/en/p/lack-side-table-white-30514791/',reason:'35 cm 方形桌面適合放杯子、書或遙控器，輕巧尺寸能減少小客廳家具佔地。',caution:'高度只有 35 cm，比一般邊桌低；請核對座椅高度。這是桌子，不是椅凳。',dimensions:[.35,.35]},
{id:'hamper',item:'hamper',room:'laundry',store:'Target',name:'Brightroom 帆布長方洗衣籃',subtitle:'80 L · 米色',price:null,badge:'洗衣集中收好',url:'https://www.target.com/p/canvas-rectangle-laundry-hamper-brightroom-8482/-/A-89700574',reason:'開口式長方洗衣籃方便收集待洗衣物；適合房內已有固定洗衣角落的使用者。',caution:'80 L 不算小容量，先核對落地尺寸；需長距離搬運到洗衣房時，可改選洗衣袋。'},
{id:'vest',item:'mattress',room:'bedroom',store:'IKEA',name:'VESTERÖY 獨立筒床墊',subtitle:'Twin · 97 × 189 cm',price:249,badge:'小空間入門',image:'https://www.ikea.com/us/en/images/products/vesteroey-pocket-spring-mattress-firm-white__1142899_pe881396_s5.jpg',url:'https://www.ikea.com/us/en/p/vesteroey-pocket-spring-mattress-firm-white-80645006/',reason:'Twin 適合一人使用，能把更多空間留給書桌。這款為偏硬獨立筒，請依睡感需求試躺。',caution:'這是 Twin，不是 Twin XL。確認床架內徑、支撐底座與房間搬運路徑。',dimensions:[.97,1.89]},
{id:'slattum',item:'frame',room:'bedroom',store:'IKEA',name:'SLATTUM 布面床架',subtitle:'Twin · 深灰色',price:99,badge:'留白多一點',image:'https://www.ikea.com/us/en/images/products/slattum-upholstered-bed-frame-vissle-dark-gray__1259368_pe926665_s5.jpg',url:'https://www.ikea.com/us/en/p/slattum-upholstered-bed-frame-vissle-dark-gray-10571259/',reason:'單人床架搭配軟墊床頭，適合從零開始布置的臥室。單一包裝較方便安排搬運。',caution:'床墊另購，床架外徑大於床墊；下單前查看商品頁最新外徑與組裝需求。'},
{id:'micke',item:'desk',room:'study',store:'IKEA',name:'MICKE 精巧書桌',subtitle:'73 × 50 cm · 白色',price:69.99,badge:'小房間友善',image:'https://www.ikea.com/us/en/images/products/micke-desk-white__0736022_pe740349_s5.jpg',url:'https://www.ikea.com/us/en/p/micke-desk-white-30213076/',reason:'73 cm 寬的小桌面適合筆電與基本文具，含抽屜與理線孔，較容易放進小型房間。',caution:'桌面深 50 cm；大型螢幕或多螢幕配置可能不足，椅後仍需保留空間。',dimensions:[.73,.5]},
{id:'lamp',item:'desklamp',room:'study',store:'Target',name:'Room Essentials 充電檯燈',subtitle:'可調燈頸 · 黑色',price:20,badge:'讀書角落',url:'https://www.target.com/p/-/A-94909392',reason:'把工作照明集中在桌面，帶充電功能，適合想減少桌面配件的使用者。',caution:'燈泡不附。需另購相容 E26 燈泡，依燈具標示的瓦數限制選擇。'},
{id:'pots',item:'cookware',room:'kitchen',store:'Walmart',name:'Mainstays 7 件鍋具組',subtitle:'不沾鋁製鍋具 · 黑色',price:19.54,badge:'入門料理',url:'https://www.walmart.com/ip/3138901203',reason:'平底鍋與不同容量湯鍋，可涵蓋基本煎、煮料理，適合希望一次備齊基本鍋具的人。',caution:'先查看爐具相容性，尤其電磁爐；合租或很少下廚時也可只買一鍋。'},
{id:'towels',item:'towels',room:'bathroom',store:'Walmart',name:'Mainstays 6 件毛巾組',subtitle:'2 浴巾 + 2 手巾 + 2 小方巾',price:null,badge:'換洗剛剛好',url:'https://www.walmart.com/ip/1390391330',reason:'一次備妥不同用途的毛巾，兩條浴巾可交替換洗，入住第一晚就用得到。',caution:'購買前確認所選顏色的材質、洗滌方式與當地供貨。'},
{id:'bedsure',item:'comforter',room:'bedroom',store:'Amazon',name:'Bedsure Twin / Twin XL 被組',subtitle:'1 件被子 + 1 件枕套 · 森林綠',price:null,badge:'入住第一晚',url:'https://us.amazon.com/Bedsure-Comforter-Prewashed-Lightweight-Pillowcase/dp/B0D145689D',reason:'被子與枕套成組，適合一人床；可減少逐項搭配寢具的時間。',caution:'不含枕芯、床包與床單。冬季保暖需求依城市、暖氣與個人感受調整。'},
{id:'stand',item:'laptopstand',room:'study',store:'Amazon',name:'Amazon Basics 可調筆電桌與支架組',subtitle:'鋁製折疊支架 · 組合款',price:null,badge:'彈性工作',url:'https://us.amazon.com/Amazon-Basics-Adjustable-Laptop-Table/dp/B09MHB5ZXL',reason:'可收折設計方便搬家與整理；確認組合內容後，適合需要調整筆電高度的人。',caution:'商品頁為組合款，請核對你的筆電尺寸及實際選項，勿把支架單品與套組價格混用。'}
];
