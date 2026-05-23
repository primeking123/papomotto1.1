let soundEnabled = true;
let previousOrdersCount = 0;
let kitchenLang = 'en';

// Localization Configuration
const translations = {
    en: {
        incoming: "Incoming",
        preparing: "Preparing",
        ready: "Ready",
        delivered: "Delivered",
        prepare_btn: "Start Preparing",
        ready_btn: "Mark Ready",
        deliver_btn: "Mark Delivered",
        sound_on: "Sound ON",
        sound_off: "Sound OFF",
        total: "Total",
        "No": "No",
        "Grilled Salmon Asparagus": "Grilled Salmon Asparagus",
        "Salmon": "Salmon",
        "Asparagus": "Asparagus",
        "Extra Lemon": "Extra Lemon",
        "Wagyu Beef Burger": "Wagyu Beef Burger",
        "Wagyu Patty": "Wagyu Patty",
        "Bacon": "Bacon",
        "Avocado Toast": "Avocado Toast",
        "Avocado": "Avocado",
        "Poached Egg": "Poached Egg",
        "Fluffy Pancakes": "Fluffy Pancakes",
        "Maple Syrup": "Maple Syrup",
        "Berries": "Berries",
        "Crispy Calamari": "Crispy Calamari",
        "Tartare Sauce": "Tartare Sauce",
        "Classic Mojito": "Classic Mojito",
        "Extra Mint": "Extra Mint",
        "Berry Smoothie": "Berry Smoothie",
        "Protein Powder": "Protein Powder",
        "Dino Chicken Nuggets": "Dino Chicken Nuggets",
        "Fries": "Fries",
        "Extra Ketchup": "Extra Ketchup",
        "Matcha Panna Cotta": "Matcha Panna Cotta"
    },
    es: {
        incoming: "Recibidos",
        preparing: "Preparando",
        ready: "Listo",
        delivered: "Entregado",
        prepare_btn: "Empezar a preparar",
        ready_btn: "Marcar como listo",
        deliver_btn: "Marcar como entregado",
        sound_on: "Sonido ACTIVO",
        sound_off: "Sonido INACTIVO",
        total: "Total",
        "No": "Sin",
        "Grilled Salmon Asparagus": "Salmón a la plancha con espárragos",
        "Salmon": "Salmón",
        "Asparagus": "Espárragos",
        "Extra Lemon": "Limón extra",
        "Wagyu Beef Burger": "Hamburguesa de ternera Wagyu",
        "Wagyu Patty": "Carne de Wagyu",
        "Bacon": "Bacón",
        "Avocado Toast": "Tostada de aguacate",
        "Avocado": "Aguacate",
        "Poached Egg": "Huevo escalfado",
        "Fluffy Pancakes": "Tortitas esponjosas",
        "Maple Syrup": "Jarabe de arce",
        "Berries": "Bayas",
        "Crispy Calamari": "Calamar crujiente",
        "Tartare Sauce": "Salsa tártara",
        "Classic Mojito": "Mojito clásico",
        "Extra Mint": "Menta extra",
        "Berry Smoothie": "Batido de bayas",
        "Protein Powder": "Proteína en polvo",
        "Dino Chicken Nuggets": "Nuggets de pollo dinosaurio",
        "Fries": "Patatas fritas",
        "Extra Ketchup": "Ketchup extra",
        "Matcha Panna Cotta": "Panna cotta de matcha"
    },
    fr: {
        incoming: "Reçus",
        preparing: "En préparation",
        ready: "Prêt",
        delivered: "Livré",
        prepare_btn: "Commencer la préparation",
        ready_btn: "Marquer comme prêt",
        deliver_btn: "Marquer comme livré",
        sound_on: "Son activé",
        sound_off: "Son désactivé",
        total: "Total",
        "No": "Sans",
        "Grilled Salmon Asparagus": "Saumon grillé aux asperges",
        "Salmon": "Saumon",
        "Asparagus": "Asperges",
        "Extra Lemon": "Citron en plus",
        "Wagyu Beef Burger": "Burger de bœuf Wagyu",
        "Wagyu Patty": "Steak de Wagyu",
        "Bacon": "Bacon",
        "Avocado Toast": "Toast à l'avocat",
        "Avocado": "Avocat",
        "Poached Egg": "Œuf poché",
        "Fluffy Pancakes": "Pancakes moelleux",
        "Maple Syrup": "Sirop d'érable",
        "Berries": "Fruits rouges",
        "Crispy Calamari": "Calamars croustillants",
        "Tartare Sauce": "Sauce tartare",
        "Classic Mojito": "Mojito classique",
        "Extra Mint": "Menthe en plus",
        "Berry Smoothie": "Smoothie aux fruits rouges",
        "Protein Powder": "Protéine en poudre",
        "Dino Chicken Nuggets": "Nuggets de poulet dinosaure",
        "Fries": "Frites",
        "Extra Ketchup": "Ketchup en plus",
        "Matcha Panna Cotta": "Panna cotta au matcha"
    },
    de: {
        incoming: "Eingegangen",
        preparing: "In Zubereitung",
        ready: "Bereit",
        delivered: "Geliefert",
        prepare_btn: "Zubereitung starten",
        ready_btn: "Als bereit markieren",
        deliver_btn: "Als geliefert markieren",
        sound_on: "Ton AN",
        sound_off: "Ton AUS",
        total: "Gesamtsumme",
        "No": "Ohne",
        "Grilled Salmon Asparagus": "Gegrillter Lachs mit Spargel",
        "Salmon": "Lachs",
        "Asparagus": "Spargel",
        "Extra Lemon": "Extra Zitrone",
        "Wagyu Beef Burger": "Wagyu-Rindfleisch-Burger",
        "Wagyu Patty": "Wagyu-Patty",
        "Bacon": "Speck",
        "Avocado Toast": "Avocado-Toast",
        "Avocado": "Avocado",
        "Poached Egg": "Pochiertes Ei",
        "Fluffy Pancakes": "Fluffige Pfannkuchen",
        "Maple Syrup": "Ahornsirup",
        "Berries": "Beeren",
        "Crispy Calamari": "Knusprige Calamari",
        "Tartare Sauce": "Sauce Tartare",
        "Classic Mojito": "Klassischer Mojito",
        "Extra Mint": "Extra Minze",
        "Berry Smoothie": "Beeren-Smoothie",
        "Protein Powder": "Proteinpulver",
        "Dino Chicken Nuggets": "Dino-Chicken-Nuggets",
        "Fries": "Pommes frites",
        "Extra Ketchup": "Extra Ketchup",
        "Matcha Panna Cotta": "Matcha-Panna-Cotta"
    },
    it: {
        incoming: "In Arrivo",
        preparing: "In Preparazione",
        ready: "Pronto",
        delivered: "Consegnato",
        prepare_btn: "Inizia Preparazione",
        ready_btn: "Segna come Pronto",
        deliver_btn: "Segna come Consegnato",
        sound_on: "Suono ATTIVO",
        sound_off: "Suono DISATTIVO",
        total: "Totale",
        "No": "Senza",
        "Grilled Salmon Asparagus": "Salmone alla griglia con asparagi",
        "Salmon": "Salmone",
        "Asparagus": "Asparagi",
        "Extra Lemon": "Limone Extra",
        "Wagyu Beef Burger": "Burger di manzo Wagyu",
        "Wagyu Patty": "Polpetta Wagyu",
        "Bacon": "Bacon",
        "Avocado Toast": "Toast all'avocado",
        "Avocado": "Avocado",
        "Poached Egg": "Uovo in camicia",
        "Fluffy Pancakes": "Pancake soffici",
        "Maple Syrup": "Sciroppo d'acero",
        "Berries": "Frutti di bosco",
        "Crispy Calamari": "Calamari croccanti",
        "Tartare Sauce": "Salsa tartara",
        "Classic Mojito": "Mojito classico",
        "Extra Mint": "Menta Extra",
        "Berry Smoothie": "Frullato ai frutti di bosco",
        "Protein Powder": "Proteine in polvere",
        "Dino Chicken Nuggets": "Nuggets di pollo dino",
        "Fries": "Patatine fritte",
        "Extra Ketchup": "Ketchup Extra",
        "Matcha Panna Cotta": "Panna cotta al matcha"
    },
    pt: {
        incoming: "Recebidos",
        preparing: "Preparando",
        ready: "Pronto",
        delivered: "Entregue",
        prepare_btn: "Iniciar Preparo",
        ready_btn: "Marcar como Pronto",
        deliver_btn: "Marcar como Entregue",
        sound_on: "Som LIGADO",
        sound_off: "Som DESLIGADO",
        total: "Total",
        "No": "Sem",
        "Grilled Salmon Asparagus": "Salmão grelhado com aspargos",
        "Salmon": "Salmão",
        "Asparagus": "Aspargos",
        "Extra Lemon": "Limão Extra",
        "Wagyu Beef Burger": "Hambúrguer de Wagyu",
        "Wagyu Patty": "Hambúrguer de Wagyu",
        "Bacon": "Bacon",
        "Avocado Toast": "Torrada de abacate",
        "Avocado": "Abacate",
        "Poached Egg": "Ovo pochê",
        "Fluffy Pancakes": "Panquecas fofas",
        "Maple Syrup": "Xarope de bordo",
        "Berries": "Frutas vermelhas",
        "Crispy Calamari": "Lula crocante",
        "Tartare Sauce": "Molho tártaro",
        "Classic Mojito": "Mojito clássico",
        "Extra Mint": "Hortelã Extra",
        "Berry Smoothie": "Smoothie de frutas vermelhas",
        "Protein Powder": "Proteína em pó",
        "Dino Chicken Nuggets": "Nuggets de frango dino",
        "Fries": "Batatas fritas",
        "Extra Ketchup": "Ketchup Extra",
        "Matcha Panna Cotta": "Panna cotta de matcha"
    },
    ja: {
        incoming: "新規受注",
        preparing: "調理中",
        ready: "準備完了",
        delivered: "配達済み",
        prepare_btn: "調理開始",
        ready_btn: "準備完了にする",
        deliver_btn: "配達済みにする",
        sound_on: "通知音 オン",
        sound_off: "通知音 オフ",
        total: "合計",
        "No": "抜き",
        "Grilled Salmon Asparagus": "サーモングリルとアスパラガス",
        "Salmon": "サーモン",
        "Asparagus": "アスパラガス",
        "Extra Lemon": "レモン追加",
        "Wagyu Beef Burger": "和牛ビーフバーガー",
        "Wagyu Patty": "和牛パティ",
        "Bacon": "ベーコン",
        "Avocado Toast": "アボカドトースト",
        "Avocado": "アボカド",
        "Poached Egg": "ポーチドエッグ",
        "Fluffy Pancakes": "ふわふわパンケーキ",
        "Maple Syrup": "メープルシロップ",
        "Berries": "ベリー類",
        "Crispy Calamari": "クリスピーカラマリ",
        "Tartare Sauce": "タルタルソース",
        "Classic Mojito": "クラシックモヒート",
        "Extra Mint": "ミント追加",
        "Berry Smoothie": "ベリースムージー",
        "Protein Powder": "プロテインパウダー",
        "Dino Chicken Nuggets": "ダイナソーチキンナゲット",
        "Fries": "フライドポテト",
        "Extra Ketchup": "ケチャップ追加",
        "Matcha Panna Cotta": "抹茶パンナコッタ"
    },
    zh: {
        incoming: "新订单",
        preparing: "制作中",
        ready: "已出餐",
        delivered: "已送达",
        prepare_btn: "开始制作",
        ready_btn: "设为已出餐",
        deliver_btn: "设为已送达",
        sound_on: "声音 开启",
        sound_off: "声音 关闭",
        total: "总计",
        "No": "无",
        "Grilled Salmon Asparagus": "香煎三文鱼配芦笋",
        "Salmon": "三文鱼",
        "Asparagus": "芦笋",
        "Extra Lemon": "加柠檬",
        "Wagyu Beef Burger": "和牛汉堡",
        "Wagyu Patty": "和牛肉饼",
        "Bacon": "培根",
        "Avocado Toast": "牛油果吐司",
        "Avocado": "牛油果",
        "Poached Egg": "水波蛋",
        "Fluffy Pancakes": "松饼",
        "Maple Syrup": "枫糖浆",
        "Berries": "浆果",
        "Crispy Calamari": "酥炸鱿鱼圈",
        "Tartare Sauce": "塔塔酱",
        "Classic Mojito": "经典莫吉托",
        "Extra Mint": "加薄荷",
        "Berry Smoothie": "莓果奶昔",
        "Protein Powder": "蛋白粉",
        "Dino Chicken Nuggets": "恐龙炸鸡块",
        "Fries": "薯条",
        "Extra Ketchup": "加番茄酱",
        "Matcha Panna Cotta": "抹茶意式奶冻"
    },
    sw: {
        incoming: "Inakuja",
        preparing: "Inaandikwa",
        ready: "Tayari",
        delivered: "Imetumwa",
        prepare_btn: "Anza Kuandikwa",
        ready_btn: "Weka Tayari",
        deliver_btn: "Weka Imetumwa",
        sound_on: "Sauti IMEWAKA",
        sound_off: "Sauti IMEZIMA",
        total: "Jumla",
        "No": "Hapana",
        "Grilled Salmon Asparagus": "Salmoni ya Kuchoma na Shabam",
        "Salmon": "Salmoni",
        "Asparagus": "Shabam",
        "Extra Lemon": "Chungwa Ziada",
        "Wagyu Beef Burger": "Baga ya Nyama Wagyu",
        "Wagyu Patty": "Wagyu Patty",
        "Bacon": "Bekon",
        "Avocado Toast": "Mkate wa Avocado",
        "Avocado": "Avocado",
        "Poached Egg": "Yai Iliyochemshwa",
        "Fluffy Pancakes": "Pankeki Nyororo",
        "Maple Syrup": "Mazuri ya Maple",
        "Berries": "Berri",
        "Crispy Calamari": "Kalamari Wacha",
        "Tartare Sauce": "Mchuzi wa Tartare",
        "Classic Mojito": "Mojito ya Klaasiki",
        "Extra Mint": "Minti Ziada",
        "Berry Smoothie": "Smoosi ya Berri",
        "Protein Powder": "Unga wa Prosteti",
        "Dino Chicken Nuggets": "Nagget za Dinosaura",
        "Fries": "Viazi Vikuu Vya Kukaanga",
        "Extra Ketchup": "Ketchup Ziada",
        "Matcha Panna Cotta": "Panna Cotta ya Matcha"
    },
    luo: {
        incoming: "Nikononore",
        preparing: "Daoro",
        ready: "Ochia",
        delivered: "Miyoro",
        prepare_btn: "Chak Iruok",
        ready_btn: "Yier Ochier",
        deliver_btn: "Yier Miyoro",
        sound_on: "Migo DHI YE",
        sound_off: "Migo DHI PINY",
        total: "Tunde",
        "No": "Ooyo",
        "Grilled Salmon Asparagus": "Salamon Iliyochomwa na Asparagus",
        "Salmon": "Salamon",
        "Asparagus": "Asparagus",
        "Extra Lemon": "Ndimu Gao",
        "Wagyu Beef Burger": "Baga Nyama Wagyu",
        "Wagyu Patty": "Wagyu Pati",
        "Bacon": "Bekon",
        "Avocado Toast": "Mkate Avocado",
        "Avocado": "Avocado",
        "Poached Egg": "Yai Iliyochemshwa",
        "Fluffy Pancakes": "Pankeki Nyororo",
        "Maple Syrup": "Mazuri ya Maple",
        "Berries": "Berri",
        "Crispy Calamari": "Kalamari Wacha",
        "Tartare Sauce": "Mchuzi wa Tartare",
        "Classic Mojito": "Mojito ya Kada",
        "Extra Mint": "Minti Gao",
        "Berry Smoothie": "Smuuth ya Berri",
        "Protein Powder": "Unga ya Prostix",
        "Dino Chicken Nuggets": "Nagget Kenga",
        "Fries": "Viazi Vikuu Vya Kukaanga",
        "Extra Ketchup": "Ketchup Gao",
        "Matcha Panna Cotta": "Panna Cotta ya Matcha"
    }
};

