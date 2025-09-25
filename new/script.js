/**
 * TENKI-JAPAN Keyword Optimization Report
 * Main application JavaScript for interactive keyword analysis dashboard
 */

/* =============================================================================
   INTERNATIONALIZATION (I18N) CONFIGURATION
   ============================================================================= */

// Translation dictionary for Japanese and English content
const I18N = {
    en: {
        navProcess: 'Service Flow', 
        navSample: 'Your Shop Demo', 
        ctaTop: 'Get Your Free Sample',
        preparedLabel: 'Prepared for', 
        promoText: 'NEW | Free AI analysis available for a limited time',
        heroTitle: 'Rakuten Keyword Optimization Report', 
        ctaPrimary: 'Get Your Free Sample', 
        samplePdfBtn: 'View Sample PDF',
        tag1: 'Privacy-safe', 
        tag2: 'Actionable', 
        tag3: 'Rakuten-focused',
        slideCaption: 'Preview screen. In the full version, you can view data for up to 20 products.',
        b1t: 'Identify effective keywords', 
        b1d: 'Identify the keywords to target in RPP or organic search',
        b2t: 'Compare the market and identify gaps', 
        b2d: 'Identify keywords causing missed opportunities and high costs',
        b3t: 'Search marketing strategy planning', 
        b3d: 'Discover specific SEO keywords and methods for adjusting RPP keywords',
        oppTitle: 'Choose an item', 
        oppSub: 'Click a product to view its keywords on the right.',
        kwTitle: 'Selected main keywords', 
        kwSub: 'RPP ranking, organic search ranking, verification time', 
        lockNote: 'After submitting the form, we will send you the full PDF by email.',
        thKeyword: 'Keyword', 
        thRpp: 'RPP Rank', 
        thOrg: 'Organic Rank', 
        thChecked: 'Checked', 
        thAction: 'Action',
        aiTitle: 'Action plan from AI <span class="badge">NEW</span>', 
        aiSub: 'Based on the report, we automatically generate title revision proposals and RPP addition suggestions for each product.',
        shopsTitle: 'Case study of Rakuten First Half-Year Ranking 2025 award-winning shops', 
        shopsSub: 'Keyword report of genre awards is published',
        s1t: 'Analyze', 
        s1d: 'We assess RPP and organic ranks.', 
        s2t: 'Report', 
        s2d: 'We will provide you with a PDF summarizing improvement points and actions to be taken.', 
        s3t: 'AI analysis', 
        s3d: 'We will present improvements for product names and RPP, along with an action plan.',
        reqTitle: 'Request your keyword report', 
        reqSub: 'We will contact you to confirm scope and timing.',
        labShop: 'Shop name', 
        labUrl: 'Rakuten shop URL', 
        labContact: 'Contact name', 
        labEmail: 'Email', 
        labRms: 'RMS shop ID (optional)', 
        labNotes: 'Notes',
        agreeText: 'I agree to be contacted by TENKI-JAPAN about this request.', 
        submitBtn: 'Request report',
        footProcess: 'Service Flow', 
        footSample: 'Your Shop Demo', 
        samplePdfLink: 'Your Shop PDF Example',
        viewSampleReport: 'View Sample Report',
        langButton: '日本語',
        faqTitle: 'FAQ',
        faqAction: 'Action'
    },
    ja: {
        navProcess: 'サービスの流れ', 
        navSample: '貴店デモ', 
        ctaTop: '無料レポートを申し込む',
        preparedLabel: '貴店専用',  // need trans
        promoText: 'NEW｜期間限定で無料AI分析提供',
        heroTitle: '楽天キーワード最適化レポート', 
        ctaPrimary: '無料レポートを申し込む', 
        samplePdfBtn: 'サンプルPDFを見る',
        tag1: 'プライバシー配慮', 
        tag2: '実行可能', 
        tag3: '楽天特化',
        slideCaption: 'プレビュー画面。完全版では最大20商品分のデータが閲覧できます。',
        b1t: '効果的なキーワードを特定', 
        b1d: 'RPPまたは自然検索で狙うべきキーワードを特定',
        b2t: '市場比較してギャップを把握', 
        b2d: '機会損失とコスト高のキーワードが把握できる',
        b3t: '検索マーケティング戦略立案', 
        b3d: '具体的なSEOキーワード発見及びRPPのキーワード調整の方法の発見',
        oppTitle: '商品を選択', 
        oppSub: '商品クリックで主要キーワード一部抜粋に表示されます。',
        kwTitle: '主要キーワード一部抜粋', 
        kwSub: 'RPP順位、自然検索順位、確認時間', 
        lockNote: 'フォームを送信後、完全版PDFをメールでお送りします。',
        thKeyword: 'キーワード', 
        thRpp: 'RPP順位', 
        thOrg: '自然検索順位', 
        thChecked: '確認時間', 
        thAction: 'アクション',
        aiTitle: 'AIからのアクションプラン <span class="badge">NEW</span>', 
        aiSub: 'レポートをもとに、商品ごとにタイトルの修正案とRPP追加案を自動生成します。',
        shopsTitle: '楽天上半期の受賞店舗事例', 
        shopsSub: '様々な業界の成功している楽天ショップのキーワードレポートサンプルをご覧ください。',
        s1t: '分析', 
        s1d: 'RPPと自然順位を評価します。', 
        s2t: 'レポート', 
        s2d: '改善ポイントと実施すべきアクションをまとめたPDFをお届けします。', 
        s3t: 'AI分析', 
        s3d: '商品名とRPPの改善やアクションプランを提示します。',
        reqTitle: 'キーワードレポートを申し込む', 
        reqSub: '内容と納期を確認のうえご連絡します。',
        labShop: '店舗名', 
        labUrl: '楽天ショップURL', 
        labContact: 'ご担当者名', 
        labEmail: 'メールアドレス', 
        labRms: 'RMS店舗ID（任意）', 
        labNotes: 'メモ',
        agreeText: '本申込みに関する連絡をTENKI-JAPANから受け取ることに同意します。', 
        submitBtn: '申し込む',
        footProcess: 'サービスの流れ', 
        footSample: '貴店デモ', 
        samplePdfLink: '貴店PDF例',
        viewSampleReport: 'サンプルレポートを見る',
        langButton: 'EN',
        faqTitle: 'よくある質問',
        faqAction: 'アクション'
    }
};

/**
 * Apply internationalization to page elements
 * @param {string} lang - Language code ('ja' or 'en')
 */
function applyI18n(lang) {
    const dict = I18N[lang] || I18N.ja;
    document.documentElement.lang = lang;
    
    // List of element IDs to translate
    const ids = [
        'navProcess', 'navSample', 'ctaTop', 'preparedLabel', 'promoText', 'heroTitle', 
        'heroSubtitle', 'ctaPrimary', 'samplePdfBtn', 'tag1', 'tag2', 'tag3', 'slideCaption', 
        'b1t', 'b1d', 'b2t', 'b2d', 'b3t', 'b3d', 'oppTitle', 'oppSub', 'kwTitle', 'kwSub', 'shopsTitle', 'shopsSub', 
        'thKeyword', 'thRpp', 'thOrg', 'thChecked', 'aiTitle', 'aiSub', 's1t', 's1d', 's2t', 
        's2d', 's3t', 's3d', 'reqTitle', 'reqSub', 'labShop', 'labUrl', 'labContact', 'labEmail', 
        'labRms', 'labNotes', 'agreeText', 'submitBtn', 'footProcess', 'footSample', 'samplePdfLink', 'faqTitle'
    ];
    
    // Update lock note if it exists
    const ln = document.getElementById('lockNote');
    if (ln) {
        ln.textContent = dict.lockNote;
    }
    
    // Update all translatable elements
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'aiTitle') {
                el.innerHTML = dict[id]; // Preserve HTML for badge
            } else {
                el.textContent = dict[id];
            }
        }
    });
    
    // Update language toggle button
    const langBtn = document.getElementById('footLangSwitch');
    if (langBtn) langBtn.textContent = dict.langButton;
    
    // Update form placeholders based on language
    if (lang === 'ja') {
        const sn = document.getElementById('shopName');
        if (sn) sn.placeholder = '例：TENKI 公式ショップ';
        const su = document.getElementById('shopUrl');
        if (su) su.placeholder = 'https://www.rakuten.co.jp/yourshop/';
        const no = document.getElementById('notes');
        if (no) no.placeholder = '目標や懸念点';
    } else {
        const sn = document.getElementById('shopName');
        if (sn) sn.placeholder = 'e.g., TENKI Official';
        const su = document.getElementById('shopUrl');
        if (su) su.placeholder = 'https://www.rakuten.co.jp/yourshop/';
        const no = document.getElementById('notes');
        if (no) no.placeholder = 'Goals or concerns';
    }
}

/* =============================================================================
   APPLICATION SETTINGS AND CONFIGURATION
   ============================================================================= */

// function to test if parameters are correct or not
const testParams = async (shop, hash) => {
    const url = `https://data.tenki-japan.co.jp/rakuten.co.jp/${shop}/report/20/${shop}-keywords-shop-${hash}.json`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return false; // URL doesn't exist or returns error
        }
        const data = await response.json();
        // Check if data is empty
        return data && typeof data === 'object' && Object.keys(data).length > 0;
    } catch (error) {
        //console.error('Fetch error:', error);
        return false; // Network error or invalid JSON
    }
}

