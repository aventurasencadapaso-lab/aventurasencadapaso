$rootPath = "c:\Users\Usuario\Desktop\Paginas web\Pagina web aventuras"

# Buscar todos los HTML files que todavía tengan solo Orbitron
$filesToUpdate = Get-ChildItem -Path $rootPath -Filter "*.html" -File -Recurse | 
  Where-Object { 
    $content = Get-Content -Path $_.FullName -Raw
    $content -match 'family=Orbitron:wght@700;900&display=swap"\s*rel="stylesheet">' -and 
    $content -notmatch 'family=Roboto'
  }

Write-Host "Encontrados $($filesToUpdate.Count) archivos para actualizar"

foreach ($file in $filesToUpdate) {
  $content = Get-Content -Path $file.FullName -Raw
  $newContent = $content -replace 'family=Orbitron:wght@700;900&display=swap', 'family=Roboto:wght@400;500;700&family=Orbitron:wght@700;900&display=swap'
  Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
  Write-Host "✓ $($file.Name)"
}

Write-Host "`nActualización completada"