function getTranslation(key) {
    if (translations[kitchenLang] && translations[kitchenLang][key]) {
        return translations[kitchenLang][key];
    }
    if (translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    return key;
}

function initKitchenLang() {
    const deviceLang = navigator.language || 'en-US';
    const langCode = deviceLang.split('-')[0].toLowerCase();
    kitchenLang = localStorage.getItem('papomotto_kitchen_lang') || (translations[langCode] ? langCode : 'en');
    updateHeaderUI();
}

function changeKitchenLang(lang) {
    kitchenLang = lang;
    localStorage.setItem('papomotto_kitchen_lang', lang);
    updateHeaderUI();
    renderOrders();
}

function updateHeaderUI() {
    const select = document.getElementById('kitchen-lang');
    if (select) select.value = kitchenLang;
    
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        if (soundEnabled) {
            soundToggle.innerHTML = `<i class="fa-solid fa-bell"></i> ${getTranslation('sound_on')}`;
            soundToggle.style.opacity = "1";
        } else {
            soundToggle.innerHTML = `<i class="fa-solid fa-bell-slash"></i> ${getTranslation('sound_off')}`;
            soundToggle.style.opacity = "0.5";
        }
    }
}

function updateTime() {
    const now = new Date();
    document.getElementById('time-display').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
setInterval(updateTime, 1000);
updateTime();

function toggleSound() {
    soundEnabled = !soundEnabled;
    updateHeaderUI();
}

function playSound() {
    if(soundEnabled) {
        const audio = document.getElementById('notify-sound');
        if(audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log("Audio play prevented by browser policy", e));
        }
    }
}

