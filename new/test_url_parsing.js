// Simulate the URL parsing logic

// Test Case 1: /?my-shop_abc-def-ghi
console.log("=== Test 1: /?my-shop_abc-def-ghi ===");
let shop_id_url_default = 'z-craft';
let shop_id_url;
let fullParam = 'my-shop_abc-def-ghi';

if (fullParam && fullParam.includes('_')) {
    const parts = fullParam.split('_');
    shop_id_url = parts[0];
    console.log("Parsed from underscore format:", shop_id_url);
} else {
    shop_id_url = 'z-craft'; // This is what line 235 does
    console.log("Fallback to default:", shop_id_url);
}

// Test Case 2: No parameters
console.log("\n=== Test 2: No URL parameters ===");
shop_id_url = undefined;
fullParam = '';

if (fullParam && fullParam.includes('_')) {
    const parts = fullParam.split('_');
    shop_id_url = parts[0];
    console.log("Parsed from underscore format:", shop_id_url);
} else {
    shop_id_url = 'z-craft';
    console.log("Fallback to default:", shop_id_url);
}

// Test Case 3: ?shop_id_url=other-shop&hash=xyz
console.log("\n=== Test 3: ?shop_id_url=other-shop&hash=xyz ===");
shop_id_url = undefined;
fullParam = 'shop_id_url=other-shop&hash=xyz';
const mockUrlParams = new URLSearchParams(fullParam);

if (fullParam && fullParam.includes('_')) {
    const parts = fullParam.split('_');
    shop_id_url = parts[0];
    console.log("Parsed from underscore format:", shop_id_url);
    console.log("WARNING: This will split on wrong underscore!");
} else {
    shop_id_url = mockUrlParams.get('shop_id_url') || 'z-craft';
    console.log("Parsed from shop_id_url param:", shop_id_url);
}
