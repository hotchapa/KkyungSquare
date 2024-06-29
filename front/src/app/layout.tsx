import type { Metadata } from "next";
import StyledComponentsRegistry from '@/common/libs/registry';
import ClientRootLayout from './client-root-layout';

export const metadata: Metadata = {
  title: "뀽스퀘어",
  description: "뀽카페에 어서오세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ClientRootLayout>
            {children}
          </ClientRootLayout>  
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
