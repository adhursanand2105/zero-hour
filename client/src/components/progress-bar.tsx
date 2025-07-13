export function ProgressBar() {
  return (
    <div className="px-4 pt-4">
      <div className="text-sm text-text-secondary mb-2">5/5</div>
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}
