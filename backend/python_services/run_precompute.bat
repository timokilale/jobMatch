@echo off
cd /d "%~dp0"
echo Starting forecast pre-computation...
python precompute_forecasts.py
if %ERRORLEVEL% EQU 0 (
    echo Forecast pre-computation completed successfully
) else (
    echo Forecast pre-computation failed
)
pause