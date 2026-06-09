$root = 'c:\Users\Usuario\Desktop\Paginas web\Pagina web aventuras'
$linkSnippet = @'
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet">
'@
$updated = @()
Get-ChildItem -Path $root -File -Filter *.html | ForEach-Object {
  $path = $_.FullName
  $text = Get-Content -Raw -Path $path
  $new = $text
  if ($new -notmatch 'fonts\.googleapis\.com/css2\?family=Orbitron') {
    if ($new -match '(?s)(<link[^>]+font-awesome[^>]+>)') {
      $new = [regex]::Replace($new, '(?s)(<link[^>]+font-awesome[^>]+>)', '$1' + "`n$linkSnippet", 1)
    } elseif ($new -match '(?s)(<link[^>]+href="style\.css"[^>]*>)') {
      $new = [regex]::Replace($new, '(?s)(<link[^>]+href="style\.css"[^>]*>)', '$1' + "`n$linkSnippet", 1)
    } elseif ($new -match '(?s)</head>') {
      $new = [regex]::Replace($new, '(?s)</head>', "$linkSnippet</head>", 1)
    }
  }
  $new = $new -replace 'font-family\s*:\s*Arial,\s*Helvetica,\s*sans-serif;', "font-family: 'Orbitron', sans-serif;"
  $new = $new -replace 'font-family\s*:\s*Arial,\s*sans-serif;', "font-family: 'Orbitron', sans-serif;"
  if ($new -ne $text) {
    Set-Content -Path $path -Value $new -Encoding UTF8
    $updated += $path
  }
}
$style = Join-Path $root 'style.css'
if (Test-Path $style) {
  $text = Get-Content -Raw -Path $style
  $new = $text
  if ($new -notmatch "font-family:\s*'Orbitron'") {
    $new = ":root {`n  font-family: 'Orbitron', sans-serif;`n}`n`n" + $new
  }
  $new = $new -replace 'font-family\s*:\s*Arial,\s*Helvetica,\s*sans-serif;', "font-family: 'Orbitron', sans-serif;"
  $new = $new -replace 'font-family\s*:\s*Arial,\s*sans-serif;', "font-family: 'Orbitron', sans-serif;"
  if ($new -ne $text) { Set-Content -Path $style -Value $new -Encoding UTF8; $updated += $style }
}
$buscarCss = Join-Path $root 'buscador-aventuras.css'
if (Test-Path $buscarCss) {
  $text = Get-Content -Raw -Path $buscarCss
  $new = $text -replace 'font-family\s*:\s*Arial,\s*sans-serif;', "font-family: 'Orbitron', sans-serif;"
  if ($new -ne $text) { Set-Content -Path $buscarCss -Value $new -Encoding UTF8; $updated += $buscarCss }
}
Write-Output "updated: $($updated -join ', ')"
