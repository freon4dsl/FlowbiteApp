<script lang="ts">
    import {Dropdown, DropdownItem, Heading, Li, List, Listgroup, ListgroupItem} from 'flowbite-svelte';
    import {ChevronDownOutline, DotsHorizontalOutline} from "flowbite-svelte-icons";
    let simpleList = ['Profile', 'Settings', 'Messages', 'Download'];
    let buttons = [
        { name: 'Profile', mycustomfield: 'data1', current: true },
        { name: 'Settings', mycustomfield: 'data2' },
        { name: 'Messages', mycustomfield: 'data3' },
        { name: 'Download', mycustomfield: 'data4', disabled: true, attrs: {type: 'submit'} }
    ];
</script>

<Listgroup>
    <Heading tag="h5" class="pl-2">Units of Type1</Heading>
    <ListgroupItem class="text-base font-semibold gap-2">
        <Listgroup items={simpleList} let:item class="w-48">
            <div class="flex justify-between">
            {item}<DotsHorizontalOutline class="dots-menu1 dark:text-white inline" />
            </div>
            <Dropdown triggeredBy=".dots-menu1">
                <DropdownItem>Open</DropdownItem>
                <DropdownItem>Save</DropdownItem>
                <DropdownItem>Rename</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
                <DropdownItem slot="footer">Export</DropdownItem>
            </Dropdown>
        </Listgroup>
    </ListgroupItem>
    <Heading tag="h5" class="pl-2">Units of Type2</Heading>
    <ListgroupItem class="text-base font-semibold gap-2">
        <Listgroup items={simpleList} let:item class="w-48">
            <div class="flex justify-between">
            {item}<ChevronDownOutline class="dots-menu2 w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
            </div>
            <Dropdown triggeredBy=".dots-menu2">
                <DropdownItem>Open</DropdownItem>
                <DropdownItem>Save</DropdownItem>
                <DropdownItem>Rename</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
                <DropdownItem slot="footer">Export</DropdownItem>
            </Dropdown>
        </Listgroup>
    </ListgroupItem>
</Listgroup>
