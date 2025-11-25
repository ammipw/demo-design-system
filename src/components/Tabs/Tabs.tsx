import Tab from '../Tab/Tab';
import classes from './Tabs.module.css';

type TabsProps = {
  children: React.ReactElement<typeof Tab>[];
  variant?: 'pill' | 'underline';
  selected?: number;
};

const Tabs = ({children, variant = 'pill', selected = 0}: TabsProps) => {
  const className = `
    ${classes.tabs}
    ${classes[variant]}
  `;

  return (
    <nav role="tablist" className={className}>
      {children}
    </nav>
  );
}

export default Tabs;