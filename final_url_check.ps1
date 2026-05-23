$content = [IO.File]::ReadAllText("C:\Users\MALINGA MOMENTS\Desktop\project papomotto\app.js")

$pattern = 'https://images\.unsplash\.com/photo-[a-f0-9-]+\?ixlib=rb-4\.0\.3&auto=format&fit=crop&w=800&q=80'
$pattern2 = 'https://images\.unsplash\.com/photo-[a-f0-9-]+\?w=50&q=1'
$pattern3 = 'https://images\.unsplash\.com/photo-[a-f0-9-]+\?w=800&q=80'

$urls = @()
$urls += [regex]::Matches($content, $pattern) | ForEach-Object { $_.Value } | Sort-Object -Unique
$urls += [regex]::Matches($content, $pattern2) | ForEach-Object { $_.Value } | Sort-Object -Unique
$urls += [regex]::Matches($content, $pattern3) | ForEach-Object { $_.Value } | Sort-Object -Unique
$urls = $urls | Sort-Object -Unique

Write-Output "Checking $($urls.Count) unique Unsplash URLs..."
$failCount = 0
foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 8
        if ($r.StatusCode -ne 200) {
            Write-Output "HTTP $($r.StatusCode): $u"
            $failCount++
        }
    } catch {
        Write-Output "FAIL: $u"
        $failCount++
    }
}
Write-Output ""
if ($failCount -eq 0) {
    Write-Output "ALL $($urls.Count) URLs are healthy (HTTP 200)."
} else {
    Write-Output "WARNING: $failCount broken URLs remain."
}
