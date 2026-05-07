{\rtf1\ansi\ansicpg950\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset136 PingFangTC-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const translations = \{\
    zh: \{\
        'hero-title': 'R\'e9sidence Plein Soleil',\
        'hero-subtitle': '
\f1 \'aa\'fc\'ba\'b8\'a8\'f5\'b4\'b5\'a4\'73\'b8\'7d\'a4\'55
\f0 <br>
\f1 \'b7\'c5\'c4\'c9\'ab\'d7\'b0\'b2\'a4\'bd\'b4\'4a
\f0 ',\
        'hero-desc': '
\f1 \'a6\'ec\'a9\'f3
\f0  Avrieux 
\f1 \'b0\'aa\'a6\'61\'a1\'41\'be\'61\'aa\'f1
\f0  La Norma 
\f1 \'b7\'c6\'b3\'b7\'b3\'f5\'a1\'41\'a5\'fe\'a6\'7e\'b6\'7d\'a9\'f1\'a1\'41\'be\'41\'a6\'58\'ae\'61\'ae\'78\'bb\'50\'b7\'c6\'b3\'b7\'b7\'52\'a6\'6e\'aa\'cc\'a1\'43
\f0 ',\
        'about-title': '
\f1 \'c3\'f6\'a9\'f3\'a7\'da\'ad\'cc
\f0 ',\
        'about-text': '3 
\f1 \'ac\'50\'af\'c5\'ab\'d7\'b0\'b2\'a4\'bd\'b4\'4a\'a1\'41\'b4\'a3\'a8\'d1
\f0  22 
\f1 \'b6\'a1\'b0\'74\'b3\'c6\'bb\'f4\'a5\'fe\'aa\'ba\'a4\'bd\'b4\'4a\'a1\'5d
\f0 Studio 
\f1 \'a6\'dc
\f0  T3
\f1 \'a1\'5e\'a1\'41\'aa\'fe\'bf\'57\'a5\'df\'bc\'70\'a9\'d0\'a1\'42
\f0 Wi-Fi
\f1 \'a1\'42\'a7\'4b\'b6\'4f\'b0\'b1\'a8\'ae\'a1\'43\'a5\'fe\'a6\'7e\'b6\'7d\'a9\'f1\'a1\'41\'c2\'64\'c2\'69\'b4\'a3\'a8\'d1\'b7\'c6\'b3\'b7\'b2\'bc\'bb\'50\'af\'b2\'a8\'ae\'bf\'d4\'b8\'df\'a1\'43
\f0 ',\
        'rooms-title': '
\f1 \'a9\'d0\'ab\'ac\'bf\'ef\'be\'dc
\f0 ',\
        'location-title': '
\f1 \'a6\'ec\'b8\'6d\'c0\'75\'b6\'d5
\f0 ',\
        'location-text': '229 Rue de la Scolette, 73500 Avrieux<br>
\f1 \'b6\'5a\'c2\'f7
\f0  La Norma 
\f1 \'b7\'c6\'b3\'b7\'b3\'f5\'b6\'c8
\f0  4 
\f1 \'a4\'c0\'c4\'c1\'a8\'ae\'b5\'7b\'a1\'41\'a8\'42\'a6\'e6
\f0  19 
\f1 \'a4\'c0\'c4\'c1\'a5\'69\'b9\'46
\f0  Saint-Beno\'eet 
\f1 \'c2\'72\'a5\'ac\'a1\'43
\f0 ',\
        'contact-title': '
\f1 \'c1\'70\'b5\'b8\'a7\'da\'ad\'cc
\f0 ',\
        'contact-text': '
\f1 \'b9\'71\'b8\'dc\'a1\'47
\f0 04 79 65 47 47<br>
\f1 \'a6\'61\'a7\'7d\'a1\'47
\f0 229 Rue de la Scolette, 73500 Avrieux, France<br>
\f1 \'b1\'b5\'ab\'dd\'ae\'c9\'b6\'a1\'a1\'47\'a5\'ad\'a4\'e9
\f0  8:00-11:30, 16:00-19:00'\
    \},\
    en: \{\
        'hero-title': 'R\'e9sidence Plein Soleil',\
        'hero-subtitle': 'Alpine Foothills<br>Cozy Vacation Apartments',\
        'hero-desc': 'Located in Avrieux heights, near La Norma ski resort, open all year round, perfect for families and ski enthusiasts.',\
        'about-title': 'About Us',\
        'about-text': '3-star vacation apartments with 22 fully equipped units (Studio to T3), including kitchenette, Wi-Fi, free parking. Open year-round with ski pass and rental assistance.',\
        'rooms-title': 'Room Types',\
        'location-title': 'Location',\
        'location-text': '229 Rue de la Scolette, 73500 Avrieux<br>4 minutes drive to La Norma ski resort, 19-minute walk to Saint-Beno\'eet waterfall.',\
        'contact-title': 'Contact',\
        'contact-text': 'Phone: 04 79 65 47 47<br>Address: 229 Rue de la Scolette, 73500 Avrieux, France<br>Reception: Weekdays 8:00-11:30, 16:00-19:00'\
    \}\
\};\
\
document.getElementById('lang-toggle').addEventListener('click', function() \{\
    const currentLang = document.documentElement.lang === 'zh-TW' ? 'en' : 'zh-TW';\
    const nextLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';\
    \
    document.documentElement.lang = nextLang;\
    document.getElementById('lang-toggle').textContent = nextLang === 'zh-TW' ? 'EN' : '
\f1 \'a4\'a4\'a4\'e5
\f0 ';\
    \
    Object.keys(translations[nextLang === 'zh-TW' ? 'zh' : 'en']).forEach(key => \{\
        const element = document.getElementById(key);\
        if (element) \{\
            element.innerHTML = translations[nextLang === 'zh-TW' ? 'zh' : 'en'][key];\
        \}\
    \});\
\});\
}