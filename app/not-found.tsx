import type { Metadata } from "next";
import ErrorView from "@/components/ErrorView";
export const metadata: Metadata = { title: "पृष्ठ भेटिएन (404)", robots: { index: false, follow: true } };
export default function NotFound() { return <ErrorView code="404" />; }
