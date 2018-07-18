const fs = require('fs');
const str = `
Abby: 娇小可爱的女人，文静，令人喜爱，个性甜美。 
Aimee: 意为可爱的人。 
Alisa: 快乐的姑娘的意思。 
Angelia: 天使，传送讯息者。Angelia被描绘为美丽，娇小的女子若不是有著甜美温柔的个性，即是活泼莽撞的女孩。 
Amanda: 其词根表示爱的意思。表示可爱的人。人们认为她保守美丽又纤细，甜美富有 
Anne: 善良、优雅、喜欢帮助人的女孩.皇室的皇后、公主很多都是这个名字或者ANNIE，许多平民也都很喜欢这个名字。 
Carrie: 给人的感觉是可爱，聪明的金发女孩， 可能有两种极端不同的个性；一个是好玩外向的女孩，另一个则是安静好独处的女子。(同Kerry) 
Cassie: 可爱，受欢迎的大学女生，快乐而甜美。 
Daisy: 雏菊。森林来的"金发女孩"，甜美可爱。 
Fern 寓意勤勉好学又文静 
Alice 寓意高贵 
Bunny 代表多姿多彩 友善可亲 
Belle 寓意优雅漂亮 开朗热情 
Estelle 独立 友好 温馨 
Jasmine 具有花朵和芬芳的意向 
Iris 高挑 苗条 细致 理想主义者 
Emily 娇小 可爱 文静 
Ailsa艾丽莎 
Aimee艾米 
Alice爱丽丝 
Alina艾琳娜 
Allison艾莉森 
Amanda阿曼达 
Amy艾美 
Amber安伯 
Anastasia阿纳斯塔西娅 (昵称Stacey) 
Andrea安德莉亚 
Angela安吉拉 
Angelia安吉莉亚 
Angelina安吉莉娜 
Ann安 (Hannah的英文形式) 
Anne安妮 (同Ann) 
Annie安妮 (Ann的昵称) 
Anita安尼塔 (Ann的西班牙写法) 
Ariel艾莉尔 
April阿普里尔 
Ashley艾许莉 
Aviva阿维娃 (同Avivahc和Avivi) 
Barbara笆笆拉 
Beata贝亚特 
Beatrice比阿特丽斯 (同Beatrix) 
Becky贝基 (Rebecca的昵称) 
Betty贝蒂 (Elizabeth的昵称) 
Blanche布兰奇 
Bonnie邦妮 
Brenda布伦达 (Brandon及Brendan的女性形式) 
Camille卡米尔 
Candice莰蒂丝 
Carina卡瑞娜 
Carmen卡门 
Carol凯罗尔 
Caroline卡罗琳 
Carry凯丽 
Carrie凯莉 (Carol及Caroline的昵称，同Kerry) 
Cassandra卡桑德拉 
Charlene沙琳 (同Caroline,Charlotte) 
Charlotte夏洛特 
Cherry切莉 
Cheryl雪莉尔 (Charlotte的另一形式，亦同Sheryl) 
Chris克莉丝 （Christine，Kristine的简写，同Kris） 
Christina克里斯蒂娜 (同Christine) 
Christine克里斯汀 
Christy克里斯蒂 (Christine的简写) 
Cindy辛迪 (Cinderella,Cynthia,Lucinda的昵称) 
Claudia克劳迪娅 
Clement克莱门特 
Cloris克劳瑞丝 
Connie康妮 (Constance的昵称) 
Constance康斯坦斯 
Cora科拉 
Corrine科瑞恩 
Crystal科瑞斯特尔 (同Krystal) 
Daisy戴茜 
Daphne达芙妮 
Darcy达茜 
Debbie黛比 (Deborah，Debra的昵称) 
Deborah黛博拉 
Debra黛布拉 
Demi黛米 
Diana黛安娜 
Dolores德洛丽丝 
Donna堂娜 
Doris桃瑞丝 
Edith伊迪丝 
Editha伊迪萨 
Elaine伊莱恩 
Eleanor埃莉诺 
Elizabeth伊丽莎白 
Ella埃拉 
Ellen爱伦 
Ellie艾莉 (Eleanor, Ellen的昵称) 
Estelle爱斯特尔 
Esther爱丝特 
Eudora尤杜拉 
Eva伊娃 
Eve伊芙 
Fannie芬妮 (同Frances,Fanny) 
Fiona菲奥纳 
Frances弗郎西丝 (Francis的女性形式) 
Frederica弗雷德里卡 
Frieda弗里达 
Gina吉娜 (Angelina，Regina的昵称) 
Gillian吉莉安 (Juliana的异体) 
Gladys格拉蒂丝 (Claudia的威尔斯形式) 
Gloria格罗瑞娅 
Grace格瑞丝 
Greta格瑞塔 (Margaret的昵称) 
Gwendolyn格温多琳 
Hannah汉娜 
Helena海伦娜 
Hellen海伦 (亦作：Helen) 
Hebe赫柏 
Heidi海蒂 (Adalheid, Adelaide的昵称) 
Ingrid英格丽德 
Ishara爱沙拉 
Irene艾琳 
Iris艾丽丝 
Ivy艾维 
Jacqueline杰奎琳 
Jamie詹米 (James的女性形式) 
Jane简 (John的女性名词) 
Janet珍妮特 (同Jane) 
Jean姬恩 (Jane的苏格兰形式) 
Jessica杰西卡 (Jessee的女子形式) 
Jessie杰西 (Jasmine, Jessica的昵称; Janet的苏格兰形式) 
Jennifer詹妮弗 
Jenny詹妮 (同Jennie；Jane,Jennifer的昵称) 
Jill姬尔 (Gillian的昵称) 
Joan琼 (同Jane；John的女性形式) 
Joanna乔安娜 
Jocelyn乔斯林 
Josephine约瑟芬 
Josie乔茜(同Josephine) 
Joy乔伊 
Joyce乔伊斯 (Josephine的昵称) 
Judith朱迪丝 
Judy朱蒂 (Judith的昵称) 
Julia朱莉娅 
Juliana朱莉安娜 
Julie朱莉 
June朱恩 
Kitty基蒂 (Catherine的昵称) 
Lareina莱瑞拉 
Laura劳拉 (Lawrence的女性形式) 
Lena莉娜 (Helena的昵称) 
Lydia莉迪娅 
Lillian莉莲 (亦作lilian) 
Linda琳达 
Lisa丽莎 (Elizabeth的别名) 
Liz莉兹 (Elizabeth的昵称) 
Vanessa温妮莎 
Vicky维姬 (Victoria的昵称) 
Victoria维多利亚 
Vivian薇薇安 
Wanda旺达 
Wendy温蒂 (Gwendolyn,Wanda的昵称) 
Winnie温妮 
Yolanda尤兰达 
Yvette伊薇特 (同Yvonne) 
Yvonne伊温妮 
Zoey佐伊 (同Zoe) 
Beenle 冰清玉洁的名字 10级 
Icey 就是“冰”+y，纯净！对不对？ 10级 
Angle 天使！神圣之名！活泼者请找Fairy 8级 
Diana 黛安娜，不想与女皇同名吗？ 6级 
Rose 玫瑰，浓郁馨香之名。 7级 
Barbie 芭比，玲珑可爱的娃娃之名 7级 
Moon 月，月亮公主，宁静的银…… 9级 
Snowy “雪”+y，比白雪公主Snowhite更可爱！ 8级 
Christal 水晶，晶晶亮亮，不好吗？ 9级 
Bubles 泡泡，可爱的名字，享受风中的飘浮。 7级 
Colorfully 多彩的，就像彩虹与极光，绚烂。 6级 
Purplegrape 紫葡萄，幽静典雅配晶亮洁净，好名字呀~~ 10级 
Silverdew 银露珠，这是宁静如月配莹美纯洁，也很美。 10级 
Greenle “绿”+el,碧是个好字眼，不也代表绿？ 9级 
Star 星，那也有可爱又静谧，闪烁着智慧之光。 9级 
Fairy 仙女，不过是小而可爱的那种。9级 
Dreamy “梦”+y，梦幻是多美、多神秘！幻想着，来吧！ 6级 
Flower 花，缤纷无比，是性格内向的好选择。 8级 
Magical “魔法”+al,好棒！魔力圣术！魔女们，出动把！ 9级 
Sweety “甜”+y,也是可爱这首选，蜜一般lovely！ 7级 
Yilia 伊丽娅，典雅之名，宁如神女。 6级 
Maria 玛丽亚，圣母之名，活泼勇敢的月亮公主之名。 6级 
Nancy 高尚、温和、优雅之意 
Annabelle 亲切的、美丽的、可爱的 
Jodie 文静、头发柔软的、纯洁 
Janice 慈祥、上帝的恩宠、温柔 
Qearl 像珍珠一般、海的女儿 
SABRINA 
(拉丁语)来自边界。人们认为SBRINA是美丽性感的女子，热情而俏皮。 
SANDRA 
Alexandra的简写。Sandra这个名字给人两种印象，一种是聪明的金发女子，坚决有自主权；另一种则是丰满的女人，声音甜美个性随和。 
SAMANTHA 
(亚拉姆语)"倾听者。SAMANTHA给人两种印像：一个是聪明，美丽的女子，另一个则是难缠的中年妈妈。 
SAMMY 
SAMSON,SAMUEL的简写。SAMMY给人的直接印象来自Sammy Davis,Jr。人们将SAMMY看做纤细的黑人明星，风趣多才多艺。 
SANDY 
SANDRA的简写。SANDY被形容为年轻的金发女子，聪明，好动，爱玩，善良且平易近人。 
SARAH 
(希伯来)"公主"。 Sarah这个名字让人联想到矮小，美丽，卷发的女孩，保守又友善。 
SELMA 
(斯甘地拉维亚语)庄严的保护着。人们说SELMA是个适合年长，次等阶级，自以为无所不知的南方女人名字。 
SELINA 
月光之意。Selina给人的印象是个性开朗，面貌柔美的女子，温柔娴熟，但有人认为她的个性阴晴不定难以捉摸。 
SERENA 
(拉丁)"温和；沉着的"。SERENA给人两种不同的印象：可爱活泼充满惊喜的女孩；或是文静胆怯，虔诚的信徒。 
SHARON 
(希伯来文)同Sarah。大部份人期待的Sharon是娇小可爱，中层阶级的金发女子，友善，甜美，聪慧。有人则认为Sharon是害羞迟钝的。 
SHELLEY 
(老式英语)意为州的牧场，同SHEILA,SHELBY,SHIRLEY。SHELLEY给人两种不同的印象：一个是可爱聪明，眼高于人的中学美少女；或是愚蠢又矮又胖多话的女孩。 
SHERRY, 
CHERIE同CHARLOTTE,CHER,SARAH,SHIRLEY.大部份人把SHERRY想成可爱娇小，圆润的金发女孩，友善，逢场作戏，然而却十分健忘。 
SHIRLEY 
(老式英语)"来自耀眼的牧场"。人们将SHIRLEY描绘成灰发版的Shirley Temple-可爱，甜美，卷发，娃娃脸，有点过重。 
SILVIA 
(拉丁文)"来自森林"，在多数人的心里，SILVIA是个美丽富有的女人，冷静，循规蹈矩，精明的女商人。 
STACY 
ANASTASIA的简称。STACY被形容是娇小可爱，年轻的红发女子，活泼，外向喜欢开玩笑。 
STELLA 
(拉丁)"星星"之意；ESTELLE的简写。大部份人认无STELLA是穿著朴素，古板，努力的工作者，反应迟钝号发牢骚者。 
STEPHANIE 
(希腊)皇冠的意思。STEPHEN的女性型式。大部份的人认为STEPHANIE是纤细，美丽的女性，世故非常自我-模特儿，大概是吧。有些人认为她是非常善良的女孩。 
SUE 
Susan的简写。Sue给人两种不同的印象：一是传统家居的美国女孩，既甜美又体贴；或是美丽，有着致命吸引力的女人。 
SUNNY 
(英文)"聪颖，快乐的"：SONIA的简写。如同名字所给的意思，SUNNY被视做聪颖快乐外向，令人喜爱，性感但有点没大脑，喜欢参加派对的女孩。 
scalett.斯佳丽,乱世佳人女主角,很坚强美丽的女孩子 
Carina卡瑞娜 Cathy凯茜 Chris克莉丝 Vanessa温妮莎 Nina尼娜 
Wendy温蒂 (Gwendolyn,Wanda的昵称) Sandy桑迪 
catherine 凯瑟琳 
涵义:纯洁的 
nicole 尼科尔 
涵义:胜利者 
linda 琳达 
涵义:美丽的人 
99年人们最爱取的名字 
Girl's Names 女孩名字 
1.Emily 爱米丽 
2.Sarah 莎拉 3.Brianna 布丽娜 4.Samantha 莎曼莎 5.Hailey 海莉 6.Ashley 阿希莉 7.Kaitlyn 卡特琳 8.Madison 麦笛逊 9.Hannah 汗娜 10.Alexis 亚莉克丝 
AMANDA 
(拉丁名)其词根表示爱的意思。AMANDA表示可爱的人。人们认为她保守美丽又纤细，甜美富有。 
BECKY 
REBECCA的简写。BECKY被形容是可爱的顽皮姑娘，注重世俗之物，文静又快乐。 
CANDICE 
(希腊语)，闪烁耀眼的。CANDICE令人想到身材高挑，美丽无瑕的女子，外向，直率，独立，而甜美。 
CARRY 
Carrie是Carol，及Caroline的简写(同Kerry)。Carrie给人的感觉是可爱，聪明的金发女孩， 可能有两种极端不同的个性；一个是好玩外向的女孩，另一个则是安静好独处的女子。 
CRYSTAL 
(拉丁)"清澈如水晶"的意思。(同KRYSTAL)。CHRISTAL被描绘为富有，高挑，美丽的女子，非常有天份. 
EMMA 
(古德文)"全球的，护士的"，EMMA被看做是丰满，平常，年长的居家型女人，快乐，文静，教养良好，个性依赖。 
FIONA FANNY, 
Fannie同Frances,Fanny被描绘为黑发，丰润的女孩，快乐，风趣，非常活泼 
GLORIA 
(拉丁)"光辉"的意思。对大部份人说GLORIA是美丽气质优雅的金发女孩，受宠的大小姐。但对某些人说，GLORIA是文静，快乐，中层阶级的淑女。 
HEBE 
希腊语，意为『春天之神』其变形为Hebbe。 
JAMIE 
(法语)"我爱"；JAMES的女性型式。JAMIE是个受欢迎的中性名字。名为JAMIE的女孩通常是可爱，感性顽皮。 
JESSIE 
为Jasmine，Jessica的简写;Janet的苏格兰形式。Jessie是个中性名字令人想起可爱运动型的女孩，男孩子气，爱玩，善良，且聪明。 
KITTY 
kitty，是Catherine的简写，当人们听到Kitty时所想到的是可爱的红发女孩，性感，爱玩，坚强。 
LYDIA 
原来是小亚细亚地区的一个地名。古代有一位国王叫Croesus，使这个地方成为很繁荣的地区。后来，他的王国于公元前546年崩溃。Lydia，成为人民后，其义为『利迪亚地区的姑娘』。简称为Liddy。 
MAGGIE 
为MARGARET的简写。MAGGIE被认为是古板，身强体壮，满脸雀斑的爱尔兰女子，友善，风趣，大胆，独立，又大嗓门。 
MANDY 
为AMANDA,MANDA,MELINDA的简写。人们将MANDY描绘为年轻，可爱，精力充沛的女孩，外向且风趣。 
MIRANDA 
(珍贵的赞美)大部份人将Miranda描绘为高大美丽的异国女子，高贵神秘甚至不可一世。 
NINA 
(西班牙)"女孩"之意。大部份人心目中的NINA是娇小美丽的金发女子，优雅，具异国风味，文静，冷默且独立。有些人则认为NINA是迷人随和的女孩。 
SARAH 
(希伯来)"公主"。 Sarah这个名字让人联想到矮小，美丽，卷发的女孩，保守又友善。 
SELINA 
月光之意。Selina给人的印象是个性开朗，面貌柔美的女子，温柔娴熟，但有人认为她的个性阴晴不定难以捉摸。 
SHERRY, 
CHERIE同CHARLOTTE,CHER,SARAH,SHIRLEY.大部份人把SHERRY想成可爱娇小，圆润的金发女孩，友善，逢场作戏，然而却十分健忘。 
SUNNY 
(英文)"聪颖，快乐的"：SONIA的简写。如同名字所给的意思，SUNNY被视做聪颖快乐外向，令人喜爱，性感但有点没大脑，喜欢参加派对的女孩
`;

const reg = /[a-zA-Z]+/g;

let value = str.match(reg).map(v => {
  return v.substring(0, 1).toUpperCase() + v.substring(1).toLowerCase();
});

value = value.filter((v, i) => {
  return value.indexOf(v) === i;
}).sort();
const sss = JSON.stringify(value);
const finalstr = sss.replace(/"/g, "'");

fs.writeFile('en_name.json', finalstr, 'utf8', () => {
  console.log('Done!');
});



