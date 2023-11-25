import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobsTab from "./JobsTab";

const JobTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Web Development</Tab>
        <Tab>Digital Marketing</Tab>
        <Tab>Graphics Design</Tab>
      </TabList>

      <TabPanel>
        <JobsTab category="web" />
      </TabPanel>
      <TabPanel>
        <JobsTab category="marketing" />
      </TabPanel>
      <TabPanel>
        <JobsTab category="design" />
      </TabPanel>
    </Tabs>
  );
};

export default JobTabs;
