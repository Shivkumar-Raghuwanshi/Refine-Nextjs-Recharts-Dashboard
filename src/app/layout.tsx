import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import React, { Suspense } from "react";

import { dataProvider } from "@providers/data-provider";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Marble AI Dashboard",
  description: "Dashboard by Shivkumar Raghuwanshi",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>  
          <RefineKbarProvider>   
              <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "84iuT2-8m6tOn-4BfvA1",
                }}
              >
                {children}
                <RefineKbar />
              </Refine>          
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
