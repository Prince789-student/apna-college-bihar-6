@echo off
setlocal

:: Ensure we use the JDK we installed
set "JAVA_HOME=%JAVA_HOME%"
set "PATH=%JAVA_HOME%\bin;%PATH%"

:: Remove old Gradle wrapper cache
if exist .gradle rmdir /s /q .gradle
if exist gradle\wrapper\gradle-wrapper.jar del /f /q gradle\wrapper\gradle-wrapper.jar

:: Run the build
gradlew.bat clean assembleDebug --no-daemon --stacktrace
endlocal
