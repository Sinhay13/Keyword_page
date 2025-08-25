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
        navProcess: 'Process', 
        navSample: 'Sample', 
        ctaTop: 'Get Your Free Sample',
        preparedLabel: 'Prepared for', 
        promoText: 'NEW • Free AI analysis for a limited time',
        heroTitle: 'Rakuten Keyword Optimization Report', 
        heroSubtitle: 'See RPP vs organic coverage and current ranks. Get a concise PDF with next actions.',
        ctaPrimary: 'Get Your Free Sample', 
        samplePdfBtn: 'View Sample PDF',
        tag1: 'Privacy-safe', 
        tag2: 'Actionable', 
        tag3: 'Rakuten-focused',
        slideCaption: 'Sample preview. Full PDF includes keyword tables and recommendations.',
        b1t: 'Identify high-impact keywords', 
        b1d: 'Spot terms with RPP or organic gaps.',
        b2t: 'Benchmark and gaps', 
        b2d: 'See missed opportunities vs. market.',
        b3t: 'Clear next actions', 
        b3d: 'Concrete edits to titles and related keywords.',
        oppTitle: 'Choose an item', 
        oppSub: 'Click a product to update the keywords on the right',
        kwTitle: 'Top keywords snapshot', 
        kwSub: 'RPP rank, organic rank, and time checked', 
        lockNote: 'Sample view: some keywords and ranks are blurred. Submit the form to receive the full report by email.',
        thKeyword: 'Keyword', 
        thRpp: 'RPP Rank', 
        thOrg: 'Organic Rank', 
        thChecked: 'Checked', 
        thAction: 'Action',
        aiTitle: 'AI Action Plan <span class="badge">NEW</span>', 
        aiSub: 'Per-item recommendations generated from your keyword report. Specific title edits and RPP adds.',
        shopsTitle: 'Examples from Major Shops', 
        shopsSub: 'See sample keyword reports from successful Rakuten stores across different industries.',
        s1t: 'Analyze', 
        s1d: 'We assess RPP and organic ranks.', 
        s2t: 'Report', 
        s2d: 'You receive a PDF with insights and actions.', 
        s3t: 'AI analysis', 
        s3d: 'You receive an AI action plan with title and RPP suggestions.',
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
        footProcess: 'Process', 
        footSample: 'Sample', 
        samplePdfLink: 'Sample PDF',
        viewSampleReport: 'View Sample Report',
        langButton: '日本語'
    },
    ja: {
        navProcess: '進め方', 
        navSample: 'サンプル', 
        ctaTop: '無料サンプルを申し込む',
        preparedLabel: 'ご提供先', 
        promoText: 'NEW｜期間限定：無料AI分析付き',
        heroTitle: '楽天キーワード最適化レポート', 
        heroSubtitle: 'RPPと自然検索の掲載状況・順位を可視化。次にやるべき施策を簡潔にまとめたPDFをお届けします。',
        ctaPrimary: '無料サンプルを申し込む', 
        samplePdfBtn: 'サンプルPDFを見る',
        tag1: 'プライバシー配慮', 
        tag2: '実行可能', 
        tag3: '楽天特化',
        slideCaption: 'プレビュー。完全版PDFにはキーワード表と提案が含まれます。',
        b1t: '効果の高いキーワードを特定', 
        b1d: 'RPPまたは自然検索で弱い箇所を発見。',
        b2t: '市場との比較・ギャップ', 
        b2d: '見逃している機会を把握。',
        b3t: '次のアクションを明確化', 
        b3d: '商品名・関連KW・RPPの具体的な修正案。',
        oppTitle: '商品を選択', 
        oppSub: 'クリックで右側のキーワードが切り替わります',
        kwTitle: '主要キーワードのスナップショット', 
        kwSub: 'RPP順位・自然順位・計測時刻', 
        lockNote: 'サンプル表示：一部のキーワードや順位は伏せています。フォーム送信で完全版PDFをメールでお送りします。',
        thKeyword: 'キーワード', 
        thRpp: 'RPP順位', 
        thOrg: '自然順位', 
        thChecked: '計測時刻', 
        thAction: 'アクション',
        aiTitle: 'AIアクションプラン <span class="badge">NEW</span>', 
        aiSub: 'レポートを元に商品ごとのタイトル修正・RPP追加案を自動生成。',
        shopsTitle: '大手ショップの事例', 
        shopsSub: '様々な業界の成功している楽天ショップのキーワードレポートサンプルをご覧ください。',
        s1t: '分析', 
        s1d: 'RPPと自然順位を評価します。', 
        s2t: 'レポート', 
        s2d: '示唆とアクションをPDFでお届けします。', 
        s3t: 'AI分析', 
        s3d: 'タイトルとRPPの具体的ToDoを提示します。',
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
        footProcess: '進め方', 
        footSample: 'サンプル', 
        samplePdfLink: 'サンプルPDF',
        viewSampleReport: 'サンプルレポートを見る',
        langButton: 'EN'
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
        'labRms', 'labNotes', 'agreeText', 'submitBtn', 'footProcess', 'footSample', 'samplePdfLink'
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

// Default application settings - using zhong sample data.  

// Get shop_hash directly from URL query string
const queryString = window.location.search.replace('?', '');
let hash, shop_id_url;

if (queryString) {
    const parts = queryString.split('_');
    shop_id_url = parts[0];
    hash = parts.slice(1).join('_');
} else {
    // Fallback defaults
    shop_id_url = 'solairo';
    hash = '11fd69c-147r6ap-1479772';
}

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
    org: ['seo', 'organic', 'organic_rank', 'org', 'rank', '自然順位', '自然'],
    checked: ['checked', 'date', 'timestamp', 'time', '計測時刻', '取得日時', '計測日時', '取得時刻'],
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

/**
 * Render statistics summary
 */
function renderStats() {
    const slides = Number(SETTINGS.slides != null ? SETTINGS.slides : 0);
    const kwc = Number(SETTINGS.kwCount != null ? SETTINGS.kwCount : 0);
    const rppc = Number(SETTINGS.rppCount != null ? SETTINGS.rppCount : 0);
    const pct = (kwc > 0) ? Math.round(100 * rppc / kwc) : null;
    renderStatsSentence();
}

/**
 * Render the statistics sentence in the stats card
 */
function renderStatsSentence() {
    const hostCard = document.getElementById('statsSentence');
    const txt = document.getElementById('statsSentenceText');
    if (!hostCard || !txt) return;
    
    const slides = Number(SETTINGS.slides || 0);
    const kw = Number(SETTINGS.kwCount || 0);
    const rpp = Number(SETTINGS.rppCount || 0);
    const pct = (kw > 0) ? Math.round(100 * rpp / kw) : 0;
    let date = fmtJST(SETTINGS.updatedAt || '');
    const fmt = n => new Intl.NumberFormat((typeof langState !== 'undefined' && langState === 'en') ? 'en-US' : 'ja-JP').format(n);
    
    const jp = `全 <span class="num">${fmt(slides)}</span> 商品で <span class="num">${fmt(kw)}</span> 件のキーワードを分析。RPP順位あり <span class="num">${fmt(rpp)}</span> 件（RPP率 <span class="num">${fmt(pct)}</span>%）。<span class="muted">最終更新 ${date} JST</span>`;
    const en = `Analyzed <span class="num">${fmt(kw)}</span> keywords across <span class="num">${fmt(slides)}</span> items. <span class="num">${fmt(rpp)}</span> with RPP ranks (RPP rate <span class="num">${fmt(pct)}</span>%). <span class="muted">Updated ${date} JST</span>`;
    
    txt.innerHTML = (typeof langState !== 'undefined' && langState === 'en') ? en : jp;
    try {
        document.documentElement.setAttribute('lang', (typeof langState !== 'undefined' && langState === 'en') ? 'en' : 'ja');
    } catch (_) { }
    hostCard.style.display = 'block';
}

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
                organicRank: pick(rr, H.org) || findContains(rr, ['自然順位', '自然', 'organic', 'seo']),
                checkedAt: pick(rr, H.checked) || findContains(rr, ['計測', '取得', '時刻', 'timestamp', 'date', 'time'])
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
        renderStats();
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

applyI18n(typeof langState !== 'undefined' ? langState : 'ja');
renderStats();
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

            renderStats();
            if (data.aiActions) renderAiActions(data.aiActions);
        } catch (e) {
            renderStats();
        }
    } else {
        renderStats();
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
    renderStats();
    const it = (SETTINGS.items || [])[CURRENT_IDX] || {};
    const kw = Array.isArray(it.keywords) ? it.keywords : SETTINGS.topKeywords;
    renderKeywords(kw || []);
    renderAiActions(SETTINGS.aiActions);
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

        // HubSpot prefill: 店舗名／URL with shop_id_url (editable, prefilled)
        function prefillHS() {
            var root = document.querySelector('.hs-form-frame');
            if (!root) return;
            var shopId = (window.shop_id_url || (window.SETTINGS && SETTINGS.shopIdUrl) || '');
            if (!shopId) return;
            var inputs = root.querySelectorAll('input');
            inputs.forEach(function(inp) {
                var meta = (inp.getAttribute('name') || '') + (inp.getAttribute('aria-label') || '') + (inp.getAttribute('placeholder') || '');
                if (/店舗名|URL|shop_id|shop|ショップ/i.test(meta)) {
                    if (!inp.value) {
                        inp.value = shopId;
                        inp.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }
            });
        }
        
        window.addEventListener('message', function(ev) {
            try {
                if (ev && ev.data && ev.data.type === 'hsFormCallback' && ev.data.eventName === 'onFormReady') {
                    setTimeout(prefillHS, 150);
                }
            } catch (e) { }
        });
        
        // Retry loop in case the form mounts late
        var tries = 0, t = setInterval(function() {
            tries++;
            prefillHS();
            if (tries > 80) clearInterval(t);
        }, 100);
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
        const response = await fetch('35_shops.json');
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