// Default application settings - using zhong sample data.  

// Default fallback values
let shop_id_url = 'z-craft';
let hash = '5sy5a7-13xuq3p-15bsqkk';
let shop_id_url_test;
let hash_test;

// Parse URL parameter in format: /?shopname_hash
const urlParams = new URLSearchParams(window.location.search);
const fullParam = window.location.search.slice(1); // Remove the '?' at the beginning

if (fullParam && fullParam.includes('_')) {
    // Split by the last underscore to separate shop_id from hash
    const parts = fullParam.split('_');
    if (parts.length >= 2) {
        shop_id_url_test = parts[0];
        hash_test = parts.slice(1).join('_'); // Join remaining parts in case hash contains underscores
    }
} else {
    // Fallback to individual parameters for backward compatibility
    shop_id_url_test = urlParams.get('shop_id_url') || shop_id_url;
    hash_test = urlParams.get('hash') || hash;
}

// Test the parsed parameters and build SETTINGS accordingly
(async () => {
    const test = await testParams(shop_id_url_test, hash_test);
    if (test) {
        shop_id_url = shop_id_url_test;
        hash = hash_test;
        console.log('Using parsed parameters:', shop_id_url, hash);
    } else {
        console.log('Using default parameters:', shop_id_url, hash);
    }
})

const SETTINGS = {
    dataUrl: `https://data.tenki-japan.co.jp/rakuten.co.jp/${shop_id_url}/report/20/${shop_id_url}-keywords-shop-${hash}.json`,
    csvKeywordsUrl: `https://data.tenki-japan.co.jp/rakuten.co.jp/${shop_id_url}/report/20/${shop_id_url}-keywords-shop-${hash}.csv`,
    csvItemsUrl: `https://data.tenki-japan.co.jp/rakuten.co.jp/${shop_id_url}/report/20/${shop_id_url}-keywords-shop-${hash}-items.csv`,
    sampleSlideUrl: `https://data.tenki-japan.co.jp/rakuten.co.jp/${shop_id_url}/report/20/${shop_id_url}-keywords-shop-${hash}.jpg`,
    samplePdfUrl: `https://data.tenki-japan.co.jp/rakuten.co.jp/${shop_id_url}/report/20/${shop_id_url}-keywords-shop-${hash}.pdf`,
    shopIdUrl: shop_id_url,
    itemIdUrl: '',
    itemImage: '',
    itemTitle: '',
    slides: 20,
    kwCount: 238,
    rppCount: 0,
    // updatedAt: '2025-08-06 06:14',
    topKeywords: [],
    opportunities: [],
    aiActions: []
};

// Parse URL parameters for configuration
const q = new URLSearchParams(location.search);
const qpLang = q.get('lang');
let langState = (qpLang === 'en' ? 'en' : (qpLang === 'ja' ? 'ja' : (localStorage.getItem('lang') || 'ja')));

// Demo gating - controls whether content is locked/blurred
window.LOCKED = true;
if (q.get('unlock') === '1') window.LOCKED = false;

// Override settings from URL parameters
if (q.get('shop')) SETTINGS.shopName = decodeURIComponent(q.get('shop'));
if (q.get('shop_logo')) SETTINGS.shopLogo = decodeURIComponent(q.get('shop_logo'));
if (q.get('logo')) SETTINGS.logoUrl = decodeURIComponent(q.get('logo'));
if (q.get('slide')) SETTINGS.sampleSlideUrl = decodeURIComponent(q.get('slide'));
if (q.get('pdf')) SETTINGS.samplePdfUrl = decodeURIComponent(q.get('pdf'));
if (q.get('data')) SETTINGS.dataUrl = decodeURIComponent(q.get('data'));
if (q.get('csv1')) SETTINGS.csvKeywordsUrl = decodeURIComponent(q.get('csv1'));
if (q.get('csv2')) SETTINGS.csvItemsUrl = decodeURIComponent(q.get('csv2'));
if (q.get('shop_id')) SETTINGS.shopIdUrl = decodeURIComponent(q.get('shop_id'));
if (q.get('item_id')) SETTINGS.itemIdUrl = decodeURIComponent(q.get('item_id'));
if (q.get('item_image')) SETTINGS.itemImage = decodeURIComponent(q.get('item_image'));
if (q.get('item_title')) SETTINGS.itemTitle = decodeURIComponent(q.get('item_title'));

/* =============================================================================
   LOGO AND BRANDING SETUP
   ============================================================================= */

/**
 * Initialize and setup company logo with fallback options
 */
(function() {
    const el = document.getElementById('logo');
    if (!el) return;
    
    const cands = [];
    if (SETTINGS.logoUrl) cands.push(SETTINGS.logoUrl);
    // cands.push('logo0730w-c_cmyk-06.svg', 'logo0730w-c_cmyk-04 (1).svg', 'logo0730w-c_cmyk-03.svg');
    cands.push('logo0730w-c_cmyk-06.svg');
    
    function tryNext() {
        if (!cands.length) {
            el.style.display = 'none';
            return;
        }
        const url = cands.shift();
        const img = new Image();
        img.onload = () => {
            el.src = url;
            el.alt = 'TENKI-JAPAN';
            el.style.display = 'inline-block';
        };
        img.onerror = tryNext;
        img.src = url;
    }
    tryNext();
})();

/**
 * Setup sample slide image
 */
(function() {
    const el = document.getElementById('sampleSlide');
    if (SETTINGS.sampleSlideUrl) {
        el.src = SETTINGS.sampleSlideUrl;
    } else if (SETTINGS.itemImage) {
        el.src = SETTINGS.itemImage;
    } else {
        el.style.display = 'none';
    }
})();

/**
 * Setup PDF download links
 */
if (SETTINGS.samplePdfUrl) {
    document.getElementById('samplePdfBtn').href = SETTINGS.samplePdfUrl;
    document.getElementById('samplePdfLink').href = SETTINGS.samplePdfUrl;
} else {
    document.getElementById('samplePdfBtn').style.display = 'none';
    document.getElementById('samplePdfLink').style.display = 'none';
}

/**
 * Setup shop name display
 */
if (SETTINGS.shopName) document.getElementById('shopNameTarget').textContent = SETTINGS.shopName;

/**
 * Shop logo/name setup from explicit URL or shop_id_url pattern
 */
(function() {
    const img = document.getElementById('shopBrand');
    const setLogo = (id) => {
        if (!id || !img) return;
        const shop = String(id).replace(/^\//, '');
        const horiz = `https://thumbnail.image.rakuten.co.jp/@0_mall/${shop}/logo/logo2.jpg`;
        const square = `https://thumbnail.image.rakuten.co.jp/@0_mall/${shop}/logo/logo1.jpg`;
        img.src = horiz;
        img.dataset.squareLogo = square;
        img.alt = shop;
        img.style.display = 'inline-block';
        const nm = document.getElementById('shopNameTarget');
        if (nm && !SETTINGS.shopName) nm.textContent = shop;
    };
    
    if (SETTINGS.shopLogo) {
        img.src = SETTINGS.shopLogo;
        img.style.display = 'inline-block';
    } else if (SETTINGS.shopIdUrl) {
        setLogo(SETTINGS.shopIdUrl);
    }
})();


/* =============================================================================
   CSV PROCESSING UTILITIES
   ============================================================================= */

/**
 * Remove Byte Order Mark (BOM) from string
 * @param {string} s - Input string
 * @returns {string} String without BOM
 */
function stripBOM(s) {
    return s && s.charCodeAt(0) === 0xFEFF ? s.slice(1) : s;
}

/**
 * Load CSV file with encoding detection (UTF-8 vs Shift-JIS)
 * @param {string} url - URL to fetch CSV from
 * @returns {Promise<string>} Decoded CSV text
 */
async function loadCsvText(url) {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    let utf8 = '';
    let sjis = '';
    
    try {
        utf8 = new TextDecoder('utf-8', { fatal: false }).decode(buf);
    } catch (_) {
        utf8 = '';
    }
    try {
        sjis = new TextDecoder('shift_jis', { fatal: false }).decode(buf);
    } catch (_) {
        sjis = '';
    }

    // Avoid string literals for newlines to prevent accidental editor injection
    const NL = String.fromCharCode(10);

    const header = (t) => {
        const i = t.indexOf(NL);
        const h = (i >= 0 ? t.slice(0, i) : t);
        return h.split(String.fromCharCode(13)).join('');
    };
    
    // Expected Japanese keywords for scoring encoding quality
    const exp = ['キーワード', '商品', '自然', 'RPP', '計測', '取得', '順位'];
    const bad = ['縺', '繧', '邨', '遘', '蜀', '蟇', '豁', '鬮', '蛟', '荳', '驟', '譁', '莠'];
    
    const score = (t) => {
        const h = header(t || '');
        if (!h) return -1e9;
        let s = 0;
        for (const x of exp) {
            if (h.indexOf(x) !== -1) s += 10;
        }
        for (const x of bad) {
            if (h.indexOf(x) !== -1) s -= 6;
        }
        const comma = (h.split(',').length - 1);
        if (comma >= 3) s += 3;
        return s;
    };
    
    let best = utf8;
    if (score(sjis) > score(utf8)) best = sjis;
    return stripBOM(best);
}

/**
 * Parse CSV text into array of objects
 * @param {string} text - CSV text content
 * @returns {Array<Object>} Array of row objects with headers as keys
 */
function parseCsv(text) {
    const CR = String.fromCharCode(13);
    const LF = String.fromCharCode(10);
    const clean = text.split(CR).join('');
    const lines = clean.split(LF).filter(l => l.trim().length);
    if (!lines.length) return [];

    const headerLineRaw = stripBOM(lines[0]);
    
    // Detect single-char delimiter
    const candidates = [',', '	', ';', '、', '，', '|'];
    let delim = ',', best = 0;
    for (const d of candidates) {
        const c = (headerLineRaw.split(d).length - 1);
        if (c > best) {
            best = c;
            delim = d;
        }
    }

    function parseLine(line) {
        const out = [];
        let cur = '', inQ = false;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (ch === '"') {
                if (inQ) {
                    if (line[i + 1] === '"') {
                        cur += '"';
                        i++;
                    } else {
                        inQ = false;
                    }
                } else {
                    inQ = true;
                }
            } else if (ch === delim && !inQ) {
                out.push(cur);
                cur = '';
            } else {
                cur += ch;
            }
        }
        out.push(cur);
        return out;
    }

    const headers = parseLine(headerLineRaw).map(h => h.trim());
    const rows = [];
    for (let li = 1; li < lines.length; li++) {
        const cells = parseLine(lines[li]);
        const obj = {};
        headers.forEach((h, idx) => {
            obj[h] = (cells[idx] !== undefined ? String(cells[idx]).trim() : '');
        });
        rows.push(obj);
    }
    return rows;
}

