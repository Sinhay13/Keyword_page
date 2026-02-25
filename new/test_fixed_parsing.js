// Test the FIXED URL parsing logic

function testParsing(testName, urlSearch) {
    console.log(`\n=== ${testName} ===`);
    console.log(`URL: ${urlSearch}`);
    
    const urlParams = new URLSearchParams(urlSearch);
    const fullParam = urlSearch.replace(/^\?/, ''); // Remove leading ?
    
    let shop_id_url;
    let hash;
    const shop_id_url_default = 'z-craft';
    const hash_default = '5sy5a7-13xuq3p-15bsqkk';
    
    // Check if this is the combined format
    const isCombinedFormat = fullParam && fullParam.includes('_') && !fullParam.includes('=');
    
    console.log(`Is Combined Format: ${isCombinedFormat}`);
    
    if (isCombinedFormat) {
        // Parse combined format: /?shopname_hash
        const parts = fullParam.split('_');
        if (parts.length >= 2) {
            shop_id_url = parts[0];
            hash = parts.slice(1).join('_');
        } else {
            shop_id_url = shop_id_url_default;
            hash = hash_default;
        }
    } else {
        // Parse parameter format
        const paramShopIdUrl = urlParams.get('shop_id_url');
        const paramShopId = urlParams.get('shop_id');
        const paramHash = urlParams.get('hash');
        
        shop_id_url = paramShopIdUrl || paramShopId || shop_id_url_default;
        hash = paramHash || hash_default;
    }
    
    console.log(`Result: shop_id_url="${shop_id_url}", hash="${hash}"`);
}

// Test all formats
testParsing("Test 1: Combined format", "my-shop_abc-def-ghi");
testParsing("Test 2: Parameter format with shop_id_url", "shop_id_url=other-shop&hash=xyz-123");
testParsing("Test 3: Parameter format with shop_id", "shop_id=third-shop&hash=abc-456");
testParsing("Test 4: No parameters (should use defaults)", "");
testParsing("Test 5: Only shop_id_url", "shop_id_url=solo-shop");
testParsing("Test 6: Complex combined format", "complex-shop-name_part1-part2_part3");
