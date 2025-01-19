<script lang="ts">
    import {Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright} from
            'flowbite-svelte';
    import NavBar from "$lib/NavBar.svelte";

</script>

<NavBar/>

<div style="height:60px;" class="md:hidden lg:hidden xl:hidden block">
<!--  This block is here to shift the content down on small media. This is done because the "sm:mt-12"
  marking down below does not function. -->
</div>

<div style="height:1000px;" class="sm:mt-12 md:mt-20 lg:mt-20 xl:mt-20 overflow-scroll pb-16 bg-red-800">
    --------------------------------
    Editor content comes here ...
</div>

<Footer class="absolute bottom-0 start-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <FooterCopyright href="/" by="Flowbite™" year={2022} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
</Footer>
