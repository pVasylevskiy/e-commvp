interface PriceBadgeProps {
  price: number;
}

export function PriceBadge({ price }: PriceBadgeProps) {
  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-3 py-2 shadow-lg">
      <span className="text-lg font-bold text-accent">
        ${price.toFixed(2)}
      </span>
    </div>
  );
}
