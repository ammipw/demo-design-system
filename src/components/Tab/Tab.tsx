import { useTabs } from '../../contexts/TabsContext';
import classes from './Tab.module.scss';

export interface TabProps {
  children: React.ReactNode;
  value: string;
  variant?: 'pill' | 'underline';
  selected?: boolean;
  onSelect?: () => void;
};

const Tab = ({children, value: name, variant = 'pill', selected = false, onSelect}: TabProps) => {
  const { selectedTab, setSelectedTab } = useTabs();
  const className = `
    ${classes.tab}
    ${classes[variant]}
    ${selectedTab === name ? classes.selected : ''}
  `;

  return (
    <button role="tab" aria-selected={selected} className={className} onClick={() => setSelectedTab(name)}>
      {children}
    </button>
  );
}

export default Tab;