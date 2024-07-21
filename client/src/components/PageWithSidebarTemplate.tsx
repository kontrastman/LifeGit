import React, {useState} from "react";

interface PageWithSidebarTemplate {
    SidebarComponent: React.ComponentType <{  setSelectedItem: (item: string) => void }>;
    ContentComponent: React.ComponentType<{ selectedItem: string | null }>;
}

const PageWithSidebarTemplate: React.FC<PageWithSidebarTemplate> = ({SidebarComponent, ContentComponent}) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <ContentComponent selectedItem={selectedItem}/>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
        <SidebarComponent setSelectedItem={setSelectedItem}/>
        </div>
      </div>
    );
};

export default PageWithSidebarTemplate;