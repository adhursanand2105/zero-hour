export function StatusBar() {
  return (
    <div className="status-bar">
      <div className="flex items-center gap-1">
        <span>9:47</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs">🔒</span>
        <span className="text-xs">📶</span>
        <span className="text-xs">📡</span>
        <span className="text-xs">🔋</span>
        <div className="battery-icon"></div>
        <span className="text-sm">75%</span>
      </div>
    </div>
  );
}
