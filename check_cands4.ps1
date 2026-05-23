# More specific candidates
$candidates = @(
    # Mini Hot Dog – more candidate IDs
    "https://images.unsplash.com/photo-1529193591184-b1d58069edd4?w=800&q=80",
    "https://images.unsplash.com/photo-1612392062126-2e3f9d8f2d5e?w=800&q=80",
    "https://images.unsplash.com/photo-1561758033-48e526bf730b?w=800&q=80",
    "https://images.unsplash.com/photo-1554167813-d6ab3f3558d7?w=800&q=80",
    "https://images.unsplash.com/photo-1583454110551-6128b3661d19?w=800&q=80",
    "https://images.unsplash.com/photo-1549541704-282c5833a8b5?w=800&q=80",
    "https://images.unsplash.com/photo-1513354874702-3f4c7acb6fba?w=800&q=80",
    "https://images.unsplash.com/photo-1559715745-e1b33cf42e07?w=800&q=80",
    # Sparkling Water
    "https://images.unsplash.com/photo-1548834416-512d96bc45dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1603398938373-e54da818916e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559825260-1d31fe3a2846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # Garlic Herb Bread replacement
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504367357024-007b5e94d359?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
)
foreach ($u in $candidates) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 8
        Write-Output "OK: $u"
    } catch {
        Write-Output "FAIL"
    }
}
