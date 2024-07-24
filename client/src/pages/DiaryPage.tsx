import React, { useState } from "react";
import RecordContent from "../components/RecordContent";
import SidebarContent from "../components/SidebarContent";


const PageWithSidebarTemplate: React.FC = () => {
  return (
    <div className="drawer fixed lg:drawer-open h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col flex-1 overflow-y-auto">
        <RecordContent/>
      </div>
      <div className="drawer-side flex flex-col h-screen overflow-y-hidden-important w-fixed-sidebar">
        <SidebarContent />
      </div>
    </div>
  );
};

export default PageWithSidebarTemplate;