/* =============================================================================
   CSV HEADER MAPPING AND DATA EXTRACTION
   ============================================================================= */

// Japanese header aliases for flexible CSV parsing
const H = {
    itemId: ['item_id_url', 'item', 'itemIdUrl', 'item_id', '商品管理番号（商品URL）', '商品管理番号(商品URL)', '商品URL', '商品番号'],
    shopIdUrl: ['shop_id_url', 'shop', 'shopId', 'shopIdUrl', 'ショップID', '店舗URL', 'ショップURLID'],
    title: ['title', 'item_title', 'name', '商品名', '商品名1', '商品名１'],
    image: ['image_url', 'img', 'image', '商品画像URL', '画像URL', '画像URL1', '画像1'],
    keyword: ['keyword', 'kw', 'term', 'キーワード'],
    rpp: ['rpp', 'rpp_rank', 'rppRank', 'RPP順位', 'RPP順'],
    org: ['seo', 'organic', 'organic_rank', 'org', 'rank', '自然検索順位', '自然'],
    checked: ['checked', 'date', 'timestamp', 'time', '確認時間', '取得日時', '計測日時', '取得時刻'],
    slide: ['slide', 'スライド', 'ページ']
};

/**
 * Pick first matching value from object using key list
 * @param {Object} obj - Object to search
 * @param {Array<string>} keys - List of possible keys
 * @returns {string} First matching value or empty string
 */
function pick(obj, keys) {
    for (const k of keys) {
        if (Object.prototype.hasOwnProperty.call(obj, k) && obj[k] !== '') return obj[k];
    }
    return '';
}

/**
 * Find value by partial key matching
 * @param {Object} obj - Object to search
 * @param {Array<string>} containsList - List of substrings to match
 * @returns {string} First matching value or empty string
 */
function findContains(obj, containsList) {
    const entries = Object.keys(obj || {});
    for (const key of entries) {
        const low = key.toLowerCase();
        const raw = key;
        for (const p of containsList) {
            if (raw.indexOf(p) !== -1) return obj[key];
            if (low.indexOf(p) !== -1) return obj[key];
        }
    }
    return '';
}

/**
 * Get first non-numeric, non-date text value from object
 * @param {Object} obj - Object to search
 * @returns {string} First text value or empty string
 */
function firstTextValue(obj) {
    for (const [k, v] of Object.entries(obj || {})) {
        if (v == null) continue;
        const s = String(v).trim();
        if (!s) continue;
        if (/^[0-9]+$/.test(s)) continue; // numbers only
        if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(s)) continue; // ISO date
        return s;
    }
    return '';
}

/**
 * Format cell value for display
 * @param {*} v - Value to format
 * @returns {string} Formatted string
 */
function fmtCell(v) {
    const s = v == null ? '' : String(v).trim();
    if (s === '' || s === '"' || s === '""') return '';
    return s;
}

/**
 * Format ISO date to Japanese format
 * @param {string} iso - ISO date string
 * @returns {string} Formatted date string
 */
function fmtJST(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d)) return String(iso);
    return new Intl.DateTimeFormat('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(d);
}

/* =============================================================================
   DEMO MODE AND CONTENT MASKING
   ============================================================================= */

/**
 * Mask keyword list for demo mode
 * @param {Array} list - List of keywords to mask
 * @returns {Array} Masked list
 */
function maskList(list) {
    if (!Array.isArray(list)) return [];
    if (!window.LOCKED) return list;
    const cap = 12; // max rows to show
    return list.slice(0, cap).map((r, i) => (i < 3 ? r : {
        keyword: maskKeyword(r.keyword),
        rppRank: '',
        organicRank: '',
        checkedAt: ''
    }));
}

/**
 * Mask individual keyword for demo
 * @param {string} s - Keyword to mask
 * @returns {string} Masked keyword
 */
function maskKeyword(s) {
    if (!s) return '';
    const t = String(s).trim();
    if (t.length <= 4) return t[0] + '…';
    return t.slice(0, 4) + '…';
}

/* =============================================================================
   CONTENT RENDERING FUNCTIONS
   ============================================================================= */

/**
 * Render keywords table
 * @param {Array} list - List of keyword objects
 */
