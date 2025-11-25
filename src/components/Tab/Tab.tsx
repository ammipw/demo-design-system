import classes from './Tab.module.css';

type TabProps = {
  children: React.ReactNode;
  variant?: 'pill' | 'underline';
  selected?: boolean;
};

const Tab = ({children, variant = 'pill', selected = false}: TabProps) => {
  const className = `
    ${classes.tab}
    ${classes[variant]}
    ${selected ? classes.selected : ''}
  `;

  return (
    <button role="tab" aria-selected={selected} className={className}>
      {children}
    </button>
  );
}

export default Tab;