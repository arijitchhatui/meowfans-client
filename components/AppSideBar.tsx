'use client';

import * as React from 'react';

import { NavCategories } from '@/components/NavCategories';
import { NavMain } from '@/components/NavMain';
import { NavTypes } from '@/components/NavTypes';
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { appSideBarButtonOptions } from '@/lib/constants';
import { ApplyTheme } from './ApplyTheme';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="flex flex-row">
          {/* <TeamSwitcher teams={appSideBarButtonOptions.teams} /> */}
          <ApplyTheme />
        </div>
        <NavMain items={appSideBarButtonOptions.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavCategories categories={appSideBarButtonOptions.category} />
        <NavTypes types={appSideBarButtonOptions.types} />
        {/* <NavSecondary items={appSideBarButtonOptions.navSecondary} /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
