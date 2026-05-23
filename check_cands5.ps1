# Final candidate pool for remaining broken URLs
$candidates = @(
    # Mini Hot Dog - final attempts
    "https://images.unsplash.com/photo-1529193591184-b1d58069edd4?w=800&q=80",
    "https://images.unsplash.com/photo-1554167813-d6ab3f3558d7?w=800&q=80",
    "https://images.unsplash.com/photo-1513354874702-3f4c7acb6fba?w=800&q=80",
    "https://images.unsplash.com/photo-1559715745-e1b33cf42e07?w=800&q=80",
    "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800&q=80",
    "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    "https://images.unsplash.com/photo-1541594909841-1070eed7ef3f?w=800&q=80",
    "https://images.unsplash.com/photo-1606786899357-a3372b2a86e8?w=800&q=80",
    # Olive Oil for Caprese Salad (photo-1592417817098-8f3d6eb19675 broken)
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
)
foreach ($u in $candidates) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 8
        Write-Output "OK: $u"
    } catch {
        Write-Output "FAIL"
    }
}
