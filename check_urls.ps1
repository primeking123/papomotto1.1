$urls = @(
    "https://images.unsplash.com/photo-1532636875304-0c8fe1197e14?w=50&q=1",
    "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=50&q=1",
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=50&q=1",
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=50&q=1",
    "https://images.unsplash.com/photo-1553618551-fba689030290?w=50&q=1",
    "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=50&q=1",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=50&q=1",
    "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=50&q=1",
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=50&q=1",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=50&q=1",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=50&q=1",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=50&q=1",
    "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=50&q=1",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=50&q=1",
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=50&q=1",
    "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=50&q=1",
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=50&q=1"
)
foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 10
        Write-Output "$($r.StatusCode): $u"
    } catch {
        Write-Output "FAIL: $u"
    }
}
