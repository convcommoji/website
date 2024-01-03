<script lang="ts">
    import "../app.postcss";
    import { AppShell, AppBar, Toast } from "@skeletonlabs/skeleton";

    // Floating UI for Popups
    import {
        computePosition,
        autoUpdate,
        flip,
        shift,
        offset,
        arrow,
    } from "@floating-ui/dom";
    import { storePopup } from "@skeletonlabs/skeleton";
    import { initializeStores } from "@skeletonlabs/skeleton";

    initializeStores();
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Toast position="tl" />
<!-- App Shell -->
<AppShell>
    <svelte:fragment slot="header">
        <!-- App Bar -->
        <AppBar gridColumns="grid-cols-1" slotDefault="place-self-center py-10">
            <strong class="uppercase text-4xl">Convcommoji</strong>
        </AppBar>
    </svelte:fragment>
    <!-- Page Route Content -->
    <slot />
</AppShell>
