@echo off
powershell -WindowStyle Hidden -Command "Start-Process 'node' -ArgumentList '%~dp0presence.js' -WindowStyle Hidden"
exit