// 3-Level English Course vocabulary curated for a 12-year-old boy
// Each word includes a contextual short sentence, blank version, and Hebrew translation

export const COURSE_LEVELS = [
  {
    id: 1,
    title: 'שלב 1: יסודות',
    titleEn: 'Level 1: Starter',
    subtitle: 'מילים ראשונות כמו Apple, Bicycle, House, Dog...',
    icon: '🥉',
    color: 'emerald',
    badge: 'מתחילים',
    target: 'אוצר מילים בסיסי, מוכר ומעודד'
  },
  {
    id: 2,
    title: 'שלב 2: חוקר',
    titleEn: 'Level 2: Explorer',
    subtitle: 'מחשב, הרפתקאות, ספורט, חיות ואוכל...',
    icon: '🥈',
    color: 'cyan',
    badge: 'מתקדמים',
    target: 'עולם היומיום, ספורט, גאדג׳טים וטבע'
  },
  {
    id: 3,
    title: 'שלב 3: מאסטר',
    titleEn: 'Level 3: Master',
    subtitle: 'גיימינג, חלל, כוחות על, מדע ואסטרטגיה...',
    icon: '🥇',
    color: 'purple',
    badge: 'אלופים',
    target: 'שפה עשירה, מדע בדיוני, גיימינג ואקשן'
  }
];

