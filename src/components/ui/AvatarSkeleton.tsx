function AvatarSkeleton() {
  return (
    <div className="absolute inset-0 z-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-200">
      <div className="absolute inset-y-0 -left-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  );
}

export default AvatarSkeleton;