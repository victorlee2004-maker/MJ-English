// ============================================================
//  10篇分级英语学习材料数据库
// ============================================================
const MATERIALS_DB = [
  {
    id: 1,
    title: "自我介绍",
    level: "A1",
    levelColor: "#4CAF50",
    topic: "个人生活",
    tags: ["自我介绍", "家庭", "梦想"],
    wordCount: 35,
    difficulty: 1,
    text: `Hello! My name is Tom. I am a student. I am from China. I live in Beijing. I am 12 years old.

I have a happy family. My father is a teacher. My mother is a doctor. They work hard. I have a younger sister. Her name is Lily. She is 8 years old. She is in Grade 2.

Every morning, I wake up at 7 o'clock. I brush my teeth. I eat breakfast. I go to school by bus. I like my school. My favorite subject is English. I also like playing basketball with my friends after school.

I have a dream. I want to be a great translator in the future. I want to travel around the world.

This is me. Nice to meet you!`,
    grammar: [
      "Be动词的三个人称形式——I am / you are / he/she/it is",
      "一般现在时（第一人称 & 第三人称单数）——I eat breakfast, she is 8 years old, they work hard",
      "人称代词主格——I, you, he, she, it, we, they",
      "基本句型 S+V+C / S+V+O——I am a student, I like English"
    ],
    vocab: [
      {word:"student", phonetic:"/ˈstjuːdənt/", pos:"n.", meaning:"学生；（尤指）中学生；研究者，学者"},
      {word:"teacher", phonetic:"/ˈtiːtʃər/", pos:"n.", meaning:"教师；老师；导师；教练"},
      {word:"doctor", phonetic:"/ˈdɒktər/", pos:"n.", meaning:"医生；大夫；博士（学位）"},
      {word:"family", phonetic:"/ˈfæməli/", pos:"n.", meaning:"家庭；家族；亲属；子女 adj. 家庭的；一家用的"},
      {word:"sister", phonetic:"/ˈsɪstər/", pos:"n.", meaning:"姐妹；姐姐/妹妹；（称呼）姑娘；修女"},
      {word:"breakfast", phonetic:"/ˈbrekfəst/", pos:"n.", meaning:"早餐；早饭 v. 吃早餐"},
      {word:"school", phonetic:"/skuːl/", pos:"n.", meaning:"学校；上学；学院；学派 v. 教育；训练"},
      {word:"subject", phonetic:"/ˈsʌbdʒɪkt/", pos:"n.", meaning:"科目；学科；主题；话题；实验对象"},
      {word:"basketball", phonetic:"/ˈbɑːskɪtbɔːl/", pos:"n.", meaning:"篮球（运动）"},
      {word:"friend", phonetic:"/frend/", pos:"n.", meaning:"朋友；友人；支持者 v. 加为好友"},
      {word:"dream", phonetic:"/driːm/", pos:"n.", meaning:"梦想；梦 v. 做梦；梦想；想象"},
      {word:"translator", phonetic:"/trænsˈleɪtər/", pos:"n.", meaning:"翻译员；译者；翻译器/翻译软件"},
      {word:"world", phonetic:"/wɜːld/", pos:"n.", meaning:"世界；地球；领域；人世；众生"},
      {word:"I", phonetic:"/aɪ/", pos:"pron.", meaning:"我（主格）"},
      {word:"my", phonetic:"/maɪ/", pos:"pron.", meaning:"我的（形容词性物主代词）"},
      {word:"you", phonetic:"/juː/", pos:"pron.", meaning:"你；你们（主格/宾格）"},
      {word:"he", phonetic:"/hiː/", pos:"pron.", meaning:"他（主格，指男性）"},
      {word:"she", phonetic:"/ʃiː/", pos:"pron.", meaning:"她（主格，指女性）"},
      {word:"it", phonetic:"/ɪt/", pos:"pron.", meaning:"它（主格/宾格，指事物或动物）"},
      {word:"we", phonetic:"/wiː/", pos:"pron.", meaning:"我们（主格）"},
      {word:"they", phonetic:"/ðeɪ/", pos:"pron.", meaning:"他们/她们/它们（主格）"},
      {word:"our", phonetic:"/aʊər/", pos:"pron.", meaning:"我们的（形容词性物主代词）"}
    ],
    listeningFocus: [
      "听力识别：区分 I am 和 she is、he is 的主语切换",
      "抓住关键信息：年龄、职业、地点、日常活动"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 2,
    title: "我的一天",
    level: "A1",
    levelColor: "#4CAF50",
    topic: "日常生活",
    tags: ["日常作息", "学校生活", "时间管理"],
    wordCount: 45,
    difficulty: 2,
    text: `My Daily Routine

Every day, I wake up early in the morning. The first thing I do is look out of the window. If it is a sunny day, I feel very happy. If it is raining, I still feel okay because I like the rain too.

After waking up, I go to the bathroom. I wash my face and brush my teeth. Then I go to the kitchen. My mother usually makes breakfast for the family. She cooks eggs, bread, and sometimes noodles. I help my mother set the table. I put plates, cups, and chopsticks on the table. We eat breakfast together. We talk about our plans for the day.

After breakfast, I get dressed. I put on my school uniform. I put my books and pencils into my school bag. I put on my shoes. Then I walk to the bus stop. The bus comes at 7:30. I get on the bus and go to school. The bus ride takes about 20 minutes.

At school, I have six classes every day. The first class starts at 8 o'clock. My favorite class is English because the teacher is very nice and she tells interesting stories. I also like PE class because I can run and play. I don't like math very much because it is difficult for me. But my father says math is important, so I keep trying.

At 12 o'clock, I eat lunch in the cafeteria. I usually have rice, vegetables, and meat. After lunch, I sometimes play with my friends on the playground.

School finishes at 4 o'clock in the afternoon. I take the bus home. When I get home, I change my clothes. Then I do my homework. After that, I watch TV or read a book.

At 7 o'clock, the family eats dinner together. After dinner, I take a shower. Then I get into bed. I read a story before I go to sleep. I close my eyes and dream about tomorrow.

This is my day. What does your day look like?`,
    grammar: [
      "一般现在时（复数主语与时间标志词）——Every day I wake up, school finishes at 4 o'clock",
      "频率副词——usually, sometimes, always, often",
      "时间介词——in the morning, at 7 o'clock, after breakfast, before sleep",
      "条件状语从句——If it is a sunny day, I feel happy.",
      "连接词的基本使用——because, so, then, after, before"
    ],
    vocab: [
      {word:"daily", phonetic:"/ˈdeɪli/", pos:"adj.", meaning:"日常的；每日的；按日的 n. 日报 adv. 每日，天天"},
      {word:"routine", phonetic:"/ruːˈtiːn/", pos:"n.", meaning:"常规；例行公事；固定程序；一套固定动作 adj. 常规的；例行的"},
      {word:"bathroom", phonetic:"/ˈbɑːθruːm/", pos:"n.", meaning:"浴室；卫生间；洗手间"},
      {word:"kitchen", phonetic:"/ˈkɪtʃɪn/", pos:"n.", meaning:"厨房；灶间"},
      {word:"uniform", phonetic:"/ˈjuːnɪfɔːm/", pos:"n.", meaning:"制服；校服 adj. 统一的；一致的；不变的"},
      {word:"cafeteria", phonetic:"/ˌkæfəˈtɪəriə/", pos:"n.", meaning:"食堂；自助餐厅"},
      {word:"important", phonetic:"/ɪmˈpɔːtənt/", pos:"adj.", meaning:"重要的；有重大影响的；权威的"},
      {word:"wash", phonetic:"/wɒʃ/", pos:"v.", meaning:"洗；洗脸；洗手；洗涤；冲刷 n. 洗涤；要洗的衣服"},
      {word:"brush", phonetic:"/brʌʃ/", pos:"v.", meaning:"刷；刷净；轻擦 n. 刷子；画笔；轻擦"},
      {word:"cook", phonetic:"/kʊk/", pos:"v.", meaning:"烹饪；做饭；烧菜 n. 厨师；炊事员"},
      {word:"dress", phonetic:"/dres/", pos:"v.", meaning:"穿衣服；给…穿衣；打扮 n. 连衣裙；服装"},
      {word:"ride", phonetic:"/raɪd/", pos:"v.", meaning:"骑（马/自行车）；乘坐（交通工具） n. 乘车/骑马出行；旅程"},
      {word:"finish", phonetic:"/ˈfɪnɪʃ/", pos:"v.", meaning:"完成；结束；用完 n. 结尾；完成"},
      {word:"change", phonetic:"/tʃeɪndʒ/", pos:"v.", meaning:"改变；更换（衣服）；兑换 n. 变化；零钱"},
      {word:"always", phonetic:"/ˈɔːlweɪz/", pos:"adv.", meaning:"总是；一直；永远；每次都是"},
      {word:"usually", phonetic:"/ˈjuːʒuəli/", pos:"adv.", meaning:"通常；一般地；经常"},
      {word:"sometimes", phonetic:"/ˈsʌmtaɪmz/", pos:"adv.", meaning:"有时；偶尔；间或"},
      {word:"often", phonetic:"/ˈɒfən/", pos:"adv.", meaning:"经常；常常；屡次"},
      {word:"never", phonetic:"/ˈnevər/", pos:"adv.", meaning:"从不；永不；绝不；从来没有"}
    ],
    listeningFocus: [
      "时间顺序词的听力捕捉（after, before, then, when）",
      "区分原因（because）和结果（so）",
      "习惯用语句式的整体感知"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 3,
    title: "我的朋友",
    level: "A1-A2",
    levelColor: "#8BC34A",
    topic: "人际关系",
    tags: ["友谊", "描述外貌", "过去式"],
    wordCount: 50,
    difficulty: 3,
    text: `My Best Friend

Everyone needs friends. Friends make life more fun and more meaningful. I have a best friend. His name is Mike.

Mike and I have been friends for three years. We met in elementary school. On the first day of school, I was new and I felt very nervous. I didn't know anyone. Mike came to me and said, "Hi, do you want to play with me?" I said yes. That was the beginning of our friendship.

Mike is taller than me. He has short black hair and brown eyes. He wears glasses. He is very smart and kind. He always helps me when I have problems. For example, last week I didn't understand the math homework. Mike sat with me and explained everything step by step. Now I understand it much better.

Mike likes playing soccer. He is the best player on our school team. I am not good at soccer, but I like to watch him play. Sometimes we play soccer together after school. He teaches me how to kick the ball. I am still learning, but I am getting better.

Mike also likes reading science books. He wants to be a scientist in the future. He often tells me interesting facts about space and animals. Did you know that octopuses have three hearts? Mike told me that. I think he knows everything about science.

We do many things together. We eat lunch together every day. We walk home together after school. On weekends, we sometimes go to the park or watch movies at my house.

A good friend is like a brother. Mike is not just my friend. He is like a brother to me. I hope we will be friends forever.`,
    grammar: [
      "形容词比较级——taller, better, more meaningful",
      "一般过去时——规则动词过去式（-ed）——met, played, helped, explained",
      "一般过去时——不规则动词过去式——met（meet）, sat（sit）, told（tell）, taught（teach）",
      "Want to / Need to / Like to + 动词原形",
      "时间与地点的介词短语——on the first day, in elementary school, after school, on weekends"
    ],
    vocab: [
      {word:"friendship", phonetic:"/ˈfrendʃɪp/", pos:"n.", meaning:"友谊；友情；朋友关系"},
      {word:"elementary school", phonetic:"/ˌelɪˈmentri skuːl/", pos:"n.", meaning:"小学；初级学校"},
      {word:"nervous", phonetic:"/ˈnɜːvəs/", pos:"adj.", meaning:"紧张的；焦虑的；神经的；不安的"},
      {word:"glasses", phonetic:"/ˈɡlɑːsɪz/", pos:"n.", meaning:"眼镜；玻璃杯（复数）"},
      {word:"smart", phonetic:"/smɑːt/", pos:"adj.", meaning:"聪明的；机敏的；时髦的；（设备）智能的"},
      {word:"kind", phonetic:"/kaɪnd/", pos:"adj.", meaning:"善良的；仁慈的；友好的 n. 种类；类别"},
      {word:"soccer", phonetic:"/ˈsɒkər/", pos:"n.", meaning:"足球（运动）"},
      {word:"scientist", phonetic:"/ˈsaɪəntɪst/", pos:"n.", meaning:"科学家；科学工作者"},
      {word:"space", phonetic:"/speɪs/", pos:"n.", meaning:"太空；空间；空地；间隔 v. 分隔开"},
      {word:"animal", phonetic:"/ˈænɪməl/", pos:"n.", meaning:"动物；兽；牲畜 adj. 动物的；肉体的"},
      {word:"meaningful", phonetic:"/ˈmiːnɪŋfəl/", pos:"adj.", meaning:"有意义的；意味深长的；重要的"},
      {word:"forever", phonetic:"/fərˈevər/", pos:"adv.", meaning:"永远；长久地；总是"},
      {word:"meet → met", phonetic:"/miːt/", pos:"v.", meaning:"遇见；会面；相识（过去式 met）"},
      {word:"sit → sat", phonetic:"/sɪt/", pos:"v.", meaning:"坐；就座（过去式 sat）"},
      {word:"tell → told", phonetic:"/tel/", pos:"v.", meaning:"告诉；讲述；吩咐（过去式 told）"},
      {word:"teach → taught", phonetic:"/tiːtʃ/", pos:"v.", meaning:"教；教授；教导（过去式 taught）"},
      {word:"tall → taller", phonetic:"/tɔːl/", pos:"adj.", meaning:"高的 → 更高的（比较级）"},
      {word:"good → better", phonetic:"/ɡʊd/", pos:"adj.", meaning:"好的 → 更好的（比较级，不规则）"},
      {word:"interesting → more interesting", phonetic:"/ˈɪntrəstɪŋ/", pos:"adj.", meaning:"有趣的 → 更有趣的（多音节比较级）"}
    ],
    listeningFocus: [
      "过去式动词的听力识别（-ed发音变化和完全不同的不规则过去式）",
      "比较结构的快速响应",
      "时间线索词的定位（three years ago, last week, now）"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 4,
    title: "我的假期计划",
    level: "A2",
    levelColor: "#FFC107",
    topic: "未来计划",
    tags: ["将来时", "假期活动", "目标规划"],
    wordCount: 55,
    difficulty: 4,
    text: `My Summer Vacation Plan

Summer vacation is coming next month. I am very excited because I have made many plans. I will not waste my vacation. Instead, I will use the time to learn new things and have fun with my family.

First, I will go to the beach with my parents and my sister. We will stay there for three days. We will swim in the ocean and build sandcastles on the beach. My sister wants to collect seashells. My father wants to go fishing. I want to try surfing. I have never surfed before, but I am ready to learn. I hope I don't fall off the board too many times.

Second, I will attend a summer camp. The camp will last for one week. There will be many children from different schools. We will do many activities together, such as hiking, swimming, and singing around a campfire at night. The camp will also have an English corner. Every evening, we will speak only English for one hour. I think this will help me improve my English speaking skills.

Third, I will read at least three books. My English teacher gave me a reading list. The books are about science and adventure. I will read one book every two weeks. After I finish each book, I will write a short summary. This will help me remember what I read and practice my writing at the same time.

Fourth, I will learn to cook. My mother promised to teach me how to make simple dishes, like fried rice and scrambled eggs. I want to surprise my family by cooking breakfast for them one morning.

Finally, I will spend time with my grandparents. They live in the countryside. The air is fresh and the sky is full of stars at night. I will help them water the vegetables in their garden. I will also ask them to tell me stories about their childhood. I think old stories are very interesting.

By the time summer ends, I will have done many things. I hope this summer will be both fun and meaningful. What are your plans for the summer vacation?`,
    grammar: [
      "一般将来时——will + 动词原形——I will go, I will attend, I will read",
      "Be going to（计划/打算）——I am going to learn to cook",
      "将来时时间状语——next month, for three days, for one week",
      "并列连接词的高级用法——not only... but also, such as, by the time",
      "There will be（将来存在句）——there will be many children",
      "表示目的和原因的不定式——to learn new things, to help me remember"
    ],
    vocab: [
      {word:"vacation", phonetic:"/vəˈkeɪʃən/", pos:"n.", meaning:"假期；休假；（学校）寒暑假 v. 度假"},
      {word:"beach", phonetic:"/biːtʃ/", pos:"n.", meaning:"海滩；沙滩；海滨 v. 把（船）拖上岸"},
      {word:"ocean", phonetic:"/ˈəʊʃən/", pos:"n.", meaning:"海洋；大海；大洋"},
      {word:"sandcastle", phonetic:"/ˈsændkɑːsəl/", pos:"n.", meaning:"沙堡；沙塔（sand 沙 + castle 城堡）"},
      {word:"seashell", phonetic:"/ˈsiːʃel/", pos:"n.", meaning:"贝壳；海贝（sea 海 + shell 壳）"},
      {word:"fishing", phonetic:"/ˈfɪʃɪŋ/", pos:"n.", meaning:"钓鱼；捕鱼 v. 钓鱼（fish 的动名词）"},
      {word:"surfing", phonetic:"/ˈsɜːfɪŋ/", pos:"n.", meaning:"冲浪（运动） v. 冲浪；上网浏览"},
      {word:"camp", phonetic:"/kæmp/", pos:"n.", meaning:"营地；夏令营；兵营 v. 露营；扎营"},
      {word:"campfire", phonetic:"/ˈkæmpfaɪər/", pos:"n.", meaning:"篝火；营火（camp 营地 + fire 火）"},
      {word:"adventure", phonetic:"/ədˈventʃər/", pos:"n.", meaning:"冒险；冒险经历；奇遇 v. 冒险；大胆尝试"},
      {word:"summary", phonetic:"/ˈsʌməri/", pos:"n.", meaning:"总结；摘要；概括 adj. 概括的；即决的"},
      {word:"dish", phonetic:"/dɪʃ/", pos:"n.", meaning:"菜肴；一道菜；盘子；碟子 v. 盛于碟中"},
      {word:"countryside", phonetic:"/ˈkʌntrisaɪd/", pos:"n.", meaning:"乡村；农村；乡下"},
      {word:"childhood", phonetic:"/ˈtʃaɪldhʊd/", pos:"n.", meaning:"童年；儿童时期（child 孩子 + -hood 名词后缀）"},
      {word:"waste", phonetic:"/weɪst/", pos:"v.", meaning:"浪费；滥用；虚度 n. 浪费；废物 adj. 废弃的；荒芜的"},
      {word:"attend", phonetic:"/əˈtend/", pos:"v.", meaning:"参加；出席；上（学）；注意；照料"},
      {word:"improve", phonetic:"/ɪmˈpruːv/", pos:"v.", meaning:"提高；改善；改进；变得更好"},
      {word:"promise", phonetic:"/ˈprɒmɪs/", pos:"v.", meaning:"承诺；保证；答应 n. 承诺；诺言；希望"},
      {word:"surprise", phonetic:"/səˈpraɪz/", pos:"v.", meaning:"使惊讶；使惊喜；出其不意 n. 惊喜；意外的事"},
      {word:"at least", phonetic:"/æt liːst/", pos:"phr.", meaning:"至少；起码；无论如何"},
      {word:"such as", phonetic:"/sʌtʃ æz/", pos:"phr.", meaning:"例如；比如；诸如…之类"},
      {word:"by the time", phonetic:"/baɪ ðə taɪm/", pos:"conj.", meaning:"到…的时候（引导时间状语从句）"}
    ],
    listeningFocus: [
      "First / Second / Third / Fourth / Finally 序列结构词的捕捉",
      "will 的缩略形式（I'll, we'll, there'll）",
      "将来时间状语的听力定位"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 5,
    title: "环境污染",
    level: "A2-B1",
    levelColor: "#FF9800",
    topic: "社会议题",
    tags: ["环境保护", "被动语态", "因果逻辑"],
    wordCount: 55,
    difficulty: 5,
    text: `Environmental Pollution

The Earth is our home. It gives us clean air, fresh water, and rich soil. However, our planet is in danger today. The biggest problem we face is pollution.

What is pollution? Pollution happens when harmful substances are released into the environment. These substances damage the air, water, and land. Pollution comes in many forms. The three most common types are air pollution, water pollution, and land pollution.

Air pollution is caused mainly by factories and cars. When factories burn coal and oil, they release black smoke into the sky. Cars also release exhaust fumes. These fumes contain carbon dioxide and other harmful gases. Too much carbon dioxide in the air causes the greenhouse effect, which makes the Earth warmer. This is called global warming. Global warming is already changing the weather around the world. Some places are getting too hot. Other places are having more storms and floods than before.

Water pollution is another serious problem. Many factories dump chemical waste directly into rivers and oceans. Farmers use too many chemical fertilizers and pesticides on their fields. When it rains, these chemicals are washed into rivers and lakes. As a result, the water becomes poisonous. Fish and other water animals die. People who drink polluted water can get very sick.

Land pollution is caused by garbage. Every day, people throw away millions of tons of garbage. Some garbage, like plastic bottles, takes hundreds of years to break down. Plastic waste often ends up in the ocean. There, it can be eaten by sea animals, which then die. This is a big problem for sea turtles, whales, and birds.

So, what can we do to help? First, we can reduce, reuse, and recycle. We can use fewer plastic bags. We can reuse glass bottles and paper. We can recycle cans and newspapers. Second, we can walk or ride bikes instead of driving cars. This reduces air pollution. Third, we can save water by turning off the tap when we are brushing our teeth. Fourth, we can plant trees. Trees clean the air and make it fresher.

Every small action matters. If everyone does their part, we can make the Earth a cleaner and healthier place to live.`,
    grammar: [
      "被动语态（一般现在时）——is caused, are released, are washed, is eaten",
      "不定代词与被动结构——something is done, everything is affected",
      "When / As a result / Instead / However 等过渡词",
      "比较级与最高级在说明文中的应用——biggest problem, most common",
      "情态动词表示能力与可能性——can do, can be eaten",
      "分词形容词作定语/表语——polluted water, damaged land, warmer climate"
    ],
    vocab: [
      {word:"pollution", phonetic:"/pəˈluːʃən/", pos:"n.", meaning:"污染；污染物；玷污；（环境）公害"},
      {word:"environment", phonetic:"/ɪnˈvaɪrənmənt/", pos:"n.", meaning:"环境；自然环境；生态环境；周围状况"},
      {word:"substance", phonetic:"/ˈsʌbstəns/", pos:"n.", meaning:"物质；材料；实质；要旨；毒品"},
      {word:"carbon dioxide", phonetic:"/ˈkɑːbən daɪˈɒksaɪd/", pos:"n.", meaning:"二氧化碳（化学式 CO₂）"},
      {word:"greenhouse effect", phonetic:"/ˈɡriːnhaʊs ɪˈfekt/", pos:"n.", meaning:"温室效应（greenhouse 温室 + effect 效应）"},
      {word:"global warming", phonetic:"/ˈɡləʊbəl ˈwɔːmɪŋ/", pos:"n.", meaning:"全球变暖；全球气候变暖"},
      {word:"fertilizer", phonetic:"/ˈfɜːtɪlaɪzər/", pos:"n.", meaning:"肥料；化肥（fertilize 施肥 + -er 名词后缀）"},
      {word:"pesticide", phonetic:"/ˈpestɪsaɪd/", pos:"n.", meaning:"杀虫剂；农药（pest 害虫 + -icide 杀灭剂）"},
      {word:"garbage", phonetic:"/ˈɡɑːbɪdʒ/", pos:"n.", meaning:"垃圾；废物；废话"},
      {word:"recycle", phonetic:"/ˌriːˈsaɪkəl/", pos:"v.", meaning:"回收利用；循环使用 n. 回收；循环"},
      {word:"release", phonetic:"/rɪˈliːs/", pos:"v.", meaning:"释放；排放；放走；发布 n. 释放；发布"},
      {word:"damage", phonetic:"/ˈdæmɪdʒ/", pos:"v.", meaning:"损害；破坏；伤害 n. 损害；损失；赔偿金"},
      {word:"cause", phonetic:"/kɔːz/", pos:"v.", meaning:"引起；导致；造成 n. 原因；事业；理由"},
      {word:"dump", phonetic:"/dʌmp/", pos:"v.", meaning:"倾倒；丢弃；抛弃 n. 垃圾场；倾倒"},
      {word:"reduce", phonetic:"/rɪˈdjuːs/", pos:"v.", meaning:"减少；降低；缩小；使陷入"},
      {word:"reuse", phonetic:"/ˌriːˈjuːz/", pos:"v.", meaning:"重复使用；再次利用（re- 再次 + use 使用）"},
      {word:"however", phonetic:"/haʊˈevər/", pos:"adv.", meaning:"然而；不过；但是；无论如何"},
      {word:"as a result", phonetic:"/æz ə rɪˈzʌlt/", pos:"phr.", meaning:"因此；结果；所以（引出结果）"},
      {word:"instead", phonetic:"/ɪnˈsted/", pos:"adv.", meaning:"相反地；代替；反而"}
    ],
    listeningFocus: [
      "被动语态的听力识别（be + 过去分词）",
      "因果逻辑链的捕捉（cause, when, as a result）",
      "分类型结构的整体框架把握"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 6,
    title: "科技改变生活",
    level: "B1",
    levelColor: "#FF5722",
    topic: "科技进步",
    tags: ["现在完成时", "对比结构", "科技主题"],
    wordCount: 50,
    difficulty: 6,
    text: `How Technology Has Changed Our Lives

There is no doubt that technology has transformed the way we live. Fifty years ago, people lived very differently from how we live today. In this article, we will look at three major areas where technology has made a huge difference: communication, education, and daily convenience.

Let's start with communication. In the past, people communicated by writing letters. A letter could take days or even weeks to reach its destination. If something was urgent, people had to send a telegram, which was expensive. Today, we have smartphones and the Internet. We can send a message to someone on the other side of the world in less than a second. We can also make video calls using apps like Skype and Zoom. These apps allow us to see the other person's face while we talk. This has made the world feel much smaller. Families who live in different countries can now stay connected easily.

Technology has also changed education. In the past, students could only learn inside a classroom with a teacher and a blackboard. If you wanted to learn something new, you had to go to a library to find a book about it. Today, the Internet has become the world's biggest library. You can find information on almost any topic with a few clicks. There are also online courses taught by professors from top universities. Platforms like Coursera and Khan Academy offer free lessons on thousands of subjects. This means that anyone with an Internet connection can learn almost anything they want, no matter where they live.

Another area where technology has helped us is daily convenience. In the past, if you wanted to buy something, you had to go to a physical store. You had to carry cash or write a check. If the store did not have what you needed, you had to go to another store. Today, we can shop online from the comfort of our homes. We can compare prices from different websites in seconds. We can pay using our phones or credit cards. The items are delivered to our front door, sometimes on the same day. This has saved people a lot of time and effort.

Of course, technology is not perfect. Some people worry that we use our phones too much and don't talk to people face to face anymore. Others worry about online privacy and safety. These are real concerns that we need to think about. However, if we use technology wisely, it can make our lives richer, easier, and more connected than ever before.

In conclusion, technology has changed the way we communicate, learn, and live our daily lives. While there are some downsides, the benefits are hard to ignore. The question is not whether we should use technology. The question is how we can use it in the best possible way.`,
    grammar: [
      "现在完成时——has transformed, has changed, has made",
      "被动语态与完成时结合——has been changed",
      "过去与现在的对比结构——In the past... Today...——did / could / had to vs. can / have / are",
      "条件状语从句（If引导）——if you wanted..., if the store did not have...",
      "让步状语从句——No matter where... / Of course, there are some downsides, but...",
      "插入语与同位语——platforms like Coursera, apps like Skype"
    ],
    vocab: [
      {word:"technology", phonetic:"/tekˈnɒlədʒi/", pos:"n.", meaning:"科技；技术；工艺；工程技术"},
      {word:"communication", phonetic:"/kəˌmjuːnɪˈkeɪʃən/", pos:"n.", meaning:"通讯；交流；沟通；信息；通信方式"},
      {word:"convenience", phonetic:"/kənˈviːniəns/", pos:"n.", meaning:"便利；方便；便利设施；省事"},
      {word:"telegram", phonetic:"/ˈtelɪɡræm/", pos:"n.", meaning:"电报；电文 v. 打电报"},
      {word:"destination", phonetic:"/ˌdestɪˈneɪʃən/", pos:"n.", meaning:"目的地；终点；目标"},
      {word:"urgent", phonetic:"/ˈɜːdʒənt/", pos:"adj.", meaning:"紧急的；急迫的；催促的"},
      {word:"smartphone", phonetic:"/ˈsmɑːtfəʊn/", pos:"n.", meaning:"智能手机（smart 智能 + phone 电话）"},
      {word:"app", phonetic:"/æp/", pos:"n.", meaning:"应用程序；应用软件（application 的缩写）"},
      {word:"platform", phonetic:"/ˈplætfɔːm/", pos:"n.", meaning:"平台；站台；讲台；纲领"},
      {word:"privacy", phonetic:"/ˈprɪvəsi/", pos:"n.", meaning:"隐私；私密；独处；不受干扰的状态"},
      {word:"concern", phonetic:"/kənˈsɜːn/", pos:"n.", meaning:"担忧；担心；关心的事 v. 涉及；使担忧；关系到"},
      {word:"benefit", phonetic:"/ˈbenɪfɪt/", pos:"n.", meaning:"好处；益处；福利 v. 受益；有利于"},
      {word:"transform", phonetic:"/trænsˈfɔːm/", pos:"v.", meaning:"彻底改变；转变；改造；变形"},
      {word:"communicate", phonetic:"/kəˈmjuːnɪkeɪt/", pos:"v.", meaning:"交流；沟通；传达；通信"},
      {word:"deliver", phonetic:"/dɪˈlɪvər/", pos:"v.", meaning:"递送；传送；发表（演讲）；接生"},
      {word:"compare", phonetic:"/kəmˈpeər/", pos:"v.", meaning:"比较；对比；比喻；相比"},
      {word:"ignore", phonetic:"/ɪɡˈnɔːr/", pos:"v.", meaning:"忽视；忽略；不理睬；不理会"},
      {word:"in the past", phonetic:"/ɪn ðə pɑːst/", pos:"phr.", meaning:"在过去；从前（对比标志词）"},
      {word:"in conclusion", phonetic:"/ɪn kənˈkluːʒən/", pos:"phr.", meaning:"总之；最后；综上所述（总结信号词）"},
      {word:"of course", phonetic:"/əv kɔːs/", pos:"phr.", meaning:"当然；自然；毫无疑问"},
      {word:"however", phonetic:"/haʊˈevər/", pos:"adv.", meaning:"然而；不过；尽管如此（转折词）"}
    ],
    listeningFocus: [
      "现在完成时的听力识别（has/have + 过去分词）及其与一般过去的区别",
      "对比结构的抓取（In the past vs. Today, used to vs. now）",
      "长句中的插入语和过渡词捕捉"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 7,
    title: "一个真实的故事",
    level: "B1-B2",
    levelColor: "#E91E63",
    topic: "励志故事",
    tags: ["过去完成时", "人物故事", "坚持梦想"],
    wordCount: 50,
    difficulty: 7,
    text: `The Young Man Who Wouldn't Give Up

This is a true story about a young man named Wang Yong. He was born in a small village in a poor part of China. His family had very little money. Sometimes there was not enough food to eat. But Wang Yong had a dream. He wanted to become an engineer.

When Wang Yong was fifteen years old, his father became very sick and could not work anymore. The family's situation became even harder. Wang Yong had to leave school to help support his family. He found a job at a construction site. He worked twelve hours every day, carrying heavy bricks and mixing cement. His hands became rough and calloused. His back often ached at night. But he never forgot his dream.

Every night, after finishing his work, Wang Yong would sit under a street light. He had kept one book from school—a math textbook. He read it page by page, teaching himself everything he had missed. He could not afford to buy new books, so he borrowed them from anyone who would lend them. He studied while others slept.

People in the village said to him, "Why are you wasting your time? You will never become an engineer. You are just a construction worker." But Wang Yong did not listen to them. He believed in himself.

When he was eighteen, Wang Yong saved just enough money to buy a bus ticket to the nearest big city. He went to a technical school and asked to speak with the director. "I have no money to pay for classes," Wang Yong said, "but I have my books, and I have studied very hard. Please give me a chance."

The director was impressed by the young man's determination. She gave Wang Yong a test. He passed with very high scores. The director offered him a scholarship so he could study at the school for free.

Wang Yong studied harder than anyone else. He woke up at 5 o'clock every morning to study before class. He stayed in the library until it closed at midnight. After two years, he graduated at the top of his class.

Today, Wang Yong is a successful engineer. He has designed several buildings in his hometown, including a new school. He often goes back to his village to speak with young people. He tells them the same thing every time: "Your past does not decide your future. Your effort does."

This story reminds us that if you have a goal and you refuse to give up, you can achieve amazing things. No matter how hard life gets, keep going. One day, you will look back and be glad you did.`,
    grammar: [
      "过去完成时——had kept, had missed, had studied（过去的过去）",
      "不定式表示目的（so that结构简化为不定式）——to help support, to speak with",
      "让步状语从句——No matter how hard... / Although... / Even though...",
      "连续动作的平行结构——carrying heavy bricks and mixing cement",
      "While / When / After 时间状语从句的综合运用",
      "主谓一致（复合主语）——Your past does not decide your future. Your effort does."
    ],
    vocab: [
      {word:"construction site", phonetic:"/kənˈstrʌkʃən saɪt/", pos:"n.", meaning:"建筑工地；施工现场"},
      {word:"brick", phonetic:"/brɪk/", pos:"n.", meaning:"砖；砖块；积木 v. 用砖砌/堵住"},
      {word:"cement", phonetic:"/sɪˈment/", pos:"n.", meaning:"水泥；胶合剂 v. 用水泥加固；巩固"},
      {word:"calloused", phonetic:"/ˈkæləst/", pos:"adj.", meaning:"长满老茧的；变硬的；冷酷无情的"},
      {word:"scholarship", phonetic:"/ˈskɒləʃɪp/", pos:"n.", meaning:"奖学金；学识；学术成就"},
      {word:"determination", phonetic:"/dɪˌtɜːmɪˈneɪʃən/", pos:"n.", meaning:"决心；坚定；果断；测定"},
      {word:"director", phonetic:"/dɪˈrektər/", pos:"n.", meaning:"主任；主管；导演；负责人；校长"},
      {word:"score", phonetic:"/skɔːr/", pos:"n.", meaning:"分数；成绩；得分 v. 得分；评分；获胜"},
      {word:"graduate", phonetic:"/ˈɡrædʒuət/", pos:"v.", meaning:"毕业；获得学位 n. 毕业生；研究生"},
      {word:"reminder", phonetic:"/rɪˈmaɪndər/", pos:"n.", meaning:"提醒；提醒物；催单"},
      {word:"support", phonetic:"/səˈpɔːt/", pos:"v.", meaning:"支撑；支持；供养；拥护 n. 支持；援助"},
      {word:"ache", phonetic:"/eɪk/", pos:"v.", meaning:"疼痛；隐痛；渴望 n. （持续的）疼痛"},
      {word:"afford", phonetic:"/əˈfɔːd/", pos:"v.", meaning:"承担得起；买得起；提供；给予"},
      {word:"borrow", phonetic:"/ˈbɒrəʊ/", pos:"v.", meaning:"借；借用（从别人那里借来）"},
      {word:"impress", phonetic:"/ɪmˈpres/", pos:"v.", meaning:"给…留下深刻印象；使钦佩；铭刻"},
      {word:"pass", phonetic:"/pɑːs/", pos:"v.", meaning:"通过（考试）；经过；传递；及格 n. 通行证"},
      {word:"achieve", phonetic:"/əˈtʃiːv/", pos:"v.", meaning:"达成；实现；取得（成就）；成功"},
      {word:"situation", phonetic:"/ˌsɪtʃuˈeɪʃən/", pos:"n.", meaning:"处境；情况；形势；局面"},
      {word:"goal", phonetic:"/ɡəʊl/", pos:"n.", meaning:"目标；目的；球门；进球得分"},
      {word:"effort", phonetic:"/ˈefət/", pos:"n.", meaning:"努力；尽力；艰难的尝试；费力的事"}
    ],
    listeningFocus: [
      "过去完成时的听力识别（had + 过去分词）——它通常与一般过去时一起出现，表示「更早之前发生的动作」",
      "人物故事的时间线追踪",
      "直接引语（对话）与间接叙述的区分"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 8,
    title: "人工智能",
    level: "B2",
    levelColor: "#9C27B0",
    topic: "科技前沿",
    tags: ["定语从句", "被动语态综合", "AI主题"],
    wordCount: 55,
    difficulty: 8,
    text: `Artificial Intelligence: What It Is and Why It Matters

Artificial intelligence, or AI, is one of the most talked-about technologies of our time. But what exactly is AI? In simple terms, artificial intelligence is the ability of a computer or a machine to think and learn, much like a human being does. Instead of following a fixed set of instructions, an AI system can analyze data, recognize patterns, make decisions, and even improve itself over time.

To understand AI better, we can divide it into two categories: narrow AI and general AI. Narrow AI is what we have today. It is designed to perform a single task very well. For example, the voice assistant on your smartphone uses narrow AI to understand and answer your questions. The software that recommends movies to you on a streaming platform uses narrow AI to analyze what you have watched before and predict what you might enjoy next. Self-driving cars use narrow AI to recognize traffic lights, avoid obstacles, and navigate roads. All of these systems are highly specialized. A self-driving car cannot help you choose a movie, and a movie recommendation system cannot drive a car.

General AI, on the other hand, would be a machine that can do anything a human being can do. It could write a poem, cook a meal, solve a math problem, and have a philosophical conversation—all using the same system. This kind of AI does not yet exist, and many experts believe it is still decades away, if it ever arrives at all.

So why is AI so important? The answer is that AI is already changing nearly every industry in the world. In healthcare, AI is helping doctors detect diseases like cancer much earlier than before. AI can look at thousands of medical images in seconds and find signs of illness that a human eye might miss. In education, AI is being used to create personalized learning plans for students. Each student learns at their own pace, and AI can adapt the lessons to match their specific strengths and weaknesses. In transportation, AI is making it possible for cars to drive themselves, which could greatly reduce the number of traffic accidents caused by human error.

Of course, AI also presents new challenges and risks. One major concern is the impact on jobs. If machines can do tasks that used to require human workers, what will happen to those workers? Another concern is privacy. AI systems need large amounts of data to learn effectively, but who owns that data, and how is it being used? There are also worries about bias—if the data used to train an AI system contains unfair assumptions or prejudices, the AI may learn those same biases and make unfair decisions.

In conclusion, artificial intelligence is a powerful technology with the potential to do enormous good. However, like any powerful tool, it must be used carefully and wisely. The decisions we make today about how to develop and regulate AI will shape the future for generations to come. It is up to all of us to ensure that AI serves humanity—not the other way around.`,
    grammar: [
      "定语从句综合运用——a machine that can think, a task that requires human ability",
      "被动语态的综合运用（各类时态）——is used, is being used, could be reduced, must be used",
      "条件句的真实与非真实——If the data contains bias, the AI may learn it",
      "分词短语做状语——Instead of following fixed instructions, / using the same system",
      "复杂从句嵌套——The decisions we make today about how to develop AI will shape the future",
      "It引导的真主语/假主语结构——It is up to us to ensure that..."
    ],
    vocab: [
      {word:"artificial intelligence", phonetic:"/ˌɑːtɪˈfɪʃəl ɪnˈtelɪdʒəns/", pos:"n.", meaning:"人工智能，简称 AI（artificial 人工的 + intelligence 智能）"},
      {word:"algorithm", phonetic:"/ˈælɡərɪðəm/", pos:"n.", meaning:"算法；计算程序；运算法则"},
      {word:"data", phonetic:"/ˈdeɪtə/", pos:"n.", meaning:"数据；资料；信息（单数 datum）"},
      {word:"pattern recognition", phonetic:"/ˈpætən ˌrekəɡˈnɪʃən/", pos:"n.", meaning:"模式识别（pattern 模式 + recognition 识别）"},
      {word:"healthcare", phonetic:"/ˈhelθkeər/", pos:"n.", meaning:"医疗保健；医疗卫生（health 健康 + care 护理）"},
      {word:"bias", phonetic:"/ˈbaɪəs/", pos:"n.", meaning:"偏见；偏向；偏心；偏差 v. 使有偏见"},
      {word:"transportation", phonetic:"/ˌtrænspɔːˈteɪʃən/", pos:"n.", meaning:"交通；运输；交通运输系统"},
      {word:"obstacle", phonetic:"/ˈɒbstəkəl/", pos:"n.", meaning:"障碍；障碍物；绊脚石；阻碍"},
      {word:"analyze", phonetic:"/ˈænəlaɪz/", pos:"v.", meaning:"分析；解析；细察；研究"},
      {word:"detect", phonetic:"/dɪˈtekt/", pos:"v.", meaning:"检测；察觉；发现；探测"},
      {word:"adapt", phonetic:"/əˈdæpt/", pos:"v.", meaning:"适应；调整；改编；使适合"},
      {word:"regulate", phonetic:"/ˈreɡjuleɪt/", pos:"v.", meaning:"规范；管控；调节；校准"},
      {word:"ensure", phonetic:"/ɪnˈʃʊər/", pos:"v.", meaning:"确保；保证；担保；使安全"},
      {word:"in simple terms", phonetic:"/ɪn ˈsɪmpəl tɜːmz/", pos:"phr.", meaning:"简单来说；通俗地讲（用于简化解释）"},
      {word:"on the other hand", phonetic:"/ɒn ðɪ ˈʌðər hænd/", pos:"phr.", meaning:"另一方面（表示对比，常与 on the one hand 搭配）"},
      {word:"in conclusion", phonetic:"/ɪn kənˈkluːʒən/", pos:"phr.", meaning:"总之；最后；综上所述（结论信号词）"},
      {word:"potential", phonetic:"/pəˈtenʃəl/", pos:"n.", meaning:"潜力；潜能；可能性 adj. 潜在的；可能的"},
      {word:"narrow", phonetic:"/ˈnærəʊ/", pos:"adj.", meaning:"狭窄的；狭隘的；勉强的；狭隘的 AI 指专用人工智能"},
      {word:"general", phonetic:"/ˈdʒenərəl/", pos:"adj.", meaning:"通用的；一般的；普通的；通用的 AI 指通用人工智能"}
    ],
    listeningFocus: [
      "多重定语从句的听力解析（which/who/that层层递进）",
      "被动语态在不同时态中的辨认",
      "长段科技文本的逻辑信号词"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 9,
    title: "领导力",
    level: "B2-C1",
    levelColor: "#3F51B5",
    topic: "管理技能",
    tags: ["名词从句", "排比结构", "领导力主题"],
    wordCount: 45,
    difficulty: 9,
    text: `What Makes a Great Leader?

Throughout history, we have seen examples of great leaders: people who inspired others to achieve remarkable things. From political figures like Nelson Mandela to business leaders like Steve Jobs, these individuals seemed to have something special. But what exactly is leadership? Is it a natural gift, or can it be learned? The answer, according to modern research, is that leadership is a combination of both. Some people are born with certain personality traits that make leadership easier for them, but anyone can learn the skills and habits that define effective leadership.

Leadership can be defined as the ability to guide, motivate, and influence others toward a common goal. A person can hold the title of "manager" or "CEO," but that does not automatically make them a leader. True leadership is not about a position or a title. It is about behavior, attitude, and the impact you have on the people around you.

So, what are the qualities of a great leader? Over the past several decades, researchers have studied thousands of leaders across different industries and cultures. While no two leaders are exactly alike, certain characteristics appear again and again.

First and foremost, great leaders have a clear vision. They know where they want to go, and they can communicate that destination to others in a way that is exciting and convincing. Without a vision, a group may work hard but end up going in different directions. With a clear vision, everyone knows what they are working toward.

Second, great leaders have emotional intelligence, often abbreviated as EQ. Emotional intelligence is the ability to understand and manage your own emotions, as well as recognize and influence the emotions of others. Leaders with high EQ are good listeners. They notice when a team member is feeling frustrated or discouraged, and they know how to respond in a supportive way. They also stay calm under pressure, which helps the whole team stay focused.

Third, great leaders are decisive. In any organization, there will be moments when difficult decisions need to be made. A leader cannot afford to hesitate forever. Great leaders gather the available information, consult the right people, and then make a choice—even if that choice is not perfect. They take responsibility for their decisions and learn from the results.

Fourth, great leaders empower others. They do not try to do everything themselves. Instead, they trust their team members, give them the resources and freedom they need to succeed, and then step back. When a leader empowers others, the whole team becomes stronger and more capable. As the famous saying goes, "A leader is best when people barely know they exist. When the work is done, they will say, we did it ourselves."

Finally, great leaders lead by example. They do not ask others to work harder than they are willing to work themselves. They do not demand honesty if they are not honest themselves. A leader's actions speak louder than their words. If a leader shows integrity, dedication, and respect for others, the team will follow that example.

In conclusion, leadership is not a magic power that only a few lucky people possess. It is a set of skills that can be developed with practice, reflection, and a genuine desire to serve something bigger than oneself. Whether you are leading a small team, a large company, or just yourself, the principles remain the same: have a vision, care about people, make decisions, empower others, and lead by example.`,
    grammar: [
      "名词从句（What/If/Whether引导的主语从句/表语从句/宾语从句）——What is leadership? / Whether it can be learned",
      "被动语态与情态动词结合的推测表达——can be learned / could be made / must be made",
      "转折与对比结构——While no two leaders are exactly alike / Not about... It is about...",
      "因果关系链的复杂表达——because / since / as a result / therefore / consequently",
      "条件句（If引导的假设和现实）——If a leader shows integrity, the team will follow",
      "插入语与引用（quote）的标点处理——as the famous saying goes, \"...\""
    ],
    vocab: [
      {word:"leadership", phonetic:"/ˈliːdəʃɪp/", pos:"n.", meaning:"领导力；领导才能；领导层；领导地位"},
      {word:"vision", phonetic:"/ˈvɪʒən/", pos:"n.", meaning:"愿景；远见；视力；想象；洞察力"},
      {word:"emotional intelligence", phonetic:"/ɪˈməʊʃənl ɪnˈtelɪdʒəns/", pos:"n.", meaning:"情商；情绪智力（简称 EQ，emotional 情绪的 + intelligence 智力）"},
      {word:"integrity", phonetic:"/ɪnˈteɡrɪti/", pos:"n.", meaning:"正直；诚实；完整；廉正"},
      {word:"dedication", phonetic:"/ˌdedɪˈkeɪʃən/", pos:"n.", meaning:"奉献；献身；专注；落成典礼"},
      {word:"responsibility", phonetic:"/rɪˌspɒnsəˈbɪlɪti/", pos:"n.", meaning:"责任；职责；义务；负责"},
      {word:"principle", phonetic:"/ˈprɪnsɪpəl/", pos:"n.", meaning:"原则；原理；准则；道德规范"},
      {word:"guide", phonetic:"/ɡaɪd/", pos:"v.", meaning:"引导；指导；带领 n. 指南；导游；手册"},
      {word:"motivate", phonetic:"/ˈməʊtɪveɪt/", pos:"v.", meaning:"激励；激发；成为…的动机"},
      {word:"influence", phonetic:"/ˈɪnfluəns/", pos:"v.", meaning:"影响；感化；左右 n. 影响；影响力；势力"},
      {word:"consult", phonetic:"/kənˈsʌlt/", pos:"v.", meaning:"咨询；请教；商议；查阅"},
      {word:"empower", phonetic:"/ɪmˈpaʊər/", pos:"v.", meaning:"赋能；授权；使能够；增加自主权（em- 使 + power 权力）"},
      {word:"combination", phonetic:"/ˌkɒmbɪˈneɪʃən/", pos:"n.", meaning:"结合；组合；混合体；联合"},
      {word:"characteristic", phonetic:"/ˌkærəktəˈrɪstɪk/", pos:"n.", meaning:"特征；特点；特性 adj. 典型的；特有的"},
      {word:"behavior", phonetic:"/bɪˈheɪvjər/", pos:"n.", meaning:"行为；举止；表现；运行方式"},
      {word:"attitude", phonetic:"/ˈætɪtjuːd/", pos:"n.", meaning:"态度；看法；姿态；姿势"},
      {word:"impact", phonetic:"/ˈɪmpækt/", pos:"n.", meaning:"影响；冲击；撞击 v. 影响；冲击"},
      {word:"pressure", phonetic:"/ˈpreʃər/", pos:"n.", meaning:"压力；压迫；气压；紧张 v. 施压；迫使"},
      {word:"decisive", phonetic:"/dɪˈsaɪsɪv/", pos:"adj.", meaning:"果断的；决定性的；明确的；关键的"}
    ],
    listeningFocus: [
      "定义句式的听力识别（...can be defined as...）",
      "排比结构（First, Second, Third, Fourth, Finally）的信息抓取",
      "名言引用在听力中的辨认"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  },
  {
    id: 10,
    title: "快乐的关键",
    level: "C1",
    levelColor: "#F44336",
    topic: "人文思考",
    tags: ["倒装结构", "学术写作", "积极心理学"],
    wordCount: 50,
    difficulty: 10,
    text: `The Key to Happiness: Insights from Psychology

What makes people truly happy? This question has been asked by philosophers, poets, and religious thinkers for thousands of years. Only in the past few decades, however, has it become a subject of serious scientific study. The field of positive psychology, pioneered by psychologists like Martin Seligman and Mihaly Csikszentmihalyi, seeks to understand what makes life worth living—not just how to treat mental illness, but how to help people thrive.

After decades of research, psychologists have discovered that many common beliefs about happiness are simply wrong. For example, many people believe that if they achieve certain external goals—getting a promotion, buying a bigger house, or earning more money—they will become happy. The research shows a different picture. While having enough money to meet basic needs is certainly important, once those needs are met, additional income has surprisingly little effect on a person's overall happiness.

So what actually contributes to long-term happiness? Let's look at three of the strongest predictors, according to the scientific literature.

The first and most important factor is the quality of our social relationships. Humans are fundamentally social creatures. Our brains are wired to connect with others. Studies have shown that people with strong, close relationships—whether with a spouse, family members, or friends—are significantly happier and healthier than those who are socially isolated. In fact, one famous Harvard study that followed the same men for over seventy years concluded that the quality of a person's relationships was the single best predictor of their happiness and even their physical health in old age. It is not the number of friends that matters most, but the depth and trust within those relationships.

The second key factor is having a sense of purpose. This means engaging in activities that feel meaningful, not just enjoyable. For some people, purpose comes from their work. For others, it comes from raising children, volunteering, creating art, or contributing to a cause greater than themselves. When people have a clear sense of purpose, they are more resilient in the face of difficulties. Setbacks feel like temporary obstacles rather than permanent failures. Psychologists call this having a "growth mindset"—the belief that your abilities can be developed through effort and learning, rather than being fixed and unchangeable.

The third factor is gratitude and mindfulness. Gratitude is the practice of intentionally noticing and appreciating the good things in your life, no matter how small. Research has consistently found that people who keep a gratitude journal—writing down three things they are grateful for each day—report higher levels of happiness and lower levels of depression. Mindfulness, meanwhile, involves paying attention to the present moment without judgment. Rather than constantly worrying about the future or regretting the past, mindfulness helps you experience your life as it is actually happening.

One crucial insight from positive psychology is that happiness is not a destination. It is not something you achieve once and then possess forever. Happiness is more like a skill—it requires ongoing practice and attention. The happiest people are not those who have no problems. They are those who have developed the habits and perspectives that allow them to respond to problems in constructive ways.

Another important finding is that helping others increases your own happiness. Altruistic acts—whether volunteering at a shelter, helping a neighbor, or simply offering a kind word—activate the same reward pathways in the brain as receiving a gift. This creates what researchers call a "helper's high." Paradoxically, the pursuit of happiness often fails precisely because it is too self-focused. When people ask, "What would make ME happy?" they often become frustrated. But when they ask, "What can I do for OTHERS?" happiness often follows as a natural byproduct.

So where does this leave us? The research is clear: happiness is not about getting what you want. It is about wanting what you have. It is about connection, purpose, and presence. It is about giving more than you take. And most encouragingly of all, these are not traits you either have or you don't. They are practices you can choose, every single day.

In the end, perhaps the ancient philosophers were right after all. As Aristotle wrote over two thousand years ago, "Happiness is the meaning and the purpose of life, the whole aim and end of human existence." The difference is that now we have the data to prove it.`,
    grammar: [
      "倒装结构——Only in the past few decades has it become...（含有only的状语置于句首，主句部分倒装）",
      "否定词置于句首的倒装——Not just... but... / Not because... but because...",
      "比较级与最高级的深层运用——the single best predictor, surprisingly little effect",
      "虚拟语气与If结构在科学写作中的应用——If they achieve... they will...",
      "独立主格结构——Rather than constantly worrying...",
      "总结句的修辞手法——Happiness is not about... It is about...",
      "引用句型的科学性用法——As Aristotle wrote / According to research"
    ],
    vocab: [
      {word:"psychology", phonetic:"/saɪˈkɒlədʒi/", pos:"n.", meaning:"心理学；心理；心理状态"},
      {word:"positive psychology", phonetic:"/ˈpɒzɪtɪv saɪˈkɒlədʒi/", pos:"n.", meaning:"积极心理学（positive 积极的 + psychology 心理学）"},
      {word:"mindset", phonetic:"/ˈmaɪndset/", pos:"n.", meaning:"心态；思维模式；观念模式（mind 头脑 + set 设定）"},
      {word:"gratitude", phonetic:"/ˈɡrætɪtjuːd/", pos:"n.", meaning:"感恩；感激之情；谢意"},
      {word:"mindfulness", phonetic:"/ˈmaɪndfəlnəs/", pos:"n.", meaning:"正念；专注当下；留神；觉察（mindful 留心的 + -ness 名词后缀）"},
      {word:"resilience", phonetic:"/rɪˈzɪliəns/", pos:"n.", meaning:"韧性；恢复力；适应力；弹性"},
      {word:"setback", phonetic:"/ˈsetbæk/", pos:"n.", meaning:"挫折；阻碍；倒退（set 设置 + back 向后）"},
      {word:"altruism", phonetic:"/ˈæltruɪzəm/", pos:"n.", meaning:"利他主义；无私（altru- 他人 + -ism 主义）"},
      {word:"byproduct", phonetic:"/ˈbaɪprɒdʌkt/", pos:"n.", meaning:"副产品；附带结果（by- 附带地 + product 产品）"},
      {word:"thrive", phonetic:"/θraɪv/", pos:"v.", meaning:"茁壮成长；兴旺发达；蓬勃发展"},
      {word:"contribute", phonetic:"/kənˈtrɪbjuːt/", pos:"v.", meaning:"贡献；捐献；投稿；导致（contribute to 有助于）"},
      {word:"predict", phonetic:"/prɪˈdɪkt/", pos:"v.", meaning:"预测；预言；预告；预计"},
      {word:"appreciate", phonetic:"/əˈpriːʃieɪt/", pos:"v.", meaning:"欣赏；感激；赏识；领会；升值"},
      {word:"activate", phonetic:"/ˈæktɪveɪt/", pos:"v.", meaning:"激活；启动；使活跃；触发"},
      {word:"according to", phonetic:"/əˈkɔːdɪŋ tuː/", pos:"phr.", meaning:"据…所说/观点；依照；根据（引述来源）"},
      {word:"in fact", phonetic:"/ɪn fækt/", pos:"phr.", meaning:"事实上；实际上（强调真实情况）"},
      {word:"paradoxically", phonetic:"/ˌpærəˈdɒksɪkli/", pos:"adv.", meaning:"矛盾的是；自相矛盾地；看似不合常理地"},
      {word:"meanwhile", phonetic:"/ˈmiːnwaɪl/", pos:"adv.", meaning:"与此同时；在此期间；另一方面"},
      {word:"after all", phonetic:"/ˈɑːftər ɔːl/", pos:"phr.", meaning:"毕竟；终究；别忘了（让步/解释）"},
      {word:"be wired to", phonetic:"/biː ˈwaɪəd tuː/", pos:"phr.", meaning:"天生就…；与生俱来地…（wire 原意「接线」，引申为「天生设定」）"},
      {word:"helper's high", phonetic:"/ˈhelpərz haɪ/", pos:"phr.", meaning:"助人快感；帮助他人后产生的愉悦感（helper 帮助者 + high 兴奋感）"},
      {word:"pursuit", phonetic:"/pəˈsjuːt/", pos:"n.", meaning:"追求；追赶；爱好；事业"},
      {word:"constructive", phonetic:"/kənˈstrʌktɪv/", pos:"adj.", meaning:"建设性的；积极的；有益的"}
    ],
    listeningFocus: [
      "倒装结构的听力识别（Hardly had... / Only when... / Never before...）",
      "长难句的多层逻辑解析（让步、因果、并列）",
      "学术信号词的分段功能（First / Second / Third / In conclusion）"
    ],
    reciteGoal: "全文背诵，准确率 ≥ 95%，流畅率 ≥ 90%"
  }
];

// 难度颜色映射
function getDifficultyStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

// 导出
if (typeof module !== 'undefined') module.exports = { MATERIALS_DB };
