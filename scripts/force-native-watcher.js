// Comparison only: preload with NODE_OPTIONS="--require ./scripts/force-native-watcher.js"
// to make Metro pick NativeWatcher (one recursive fs.watch) instead of FallbackWatcher on Windows.
const NativeWatcher = require("@expo/metro-file-map/build/watchers/NativeWatcher").default;
NativeWatcher.isSupported = () => true;
