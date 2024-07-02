// src/app/page.js
"use client";

import { useSearchParams } from 'next/navigation';
import Home from './Home';

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'All';

  return <Home selectedCategory={category} />;
}