# Metro watch mode startup on Windows

A blank app from `npx create-expo-app@latest --template blank` (SDK 57). The only additions are two scripts:

- `scripts/create-dirs.js` creates N empty directories under `many-dirs/`.
- `scripts/force-native-watcher.js` is for comparison only. Preloaded, it makes `NativeWatcher.isSupported()` return `true` so Metro picks `NativeWatcher` on Windows.

## Steps (Windows, PowerShell)

```powershell
npm install
node scripts/create-dirs.js 120000
npx expo start
```

The CLI stays at "Starting Metro Bundler" while `FallbackWatcher` opens one `fs.watch` handle per directory.

For comparison, with the same tree:

```powershell
# watch mode off
$env:CI = "1"; npx expo start; Remove-Item Env:CI

# NativeWatcher forced
$env:NODE_OPTIONS = "--require ./scripts/force-native-watcher.js"; npx expo start; Remove-Item Env:NODE_OPTIONS
```

`node scripts/create-dirs.js 0` removes the directories again.
