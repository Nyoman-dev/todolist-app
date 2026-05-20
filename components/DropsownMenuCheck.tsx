/** @format */

"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";

interface statusOption {
	value: string;
	label: string;
}

export function DropdownMenuCheckboxes({ status }: { status: statusOption[] }) {
	const [open, setOpen] = React.useState(false);
	const [selected, setSelected] = React.useState<statusOption | null>(null);

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant='outline'>
					{selected ? selected.label : "Select Menu"}
					<ChevronUp
						className={`transition-transform ease-in-out duration-300 ${
							open ? "rotate-180" : "rotate-0"
						}`}
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40'>
				<DropdownMenuGroup>
					<DropdownMenuLabel>Menu</DropdownMenuLabel>
					{status.map((option) => (
						<DropdownMenuCheckboxItem
							key={option.value}
							checked={selected?.value === option.value}
							onCheckedChange={() => setSelected(option)}>
							{option.label}
						</DropdownMenuCheckboxItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
