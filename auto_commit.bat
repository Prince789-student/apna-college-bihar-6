@echo off
echo ==============================================
echo =       Edu Platform Auto Commit Script      =
echo ==============================================
echo.
echo Is script ko background list mein minimize chhod dein.
echo Yeh har 10 minute mein automatic code save (commit aur push) karega.
echo.

:loop
echo [%time%] Checking for changes...
git add .
git commit -m "auto-commit: automated code backup"
git push
echo [%time%] Done. Waiting for 10 minutes...
timeout /t 600 /nobreak > NUL
goto loop