function renderKeywords(list) {
    const tbody = document.getElementById('kwTable');
    tbody.innerHTML = '';
    const listToRender = (window.LOCKED ? maskList(list) : list) || [];
    
    // Show first 3 keywords with full data
    const limitedList = listToRender.slice(0, 3);
    
    limitedList.forEach(k => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${k.keyword || ''}</td><td class="num">${fmtCell(k.rppRank)}</td><td class="num">${fmtCell(k.organicRank)}</td><td class="time">${fmtJST(fmtCell(k.checkedAt))}</td>`;
        tbody.appendChild(tr);
    });
    
    // Add truncated keyword entries after the first 3
    const remainingList = listToRender.slice(3, 8); // Show up to 5 more truncated entries
    remainingList.forEach(k => {
        const tr = document.createElement('tr');
        const keyword = k.keyword || '';
        const truncatedKeyword = keyword.length > 3 ? keyword.substring(0, 3) + '...' : keyword;
        tr.innerHTML = `<td>${truncatedKeyword}</td><td class="num"></td><td class="num"></td><td class="time"></td>`;
        tbody.appendChild(tr);
    });
    
    // Apply fade effect and lock note for demo mode
    const sc = document.querySelector('.tableScroll');
    if (sc) {
        if (window.LOCKED) {
            sc.classList.add('fadeBottom');
        } else {
            sc.classList.remove('fadeBottom');
        }
    }
    const ln = document.getElementById('lockNote');
    if (ln) {
        ln.style.display = 'block';
    }
    
    // Create keyword cloud when keywords are rendered (only once, faster)
    if (!document.querySelector('.keyword-cloud')) {
        setTimeout(createKeywordCloud, 200);
    }
}


/**
 * Escape HTML characters for safe insertion
 * @param {string} s - String to escape
 * @returns {string} Escaped string
 */
function escapeHtml(s) {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" };
    return String(s).replace(/[&<>"']/g, ch => map[ch]);
}

/**
 * Render AI action recommendations
 * @param {Array} list - List of AI action objects
 */
function renderAiActions(list) {
    const host = document.getElementById('aiList');
    host.innerHTML = '';
    (list || []).forEach(it => {
        const div = document.createElement('div');
        div.className = 'aiItem';
        div.innerHTML = `
          <h4>${escapeHtml(it.product || (langState === 'ja' ? '商品' : 'Item'))}</h4>
          <p class="muted" style="margin:0 0 8px">${escapeHtml(it.summary || '')}</p>
          ${it.titleSuggestion ? `<div class="kcode">${escapeHtml(it.titleSuggestion)}</div>` : ''}
          ${Array.isArray(it.rppAdditions) && it.rppAdditions.length ? `<div class="chips" style="margin-top:8px">${it.rppAdditions.map(k => `<span class="chip">${escapeHtml(k)}</span>`).join('')}</div>` : ''}
        `;
        host.appendChild(div);
    });
}

/* =============================================================================
   PRODUCT ITEM MANAGEMENT
   ============================================================================= */

let CURRENT_IDX = 0; // Currently selected product index

/**
 * Build items array from settings if not already populated
 */
function buildItemsFromSettings() {
    if (!Array.isArray(SETTINGS.items) || !SETTINGS.items.length) {
        SETTINGS.items = [{
            shopIdUrl: SETTINGS.shopIdUrl,
            itemIdUrl: SETTINGS.itemIdUrl,
            image: SETTINGS.itemImage,
            title: SETTINGS.itemTitle,
            keywords: SETTINGS.topKeywords
        }];
    }
}

/**
 * Render the list of clickable product items
 */
function renderItemsList() {
    const host = document.getElementById('itemsList');
    if (!host) return;
    const items = (SETTINGS.items || []);
    host.innerHTML = items.map((it, idx) => `
        <button class="itemBtn ${idx === CURRENT_IDX ? 'active' : ''}" data-idx="${idx}">
          <img src="${it.image || ''}" alt="">
          <div class="title">${escapeHtml(it.title || ((document.documentElement.lang === 'ja' ? '商品' : 'Item') + ' ' + (idx + 1)))}</div>
        </button>`).join('');
    
    // Add click handlers to product buttons
    host.querySelectorAll('.itemBtn').forEach(btn => btn.addEventListener('click', () => {
        // Stop auto-advance FIRST
        stopAllAutoAdvance();
        
        // Update selection
        window.CURRENT_IDX = Number(btn.dataset.idx) || 0;
        CURRENT_IDX = window.CURRENT_IDX;
        
        // Update visual state immediately
        host.querySelectorAll('.itemBtn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update keywords for clicked item
        buildItemsFromSettings();
        const it = (SETTINGS.items || [])[CURRENT_IDX] || {};
        const kw = Array.isArray(it.keywords) ? it.keywords : SETTINGS.topKeywords;
        renderKeywords(kw || []);
    }));
    
    // Trigger events after render
    setTimeout(() => {
        try {
            document.dispatchEvent(new Event('itemsRendered'));
        } catch (_) { }
        if (!window.USER_CLICKED && window.startAutoSelect) window.startAutoSelect();
    }, 0);
    setTimeout(setMobileListHeight, 0);
}

/**
 * Set appropriate height for mobile item list
 */
function setMobileListHeight() {
    const list = document.getElementById('itemsList');
    if (!list) return;
    const isSP = window.matchMedia('(max-width: 720px)').matches;
    if (!isSP) {
        list.style.maxHeight = '520px';
        return;
    }
    const first = list.querySelector('.itemBtn');
    if (!first) return;
    const cs = getComputedStyle(list);
    const gap = parseFloat(cs.rowGap || cs.gap || '0') || 0;
    const h = first.getBoundingClientRect().height;
    const target = Math.round(3.5 * h + 3 * gap);
    list.style.maxHeight = target + 'px';
}

/**
 * Render item header (currently disabled)
 */
function renderItemHeader() {
    const el = document.getElementById('itemHeader');
    if (!el) return;
    el.innerHTML = '';
    el.style.display = 'none';
}

/**
 * Apply current selection and update displays
 */
function applySelection() {
    buildItemsFromSettings();
    const it = (SETTINGS.items || [])[CURRENT_IDX] || {};
    SETTINGS.shopIdUrl = it.shopIdUrl || SETTINGS.shopIdUrl;
    SETTINGS.itemIdUrl = it.itemIdUrl || SETTINGS.itemIdUrl;
    SETTINGS.itemImage = it.image || SETTINGS.itemImage;
    SETTINGS.itemTitle = it.title || SETTINGS.itemTitle;

    const kw = Array.isArray(it.keywords) ? it.keywords : SETTINGS.topKeywords;
    renderKeywords(kw || []);
    
    // Only update active state, don't re-render the entire list
    updateActiveSelection();
}

/**
 * Update which item is active without re-rendering the list
 */
function updateActiveSelection() {
    const host = document.getElementById('itemsList');
    if (!host) return;
    
    // Remove active class from all items
    const allBtns = host.querySelectorAll('.itemBtn');
    allBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to current item - use window.CURRENT_IDX
    const currentIdx = window.CURRENT_IDX || 0;
    const activeBtn = host.querySelector(`[data-idx="${currentIdx}"]`);
    
    if (activeBtn) {
        activeBtn.classList.add('active');
        scrollToActiveItem();
    }
}

/* =============================================================================
   STATISTICS DISPLAY
   ============================================================================= */


/* =============================================================================
   CSV DATA LOADING AND PROCESSING
   ============================================================================= */

/**
 * Build application data from CSV files
 * @returns {Promise<boolean>} Success status
 */
async function buildFromCsv() {
    if (!SETTINGS.csvKeywordsUrl) return false;
    try {
        const [kwTxt, itemsTxt] = await Promise.all([
            loadCsvText(SETTINGS.csvKeywordsUrl),
            SETTINGS.csvItemsUrl ? loadCsvText(SETTINGS.csvItemsUrl) : Promise.resolve('')
        ]);
        
        const kwRows = parseCsv(kwTxt);
        if (!kwRows.length) {
            return false;
        }
        
        const itemRows = itemsTxt ? parseCsv(itemsTxt) : [];

        // Build item index from items CSV
        const itemIndex = new Map();
        const itemSlide = new Map();
        itemRows.forEach(r => {
            const id = pick(r, H.itemId);
            if (!id) return;
            const sldRaw = pick(r, H.slide) || findContains(r, ['slide', 'スライド', 'ページ']);
            const sld = sldRaw ? Number(String(sldRaw).trim()) : undefined;
            if (sld != null) itemSlide.set(id, sld);
            itemIndex.set(id, {
                shopIdUrl: pick(r, H.shopIdUrl) || SETTINGS.shopIdUrl,
                itemIdUrl: id,
                title: pick(r, H.title) || '',
                image: pick(r, H.image) || '',
                keywords: []
            });
        });

        // Process keywords and group by item
        const byId = new Map();
        const bySlide = new Map();
        const rowsAll = [];
        kwRows.forEach(rr => {
            const iid = pick(rr, H.itemId) || findContains(rr, ['商品管理番号', '商品URL', '商品番号', 'item_id']) || '__default__';
            const sldRaw = pick(rr, H.slide) || findContains(rr, ['slide', 'スライド', 'ページ']);
            const sld = sldRaw ? Number(String(sldRaw).trim()) : undefined;
            const row = {
                keyword: (pick(rr, H.keyword) || findContains(rr, ['キーワード', 'keyword', 'kw', 'term', '用語', '検索', 'ワード']) || firstTextValue(rr)),
                rppRank: pick(rr, H.rpp) || findContains(rr, ['RPP', 'rpp']),
                seoRank: pick(rr, H.org) || findContains(rr, ['自然検索順位', '自然', 'organic', 'seo']),
                organicRank: pick(rr, H.org) || findContains(rr, ['自然検索順位', '自然', 'organic', 'seo']),
                checkedAt: pick(rr, H.checked) || findContains(rr, ['計測', '取得', '時刻', 'timestamp', 'date', 'time']),
                name: (pick(rr, H.keyword) || findContains(rr, ['キーワード', 'keyword', 'kw', 'term', '用語', '検索', 'ワード']) || firstTextValue(rr))
            };
            rowsAll.push(row);
            if (!byId.has(iid)) byId.set(iid, []);
            byId.get(iid).push(row);
            if (sld != null) {
                if (!bySlide.has(sld)) bySlide.set(sld, []);
                bySlide.get(sld).push(row);
            }
        });

        // Build final items array
        let items = [];
        if (itemIndex.size > 0) {
            // Build in the same order as items CSV
            itemRows.forEach(r => {
                const id = pick(r, H.itemId);
                if (!id) return;
                const base = itemIndex.get(id);
                const sld = itemSlide.get(id);
                const kws = byId.get(id) || (sld != null ? bySlide.get(sld) : undefined) || rowsAll;
                items.push({ ...base, keywords: kws });
            });
        }
        if (items.length === 0) {
            // No items CSV or no IDs in keyword CSV. Create 3 clickable items using global keywords.
            const any = rowsAll;
            items = [1, 2, 3].map(n => ({
                shopIdUrl: SETTINGS.shopIdUrl,
                itemIdUrl: '',
                title: (document.documentElement.lang === 'ja' ? `商品 ${n}` : `Item ${n}`),
                image: '',
                keywords: any
            }));
        }

        // Update settings with parsed data
        SETTINGS.items = items;
        SETTINGS.slides = items.length;
        SETTINGS.kwCount = kwRows.length;
        SETTINGS.rppCount = kwRows.reduce((acc, r) => acc + (Number(pick(r, H.rpp)) > 0 ? 1 : 0), 0);

        buildItemsFromSettings();
        renderItemsList();
        CURRENT_IDX = 0;
        applySelection();
        return items.length > 0 || kwRows.length > 0;
    } catch (e) {
        return false;
    }
}

/* =============================================================================
   APPLICATION INITIALIZATION
   ============================================================================= */

// Initialize language and basic rendering
try {
    document.documentElement.setAttribute('lang', (typeof langState !== 'undefined' && langState === 'en') ? 'en' : 'ja');
} catch (_) { }

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Update page title with shop_id_url
document.title = document.title.replace('[shop_id_url]', shop_id_url);

applyI18n(typeof langState !== 'undefined' ? langState : 'ja');
buildItemsFromSettings();
renderItemsList();
applySelection();
if (!window.USER_CLICKED && window.startAutoSelect) window.startAutoSelect();

// Main data loading and setup
(async () => {
    let used = false;
    
    // Try CSV loading first
    if (SETTINGS.csvKeywordsUrl) {
        used = await buildFromCsv();
    }
    
    // Load JSON data (either as fallback or for metadata overlay)
    if (SETTINGS.dataUrl) {
        try {
            const data = await fetch(SETTINGS.dataUrl).then(r => r.json());
            
            // Basic branding updates
            if (data.shopName && !SETTINGS.shopName) {
                SETTINGS.shopName = data.shopName;
                const t = document.getElementById('shopNameTarget');
                if (t) t.textContent = data.shopName;
            }
            if (data.shopLogo && !SETTINGS.shopLogo) {
                SETTINGS.shopLogo = data.shopLogo;
                const img = document.getElementById('shopBrand');
                img.src = data.shopLogo;
                img.style.display = 'inline-block';
            }
            if (data.shop_id_url) {
                SETTINGS.shopIdUrl = data.shop_id_url;
            }

            // Meta overlays always applied (even when CSV used)
            if (data.slides != null) SETTINGS.slides = data.slides;
            else if (Array.isArray(data.items)) SETTINGS.slides = data.items.length;
            
            if (data.kw_count != null) SETTINGS.kwCount = data.kw_count;
            else if (data.kwd_count != null) SETTINGS.kwCount = data.kwd_count;
            else if (data.keywords_count != null) SETTINGS.kwCount = data.keywords_count;
            
            if (data.rpp_count != null) SETTINGS.rppCount = data.rpp_count;
            if (data.date) SETTINGS.updatedAt = data.date;
            else if (data.updated_at) SETTINGS.updatedAt = data.updated_at;

            // Items only when CSV not used
            if (!used && Array.isArray(data.items)) {
                SETTINGS.items = data.items;
                buildItemsFromSettings();
                renderItemsList();
                applySelection();
                if (!window.USER_CLICKED && window.startAutoSelect) window.startAutoSelect();
            }
            if (!used && Array.isArray(data.topKeywords)) {
                SETTINGS.topKeywords = data.topKeywords;
            }

            // Update sample resources
            if (data.sampleSlideUrl && !SETTINGS.sampleSlideUrl) {
                SETTINGS.sampleSlideUrl = data.sampleSlideUrl;
                const el = document.getElementById('sampleSlide');
                el.src = data.sampleSlideUrl;
                el.style.display = 'block';
            }
            if (data.samplePdfUrl) {
                SETTINGS.samplePdfUrl = data.samplePdfUrl;
                const a1 = document.getElementById('samplePdfBtn');
                const a2 = document.getElementById('samplePdfLink');
                a1.href = data.samplePdfUrl;
                a2.href = data.samplePdfUrl;
                a1.style.display = 'inline-flex';
                a2.style.display = 'inline';
            }

            // Ensure logo from shop_id_url if not explicitly provided
            if (SETTINGS.shopIdUrl && !SETTINGS.shopLogo) {
                const img = document.getElementById('shopBrand');
                const shop = String(SETTINGS.shopIdUrl).replace(/^\//, '');
                img.src = `https://thumbnail.image.rakuten.co.jp/@0_mall/${shop}/logo/logo2.jpg`;
                img.dataset.squareLogo = `https://thumbnail.image.rakuten.co.jp/@0_mall/${shop}/logo/logo1.jpg`;
                img.alt = shop;
                img.style.display = 'inline-block';
                const nm = document.getElementById('shopNameTarget');
                if (nm && !SETTINGS.shopName) nm.textContent = shop;
            }

            if (data.aiActions) renderAiActions(data.aiActions);
        } catch (e) {
            // Error handling - data loading failed
        }
    }
})();

