<#
PowerShell helper to create an isolated API venv, install dependencies,
start the FastAPI backend, and then start the Next.js frontend.
Run from repository root with:
  powershell -ExecutionPolicy Bypass -File scripts\start-dev.ps1
#>

$repoRoot = (Resolve-Path "$PSScriptRoot\..").Path
$apiDir = Join-Path $repoRoot 'apps\api'
$apiVenv = Join-Path $apiDir '.venv'

if (-not (Test-Path $apiVenv)) {
    Write-Host "Creating API virtual environment at $apiVenv"
    python -m venv $apiVenv
}

Write-Host "Activating API venv"
& "$apiVenv\Scripts\Activate.ps1"

Write-Host "Upgrading pip and installing API requirements"
python -m pip install --upgrade pip
pip install -r "$apiDir\requirements.txt" uvicorn

Write-Host "Starting FastAPI (uvicorn) in background"
# Ensure port 8000 is free (stop any process using it)
$existingApi = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($existingApi) {
    foreach ($proc in $existingApi) {
        try { Stop-Process -Id $proc -Force -ErrorAction SilentlyContinue } catch {}
    }
}
Start-Process -FilePath "$apiVenv\Scripts\python.exe" -ArgumentList '-m uvicorn app.main:app --host 127.0.0.1 --port 8000' -WorkingDirectory $apiDir -NoNewWindow
Start-Sleep -Seconds 2

# Ensure port 3000 is free (stop any process using it)
$existing = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($existing) {
    foreach ($proc in $existing) {
        try { Stop-Process -Id $proc -Force -ErrorAction SilentlyContinue } catch {}
    }
}

# Start frontend
$webDir = Join-Path $repoRoot 'apps\web'
Push-Location $webDir
$env:NEXT_PUBLIC_API_URL = 'http://127.0.0.1:8000'

Write-Host "Installing frontend dependencies (if needed)"
npm install

Write-Host "Starting Next.js dev server"
npm run dev

Pop-Location
