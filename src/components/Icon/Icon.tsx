const Icon = ({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) => (
  <svg width={size} height={size} className={className}>
    <use href={`src/assets/icons/sprite.svg#${name}`} />
  </svg>
);

export default Icon;