/* =============================================================================
   EVENT HANDLERS AND INTERACTIONS
   ============================================================================= */

// Language toggle functionality
document.getElementById('footLangSwitch')?.addEventListener('click', () => {
    langState = (langState === 'en' ? 'ja' : 'en');
    localStorage.setItem('lang', langState);
    applyI18n(langState);
    const it = (SETTINGS.items || [])[CURRENT_IDX] || {};
    const kw = Array.isArray(it.keywords) ? it.keywords : SETTINGS.topKeywords;
    renderKeywords(kw || []);
    renderAiActions(SETTINGS.aiActions);
    renderFAQ(); // Update FAQ when language changes
    setTimeout(setMobileListHeight, 0);
});

// Window resize handler for mobile layout
window.addEventListener('resize', setMobileListHeight);

// Form submission handler (demo/placeholder)
const formElement = document.getElementById('reqForm');
if (formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();

        const payload = {
            shopName: document.getElementById('shopName').value.trim(),
            shopUrl: document.getElementById('shopUrl').value.trim(),
            contact: document.getElementById('contact').value.trim(),
            email: document.getElementById('email').value.trim(),
            rmsId: document.getElementById('rmsId').value.trim(),
            notes: document.getElementById('notes').value.trim(),
            agree: document.getElementById('agree').checked,
            ts: new Date().toISOString()
        };
        alert(langState === 'ja' ? '送信しました。追ってご連絡します。' : 'Request submitted. We will contact you shortly.');
        this.reset();
        document.getElementById('agree').checked = false;
    });
}

/* =============================================================================
   SHOP LOGO CHOOSER
   ============================================================================= */

/**
 * Client-side shop logo chooser with fallback options
 */
(function() {
    function chooseBrandLogo() {
        var el = document.getElementById('shopBrand');
        if (!el) return;
        var shop = String((window.SETTINGS && SETTINGS.shopIdUrl) || '').replace(/^\//, '');
        var cands = [];
        if (window.SETTINGS && SETTINGS.shopLogo) cands.push(SETTINGS.shopLogo);

        if (shop) {
            cands.push('https://thumbnail.image.rakuten.co.jp/@0_mall/' + shop + '/logo/logo2.jpg');
            cands.push('https://thumbnail.image.rakuten.co.jp/@0_mall/' + shop + '/logo/logo1.jpg');
        }
        
        function tryNext() {
            if (!cands.length) return;
            var url = cands.shift();
            var test = new Image();
            test.onload = function() {
                el.src = url;
                el.style.display = 'inline-block';
                el.alt = (SETTINGS && SETTINGS.shopName) || shop || 'shop';
            };
            test.onerror = tryNext;
            test.src = url;
        }
        tryNext();
        
        var nm = document.getElementById('shopNameTarget');
        if (nm && (!window.SETTINGS || !SETTINGS.shopName) && shop) nm.textContent = shop;
    }
    
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(chooseBrandLogo, 0);
    } else {
        document.addEventListener('DOMContentLoaded', chooseBrandLogo);
    }
})();

/* =============================================================================
   AUTO-ADVANCE FUNCTIONALITY
   ============================================================================= */

// Global state for auto-advance
window.USER_CLICKED = false;
window.AUTO_TIMER = null;

/**
 * Centralized function to stop all auto-advance timers
 */
function stopAllAutoAdvance() {
    window.USER_CLICKED = true;
    if (window.AUTO_TIMER) {
        clearInterval(window.AUTO_TIMER);
        window.AUTO_TIMER = null;
    }
}


/**
 * Scroll the items list to keep the active item visible
 */
function scrollToActiveItem() {
    const list = document.getElementById('itemsList');
    if (!list) return;
    
    const activeBtn = list.querySelector('.itemBtn.active');
    if (!activeBtn) return;
    
    // If we're back to the first item (index 0), scroll to top
    if (window.CURRENT_IDX === 0) {
        list.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return;
    }
    
    const listRect = list.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    
    // Check if button is outside visible area
    if (btnRect.bottom > listRect.bottom || btnRect.top < listRect.top) {
        // Scroll to center the active item
        const scrollTop = activeBtn.offsetTop - (list.clientHeight / 2) + (activeBtn.offsetHeight / 2);
        list.scrollTo({
            top: Math.max(0, scrollTop),
            behavior: 'smooth'
        });
    }
}

/**
 * Single, clean auto-advance implementation
 */
function startAutoSelect() {
    if (window.USER_CLICKED) return;
    
    const btns = document.querySelectorAll('#itemsList .itemBtn');
    if (btns.length < 2) return;
    
    if (window.AUTO_TIMER) clearInterval(window.AUTO_TIMER);
    
    window.AUTO_TIMER = setInterval(function() {
        if (window.USER_CLICKED) {
            clearInterval(window.AUTO_TIMER);
            window.AUTO_TIMER = null;
            return;
        }
        
        const currentBtns = document.querySelectorAll('#itemsList .itemBtn');
        const totalNow = currentBtns.length || 1;
        window.CURRENT_IDX = ((window.CURRENT_IDX || 0) + 1) % totalNow;
        
        // Simulate a real click on the button
        const targetBtn = currentBtns[window.CURRENT_IDX];
        if (targetBtn) {
            // Update visual state
            currentBtns.forEach(btn => btn.classList.remove('active'));
            targetBtn.classList.add('active');
            
            // Trigger the same logic as a real click (but don't stop auto-advance)
            const tempUserClicked = window.USER_CLICKED;
            window.USER_CLICKED = false;
            
            CURRENT_IDX = window.CURRENT_IDX;
            applySelection();
            
            window.USER_CLICKED = tempUserClicked;
            
            // Scroll to keep visible
            scrollToActiveItem();
        }
        
    }, 1500);
}

// Start auto-advance
window.startAutoSelect = startAutoSelect;
setTimeout(() => {
    startAutoSelect();
}, 2000);

/**
 * Watchdog to ensure auto-advance keeps running (only if user hasn't clicked)
 */
(function() {
    setInterval(function() {
        try {
            if (window.USER_CLICKED) return; // Don't restart if user clicked
            var btns = document.querySelectorAll('#itemsList .itemBtn');
            if (!btns || btns.length < 2) return;
            if (!window.AUTO_TIMER && window.startAutoSelect) window.startAutoSelect();
        } catch (_) { }
    }, 2500);
})();



