import { TemplateWrapper } from '@/wrappers/TemplateWrapper';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function DashboardTemplate({ children }: Props) {
  return <TemplateWrapper>{children}</TemplateWrapper>;
}
