const translations = {
    zh: {
        'hero-title': 'Résidence Plein Soleil',
        'hero-subtitle': '阿爾卑斯山腳下<br>溫馨度假公寓',
        'hero-desc': '位於 Avrieux 高地，靠近 La Norma 滑雪場，全年開放，適合家庭與滑雪愛好者。',
        'about-title': '關於我們',
        'about-text': '3 星級度假公寓，提供 22 間配備齊全的公寓（Studio 至 T3），附獨立廚房、Wi-Fi、免費停車。全年開放，櫃檯提供滑雪票與租車諮詢。',
        'rooms-title': '房型選擇',
        'location-title': '位置優勢',
        'location-text': '229 Rue de la Scolette, 73500 Avrieux<br>距離 La Norma 滑雪場僅 4 分鐘車程，步行 19 分鐘可達 Saint-Benoît 瀑布。',
        'contact-title': '聯絡我們',
        'contact-text': '電話：04 79 65 47 47<br>地址：229 Rue de la Scolette, 73500 Avrieux, France<br>接待時間：平日 8:00-11:30, 16:00-19:00'
    },
    en: {
        'hero-title': 'Résidence Plein Soleil',
        'hero-subtitle': 'Alpine Foothills<br>Cozy Vacation Apartments',
        'hero-desc': 'Located in Avrieux heights, near La Norma ski resort, open all year round, perfect for families and ski enthusiasts.',
        'about-title': 'About Us',
        'about-text': '3-star vacation apartments with 22 fully equipped units (Studio to T3), including kitchenette, Wi-Fi, free parking. Open year-round with ski pass and rental assistance.',
        'rooms-title': 'Room Types',
        'location-title': 'Location',
        'location-text': '229 Rue de la Scolette, 73500 Avrieux<br>4 minutes drive to La Norma ski resort, 19-minute walk to Saint-Benoît waterfall.',
        'contact-title': 'Contact',
        'contact-text': 'Phone: 04 79 65 47 47<br>Address: 229 Rue de la Scolette, 73500 Avrieux, France<br>Reception: Weekdays 8:00-11:30, 16:00-19:00'
    }
};

document.getElementById('lang-toggle').addEventListener('click', function() {
    const currentLang = document.documentElement.lang === 'zh-TW' ? 'en' : 'zh-TW';
    const nextLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
    
    document.documentElement.lang = nextLang;
    document.getElementById('lang-toggle').textContent = nextLang === 'zh-TW' ? 'EN' : '中文';
    
    Object.keys(translations[nextLang === 'zh-TW' ? 'zh' : 'en']).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[nextLang === 'zh-TW' ? 'zh' : 'en'][key];
        }
    });
});