/* =============================================================================
   FINAL SETUP AND INTEGRATIONS
   ============================================================================= */

/**
 * Final application setup and configuration
 */
(function() {
    try {
        // Default language
        document.documentElement.lang = 'ja';

        // Sample PDF: Z-CRAFT
        var NEW_PDF = 'https://data.tenki-japan.co.jp/rakuten.co.jp/z-craft/report/20/z-craft-keywords-shop-5sy5a7-13xuq3p-15bsqkk.pdf';
        ['samplePdfBtn', 'samplePdfLink'].forEach(function(id) {
            var a = document.getElementById(id);
            if (a) {
                a.href = NEW_PDF;
                a.target = '_blank';
                a.rel = 'noopener';
            }
        });

        // Remove or neutralize any gating popup
        try {
            window.LOCKED = false;
            localStorage.setItem('kwd_unlock', '1');
            var gate = document.getElementById('gate');
            if (gate) {
                gate.remove();
            }
            var btn = document.getElementById('samplePdfBtn');
            if (btn) {
                btn.onclick = null;
            }
        } catch (e) { }

        // Sticky CTA should hide when footer is visible, show when footer is hidden
        (function() {
            var bar = document.getElementById('stickyCta');
            var footer = document.querySelector('footer');
            if (!bar || !footer) return;
            var io = new IntersectionObserver(function(entries) {
                var visible = entries[0].isIntersecting;
                if (visible) {
                    bar.style.display = 'none';
                } else {
                    bar.style.display = 'block';
                }
            }, { rootMargin: '0px 0px 120px 0px' });
            io.observe(footer);
        })();

    } catch (e) { }
})();

/* =============================================================================
   SHOP CATEGORY AND REPORTS MANAGEMENT
   ============================================================================= */

let shopsData = null;
let categoryAutoTimer = null;
let categoryUserClicked = false;

/**
 * Central function to handle category selection
 * @param {string} categoryName - Name of category to select
 */
function selectCategory(categoryName) {
    // Remove active class from all category buttons
    let activeBtn = null;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === categoryName) {
            btn.classList.add('active');
            activeBtn = btn;
        }
    });
    
    // Always scroll active button into view on mobile (for auto-select visibility)
    if (activeBtn && window.matchMedia('(max-width: 768px)').matches) {
        const categoryMenu = document.getElementById('categoryMenu');
        if (categoryMenu) {
            const btnRect = activeBtn.getBoundingClientRect();
            const menuRect = categoryMenu.getBoundingClientRect();
            const scrollLeft = activeBtn.offsetLeft - (categoryMenu.clientWidth / 2) + (activeBtn.offsetWidth / 2);
            
            categoryMenu.scrollTo({
                left: Math.max(0, scrollLeft),
                behavior: 'smooth'
            });
        }
    }
    
    // Generate shop cards for this category
    if (shopsData) {
        const filteredShops = shopsData.filter(shop => shop.genre === categoryName);
        generateShopCards(filteredShops);
    }
}

/**
 * Fetch shops data from JSON file
 */
async function fetchShopsData() {
    try {
        const response = await fetch('shops.json');
        if (!response.ok) throw new Error('Failed to fetch shops data');
        
        // Get raw text first to handle NaN values
        const rawText = await response.text();
        // Replace NaN with null or empty string
        const cleanText = rawText.replace(/:\s*NaN/g, ': null');
        
        const data = JSON.parse(cleanText);
        shopsData = (data.Sheet1 || []).filter(shop => {
            // Filter out shops with invalid data
            return shop.shop && shop.genre && shop.hash !== null && shop.hash !== undefined;
        });
        return shopsData;
    } catch (error) {
        console.error('Error fetching shops data:', error);
        return [];
    }
}

/**
 * Generate category menu buttons
 * @param {Array} shops - Array of shop objects
 */
function generateCategoryMenu(shops) {
    const categoryMenu = document.getElementById('categoryMenu');
    if (!categoryMenu) return;
    
    // Get unique genres
    const categories = [...new Set(shops.map(shop => shop.genre))];
    
    categoryMenu.innerHTML = '';
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = category;
        btn.onclick = () => {
            categoryUserClicked = true;
            if (categoryAutoTimer) clearInterval(categoryAutoTimer);
            selectCategory(category);
        };
        categoryMenu.appendChild(btn);
    });
    
    // Auto-select first category
    if (categories.length > 0) {
        selectCategory(categories[0]);
        
        // Start auto-advance if multiple categories
        if (categories.length > 1) {
            startCategoryAutoAdvance(categories);
        }
    }
}

/**
 * Generate shop cards with logos and PDF links
 * @param {Array} shops - Array of shop objects for selected category
 */
function generateShopCards(shops) {
    const shopCards = document.getElementById('shopCards');
    if (!shopCards) return;
    
    shopCards.innerHTML = '';
    
    // On mobile, limit to first 3 cards visible, rest scrollable
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const shopsToShow = isMobile ? shops.slice(0, 6) : shops; // Show 6 on mobile for scrolling
    
    shopsToShow.forEach(shop => {
        const card = document.createElement('div');
        card.className = 'shop-card';
        
        const logo = document.createElement('img');
        logo.className = 'shop-logo';
        logo.src = `https://thumbnail.image.rakuten.co.jp/@0_mall/${shop.shop}/logo/logo1.jpg`;
        logo.alt = `${shop.shop} logo`;
        logo.onerror = () => {
            logo.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAzNkMzMC42Mjc0IDM2IDM2IDMwLjYyNzQgMzYgMjRDMzYgMTcuMzcyNiAzMC42Mjc0IDEyIDI0IDEyQzE3LjM3MjYgMTIgMTIgMTcuMzcyNiAxMiAyNEMxMiAzMC42Mjc0IDE3LjM3MjYgMzYgMjQgMzYiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+';
        };
        
        const info = document.createElement('div');
        info.className = 'shop-info';
        
        const name = document.createElement('div');
        name.className = 'shop-name';
        name.textContent = shop.shop;
        
        const category = document.createElement('div');
        category.className = 'shop-category';
        category.textContent = shop.secondary_genre;
        
        const button = document.createElement('a');
        button.className = 'btn shop-report-btn';
        const hash = shop.hash.split('_').pop();
        button.href = `https://data.tenki-japan.co.jp/rakuten.co.jp/${shop.shop}/report/20/${shop.shop}-keywords-shop-${hash}.pdf`;
        button.target = '_blank';
        button.rel = 'noopener';
        button.textContent = I18N[langState || 'ja'].viewSampleReport;
        
        // Stop auto-select when clicking report button
        button.addEventListener('click', () => {
            categoryUserClicked = true;
            if (categoryAutoTimer) clearInterval(categoryAutoTimer);
        });
        
        info.appendChild(name);
        info.appendChild(category);
        info.appendChild(button);
        
        card.appendChild(logo);
        card.appendChild(info);
        
        card.addEventListener('click', (e) => {
            if (e.target.closest('.shop-report-btn')) return;
            categoryUserClicked = true;
            if (categoryAutoTimer) clearInterval(categoryAutoTimer);
        });
        
        shopCards.appendChild(card);
    });
}

/**
 * Initialize shop category system
 */
async function initializeShopCategories() {
    const shops = await fetchShopsData();
    if (shops.length > 0) {
        generateCategoryMenu(shops);
    }
}

/**
 * Start category auto-advance
 * @param {Array} categories - List of category names
 */
function startCategoryAutoAdvance(categories) {
    if (categoryUserClicked) return;
    
    let currentIndex = 0;
    
    setTimeout(() => {
        if (categoryUserClicked) return;
        
        categoryAutoTimer = setInterval(() => {
            if (categoryUserClicked) {
                clearInterval(categoryAutoTimer);
                categoryAutoTimer = null;
                return;
            }
            
            // Move to next category
            currentIndex = (currentIndex + 1) % categories.length;
            selectCategory(categories[currentIndex]);
            
        }, 2000); // Change category every 2 seconds
        
    }, 3000); // Start after 3 second delay
}

// Initialize shop categories when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeShopCategories();
});

// Auto-fill HubSpot form by intercepting iframe creation (single load)
if (shop_id_url) {
    // Create MutationObserver to catch iframe creation before it loads
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                // Check if added node is an iframe or contains iframes
                if (node.nodeType === Node.ELEMENT_NODE) {
                    let iframes = [];
                    
                    if (node.tagName === 'IFRAME') {
                        iframes = [node];
                    } else if (node.querySelectorAll) {
                        iframes = Array.from(node.querySelectorAll('iframe'));
                    }
                    
                    // Process HubSpot iframes
                    iframes.forEach((iframe) => {
                        if (iframe.src && iframe.src.includes('hsforms.net')) {
                            const iframeSrc = new URL(iframe.src);
                            
                            // Add shop_id_url parameter if not already present
                            if (!iframeSrc.searchParams.has('shop_id_url')) {
                                iframeSrc.searchParams.set('shop_id_url', shop_id_url);
                                iframe.src = iframeSrc.toString();
                            }
                        }
                    });
                }
            });
        });
    });
    
    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Stop observing after 15 seconds to prevent memory leaks
    setTimeout(() => {
        observer.disconnect();
    }, 15000);
}

/* =============================================================================
   3D KEYWORD CLOUD BACKGROUND (TagCloud.js)
   ============================================================================= */

let tagCloudInstance = null;

