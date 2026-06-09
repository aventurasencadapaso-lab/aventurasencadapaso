$rootPath = "c:\Users\Usuario\Desktop\Paginas web\Pagina web aventuras"

$files = Get-ChildItem -Path $rootPath -Filter "*.html" -File | 
  Where-Object { $_.Name -notmatch "borrador|planempresas|plantilla" }

foreach ($file in $files) {
  $content = Get-Content -Path $file.FullName -Raw
  
  $newContent = $content -replace 'family=Roboto:wght@400;500;700&family=Orbitron:wght@700;900', 'family=Orbitron:wght@700;900'
  $newContent = $newContent -replace "font-family:\s*'Roboto',\s*sans-serif;", "font-family: Arial, Helvetica, sans-serif;"
  
  Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
  Write-Host "✓ $($file.Name)"
}

Write-Host "`nActualizado a Arial"
