{\rtf1\ansi\ansicpg950\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const translations = \{\
    zh: \{\
        'hero-title': 'R\'e9sidence Plein Soleil',\
        'hero-subtitle': '\uc0\u38463 \u29246 \u21329 \u26031 \u23665 \u33139 \u19979 <br>\u28331 \u39336 \u24230 \u20551 \u20844 \u23507 ',\
        'hero-desc': '\uc0\u20301 \u26044  Avrieux \u39640 \u22320 \u65292 \u38752 \u36817  La Norma \u28369 \u38634 \u22580 \u65292 \u20840 \u24180 \u38283 \u25918 \u65292 \u36969 \u21512 \u23478 \u24237 \u33287 \u28369 \u38634 \u24859 \u22909 \u32773 \u12290 ',\
        'about-title': '\uc0\u38364 \u26044 \u25105 \u20497 ',\
        'about-text': '3 \uc0\u26143 \u32026 \u24230 \u20551 \u20844 \u23507 \u65292 \u25552 \u20379  22 \u38291 \u37197 \u20633 \u40778 \u20840 \u30340 \u20844 \u23507 \u65288 Studio \u33267  T3\u65289 \u65292 \u38468 \u29544 \u31435 \u24282 \u25151 \u12289 Wi-Fi\u12289 \u20813 \u36027 \u20572 \u36554 \u12290 \u20840 \u24180 \u38283 \u25918 \u65292 \u27331 \u27311 \u25552 \u20379 \u28369 \u38634 \u31080 \u33287 \u31199 \u36554 \u35566 \u35426 \u12290 ',\
        'rooms-title': '\uc0\u25151 \u22411 \u36984 \u25799 ',\
        'location-title': '\uc0\u20301 \u32622 \u20778 \u21218 ',\
        'location-text': '229 Rue de la Scolette, 73500 Avrieux<br>\uc0\u36317 \u38626  La Norma \u28369 \u38634 \u22580 \u20677  4 \u20998 \u37912 \u36554 \u31243 \u65292 \u27493 \u34892  19 \u20998 \u37912 \u21487 \u36948  Saint-Beno\'eet \u28689 \u24067 \u12290 ',\
        'contact-title': '\uc0\u32879 \u32097 \u25105 \u20497 ',\
        'contact-text': '\uc0\u38651 \u35441 \u65306 04 79 65 47 47<br>\u22320 \u22336 \u65306 229 Rue de la Scolette, 73500 Avrieux, France<br>\u25509 \u24453 \u26178 \u38291 \u65306 \u24179 \u26085  8:00-11:30, 16:00-19:00'\
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
    document.getElementById('lang-toggle').textContent = nextLang === 'zh-TW' ? 'EN' : '\uc0\u20013 \u25991 ';\
    \
    Object.keys(translations[nextLang === 'zh-TW' ? 'zh' : 'en']).forEach(key => \{\
        const element = document.getElementById(key);\
        if (element) \{\
            element.innerHTML = translations[nextLang === 'zh-TW' ? 'zh' : 'en'][key];\
        \}\
    \});\
\});\
}