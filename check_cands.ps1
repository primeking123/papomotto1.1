# Test candidate replacements for all broken IDs
$candidates = @(
    # P0 — Pan-Seared Scallops (id 174)
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # P1 — Espresso Martini (id 311)
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551024715-2f3292f4e65e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # P2 — Strawberry Daiquiri (id 381)
    "https://images.unsplash.com/photo-1560512823-82997fb26336?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    # P3 — Cappuccino (id 756)
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # P4 — Sparkling Water (id 727)
    "https://images.unsplash.com/photo-1548834416-512d96bc45dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1603398938373-e54da818916e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # P5 — Double Espresso (id 765)
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # P6 — Mini Hot Dog (id 542)
    "https://images.unsplash.com/photo-1612392062126-2e3f9d8f2d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529193591184-b1d58069edd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1561758033-48e526bf730b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # P7 — Green Detox / Citrus Power Smoothie (id 421 / 471)
    "https://images.unsplash.com/photo-1610970881699-44a5587caa90?w=800&q=80",
    "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # P8 — New York Cheesecake (id 630)
    "https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=800&q=80",
    "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
)
foreach ($u in $candidates) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 8
        Write-Output "OK: $u"
    } catch {
        $msg = $_.Exception.Message
        Write-Output "FAIL: $u  -- $msg"
    }
}
