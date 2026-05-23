# Extract ALL unique image URLs from app.js and test them with full URLs
$content = [IO.File]::ReadAllText("C:\Users\MALINGA MOMENTS\Desktop\project papomotto\app.js")

# Match photo-{id} followed by ixlib=rb string (the actual URL format used in app.js)
$pattern = 'https://images\.unsplash\.com/photo-[a-f0-9-]+\?ixlib=rb-4\.0\.3&auto=format&fit=crop&w=800&q=80'
$matches = [regex]::Matches($content, $pattern)
$urls = $matches | ForEach-Object { $_.Value } | Sort-Object -Unique

# Additionally match w=50&q=1 format
$pattern2 = 'https://images\.unsplash\.com/photo-[a-f0-9-]+\?w=50&q=1'
$matches2 = [regex]::Matches($content, $pattern2)
$urls2 = $matches2 | ForEach-Object { $_.Value } | Sort-Object -Unique

# Also match w=800&q=80 format (different variant)
$pattern3 = 'https://images\.unsplash\.com/photo-[a-f0-9-]+\?w=800&q=80'
$matches3 = [regex]::Matches($content, $pattern3)
$urls3 = $matches3 | ForEach-Object { $_.Value } | Sort-Object -Unique

$allUrls = $urls + $urls2 + $urls3 | Sort-Object -Unique
Write-Output "Found $($allUrls.Count) unique Unsplash URLs"
Write-Output ""

$failList = @()
foreach ($u in $allUrls) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 8
        if ($r.StatusCode -ne 200) {
            Write-Output "HTTP $($r.StatusCode): $u"
            $failList += $u
        }
    } catch {
        Write-Output "FAIL: $u"
        $failList += $u
    }
}
Write-Output ""
Write-Output "=== FAILED URLs ($($failList.Count)) ==="
foreach ($f in $failList) { Write-Output $f }
