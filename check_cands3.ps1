# Test more specific replacements for Mini Hot Dog + Sparkling Water + Strawberry Daiquiri
$candidates = @(
    # Strawberry Daiquiri replacement  
    "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # Mini Hot Dog replacements
    "https://images.unsplash.com/photo-1529193591184-b1d58069edd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1612392062126-2e3f9d8f2d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1561758033-48e526bf730b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1554167813-d6ab3f3558d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583454110551-6128b3661d19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    # Sparkling Water replacements
    "https://images.unsplash.com/photo-1548834416-512d96bc45dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1603398938373-e54da818916e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1548834416-c4e06e196873?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583267746897-53cf47a8ce8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
)
foreach ($u in $candidates) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 8
        Write-Output "OK: $u"
    } catch {
        Write-Output "FAIL"
    }
}
