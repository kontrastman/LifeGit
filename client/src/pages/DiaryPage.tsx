import React from "react";
import SidebarContent from "../components/SidebarContent";
import RecordContent from "../components/RecordContent";
import PageWithSidebarTemplate from "../components/PageWithSidebarTemplate";

const DiaryPage: React.FC = () => {
    return (
        <PageWithSidebarTemplate
            SidebarComponent={SidebarContent}
            ContentComponent={RecordContent}
        />
    );
};

export default DiaryPage;