$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$target = Join-Path $root 'para-subir'
if (-Not (Test-Path $target)) {
    New-Item -ItemType Directory -Path $target | Out-Null
}
$files = Get-ChildItem -Path $root -Filter *.html -File | Where-Object { $_.Name -ne '1index.html' }
foreach ($file in $files) {
    Copy-Item -Path $file.FullName -Destination $target -Force
}
$subdirs = @('css','js')
foreach ($subdir in $subdirs) {
    $sourceDir = Join-Path $root $subdir
    $destDir = Join-Path $target $subdir
    if (Test-Path $sourceDir) {
        if (-Not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir | Out-Null
        }
        Copy-Item -Path (Join-Path $sourceDir '*') -Destination $destDir -Recurse -Force
    }
}
$assets = @(
    'logo-aventuras.png',
    'compartir.png',
    'instagram.png',
    'tiktok.png',
    'youtube.png',
    'fondo-aventuras.jpg',
    'Natura-Xtreme-Tenerife.jpg',
    'empresas_actividades_gran_canaria.pdf',
    'empresas_actividades_tenerife-1.pdf',
    'resumen_tenerife.pdf'
)
foreach ($asset in $assets) {
    $source = Join-Path $root $asset
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $target -Force
    }
}
Write-Host "El paquete de despliegue se ha copiado en: $target"