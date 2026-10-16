# NEXORA: Windows .exe and Android .apk

Easiest (nothing to install): push this folder to a GitHub repo, open Actions > "Build apps" > Run workflow,
then download NEXORA-windows-exe and NEXORA-android-apk from the finished run.

Local Windows exe (Node 20): npm install && npm run win  ->  dist/*.exe
Local APK (Node 20, JDK 17, Android SDK):
  npm install && npm run prep && npx cap add android && npx cap sync android
  cd android && ./gradlew assembleDebug   ->  android/app/build/outputs/apk/debug/app-debug.apk
Install the APK by opening it on the phone (allow "install unknown apps").
