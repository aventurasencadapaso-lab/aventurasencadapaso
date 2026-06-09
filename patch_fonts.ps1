$htmlFiles = Get-ChildItem -Path . -Recurse -Filter *.html | Select-Object -ExpandProperty FullName
$linkSnippet = @'
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet">
'@
$updated = @()
foreach ($file in $htmlFiles) {
  $content = Get-Content -Raw -Path $file
  $new = $content
  if ($new -notmatch 'fonts\.googleapis\.com/css2\?family=Orbitron') {
    if ($new -match '(?s)(<link[^>]*href="style\.css"[^>]*>)') {
      $new = $new -replace '(?s)(<link[^>]*href="style\.css"[^>]*>)', '$1' + "`n$linkSnippet"
    }
  }
  $new = $new -replace 'font-family\s*:\s*Arial,\s*Helvetica,\s*sans-serif;', 'font-family: ''Orbitron'', sans-serif;'
  if ($new -ne $content) {
    Set-Content -Path $file -Value $new -Encoding UTF8
    $updated += $file
  }
}
Write-Output "updated: $($updated -join ', ')"
