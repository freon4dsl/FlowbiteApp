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
    import {AnnotationSolid, ChevronDownOutline, ChevronRightOutline} from "flowbite-svelte-icons";
    import {drawerHidden} from "$lib/stores/DrawerStore";
    import GitHub from "$lib/GitHub.svelte";
    import FileMenu from "$lib/FileMenu.svelte";
    import EditMenu from "$lib/EditMenu.svelte";
    import ViewMenu from "$lib/ViewMenu.svelte";

</script>

<div class="relative px-8">
<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
    <NavBrand href="/">
        <img src="./freonlogo.svg" class="me-3 h-6 sm:h-9" alt="Freon Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Freon</span>
    </NavBrand>
    <div class="flex md:order-2">
        <ButtonGroup class="*:!ring-primary-700">
            <NavHamburger />
                <Tooltip placement="bottom">See menu</Tooltip>
            <DarkMode/>
            <Tooltip placement='bottom'>Dark/Light Mode</Tooltip>
            <Button name="View on GitHub" href="https://github.com/freon4dsl/Freon4dsl.git" target="_blank">
                <GitHub />
            </Button>
            <Tooltip placement="bottom">View on GitHub</Tooltip>
            <Button name="View Documentation" href="https://www.freon4dsl.dev/" target="_blank">
                <AnnotationSolid class="w-6 h-6 ms-0 dark:text-white inline"/>
            </Button>
            <Tooltip placement="bottom">Go to Documentation</Tooltip>
            <Button on:click={() => ($drawerHidden = false)}>
                <ChevronRightOutline class="w-6 h-6 ms-0 dark:text-white inline" />
            </Button>
                <Tooltip placement='bottom'>Show Model Info</Tooltip>
        </ButtonGroup>
    </div>
    <NavUl>
        <FileMenu/>
        <EditMenu/>
        <ViewMenu/>
    </NavUl>
</Navbar>
</div>
