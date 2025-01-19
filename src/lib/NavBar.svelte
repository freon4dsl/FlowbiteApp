<script>
    import {
        Button, ButtonGroup, DarkMode,
        Dropdown,
        DropdownDivider,
        DropdownItem,
        Navbar,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl, Tooltip
    } from "flowbite-svelte";
    import {ArrowRightOutline, ChevronDownOutline, ChevronRightOutline} from "flowbite-svelte-icons";
    import { page } from '$app/stores';
    import {drawerHidden} from "$lib/stores/DrawerStore";
    import GitHub from "$lib/GitHub.svelte";
    $: activeUrl = $page.url.pathname;

</script>

<Navbar>
    <NavBrand href="/">
        <img src="./freonlogo.svg" class="me-3 h-6 sm:h-9" alt="Freon Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Freon</span>
    </NavBrand>
    <div class="flex md:order-2">
        <ButtonGroup class="*:!ring-primary-700">
            <NavHamburger />
                <Tooltip placement="bottom">See menu</Tooltip>
            <Button name="View on GitHub" href="https://github.com/freon4dsl">
                <GitHub />
            </Button>
                <Tooltip placement="bottom">View on GitHub</Tooltip>
            <DarkMode/>
                <Tooltip placement='bottom'>Dark/Light Mode</Tooltip>
            <Button on:click={() => ($drawerHidden = false)}>
                <ChevronRightOutline class="w-6 h-6 ms-0 dark:text-white text-primary-800 inline" />
            </Button>
                <Tooltip placement='bottom'>Show Model Info</Tooltip>
        </ButtonGroup>
    </div>
    <NavUl {activeUrl} >
        <NavLi href="/">Home</NavLi>
        <NavLi class="cursor-pointer">
            Dropdown<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-44 z-20">
            <DropdownItem href="/">Dashboard</DropdownItem>
            <DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
            <DropdownItem href="/">Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/">Sign out</DropdownItem>
        </Dropdown>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>
