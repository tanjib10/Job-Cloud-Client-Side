import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobsTab from "./JobsTab";

const JobTabs = () => {
  return (
    <Tabs>
      <TabList className="flex flex-wrap justify-center p-4 mb-4 bg-[#EBF3E8]">
        <Tab className="cursor-pointer px-4 py-2 m-2 text-lg font-semibold hover:bg-gray-300 transition duration-300">
          Web Development
        </Tab>
        <Tab className="cursor-pointer px-4 py-2 m-2 text-lg font-semibold hover:bg-gray-300 transition duration-300">
          Digital Marketing
        </Tab>
        <Tab className="cursor-pointer px-4 py-2 m-2 text-lg font-semibold hover:bg-gray-300 transition duration-300">
          Graphics Design
        </Tab>
      </TabList>

      <TabPanel style={{ marginBottom: 0 }} className="mt-4">
        <JobsTab category="web" />
      </TabPanel>
      <TabPanel style={{ marginBottom: 0 }} className="">
        <JobsTab category="marketing" />
      </TabPanel>
      <TabPanel style={{ marginBottom: 0 }} className="">
        <JobsTab category="design" />
      </TabPanel>
    </Tabs>
  );
};

export default JobTabs;
