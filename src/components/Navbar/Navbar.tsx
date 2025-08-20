// components/Navbar/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {
  return <NavbarMenu />;
}