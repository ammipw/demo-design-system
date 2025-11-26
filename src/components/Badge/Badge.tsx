import classes from './Badge.module.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'positive' | 'negative';
};

const Badge = ({children, variant = 'neutral'}: BadgeProps) => {
  const className = `
    ${classes.badge}
    ${classes[variant]}
  `;

  return (
    <span className={className}>
      {children}
    </span>
  );
}

export default Badge;