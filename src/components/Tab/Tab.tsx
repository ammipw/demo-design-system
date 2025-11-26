import classes from './Tab.module.css';

export interface TabProps {
  children: React.ReactNode;
  name?: string;
  variant?: 'pill' | 'underline';
  selected?: boolean;
  onSelect?: () => void;
};

const Tab = ({children, variant = 'pill', selected = false, onSelect}: TabProps) => {
  const className = `
    ${classes.tab}
    ${classes[variant]}
    ${selected ? classes.selected : ''}
  `;

  return (
    <button role="tab" aria-selected={selected} className={className} onClick={onSelect}>
      {children}
    </button>
  );
}

export default Tab;