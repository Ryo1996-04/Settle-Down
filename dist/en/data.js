export const rooms = [
  {id:'all',name:'All spaces',en:'All spaces',icon:'grid',description:'Check what your rental already includes, then mark the items you have ready.'},
  {id:'bedroom',name:'Bedroom',en:'Bedroom',icon:'bed',description:'Sleep well from night one. Match your mattress, sheets and bed frame sizes.'},
  {id:'bathroom',name:'Bathroom',en:'Bathroom',icon:'bath',description:'Shower, toiletries and cleaning basics you can use the day you arrive.'},
  {id:'kitchen',name:'Kitchen',en:'Kitchen',icon:'cup',description:'Start with simple meals for one. Check shared supplies with your roommates first.'},
  {id:'living',name:'Living room',en:'Living room',icon:'sofa',description:'Leave room to move, then add furniture, lighting and storage.'},
  {id:'study',name:'Study space',en:'Study space',icon:'desk',description:'Create a study corner with a desk, chair and focused lighting.'},
  {id:'laundry',name:'Laundry & essentials',en:'Laundry & essentials',icon:'basket',description:'Laundry, cleaning and everyday essentials that keep life running.'}
];
// Planning allowances in USD, not retailer quotations. One purchase unit per row.
const raw = {
bedroom:[
['mattress','Mattress','Measure the inside of your frame. Twin and Twin XL have different lengths.','arrival',200,'twin mattress'],
['frame','Bed frame','Mark this ready if a frame is included. Check whether a box spring is required.','week',100,'twin bed frame'],
['sheets','Fitted and flat sheets','Check mattress length, width and depth before choosing sheets.','arrival',25,'twin xl sheet set'],
['pillow','Pillow and pillowcase','Start with one set and an easy-care pillowcase.','arrival',20,'bed pillow pillowcase'],
['comforter','Comforter / duvet cover','Choose warmth to suit the local climate and indoor heating.','arrival',40,'twin comforter set'],
['protector','Mattress protector','Match your mattress size. A washable cover is easier to maintain.','week',20,'waterproof mattress protector twin'],
['curtains','Curtains and a tension rod','Measure the window and check which mounting methods your lease allows.','week',30,'blackout curtains tension rod'],
['hangers','Clothes hangers','Start with 10–20 hangers, then add more if your closet has room.','arrival',8,'clothes hangers 20 pack'],
['nightstand','Bedside table','In a small room, an existing storage box can work for now.','later',25,'small bedside table'],
['underbed','Under-bed storage','Check the clearance under the bed and room to slide boxes out.','later',20,'under bed storage box']
],
bathroom:[
['towels','Bath and hand towels','Two of each makes it easier to rotate between washes.','arrival',20,'bath towel set'],
['toiletries','Toothbrush, toothpaste and shower basics','Travel sizes are enough to start. Buy full sizes once settled.','arrival',20,'toiletries essentials set'],
['toiletpaper','Toilet paper','You will need it on night one. Start with a small pack.','arrival',8,'toilet paper'],
['showercurtain','Shower curtain, liner and hooks','Skip this if you have a glass shower door. Measure the width first.','arrival',20,'shower curtain liner hooks'],
['bathmat','Non-slip bath mat','Look for a washable mat with backing suitable for your floor.','week',12,'non slip bath mat'],
['bathclean','Toilet brush and bathroom cleaner','Agree on shared purchases and cleaning duties with roommates.','week',15,'toilet brush bathroom cleaner'],
['plunger','Toilet plunger','Have one ready before you need it.','week',10,'toilet plunger'],
['bathbin','Bathroom bin and bags','A slim or pedal bin works well in a compact bathroom.','week',12,'small bathroom trash can']
],
kitchen:[
['cookware','Frying pan and saucepan','Check your stove type. Induction requires compatible cookware.','week',25,'nonstick cookware set'],
['dinnerware','Dishes, cups and cutlery','Start with two of each per person. Roommates may not share dishes.','arrival',20,'dinnerware cutlery set'],
['knife','Kitchen knife and cutting board','Keep raw and cooked foods separate. Choose a board that fits your counter.','week',20,'kitchen knife cutting board'],
['dishsoap','Dish soap, sponge and kitchen towels','Dishwasher detergent and hand-washing dish soap are not interchangeable.','arrival',10,'dish soap sponge kitchen towels'],
['foodstorage','Food storage containers','Stackable containers save space. Check microwave-safe labels.','week',15,'food storage containers'],
['ricecooker','Small rice cooker','Useful if you cook rice often. Check dorm appliance rules first.','later',30,'small rice cooker'],
['kettle','Electric kettle','Check if one is included. Choose a US plug and local voltage rating.','week',20,'electric kettle 120v'],
['kitchenbin','Kitchen bin and bags','Measure the space beside your cabinets, then match bag capacity.','week',20,'kitchen trash can'],
['utensils','Spatula, ladle and can opener','Use silicone or wooden utensils with nonstick cookware.','week',12,'silicone kitchen utensils can opener'],
['dryingrack','Dish drying rack','Check the available width beside your sink.','later',15,'compact dish drying rack']
],
living:[
['floorlamp','Floor lamp','Check existing overhead lighting and keep walkways clear.','week',30,'floor lamp small room'],
['sofa','Small sofa or armchair','Measure doorways, elevators and the room. Consider sharing the cost.','later',200,'small loveseat sofa'],
['sidetable','Side table','Decide what needs a surface. You may not need another table.','later',20,'small side table'],
['shelf','Storage shelving','Anchor tall furniture as instructed. Ask your landlord about drilling.','later',45,'storage shelving unit'],
['doormat','Doormat','Measure the doorway and allow clearance for the door to open.','week',12,'indoor doormat'],
['rug','Area rug','Choose a rug pad compatible with your floor finish.','later',45,'small area rug']
],
study:[
['desk','Desk','Check if a desk is included. Make sure its depth fits your equipment.','week',70,'small student desk'],
['chair','Adjustable desk chair','Try it before buying. Leave space to pull out the chair and walk behind it.','week',70,'adjustable desk chair'],
['desklamp','Desk lamp','Choose an adjustable light and check whether a bulb is included.','week',20,'desk task lamp'],
['powerstrip','Surge-protected power strip','Check safety certification and load ratings. Do not daisy-chain power strips.','arrival',18,'UL listed surge protector'],
['chargers','Chargers and plug adapters','Check device input voltage. A plug adapter does not convert voltage.','arrival',20,'USB C charger US plug'],
['stationery','Notebooks, pens and folders','Start with basic class supplies and add what your courses require.','week',12,'student stationery supplies'],
['laptopstand','Laptop stand','Check desk depth, screen height and whether you need an external keyboard.','later',25,'adjustable laptop stand'],
['ethernet','Ethernet cable / router','Ask about included network equipment and rules for your own router.','later',35,'wifi router ethernet cable']
],
laundry:[
['hamper','Laundry hamper or bag','A carry bag is useful for stairs or trips to a shared laundry room.','week',15,'laundry hamper bag'],
['detergent','Laundry detergent','Check whether your washer needs HE detergent. Follow the package dosage.','week',12,'HE laundry detergent'],
['dryerack','Folding drying rack','Check its open footprint and walkway clearance. Follow garment care labels.','later',25,'folding clothes drying rack'],
['cleaning','Broom, dustpan and mop','Choose cleaning tools suitable for wood, tile or carpet.','week',25,'broom dustpan mop'],
['wipes','Cleaning cloths and household cleaner','Wipe frequently touched surfaces when you move in.','arrival',10,'microfiber cleaning cloth household cleaner'],
['toolkit','Tape measure and basic tools','Measure before buying furniture. Assembly tools may not be included.','week',20,'tape measure basic tool kit'],
['firstaid','Basic first-aid supplies','Keep bandages and gauze handy. Arrange any personal medication separately.','arrival',15,'first aid supplies kit'],
['umbrella','Umbrella and reusable shopping bags','Choose these based on local weather and how you get around.','week',15,'umbrella reusable shopping bags']
]};
export const items = Object.entries(raw).flatMap(([room,rows])=>rows.map(([id,name,note,priority,estimate,query])=>({id,room,name,note,priority,estimate,query})));
export const priorities = {arrival:'Arrival essentials',week:'First week',later:'Later on'};
export const merchants = ['Amazon','Target','Walmart','IKEA'];
export function searchUrl(store,query){const q=encodeURIComponent(query);return {Amazon:`https://www.amazon.com/s?k=${q}`,Target:`https://www.target.com/s?searchTerm=${q}`,Walmart:`https://www.walmart.com/search?q=${q}`,IKEA:`https://www.ikea.com/us/en/search/?q=${q}`}[store];}
export const products = [
{id:'lack',item:'sidetable',room:'living',store:'IKEA',name:'LACK compact side table',subtitle:'35 × 35 × 35 cm · White',price:9.99,badge:'Small-space pick',url:'https://www.ikea.com/us/en/p/lack-side-table-white-30514791/',reason:'A 35 cm square surface for a cup, book or remote, with a compact footprint for a small living room.',caution:'At 35 cm high, it is lower than many side tables. Check your seat height. It is a table, not a stool.',dimensions:[.35,.35]},
{id:'hamper',item:'hamper',room:'laundry',store:'Target',name:'Brightroom canvas laundry hamper',subtitle:'80 L · Beige',price:null,badge:'Laundry corner',url:'https://www.target.com/p/canvas-rectangle-laundry-hamper-brightroom-8482/-/A-89700574',reason:'An open rectangular hamper for collecting laundry in a dedicated corner of your room.',caution:'80 L is a generous capacity. Check the footprint; a laundry bag may be easier for longer trips.'},
{id:'vest',item:'mattress',room:'bedroom',store:'IKEA',name:'VESTERÖY pocket-spring mattress',subtitle:'Twin · 97 × 189 cm',price:249,badge:'Compact comfort',image:'https://www.ikea.com/us/en/images/products/vesteroey-pocket-spring-mattress-firm-white__1142899_pe881396_s5.jpg',url:'https://www.ikea.com/us/en/p/vesteroey-pocket-spring-mattress-firm-white-80645006/',reason:'A Twin leaves more room for a desk when sleeping solo. This firm pocket-spring model is worth trying in person to check comfort.',caution:'This is Twin, not Twin XL. Check frame dimensions, support requirements and the route into your room.',dimensions:[.97,1.89]},
{id:'slattum',item:'frame',room:'bedroom',store:'IKEA',name:'SLATTUM upholstered bed frame',subtitle:'Twin · Dark gray',price:99,badge:'Room to breathe',image:'https://www.ikea.com/us/en/images/products/slattum-upholstered-bed-frame-vissle-dark-gray__1259368_pe926665_s5.jpg',url:'https://www.ikea.com/us/en/p/slattum-upholstered-bed-frame-vissle-dark-gray-10571259/',reason:'A single bed frame with a padded headboard for furnishing from scratch. A single package makes transport easier to plan.',caution:'Mattress sold separately. The frame is larger than the mattress; check overall dimensions and assembly requirements before ordering.'},
{id:'micke',item:'desk',room:'study',store:'IKEA',name:'MICKE compact desk',subtitle:'73 × 50 cm · White',price:69.99,badge:'Small-room friendly',image:'https://www.ikea.com/us/en/images/products/micke-desk-white__0736022_pe740349_s5.jpg',url:'https://www.ikea.com/us/en/p/micke-desk-white-30213076/',reason:'A 73 cm-wide desk for a laptop and basic supplies, with a drawer and cable outlet to keep a small room organized.',caution:'The top is 50 cm deep and may be too small for a large or multi-monitor setup. Leave room behind the chair.',dimensions:[.73,.5]},
{id:'lamp',item:'desklamp',room:'study',store:'Target',name:'Room Essentials charging task lamp',subtitle:'Adjustable neck · Black',price:20,badge:'Study corner',url:'https://www.target.com/p/-/A-94909392',reason:'Focused desk lighting with charging functionality for a less cluttered workspace.',caution:'Bulb not included. Buy a compatible E26 bulb within the wattage limit shown on the lamp.'},
{id:'pots',item:'cookware',room:'kitchen',store:'Walmart',name:'Mainstays 7-piece cookware set',subtitle:'Nonstick aluminum · Black',price:19.54,badge:'Cooking basics',url:'https://www.walmart.com/ip/3138901203',reason:'A frying pan and several pot sizes cover basic everyday cooking in a single starter set.',caution:'Check stove compatibility, especially induction. One pan may be enough if you share supplies or rarely cook.'},
{id:'towels',item:'towels',room:'bathroom',store:'Walmart',name:'Mainstays 6-piece towel set',subtitle:'2 bath towels + 2 hand towels + 2 washcloths',price:null,badge:'Easy to rotate',url:'https://www.walmart.com/ip/1390391330',reason:'Different towel sizes in one set, with two bath towels to rotate between washes. Useful from your first night.',caution:'Check the selected color, fabric, care instructions and local availability before buying.'},
{id:'bedsure',item:'comforter',room:'bedroom',store:'Amazon',name:'Bedsure Twin / Twin XL comforter set',subtitle:'1 comforter + 1 pillowcase · Forest green',price:null,badge:'First-night pick',url:'https://us.amazon.com/Bedsure-Comforter-Prewashed-Lightweight-Pillowcase/dp/B0D145689D',reason:'A comforter and matching pillowcase for a single bed, with fewer pieces to coordinate separately.',caution:'Pillow, fitted sheet and flat sheet not included. Adjust winter bedding for your climate, heating and comfort.'},
{id:'stand',item:'laptopstand',room:'study',store:'Amazon',name:'Amazon Basics adjustable laptop table and stand bundle',subtitle:'Folding aluminum stand · Bundle',price:null,badge:'Flexible workspace',url:'https://us.amazon.com/Amazon-Basics-Adjustable-Laptop-Table/dp/B09MHB5ZXL',reason:'A folding design for easy moving and storage. Check the bundle contents if you need to adjust laptop height.',caution:'This listing is a bundle. Verify laptop compatibility and selected options; standalone and bundle prices are different.'}
];
