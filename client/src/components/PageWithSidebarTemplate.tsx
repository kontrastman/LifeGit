import React, { useState } from "react";

interface PageWithSidebarTemplate {
  SidebarComponent: React.ComponentType<{
    setSelectedItem: (item: string) => void;
  }>;
  ContentComponent: React.ComponentType<{ selectedItem: string | null }>;
}

const PageWithSidebarTemplate: React.FC<PageWithSidebarTemplate> = ({
  SidebarComponent,
  ContentComponent,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="drawer fixed lg:drawer-open h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col flex-1">
        <ContentComponent selectedItem={selectedItem} />
      </div>
      <div className="drawer-side flex flex-col h-screen overflow-y-hidden-important w-fixed-sidebar">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <SidebarComponent setSelectedItem={setSelectedItem} />
      </div>
    </div>
  );
};

export default PageWithSidebarTemplate;
