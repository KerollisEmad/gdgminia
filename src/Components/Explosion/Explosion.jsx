export default function Explosion({ color }) {
  const particles = Array.from({ length: 20 });
  return (
    <div className="explosion">
      {particles.map((_, i) => {
        const angle = (Math.PI * 2 * i) / 20;
        const distance = 80 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        return (
          <div
            key={i}
            className="particle"
            style={{
              "--x": `${x}px`,
              "--y": `${y}px`,
              background: color.includes("yellow")
                ? "#FFD93D"
                : color.includes("red")
                  ? "#FF6B6B"
                  : "#4CD964",
            }}
          ></div>
        );
      })}
    </div>
  );
}