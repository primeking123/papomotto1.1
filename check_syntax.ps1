$c = [IO.File]::ReadAllText("C:\Users\MALINGA MOMENTS\Desktop\project papomotto\app.js")
$open = [regex]::Matches($c, '[^{]') | Measure-Object
Write-Output $open.Count
