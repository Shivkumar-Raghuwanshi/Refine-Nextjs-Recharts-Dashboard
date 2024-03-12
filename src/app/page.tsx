"use client";

import { Suspense } from "react";
import Graph from "@components/dashboard/Graph";

export default function IndexPage() {
  return (
    <Suspense>
      <Graph />
    </Suspense>
  );
}
