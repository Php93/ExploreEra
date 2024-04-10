import { useState } from 'react';
import TabNavItem from '../Tabs/TabNavItem'
import TabContent from '../Tabs/TabContent'
import Flights from '../../pages/Flights';
import Stays from '../../pages/Stays';
import stays from '../../assets/data/stays.json'
import Stay from '../../pages/Stay';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [id, setId] = useState()
  let stay = id && stays.filter(stay => stay.id == id)[0]
  
  return (
    <div className="">
      <ul className="flex items-center gap-5 pl-0 my-14 overflow-y-auto">
        <TabNavItem title="Flights" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} resetId={() => setId()}/>
        <TabNavItem title="Stays" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} resetId={() => setId()}/>
        <TabNavItem title="Car rental" id="tab3" disabled={true} />
        <TabNavItem title="Cruises" id="tab4" disabled={true}/>
        <TabNavItem title="Attractions" id="tab4" disabled={true}/>
      </ul>

      <div>
        {id ? <Stay data={stay} /> : (
          <>
            <TabContent id="tab1" activeTab={activeTab}>
              <Flights/>
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <Stays setId={setId} />
            </TabContent>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;