function getOrders() {
    return JSON.parse(localStorage.getItem('papomotto_orders') || '[]');
}

function saveOrders(orders) {
    localStorage.setItem('papomotto_orders', JSON.stringify(orders));
    renderOrders();
}

function changeStatus(id, newStatus) {
    const orders = getOrders();
    const index = orders.findIndex(o => o.id === id);
    if(index > -1) {
        orders[index].status = newStatus;
        saveOrders(orders);
    }
}

function formatTimeElapsed(isoString) {
    const past = new Date(isoString);
    const now = new Date();
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    if(diffMins < 1) return 'Just now';
    return `${diffMins} min ago`;
}

function renderOrders() {
    const orders = getOrders();
    
    // Check for new incoming orders to play sound
    const incomingCount = orders.filter(o => o.status === 'incoming').length;
    if(incomingCount > previousOrdersCount) {
        playSound();
    }
    previousOrdersCount = incomingCount;
    
    const columns = {
        'incoming': document.getElementById('list-incoming'),
        'preparing': document.getElementById('list-preparing'),
        'ready': document.getElementById('list-ready'),
        'delivered': document.getElementById('list-delivered')
    };
    
    // Clear columns
    Object.values(columns).forEach(col => { if(col) col.innerHTML = ''; });
    
    const counts = { incoming: 0, preparing: 0, ready: 0, delivered: 0 };

    orders.forEach(order => {
        if (!counts.hasOwnProperty(order.status)) return;
        counts[order.status]++;
        
        const card = document.createElement('div');
        card.className = 'order-card';
        
        let itemsHtml = order.items.map(item => {
            let displayCustoms = '';
            if (item.customs) {
                const parts = item.customs.split(', ');
                const translatedParts = parts.map(part => {
                    if (part.startsWith('No ')) {
                        const ingName = part.replace('No ', '');
                        return `${getTranslation('No') || 'No'} ${getTranslation(ingName)}`;
                    } else if (part.includes('x ')) {
                        const subparts = part.split('x ');
                        const qty = subparts[0];
                        const ingName = subparts[1];
                        return `${qty}x ${getTranslation(ingName)}`;
                    }
                    return getTranslation(part);
                });
                displayCustoms = translatedParts.join(', ');
            }

            return `
                <div class="order-item-line">${item.qty}x ${getTranslation(item.title)}</div>
                ${displayCustoms ? `<div class="order-customs">${displayCustoms}</div>` : ''}
            `;
        }).join('');
        
        let notesHtml = order.notes ? `<div class="order-notes-box"><i class="fa-solid fa-triangle-exclamation"></i> ${order.notes}</div>` : '';
        
        // Show formatted total price
        let totalDisplay = '';
        if (order.totalFormatted) {
            totalDisplay = order.totalFormatted;
        } else {
            // fallback for legacy orders
            let totalUsd = 0;
            order.items.forEach(it => totalUsd += it.price * it.qty);
            totalDisplay = `$${(totalUsd * 1.10).toFixed(2)}`;
        }
        
        let actionBtnHtml = '';
        if(order.status === 'incoming') {
            actionBtnHtml = `<button class="btn-action btn-prepare" onclick="changeStatus('${order.id}', 'preparing')">${getTranslation('prepare_btn')}</button>`;
        } else if(order.status === 'preparing') {
            actionBtnHtml = `<button class="btn-action btn-ready" onclick="changeStatus('${order.id}', 'ready')">${getTranslation('ready_btn')}</button>`;
        } else if(order.status === 'ready') {
            actionBtnHtml = `<button class="btn-action btn-deliver" onclick="changeStatus('${order.id}', 'delivered')">${getTranslation('deliver_btn')}</button>`;
        }

        card.innerHTML = `
            <div class="order-header">
                <span class="order-id">${order.id}</span>
                <span class="order-location">${order.location}</span>
            </div>
            <div class="order-time">${formatTimeElapsed(order.time)}</div>
            <div class="order-total">${getTranslation('total')}: ${totalDisplay}</div>
            <hr style="border-top:1px dashed #444; margin: 10px 0;">
            <div class="order-items">
                ${itemsHtml}
            </div>
            ${notesHtml}
            <div class="order-actions">
                ${actionBtnHtml}
            </div>
        `;
        
        if (columns[order.status]) {
            columns[order.status].appendChild(card);
        }
    });
    
    // Update counts and headers dynamically
    const cols = ['incoming', 'preparing', 'ready', 'delivered'];
    cols.forEach(status => {
        const h2 = document.querySelector(`#col-${status} h2`);
        if (h2) {
            h2.innerHTML = `${getTranslation(status)} <span class="count" id="count-${status}">${counts[status]}</span>`;
        }
    });
}

// Initialize language and dashboard
initKitchenLang();
renderOrders();

// Listen for storage events (multi-tab sync)
window.addEventListener('storage', (e) => {
    if(e.key === 'papomotto_orders') {
        renderOrders();
    }
});

// Auto refresh times every minute
setInterval(renderOrders, 60000);
