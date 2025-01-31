<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/state';
	import EditMenu from '$lib/EditMenu.svelte';
	import ViewMenu from '$lib/ViewMenu.svelte';
	import FileMenu from '$lib/FileMenu.svelte';

	$: activeUrl = page.url.pathname;
	let hidden = false;
</script>

<Navbar>
	<NavBrand href="/">
		<img src="/freonlogo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<NavHamburger />
	<div class="flex md:order-2">
		<NavUl {activeUrl} {hidden}>
			<NavLi href="/">Home</NavLi>
			<NavLi class="cursor-pointer">
				Dropdown
				<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
			</NavLi>
			<Dropdown class="z-20 w-44">
				<DropdownItem href="/">Dashboard</DropdownItem>
				<DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
				<DropdownItem href="/">Earnings</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/">Sign out</DropdownItem>
			</Dropdown>
			<NavLi href="/settings">Setting</NavLi>
			<NavLi href="/pricing">Pricing</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</div>
</Navbar>
