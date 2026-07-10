/**
 * Smooth vertical gradient between the light and dark zones,
 * like lighting changing as you walk deeper into a building.
 */
export function ZoneBridge() {
  return (
    <div
      aria-hidden
      className="h-44 w-full"
      style={{
        background: "linear-gradient(to bottom, #ede5d1 0%, #6b5c3d 55%, #16110a 100%)",
      }}
    />
  );
}