export const VOCABULARY = [
  // ==========================================
  // LEVEL 1: STARTER / BEGINNERS (35 WORDS)
  // ==========================================
  {
    id: 'l1_1', level: 1, hebrew: 'תפוח', english: 'Apple', phonetic: 'Tapuach', hint: 'Red or green crunchy fruit',
    sentenceEn: 'I eat a sweet red apple every morning.',
    sentenceBlank: 'I eat a sweet red _____ every morning.',
    sentenceHe: 'אני אוכל תפוח אדום ומתוק כל בוקר.'
  },
  {
    id: 'l1_2', level: 1, hebrew: 'אופניים', english: 'Bicycle', phonetic: 'Ofanayim', hint: 'Two wheels with pedals',
    sentenceEn: 'He rides his bicycle to the park.',
    sentenceBlank: 'He rides his _____ to the park.',
    sentenceHe: 'הוא רוכב על האופניים שלו לפארק.'
  },
  {
    id: 'l1_3', level: 1, hebrew: 'כלב', english: 'Dog', phonetic: 'Kelev', hint: "Man's best four-legged friend",
    sentenceEn: 'The friendly dog wags its tail.',
    sentenceBlank: 'The friendly _____ wags its tail.',
    sentenceHe: 'הכלב הידידותי מכשכש בזנב שלו.'
  },
  {
    id: 'l1_4', level: 1, hebrew: 'חתול', english: 'Cat', phonetic: 'Chatul', hint: 'Says meow',
    sentenceEn: 'The cute cat sleeps on the sofa.',
    sentenceBlank: 'The cute _____ sleeps on the sofa.',
    sentenceHe: 'החתול החמוד ישן על הספה.'
  },
  {
    id: 'l1_5', level: 1, hebrew: 'בית', english: 'House', phonetic: 'Bayit', hint: 'Where family lives',
    sentenceEn: 'My family lives in a cozy house.',
    sentenceBlank: 'My family lives in a cozy _____.',
    sentenceHe: 'המשפחה שלי גרה בבית חמים.'
  },
  {
    id: 'l1_6', level: 1, hebrew: 'ספר', english: 'Book', phonetic: 'Sefer', hint: 'Pages you read',
    sentenceEn: 'I read an exciting book before bed.',
    sentenceBlank: 'I read an exciting _____ before bed.',
    sentenceHe: 'אני קורא ספר מרתק לפני השינה.'
  },
  {
    id: 'l1_7', level: 1, hebrew: 'מים', english: 'Water', phonetic: 'Mayim', hint: 'Drink when thirsty',
    sentenceEn: 'Drink a glass of cold water.',
    sentenceBlank: 'Drink a glass of cold _____.',
    sentenceHe: 'שתה כוס מים קרים.'
  },
  {
    id: 'l1_8', level: 1, hebrew: 'לחם', english: 'Bread', phonetic: 'Lechem', hint: 'Used to make sandwiches',
    sentenceEn: 'We make toast with fresh bread.',
    sentenceBlank: 'We make toast with fresh _____.',
    sentenceHe: 'אנחנו מכינים טוסט עם לחם טרי.'
  },
  {
    id: 'l1_9', level: 1, hebrew: 'בית ספר', english: 'School', phonetic: 'Beit Sefer', hint: 'Where kids go to learn',
    sentenceEn: 'We learn English together at school.',
    sentenceBlank: 'We learn English together at _____.',
    sentenceHe: 'אנחנו לומדים אנגלית ביחד בבית הספר.'
  },
  {
    id: 'l1_10', level: 1, hebrew: 'כדור', english: 'Ball', phonetic: 'Kadur', hint: 'Round object you kick or throw',
    sentenceEn: 'He kicked the soccer ball into the net.',
    sentenceBlank: 'He kicked the soccer _____ into the net.',
    sentenceHe: 'הוא בעט בכדורגל אל תוך הרשת.'
  },
  {
    id: 'l1_11', level: 1, hebrew: 'שמש', english: 'Sun', phonetic: 'Shemesh', hint: 'Shines bright in daytime',
    sentenceEn: 'The warm sun is shining in the sky.',
    sentenceBlank: 'The warm _____ is shining in the sky.',
    sentenceHe: 'השמש החמימה זורחת בשמיים.'
  },
  {
    id: 'l1_12', level: 1, hebrew: 'ירח', english: 'Moon', phonetic: 'Yareach', hint: 'Glows in the night sky',
    sentenceEn: 'The white moon shines brightly at night.',
    sentenceBlank: 'The white _____ shines brightly at night.',
    sentenceHe: 'הירח הלבן מאיר בבהירות בלילה.'
  },
  {
    id: 'l1_13', level: 1, hebrew: 'מכונית', english: 'Car', phonetic: 'Mechonit', hint: 'Vehicle with four wheels',
    sentenceEn: 'Dad drives the blue car to work.',
    sentenceBlank: 'Dad drives the blue _____ to work.',
    sentenceHe: 'אבא נוהג במכונית הכחולה לעבודה.'
  },
  {
    id: 'l1_14', level: 1, hebrew: 'עץ', english: 'Tree', phonetic: 'Etz', hint: 'Has leaves and branches',
    sentenceEn: 'Birds build nests in the green tree.',
    sentenceBlank: 'Birds build nests in the green _____.',
    sentenceHe: 'ציפורים בונות קנים בעץ הירוק.'
  },
  {
    id: 'l1_15', level: 1, hebrew: 'דלת', english: 'Door', phonetic: 'Delet', hint: 'Open to enter a room',
    sentenceEn: 'Please knock before opening the door.',
    sentenceBlank: 'Please knock before opening the _____.',
    sentenceHe: 'אנא דפוק לפני שאתה פותח את הדלת.'
  },
  {
    id: 'l1_16', level: 1, hebrew: 'חלון', english: 'Window', phonetic: 'Chalon', hint: 'Glass to look outside',
    sentenceEn: 'Look out the window to see the rain.',
    sentenceBlank: 'Look out the _____ to see the rain.',
    sentenceHe: 'הבט מהחלון לראות את הגשם.'
  },
  {
    id: 'l1_17', level: 1, hebrew: 'שולחן', english: 'Table', phonetic: 'Shulchan', hint: 'Where you put your food',
    sentenceEn: 'We put the dinner plates on the table.',
    sentenceBlank: 'We put the dinner plates on the _____.',
    sentenceHe: 'שמנו את צלחות ארוחת הערב על השולחן.'
  },
  {
    id: 'l1_18', level: 1, hebrew: 'כיסא', english: 'Chair', phonetic: 'Kiseh', hint: 'Piece of furniture you sit on',
    sentenceEn: 'Sit down on this comfortable chair.',
    sentenceBlank: 'Sit down on this comfortable _____.',
    sentenceHe: 'שב על הכיסא הנוח הזה.'
  },
  {
    id: 'l1_19', level: 1, hebrew: 'חבר', english: 'Friend', phonetic: 'Chaver', hint: 'A buddy you play with',
    sentenceEn: 'My best friend plays video games with me.',
    sentenceBlank: 'My best _____ plays video games with me.',
    sentenceHe: 'החבר הכי טוב שלי משחק איתי במשחקי וידאו.'
  },
  {
    id: 'l1_20', level: 1, hebrew: 'חלב', english: 'Milk', phonetic: 'Chalav', hint: 'White drink from cows',
    sentenceEn: 'I drink cold milk with my cookies.',
    sentenceBlank: 'I drink cold _____ with my cookies.',
    sentenceHe: 'אני שותה חלב קר עם העוגיות שלי.'
  },
  {
    id: 'l1_21', level: 1, hebrew: 'נעליים', english: 'Shoes', phonetic: 'Naalayim', hint: 'Worn on your feet',
    sentenceEn: 'Tie your sports shoes before running.',
    sentenceBlank: 'Tie your sports _____ before running.',
    sentenceHe: 'קשור את נעלי הספורט שלך לפני הריצה.'
  },
  {
    id: 'l1_22', level: 1, hebrew: 'חולצה', english: 'Shirt', phonetic: 'Chultza', hint: 'Top clothing you wear',
    sentenceEn: 'He wears a cool gaming shirt.',
    sentenceBlank: 'He wears a cool gaming _____.',
    sentenceHe: 'הוא לובש חולצת גיימינג מגניבה.'
  },
  {
    id: 'l1_23', level: 1, hebrew: 'ילד', english: 'Boy', phonetic: 'Yeled', hint: 'Young male',
    sentenceEn: 'The smart boy solved the puzzle.',
    sentenceBlank: 'The smart _____ solved the puzzle.',
    sentenceHe: 'הילד החכם פתר את החידה.'
  },
  {
    id: 'l1_24', level: 1, hebrew: 'ילדה', english: 'Girl', phonetic: 'Yalda', hint: 'Young female',
    sentenceEn: 'The talented girl scored high in the quiz.',
    sentenceBlank: 'The talented _____ scored high in the quiz.',
    sentenceHe: 'הילדה המוכשרת השיגה ציון גבוה בבוחן.'
  },
  {
    id: 'l1_25', level: 1, hebrew: 'משפחה', english: 'Family', phonetic: 'Mishpacha', hint: 'Parents and siblings',
    sentenceEn: 'We celebrate holidays with our family.',
    sentenceBlank: 'We celebrate holidays with our _____.',
    sentenceHe: 'אנחנו חוגגים חגים עם המשפחה שלנו.'
  },
  {
    id: 'l1_26', level: 1, hebrew: 'שמח', english: 'Happy', phonetic: 'Sameach', hint: 'Smiling with joy',
    sentenceEn: 'I feel very happy when we win.',
    sentenceBlank: 'I feel very _____ when we win.',
    sentenceHe: 'אני מרגיש מאוד שמח כשאנחנו מנצחים.'
  },
  {
    id: 'l1_27', level: 1, hebrew: 'שעון', english: 'Clock', phonetic: 'Shaon', hint: 'Tells the time',
    sentenceEn: 'The alarm clock rings at seven.',
    sentenceBlank: 'The alarm _____ rings at seven.',
    sentenceHe: 'השעון המעורר מצלצל בשבע.'
  },
  {
    id: 'l1_28', level: 1, hebrew: 'משחק', english: 'Game', phonetic: 'Mis-chak', hint: 'Fun activity or match',
    sentenceEn: 'This multiplayer game is awesome!',
    sentenceBlank: 'This multiplayer _____ is awesome!',
    sentenceHe: 'משחק המולטיפלייר הזה מדהים!'
  },
  {
    id: 'l1_29', level: 1, hebrew: 'דג', english: 'Fish', phonetic: 'Dag', hint: 'Swims in water',
    sentenceEn: 'The colorful fish swims in the aquarium.',
    sentenceBlank: 'The colorful _____ swims in the aquarium.',
    sentenceHe: 'הדג הצבעוני שוחה באקווריום.'
  },
  {
    id: 'l1_30', level: 1, hebrew: 'מיטה', english: 'Bed', phonetic: 'Mita', hint: 'Where you sleep at night',
    sentenceEn: 'I rest in my comfortable bed.',
    sentenceBlank: 'I rest in my comfortable _____.',
    sentenceHe: 'אני נח במיטה הנוחה שלי.'
  },
  {
    id: 'l1_31', level: 1, hebrew: 'שמיים', english: 'Sky', phonetic: 'Shamayim', hint: 'Blue above our heads',
    sentenceEn: 'White clouds float in the blue sky.',
    sentenceBlank: 'White clouds float in the blue _____.',
    sentenceHe: 'עננים לבנים צפים בשמיים הכחולים.'
  },
  {
    id: 'l1_32', level: 1, hebrew: 'יד', english: 'Hand', phonetic: 'Yad', hint: 'Has five fingers',
    sentenceEn: 'Raise your hand to ask a question.',
    sentenceBlank: 'Raise your _____ to ask a question.',
    sentenceHe: 'הרם את היד כדי לשאול שאלה.'
  },
  {
    id: 'l1_33', level: 1, hebrew: 'עין', english: 'Eye', phonetic: 'Ayin', hint: 'Used for seeing',
    sentenceEn: 'Keep your eye on the bouncing ball.',
    sentenceBlank: 'Keep your _____ on the bouncing ball.',
    sentenceHe: 'שמור את העין שלך על הכדור המקפץ.'
  },
  {
    id: 'l1_34', level: 1, hebrew: 'אדום', english: 'Red', phonetic: 'Adom', hint: 'Color of strawberries',
    sentenceEn: 'The fast racecar is bright red.',
    sentenceBlank: 'The fast racecar is bright _____.',
    sentenceHe: 'מכונית המרוץ המהירה היא אדומה בוהקת.'
  },
  {
    id: 'l1_35', level: 1, hebrew: 'כחול', english: 'Blue', phonetic: 'Kachol', hint: 'Color of the sea',
    sentenceEn: 'The deep ocean looks dark blue.',
    sentenceBlank: 'The deep ocean looks dark _____.',
    sentenceHe: 'האוקיינוס העמוק נראה כחול כהה.'
  },

  // ==========================================
  // LEVEL 2: EXPLORER / INTERMEDIATE (35 WORDS)
  // ==========================================
  {
    id: 'l2_1', level: 2, hebrew: 'מחשב', english: 'Computer', phonetic: 'Machshev', hint: 'Electronic machine for PC games',
    sentenceEn: 'I play Minecraft on my new computer.',
    sentenceBlank: 'I play Minecraft on my new _____.',
    sentenceHe: 'אני משחק מיינקראפט במחשב החדש שלי.'
  },
  {
    id: 'l2_2', level: 2, hebrew: 'מסך', english: 'Screen', phonetic: 'Masach', hint: 'Display monitor',
    sentenceEn: 'He looks at the computer screen.',
    sentenceBlank: 'He looks at the computer _____.',
    sentenceHe: 'הוא מביט במסך המחשב.'
  },
  {
    id: 'l2_3', level: 2, hebrew: 'מקלדת', english: 'Keyboard', phonetic: 'Mikledet', hint: 'Keys for typing words',
    sentenceEn: 'He types fast on his gaming keyboard.',
    sentenceBlank: 'He types fast on his gaming _____.',
    sentenceHe: 'הוא מקליד מהר במקלדת הגיימינג שלו.'
  },
  {
    id: 'l2_4', level: 2, hebrew: 'תיק גב', english: 'Backpack', phonetic: 'Tik Gav', hint: 'Carries school supplies',
    sentenceEn: 'Put your books into your backpack.',
    sentenceBlank: 'Put your books into your _____.',
    sentenceHe: 'שים את הספרים שלך בתוך תיק הגב.'
  },
  {
    id: 'l2_5', level: 2, hebrew: 'אלוף', english: 'Champion', phonetic: 'Aluf', hint: 'Number one winner',
    sentenceEn: 'Our team won and became the champion!',
    sentenceBlank: 'Our team won and became the _____!',
    sentenceHe: 'הקבוצה שלנו ניצחה והפכה לאלופה!'
  },
  {
    id: 'l2_6', level: 2, hebrew: 'שחקן', english: 'Player', phonetic: 'Sachkan', hint: 'Member in a team or game',
    sentenceEn: 'He is the top player in the server.',
    sentenceBlank: 'He is the top _____ in the server.',
    sentenceHe: 'הוא השחקן המוביל בשרת.'
  },
  {
    id: 'l2_7', level: 2, hebrew: 'שער / גול', english: 'Goal', phonetic: 'Shaar', hint: 'Points scored in soccer',
    sentenceEn: 'He scored a fantastic soccer goal!',
    sentenceBlank: 'He scored a fantastic soccer _____!',
    sentenceHe: 'הוא הבקיע שער כדורגל פנטסטי!'
  },
  {
    id: 'l2_8', level: 2, hebrew: 'קבוצה', english: 'Team', phonetic: 'Kvutza', hint: 'Group playing together',
    sentenceEn: 'Pass the ball to help your team.',
    sentenceBlank: 'Pass the ball to help your _____.',
    sentenceHe: 'מסור את הכדור כדי לעזור לקבוצה שלך.'
  },
  {
    id: 'l2_9', level: 2, hebrew: 'מאמן', english: 'Coach', phonetic: 'Meamen', hint: 'Guides the athletes',
    sentenceEn: 'The coach gives smart advice to the players.',
    sentenceBlank: 'The _____ gives smart advice to the players.',
    sentenceHe: 'המאמן נותן עצות חכמות לשחקנים.'
  },
  {
    id: 'l2_10', level: 2, hebrew: 'מהירות', english: 'Speed', phonetic: 'Mehirut', hint: 'Fast velocity',
    sentenceEn: 'The sports car accelerated to high speed.',
    sentenceBlank: 'The sports car accelerated to high _____.',
    sentenceHe: 'מכונית הספורט האיצה למהירות גבוהה.'
  },
  {
    id: 'l2_11', level: 2, hebrew: 'פיצה', english: 'Pizza', phonetic: 'Pitza', hint: 'Baked dough with cheese',
    sentenceEn: 'We ordered a hot cheese pizza.',
    sentenceBlank: 'We ordered a hot cheese _____.',
    sentenceHe: 'הזמנו פיצה גבינה חמה.'
  },
  {
    id: 'l2_12', level: 2, hebrew: 'המבורגר', english: 'Burger', phonetic: 'Burger', hint: 'Grilled beef patty',
    sentenceEn: 'He ordered a burger with French fries.',
    sentenceBlank: 'He ordered a _____ with French fries.',
    sentenceHe: 'הוא הזמין המבורגר עם צ׳יפס.'
  },
  {
    id: 'l2_13', level: 2, hebrew: 'טעים', english: 'Delicious', phonetic: 'Taim', hint: 'Super tasty meal',
    sentenceEn: 'This homemade cake is so delicious!',
    sentenceBlank: 'This homemade cake is so _____!',
    sentenceHe: 'העוגה הביתית הזו כל כך טעימה!'
  },
  {
    id: 'l2_14', level: 2, hebrew: 'פריך / קראנצ׳י', english: 'Crunchy', phonetic: 'Frich', hint: 'Crisp texture',
    sentenceEn: 'I like eating crunchy potato chips.',
    sentenceBlank: 'I like eating _____ potato chips.',
    sentenceHe: 'אני אוהב לאכול צ׳יפס פריך.'
  },
  {
    id: 'l2_15', level: 2, hebrew: 'קינוח', english: 'Dessert', phonetic: 'Kinuach', hint: 'Sweet dish at the end',
    sentenceEn: 'Ice cream is my favorite dessert.',
    sentenceBlank: 'Ice cream is my favorite _____.',
    sentenceHe: 'גלידה היא הקינוח האהוב עליי.'
  },
  {
    id: 'l2_16', level: 2, hebrew: 'ארוחת בוקר', english: 'Breakfast', phonetic: 'Aruchat Boker', hint: 'First meal of the day',
    sentenceEn: 'Pancakes make the best breakfast.',
    sentenceBlank: 'Pancakes make the best _____.',
    sentenceHe: 'פנקייקים הם ארוחת הבוקר הכי טובה.'
  },
  {
    id: 'l2_17', level: 2, hebrew: 'הרפתקה', english: 'Adventure', phonetic: 'Harpatka', hint: 'Exciting bold journey',
    sentenceEn: 'The hero went on an epic adventure.',
    sentenceBlank: 'The hero went on an epic _____.',
    sentenceHe: 'הגיבור יצא להרפתקה אפית.'
  },
  {
    id: 'l2_18', level: 2, hebrew: 'אוצר', english: 'Treasure', phonetic: 'Otzar', hint: 'Chest of hidden riches',
    sentenceEn: 'The pirates found a chest of gold treasure.',
    sentenceBlank: 'The pirates found a chest of gold _____.',
    sentenceHe: 'השודדים מצאו תיבה של אוצר מוזהב.'
  },
  {
    id: 'l2_19', level: 2, hebrew: 'טירה', english: 'Castle', phonetic: 'Tira', hint: 'Stone fortress of knights',
    sentenceEn: 'The king lives in a stone castle.',
    sentenceBlank: 'The king lives in a stone _____.',
    sentenceHe: 'המלך גר בטירת אבן.'
  },
  {
    id: 'l2_20', level: 2, hebrew: 'אי בודד', english: 'Island', phonetic: 'Ee', hint: 'Land surrounded by ocean',
    sentenceEn: 'They sailed to a tropical island.',
    sentenceBlank: 'They sailed to a tropical _____.',
    sentenceHe: 'הם הפליגו לאי טרופי.'
  },
  {
    id: 'l2_21', level: 2, hebrew: 'מבוך', english: 'Maze', phonetic: 'Mavoch', hint: 'Twisting puzzle of pathways',
    sentenceEn: 'We found our way out of the maze.',
    sentenceBlank: 'We found our way out of the _____.',
    sentenceHe: 'מצאנו את דרכנו החוצה מהמבוך.'
  },
  {
    id: 'l2_22', level: 2, hebrew: 'מפה', english: 'Map', phonetic: 'Mappa', hint: 'Diagram showing geography',
    sentenceEn: 'Follow the map to find the secret cave.',
    sentenceBlank: 'Follow the _____ to find the secret cave.',
    sentenceHe: 'עקוב אחר המפה כדי למצוא את המערה הסודית.'
  },
  {
    id: 'l2_23', level: 2, hebrew: 'אריה', english: 'Lion', phonetic: 'Aryeh', hint: 'Golden mane big cat',
    sentenceEn: 'The roaring lion is the king of beasts.',
    sentenceBlank: 'The roaring _____ is the king of beasts.',
    sentenceHe: 'האריה השואג הוא מלך החיות.'
  },
  {
    id: 'l2_24', level: 2, hebrew: 'נשר', english: 'Eagle', phonetic: 'Nesher', hint: 'Mighty soaring bird',
    sentenceEn: 'The eagle flies high above the cliffs.',
    sentenceBlank: 'The _____ flies high above the cliffs.',
    sentenceHe: 'הנשר עף גבוה מעל הצוקים.'
  },
  {
    id: 'l2_25', level: 2, hebrew: 'כריש', english: 'Shark', phonetic: 'Karish', hint: 'Ocean hunter with sharp teeth',
    sentenceEn: 'The shark swam swiftly through the reef.',
    sentenceBlank: 'The _____ swam swiftly through the reef.',
    sentenceHe: 'הכריש שחה במהירות דרך השונית.'
  },
  {
    id: 'l2_26', level: 2, hebrew: 'זאב', english: 'Wolf', phonetic: 'Zeev', hint: 'Prowls in packs and howls',
    sentenceEn: 'The lone wolf howled in the woods.',
    sentenceBlank: 'The lone _____ howled in the woods.',
    sentenceHe: 'הזאב הבודד ילל ביערות.'
  },
  {
    id: 'l2_27', level: 2, hebrew: 'דולפין', english: 'Dolphin', phonetic: 'Dolfin', hint: 'Intelligent sea mammal',
    sentenceEn: 'The playful dolphin leaped out of the water.',
    sentenceBlank: 'The playful _____ leaped out of the water.',
    sentenceHe: 'הדולפין השובב קפץ מתוך המים.'
  },
  {
    id: 'l2_28', level: 2, hebrew: 'יער', english: 'Forest', phonetic: 'Yaar', hint: 'Dense woodland area',
    sentenceEn: 'Tall pine trees grow in the quiet forest.',
    sentenceBlank: 'Tall pine trees grow in the quiet _____.',
    sentenceHe: 'עצי אורן גבוהים צומחים ביער השקט.'
  },
  {
    id: 'l2_29', level: 2, hebrew: 'כוכב לכת', english: 'Planet', phonetic: 'Kochav Lechet', hint: 'Like Earth, Mars or Jupiter',
    sentenceEn: 'Mars is called the red planet.',
    sentenceBlank: 'Mars is called the red _____.',
    sentenceHe: 'מאדים נקרא כוכב הלכת האדום.'
  },
  {
    id: 'l2_30', level: 2, hebrew: 'טיל / חללית', english: 'Rocket', phonetic: 'Til', hint: 'Launches into outer space',
    sentenceEn: 'The rocket launched toward the stars.',
    sentenceBlank: 'The _____ launched toward the stars.',
    sentenceHe: 'הטיל שוגר לעבר הכוכבים.'
  },
  {
    id: 'l2_31', level: 2, hebrew: 'חייזר', english: 'Alien', phonetic: 'Chaizar', hint: 'Being from another galaxy',
    sentenceEn: 'The friendly alien greeted the astronauts.',
    sentenceBlank: 'The friendly _____ greeted the astronauts.',
    sentenceHe: 'החייזר הידידותי בירך את האסטרונאוטים.'
  },
  {
    id: 'l2_32', level: 2, hebrew: 'טלסקופ', english: 'Telescope', phonetic: 'Teleskop', hint: 'Used to view distant stars',
    sentenceEn: 'Look at Jupiter using a telescope.',
    sentenceBlank: 'Look at Jupiter using a _____.',
    sentenceHe: 'הבט על צדק באמצעות טלסקופ.'
  },
  {
    id: 'l2_33', level: 2, hebrew: 'סוד', english: 'Secret', phonetic: 'Sod', hint: 'Something kept confidential',
    sentenceEn: 'He whispered a top secret code to me.',
    sentenceBlank: 'He whispered a top _____ code to me.',
    sentenceHe: 'הוא לחש לי קוד סודי ביותר.'
  },
  {
    id: 'l2_34', level: 2, hebrew: 'אתגר', english: 'Challenge', phonetic: 'Etgar', hint: 'Task testing your abilities',
    sentenceEn: 'Beating the hardest level was a fun challenge.',
    sentenceBlank: 'Beating the hardest level was a fun _____.',
    sentenceHe: 'לנצח את השלב הכי קשה היה אתגר מהנה.'
  },
  {
    id: 'l2_35', level: 2, hebrew: 'אצטדיון', english: 'Stadium', phonetic: 'Itztadyon', hint: 'Massive sports arena',
    sentenceEn: 'Cheering fans filled the soccer stadium.',
    sentenceBlank: 'Cheering fans filled the soccer _____.',
    sentenceHe: 'אוהדים מעודדים מילאו את אצטדיון הכדורגל.'
  },

  // ==========================================
  // LEVEL 3: MASTER / ADVANCED (30 WORDS)
  // ==========================================
  {
    id: 'l3_1', level: 3, hebrew: 'ניצחון', english: 'Victory', phonetic: 'Nitzachon', hint: 'Triumph over opponent',
    sentenceEn: 'We celebrated an epic victory in the final match.',
    sentenceBlank: 'We celebrated an epic _____ in the final match.',
    sentenceHe: 'חגגנו ניצחון אפי במשחק הגמר.'
  },
  {
    id: 'l3_2', level: 3, hebrew: 'משימה', english: 'Quest', phonetic: 'Mesima', hint: 'Heroic mission to fulfill',
    sentenceEn: 'The brave hero began a dangerous quest.',
    sentenceBlank: 'The brave hero began a dangerous _____.',
    sentenceHe: 'הגיבור האמיץ התחיל משימה מסוכנת.'
  },
  {
    id: 'l3_3', level: 3, hebrew: 'נשק', english: 'Weapon', phonetic: 'Neshek', hint: 'Equipment for combat',
    sentenceEn: 'Upgrade your weapon to deal more damage.',
    sentenceBlank: 'Upgrade your _____ to deal more damage.',
    sentenceHe: 'שדרג את הנשק שלך כדי להסב יותר נזק.'
  },
  {
    id: 'l3_4', level: 3, hebrew: 'שריון / מגן', english: 'Shield', phonetic: 'Magen', hint: 'Protective gear against damage',
    sentenceEn: 'His heavy shield blocked the arrows.',
    sentenceBlank: 'His heavy _____ blocked the arrows.',
    sentenceHe: 'המגן הכבד שלו חסם את החצים.'
  },
  {
    id: 'l3_5', level: 3, hebrew: 'תקלה / באג', english: 'Glitch', phonetic: 'Takala', hint: 'Technical bug in computer code',
    sentenceEn: 'A funny glitch made the character float.',
    sentenceBlank: 'A funny _____ made the character float.',
    sentenceHe: 'באג מצחיק גרם לדמות לרחף באוויר.'
  },
  {
    id: 'l3_6', level: 3, hebrew: 'מטרה', english: 'Target', phonetic: 'Matara', hint: 'Bullseye you aim toward',
    sentenceEn: 'Aim your bow directly at the target.',
    sentenceBlank: 'Aim your bow directly at the _____.',
    sentenceHe: 'כוון את הקשת שלך ישירות אל המטרה.'
  },
  {
    id: 'l3_7', level: 3, hebrew: 'תחרות', english: 'Competition', phonetic: 'Taharut', hint: 'Rivalry for first place',
    sentenceEn: 'He won first prize in the gaming competition.',
    sentenceBlank: 'He won first prize in the gaming _____.',
    sentenceHe: 'הוא זכה בפרס הראשון בתחרות הגיימינג.'
  },
  {
    id: 'l3_8', level: 3, hebrew: 'דרקון', english: 'Dragon', phonetic: 'Drakon', hint: 'Legendary winged fire monster',
    sentenceEn: 'The fire dragon soared above the volcano.',
    sentenceBlank: 'The fire _____ soared above the volcano.',
    sentenceHe: 'דרקון האש המריא מעל הר הגעש.'
  },
  {
    id: 'l3_9', level: 3, hebrew: 'חרב', english: 'Sword', phonetic: 'Cherev', hint: 'Steel blade weapon',
    sentenceEn: 'The knight drew his sharp sword from the scabbard.',
    sentenceBlank: 'The knight drew his sharp _____ from the scabbard.',
    sentenceHe: 'האביר שלף את חרבו החדה מהנדן.'
  },
  {
    id: 'l3_10', level: 3, hebrew: 'גיבור', english: 'Hero', phonetic: 'Gibor', hint: 'Protagonist with great courage',
    sentenceEn: 'Spider-Man is a hero who saves the city.',
    sentenceBlank: 'Spider-Man is a _____ who saves the city.',
    sentenceHe: 'ספיידרמן הוא גיבור שמציל את העיר.'
  },
  {
    id: 'l3_11', level: 3, hebrew: 'תעלומה', english: 'Mystery', phonetic: 'Taaluma', hint: 'Enigma needing detective work',
    sentenceEn: 'The detective solved the great mystery.',
    sentenceBlank: 'The detective solved the great _____.',
    sentenceHe: 'הבלש פתר את התעלומה הגדולה.'
  },
  {
    id: 'l3_12', level: 3, hebrew: 'מפלצת', english: 'Monster', phonetic: 'Mifletzet', hint: 'Fierce terrifying beast',
    sentenceEn: 'Defeat the dungeon monster to open the gate.',
    sentenceBlank: 'Defeat the dungeon _____ to open the gate.',
    sentenceHe: 'הבס את מפלצת הצינוק כדי לפתוח את השער.'
  },
  {
    id: 'l3_13', level: 3, hebrew: 'גביע', english: 'Trophy', phonetic: 'Gavia', hint: 'Silver or gold award cup',
    sentenceEn: 'The champions raised the golden trophy.',
    sentenceBlank: 'The champions raised the golden _____.',
    sentenceHe: 'האלופים הניפו את גביע הזהב.'
  },
  {
    id: 'l3_14', level: 3, hebrew: 'כוח כבידה', english: 'Gravity', phonetic: 'Gravitatzya', hint: 'Force pulling objects to center',
    sentenceEn: 'There is zero gravity in outer space.',
    sentenceBlank: 'There is zero _____ in outer space.',
    sentenceHe: 'אין כוח כבידה בחלל החיצון.'
  },
  {
    id: 'l3_15', level: 3, hebrew: 'אסטרונאוט', english: 'Astronaut', phonetic: 'Astronaut', hint: 'Cosmonaut traveling in orbit',
    sentenceEn: 'The astronaut walked on the moon surface.',
    sentenceBlank: 'The _____ walked on the moon surface.',
    sentenceHe: 'האסטרונאוט צעד על פני הירח.'
  },
  {
    id: 'l3_16', level: 3, hebrew: 'גלקסיה', english: 'Galaxy', phonetic: 'Galaksya', hint: 'Billions of solar systems',
    sentenceEn: 'Our solar system is inside the Milky Way galaxy.',
    sentenceBlank: 'Our solar system is inside the Milky Way _____.',
    sentenceHe: 'מערכת השמש שלנו נמצאת בתוך גלקסיית שביל החלב.'
  },
  {
    id: 'l3_17', level: 3, hebrew: 'כוכב שביט', english: 'Comet', phonetic: 'Shavit', hint: 'Cosmic rock leaving a glowing tail',
    sentenceEn: 'The glowing comet flew past Earth.',
    sentenceBlank: 'The glowing _____ flew past Earth.',
    sentenceHe: 'כוכב השביט הזוהר חלף על פני כדור הארץ.'
  },
  {
    id: 'l3_18', level: 3, hebrew: 'טורף', english: 'Predator', phonetic: 'Toref', hint: 'Hunter animal in ecosystem',
    sentenceEn: 'The hawk is a sharp-eyed predator.',
    sentenceBlank: 'The hawk is a sharp-eyed _____.',
    sentenceHe: 'הנץ הוא טורף בעל ראייה חדה.'
  },
  {
    id: 'l3_19', level: 3, hebrew: 'רעם וברק', english: 'Thunder', phonetic: 'Raam', hint: 'Sonic boom from lightning',
    sentenceEn: 'Loud thunder shook the windows during the storm.',
    sentenceBlank: 'Loud _____ shook the windows during the storm.',
    sentenceHe: 'רעם מחריש אוזניים הרעיד את החלונות בסערה.'
  },
  {
    id: 'l3_20', level: 3, hebrew: 'כוח / חוזק', english: 'Strength', phonetic: 'Koach', hint: 'Physical prowess and power',
    sentenceEn: 'The Hulk has unbelievable physical strength.',
    sentenceBlank: 'The Hulk has unbelievable physical _____.',
    sentenceHe: 'להאלק יש כוח פיזי לא ייאמן.'
  },
  {
    id: 'l3_21', level: 3, hebrew: 'בלתי נראה', english: 'Invisible', phonetic: 'Bilti Nireh', hint: 'Imperceptible to human eyes',
    sentenceEn: 'The magic cloak turned the wizard invisible.',
    sentenceBlank: 'The magic cloak turned the wizard _____.',
    sentenceHe: 'גלימת הקסם הפכה את הקוסם לבלתי נראה.'
  },
  {
    id: 'l3_22', level: 2, hebrew: 'אומץ', english: 'Bravery', phonetic: 'Ometz', hint: 'Fearlessness facing peril',
    sentenceEn: 'Facing the beast required great bravery.',
    sentenceBlank: 'Facing the beast required great _____.',
    sentenceHe: 'העמידה מול המפלצת דרשה אומץ רב.'
  },
  {
    id: 'l3_23', level: 3, hebrew: 'שיגור (טלפורט)', english: 'Teleport', phonetic: 'Teleport', hint: 'Instantaneous transit',
    sentenceEn: 'Press the spacebar to teleport behind the enemy.',
    sentenceBlank: 'Press the spacebar to _____ behind the enemy.',
    sentenceHe: 'לחץ על מקש הרווח כדי להשתגר אל מאחורי האויב.'
  },
  {
    id: 'l3_24', level: 3, hebrew: 'ענק', english: 'Giant', phonetic: 'Anak', hint: 'Colossal titan size',
    sentenceEn: 'The giant robot protected the futuristic city.',
    sentenceBlank: 'The _____ robot protected the futuristic city.',
    sentenceHe: 'הרובוט הענק הגן על העיר העתידנית.'
  },
  {
    id: 'l3_25', level: 3, hebrew: 'צל', english: 'Shadow', phonetic: 'Tzel', hint: 'Silhouette blocking light',
    sentenceEn: 'The ninja moved quietly through the shadow.',
    sentenceBlank: 'The ninja moved quietly through the _____.',
    sentenceHe: 'הנינג׳ה נע בשקט דרך הצל.'
  },
  {
    id: 'l3_26', level: 3, hebrew: 'להבה', english: 'Flame', phonetic: 'Lehava', hint: 'Blazing tongue of fire',
    sentenceEn: 'A bright orange flame burned on the torch.',
    sentenceBlank: 'A bright orange _____ burned on the torch.',
    sentenceHe: 'להבה כתומה ובוהקת בערה על הלפיד.'
  },
  {
    id: 'l3_27', level: 3, hebrew: 'חשמלי', english: 'Electric', phonetic: 'Chashmali', hint: 'Powered by voltage sparks',
    sentenceEn: 'Pikachu unleashes an electric thunderbolt attack.',
    sentenceBlank: 'Pikachu unleashes an _____ thunderbolt attack.',
    sentenceHe: 'פיקאצ׳ו משחרר מתקפת ברק חשמלית.'
  },
  {
    id: 'l3_28', level: 3, hebrew: 'אסטרטגיה', english: 'Strategy', phonetic: 'Astratēgya', hint: 'Master tactical plan for victory',
    sentenceEn: 'We planned a smart strategy to win the match.',
    sentenceBlank: 'We planned a smart _____ to win the match.',
    sentenceHe: 'תכננו אסטרטגיה חכמה כדי לנצח במשחק.'
  },
  {
    id: 'l3_29', level: 3, hebrew: 'הישג', english: 'Achievement', phonetic: 'Heseg', hint: 'Badge earned for milestones',
    sentenceEn: 'You unlocked a rare achievement badge!',
    sentenceBlank: 'You unlocked a rare _____ badge!',
    sentenceHe: 'פתחת תג הישג נדיר!'
  },
  {
    id: 'l3_30', level: 3, hebrew: 'שוער', english: 'Goalkeeper', phonetic: 'Shoer', hint: 'Final line of net defense',
    sentenceEn: 'The goalkeeper blocked the penalty kick.',
    sentenceBlank: 'The _____ blocked the penalty kick.',
    sentenceHe: 'השוער הדף את בעיטת הפנדל.'
  }
];

// Helper to generate a question (either Word Mode or Sentence Mode)
export function generateQuestion(word, allWords, mode = 'word') {
  const sameLevelDistractors = allWords.filter(w => w.level === word.level && w.english !== word.english);
  const pool = sameLevelDistractors.length >= 3 
    ? sameLevelDistractors 
    : allWords.filter(w => w.english !== word.english);

  const shuffledDistractors = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
  const options = [...shuffledDistractors.map(w => w.english), word.english].sort(() => 0.5 - Math.random());
  
  return {
    ...word,
    questionMode: mode, // 'word' | 'sentence'
    options,
    correctAnswer: word.english
  };
}