// Initialize TagCloud container
function initTagCloudContainer() {
    // Remove existing cloud if any
    const existingCloud = document.querySelector('.keyword-cloud');
    if (existingCloud) existingCloud.remove();
    
    // Create new cloud container
    const cloud = document.createElement('div');
    cloud.className = 'keyword-cloud';
    cloud.id = 'keywordCloud';
    document.body.appendChild(cloud);
    
    return cloud;
}

// Main function to create the 3D keyword cloud
function createKeywordCloud() {
    // Check if TagCloud library is loaded
    if (typeof TagCloud === 'undefined') {
        setTimeout(createKeywordCloud, 500);
        return;
    }
    
    // Get all keywords from all items (same logic as before)
    const items = SETTINGS.items || [];
    if (!items.length) return;
    
    // Extract all keywords from all items
    const allKeywords = [];
    items.forEach(item => {
        if (Array.isArray(item.keywords)) {
            item.keywords.forEach(kw => {
                if (kw && kw.keyword && kw.keyword.length > 1) {
                    allKeywords.push(kw.keyword);
                }
            });
        }
    });
    
    // Remove duplicates and limit count
    const uniqueKeywords = [...new Set(allKeywords)];
    if (!uniqueKeywords.length) return;
    
    // Select keywords for the cloud (20-40 keywords work best for TagCloud)
    const targetCount = Math.max(20, Math.min(40, uniqueKeywords.length));
    const keywordsToShow = [];
    
    // Duplicate keywords if needed to reach target count
    while (keywordsToShow.length < targetCount) {
        keywordsToShow.push(...uniqueKeywords);
    }
    
    // Shuffle and trim to target count
    keywordsToShow.sort(() => Math.random() - 0.5);
    keywordsToShow.splice(targetCount);
    
    // Create cloud container
    const container = initTagCloudContainer();
    
    // Destroy existing TagCloud instance if it exists
    if (tagCloudInstance && tagCloudInstance.destroy) {
        tagCloudInstance.destroy();
    }
    
    // Initialize TagCloud with very large radius to fill screen
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const sphereRadius = isMobile ? 600 : 1400;
    
    tagCloudInstance = TagCloud(container, keywordsToShow, {
        // Very large radius to spread across entire screen
        radius: sphereRadius,
        
        // Animation speed - faster to start automatically
        maxSpeed: 'normal',
        initSpeed: 'fast',
        
        // Direction and interaction
        direction: 135,
        keep: true, // Enable mouse interaction
        
        // Don't use HTML for now - just plain text
        useHTML: false,
    });
    
    // Start automatic rotation by simulating mouse movement
    setTimeout(() => {
        if (tagCloudInstance) {
            // Trigger initial movement to start the animation
            const event = new MouseEvent('mousemove', {
                clientX: window.innerWidth / 2,
                clientY: window.innerHeight / 2
            });
            container.dispatchEvent(event);
        }
    }, 500);
}

// Clear existing TagCloud
function clearKeywordCloud() {
    if (tagCloudInstance && tagCloudInstance.destroy) {
        tagCloudInstance.destroy();
        tagCloudInstance = null;
    }
    const cloud = document.querySelector('.keyword-cloud');
    if (cloud) cloud.remove();
}

/* =============================================================================
   TYPEWRITER RECOMMENDATION SYSTEM
   ============================================================================= */

// Advanced typewriter configuration with conditional logic
const typewriterConfig = {
    SEO_HIGH_MAX_RANK: 5,
    MAX_LINE_LEN: 34,
    animation: { typeSpeed: 22, eraseSpeed: 14, holdDuration: 1600, gapDuration: 400 },
    labels: {
        thisProduct: "対象商品",
        joiner: "・",
        summaryPattern: "{item}｜{total}件のキーワード（RPP {rpp}件）",
        rppFocusPattern: "{item}｜注目RPP: {kws}",
        nextTargetsPattern: "{item}｜次点: SEO上位 {kws}",
        seoHighPattern: "{item}｜SEO上位: {kws}",
        rppCandidatePattern: "{item}｜RPP候補: {kws}",
        seoActivePattern: "{item}｜SEO掲載中: {kws}",
        noKeywords: "キーワードなし",
        loading: "データ読み込み中...",
        fallback: "—"
    }
};

let typewriterRunning = false;
let currentProductIndex = 0;
let currentLineIndex = 0;

/**
 * Convert value to integer with null fallback
 */
function toInt(n) {
    if (typeof n === "number" && isFinite(n)) return Math.trunc(n);
    if (typeof n === "string" && n.trim() !== "" && !isNaN(Number(n))) return Math.trunc(Number(n));
    return null;
}

/**
 * Check if keyword has RPP ranking
 */
function hasRpp(k) {
    const r = toInt(k.rppRank);
    return r !== null && r >= 1;
}

/**
 * Check if keyword has SEO ranking
 */
function hasSeo(k) {
    const s = toInt(k.seoRank || k.organicRank);
    return s !== null && s >= 1;
}

/**
 * Sort keywords by RPP rank, then clicks, then name
 */
function byRpp(a, b) {
    const ar = toInt(a.rppRank) ?? Number.POSITIVE_INFINITY;
    const br = toInt(b.rppRank) ?? Number.POSITIVE_INFINITY;
    if (ar !== br) return ar - br;
    const ac = toInt(a.clicks) ?? -1;
    const bc = toInt(b.clicks) ?? -1;
    if (ac !== bc) return bc - ac;
    return (a.keyword || a.name || '').localeCompare(b.keyword || b.name || '', "ja");
}

/**
 * Sort keywords by SEO rank, then impressions, then name
 */
function bySeo(a, b) {
    const ar = toInt(a.seoRank || a.organicRank) ?? Number.POSITIVE_INFINITY;
    const br = toInt(b.seoRank || b.organicRank) ?? Number.POSITIVE_INFINITY;
    if (ar !== br) return ar - br;
    const ai = toInt(a.impressions) ?? -1;
    const bi = toInt(b.impressions) ?? -1;
    if (ai !== bi) return bi - ai;
    return (a.keyword || a.name || '').localeCompare(b.keyword || b.name || '', "ja");
}

/**
 * Sanitize keywords array
 */
function sanitizeKeywords(kws) {
    return (kws || [])
        .filter(k => k && typeof (k.keyword || k.name) === "string" && (k.keyword || k.name).trim().length > 0)
        .map(k => ({ ...k, name: (k.keyword || k.name).trim(), keyword: (k.keyword || k.name).trim() }));
}

/**
 * Clamp string to max length with ellipsis
 */
function clamp(s, max) {
    if (s.length <= max) return s;
    return s.slice(0, max - 3) + "...";
}

/**
 * Fill pattern with values
 */
function fill(pattern, values) {
    return pattern
        .replace("{item}", values.item)
        .replace("{total}", String(values.total))
        .replace("{rpp}", String(values.rpp))
        .replace("{kws}", values.kws);
}

/**
 * Render list line with keyword fitting logic
 */
function renderListLine(pattern, item, total, rpp, names, cfg) {
    const joiner = cfg.labels.joiner;
    const prefix = fill(pattern, { item, total, rpp, kws: "" });
    if (names.length === 0) {
        const line = clamp(prefix, cfg.MAX_LINE_LEN);
        return line ? { line, usedNames: [] } : null;
    }

    // Greedily drop the last keyword until within limit
    let used = names.slice();
    while (used.length > 0) {
        const kws = used.join(joiner);
        const full = prefix + kws;
        if (full.length <= cfg.MAX_LINE_LEN) return { line: full, usedNames: used };
        used.pop();
    }

    // If even one keyword overflows, show prefix only, clamped
    let fallbackLine = clamp(prefix, cfg.MAX_LINE_LEN);
    // Replace trailing colon with ellipsis if no keywords could fit
    if (fallbackLine.endsWith(': ')) {
        fallbackLine = fallbackLine.slice(0, -2) + '...';
    } else if (fallbackLine.endsWith(':')) {
        fallbackLine = fallbackLine.slice(0, -1) + '...';
    }
    return fallbackLine ? { line: fallbackLine, usedNames: [] } : null;
}

/**
 * Render plain line without keywords
 */
function renderPlainLine(pattern, item, total, rpp, cfg) {
    const s = fill(pattern, { item, total, rpp, kws: "" });
    return clamp(s, cfg.MAX_LINE_LEN);
}

/**
 * Pick names with exclusion logic
 */
function pickNames(list, limit, exclude) {
    const out = [];
    for (const k of list) {
        if (out.length >= limit) break;
        if (exclude.has(k.keyword || k.name)) continue;
        out.push(k.keyword || k.name);
    }
    return out;
}

/**
 * Build typewriter lines using advanced logic from TypeScript
 */
