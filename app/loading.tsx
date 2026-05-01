export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070c]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        <p className="text-xs font-bold tracking-[0.25em] text-zinc-300 uppercase">Loading Experience</p>
      </div>
    </div>
  );
}
