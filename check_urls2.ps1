# Test with full-size params like the actual app uses
$urls = @(
    "https://images.unsplash.com/photo-1532636875304-0c8fe1197e14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
)
$Sex = @{}
foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 10
        Write-Output "$($r.StatusCode): $u"
    } catch {
        $msg = $_.Exception.Message
        if ($msg.Length -gt 100) { $msg = $msg.Substring(0, 100) }
        Write-Output "ERR ($msg): $u"
    }
}