function buildTypewriter(product, cfg) {
    const config = cfg || typewriterConfig;
    const item = (product.itemIdUrl || "").trim() || config.labels.thisProduct;
    const keywords = sanitizeKeywords(product.keywords);
    if (product.loading) return { lines: [config.labels.loading], animation: config.animation };

    const total = toInt(product.totalKeywordCount) ?? keywords.length;
    const rppKeywords = keywords.filter(hasRpp).sort(byRpp);
    const rppCount = rppKeywords.length;

    const seoHigh = keywords
        .filter(k => !hasRpp(k) && hasSeo(k) && (toInt(k.seoRank || k.organicRank) ?? Number.MAX_SAFE_INTEGER) <= config.SEO_HIGH_MAX_RANK)
        .sort(bySeo);

    const seoOthers = keywords
        .filter(k => !hasRpp(k) && hasSeo(k) && (toInt(k.seoRank || k.organicRank) ?? Number.MAX_SAFE_INTEGER) > config.SEO_HIGH_MAX_RANK)
        .sort(bySeo);

    if (total === 0 || keywords.length === 0) {
        return { lines: [config.labels.noKeywords], animation: config.animation };
    }

    const lines = [];
    const usedNames = new Set();

    // A) Summary
    lines.push(renderPlainLine(config.labels.summaryPattern, item, total, rppCount, config));

    if (rppCount > 0) {
        // B1) RPP focus (up to 3)
        const namesB1 = pickNames(rppKeywords, 3, usedNames);
        const resB1 = renderListLine(config.labels.rppFocusPattern, item, total, rppCount, namesB1, config);
        if (resB1) {
            lines.push(resB1.line);
            resB1.usedNames.forEach(n => usedNames.add(n));
        }

        // B2) Next targets if SEO high exists (up to 2)
        if (seoHigh.length > 0) {
            const namesB2 = pickNames(seoHigh, 2, usedNames);
            const resB2 = renderListLine(config.labels.nextTargetsPattern, item, total, rppCount, namesB2, config);
            if (resB2) {
                lines.push(resB2.line);
                resB2.usedNames.forEach(n => usedNames.add(n));
            }
        }
    } else {
        // C1) SEO high (up to 3)
        if (seoHigh.length > 0) {
            const namesC1 = pickNames(seoHigh, 3, usedNames);
            const resC1 = renderListLine(config.labels.seoHighPattern, item, total, rppCount, namesC1, config);
            if (resC1) {
                lines.push(resC1.line);
                resC1.usedNames.forEach(n => usedNames.add(n));
            }

            // C2) RPP candidate (first of SEO high)
            const namesC2 = pickNames(seoHigh, 1, usedNames);
            const resC2 = renderListLine(config.labels.rppCandidatePattern, item, total, rppCount, namesC2, config);
            if (resC2) {
                lines.push(resC2.line);
                resC2.usedNames.forEach(n => usedNames.add(n));
            }
        } else if (seoOthers.length > 0) {
            // D) SEO active (up to 2)
            const namesD = pickNames(seoOthers, 2, usedNames);
            const resD = renderListLine(config.labels.seoActivePattern, item, total, rppCount, namesD, config);
            if (resD) {
                lines.push(resD.line);
                resD.usedNames.forEach(n => usedNames.add(n));
            }
        }
    }

    // Fail-safe
    const finalLines = lines.filter(s => typeof s === "string" && s.trim().length > 0);
    if (finalLines.length === 0) finalLines.push(config.labels.fallback);

    // Limit to 3 lines per cycle
    return { lines: finalLines.slice(0, 3), animation: config.animation };
}

/**
 * Load typewriter configuration from JSON file (legacy fallback)
 */
async function loadTypewriterConfig() {
    // Return the built-in advanced config
    return typewriterConfig;
}

/**
 * Crop title to specified length with proper handling of Japanese characters
 */
function cropTitle(title, maxLength = 70) {
    if (!title) return '';
    const cleanTitle = String(title).trim();
    
    if (cleanTitle.length <= maxLength) return cleanTitle;
    return cleanTitle.substring(0, maxLength) + '...';
}

/**
 * Transform SETTINGS.items to advanced typewriter format
 */
function buildTypewriterItems() {
    const items = SETTINGS.items || [];
    if (!items.length) return [];
    
    return items.map(item => {
        const keywords = Array.isArray(item.keywords) ? item.keywords : [];
        
        return {
            itemIdUrl: item.itemIdUrl || cropTitle(item.title) || typewriterConfig.labels.thisProduct,
            title: cropTitle(item.title),
            fullTitle: item.title || '',
            image: item.image || '',
            keywords: keywords,
            totalKeywordCount: keywords.length,
            loading: false
        };
    });
}

/**
 * Generate all recommendation lines for a product using advanced logic
 */
function generateRecommendationLines(product) {
    const result = buildTypewriter(product, typewriterConfig);
    return result.lines;
}

/**
 * Update product display chip
 */
function setProductChip(item) {
    const elImg = document.getElementById('heroTickImg');
    const elTitle = document.getElementById('heroTickTitle');
    const elCounts = document.getElementById('heroTickCounts');
    
    if (elImg) {
        if (item.image) {
            elImg.src = item.image;
            elImg.style.display = 'block';
        } else {
            elImg.style.display = 'none';
        }
        elImg.alt = item.fullTitle || 'item';
    }
    
    if (elTitle) {
        elTitle.textContent = item.title || '';
        elTitle.title = item.fullTitle || ''; // Tooltip for full title
    }
    
    if (elCounts) {
        elCounts.textContent = `KW ${item.total ?? '—'}｜RPP ${item.rpp ?? '—'}`;
    }
}

/**
 * Wait utility function
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Typewriter effect - types text character by character
 */
async function typewrite(element, text) {
    if (!element || !typewriterConfig) return;
    
    element.classList.remove('done');
    element.textContent = '';
    
    for (const char of text) {
        element.textContent += char;
        await wait(typewriterConfig.animation.typeSpeed);
    }
    
    element.classList.add('done');
}

/**
 * Erase text character by character
 */
async function erase(element) {
    if (!element || !typewriterConfig) return;
    
    element.classList.remove('done');
    const text = element.textContent;
    
    for (let i = text.length; i >= 0; i--) {
        element.textContent = text.slice(0, i);
        await wait(typewriterConfig.animation.eraseSpeed);
    }
}

/**
 * Main typewriter animation loop with advanced logic
 */
async function startTypewriterLoop() {
    if (typewriterRunning) return;
    typewriterRunning = true;
    
    const elTypeLine = document.getElementById('typeLine');
    if (!elTypeLine) return;
    
    const items = buildTypewriterItems();
    
    if (!items.length) {
        typewriterRunning = false;
        return;
    }
    
    while (typewriterRunning) {
        const item = items[currentProductIndex % items.length];
        
        // Update product chip
        setProductChip({
            title: item.title,
            fullTitle: item.fullTitle,
            image: item.image,
            total: item.totalKeywordCount,
            rpp: item.keywords ? item.keywords.filter(hasRpp).length : 0
        });
        
        // Generate all lines for this product
        const lines = generateRecommendationLines(item);
        
        // Cycle through all generated lines for this product
        for (const line of lines) {
            if (!typewriterRunning) break;
            
            await typewrite(elTypeLine, line);
            await wait(typewriterConfig.animation.holdDuration);
            
            await erase(elTypeLine);
            await wait(typewriterConfig.animation.gapDuration);
        }
        
        currentProductIndex++;
    }
}

/**
 * Stop typewriter animation
 */
function stopTypewriter() {
    typewriterRunning = false;
}

/**
 * Initialize typewriter system
 */
async function initTypewriter() {
    // Wait a moment for page to be ready
    setTimeout(async () => {
        await loadTypewriterConfig();
        startTypewriterLoop();
    }, 1000);
}

// Start typewriter when page is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initTypewriter();
} else {
    document.addEventListener('DOMContentLoaded', initTypewriter);
}

/* =============================================================================
   FAQ SYSTEM
   ============================================================================= */

let faqData = null;

/**
 * Load FAQ data from JSON file
 */
async function loadFAQData() {
    try {
        const response = await fetch('FAQ.json');
        if (!response.ok) throw new Error('Failed to load FAQ data');
        const data = await response.json();
        faqData = data.FAQ || [];
        return faqData;
    } catch (error) {
        console.error('Error loading FAQ data:', error);
        return [];
    }
}

/**
 * Render FAQ section for current language
 */
function renderFAQ() {
    const faqList = document.getElementById('faqList');
    if (!faqList || !faqData) return;
    
    const lang = langState === 'en' ? 'EN' : 'JP';
    const dict = I18N[langState] || I18N.ja;
    
    // Remove existing event listeners
    const oldFaqList = faqList.cloneNode(false);
    faqList.parentNode.replaceChild(oldFaqList, faqList);
    
    oldFaqList.innerHTML = faqData.map((item, index) => `
        <div class="faq-item" data-index="${index}">
            <button class="faq-question" type="button">
                <span>${item.Q[lang] || ''}</span>
                <span class="faq-arrow">▼</span>
            </button>
            <div class="faq-content">
                <div class="faq-answer">${item.A[lang] || ''}</div>
                ${item.Action && item.Action[lang] ? `
                    <div class="faq-action">
                        <div class="faq-action-label">${dict.faqAction}</div>
                        ${item.Action[lang]}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Add fresh click handlers for FAQ items
    oldFaqList.addEventListener('click', (e) => {
        const button = e.target.closest('.faq-question');
        if (!button) return;
        
        const item = button.closest('.faq-item');
        const isExpanded = item.classList.contains('expanded');
        
        // Close all other items
        oldFaqList.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('expanded');
            }
        });
        
        // Toggle current item
        item.classList.toggle('expanded', !isExpanded);
    });
}

/**
 * Initialize FAQ system
 */
async function initFAQ() {
    await loadFAQData();
    renderFAQ();
}

// Initialize FAQ when page loads
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initFAQ();
} else {
    document.addEventListener('DOMContentLoaded', initFAQ);
}