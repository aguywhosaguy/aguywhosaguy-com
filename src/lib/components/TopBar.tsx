"use client"

import Link from "next/link"
import React from "react";
import { usePathname } from "next/navigation";

interface Page {
	name: string;
	path: string;
}

export default function TopBar({links}: {"links": Page[]}) {
	const getUL = (path: string) => usePathname() === path ? "underline" : ""

	return (
	<header>
		<div className="flex flex-col pt-4 pl-4">
			<p className="font-bold">aguywhosaguy.com</p>
			{links.map((link, index) => (
				<Link href={link.path} key={index} className={getUL(link.path)}>{link.name}</Link>
			))}
		</div>
	</header>
	)
	
}