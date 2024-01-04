<script lang="ts">
    import { emojis, type EmojiRow, type EmojiVariant } from "$lib/const";
    import {
        getToastStore,
        type PopupSettings,
        popup,
    } from "@skeletonlabs/skeleton";

    const toastStore = getToastStore();

    function onRowClick(emoji: EmojiRow) {
        navigator.clipboard.writeText(emoji.emoji);

        toastStore.trigger({
            message: `${emoji.emoji} copied to clipboard`,
        });
    }

    function getColorBasedOnVariant(variant: EmojiVariant) {
        switch (variant) {
            case "normal":
                return "#166534";
            case "version":
                return "#854d0e";
            case "git":
                return "#1e40af";
            case "special":
                return "#9f1239";
        }
    }

    const cardPopup: PopupSettings = {
        event: "hover",
        target: "cardPopup",
        placement: "top",
    };
</script>

<div class="grid">
    <div
        class="text-xl font-bold p-4 bg-surface-800 w-fit m-4 flex items-center gap-2 justify-self-center"
    >
        <span class="font-normal">Legend:</span>
        <span style:color={getColorBasedOnVariant("version")}
            >Version change</span
        >
        <span style:color={getColorBasedOnVariant("normal")}>Normal</span>
        <span style:color={getColorBasedOnVariant("git")}>Git operations</span>
        <span style:color={getColorBasedOnVariant("special")}>Special</span>
    </div>
    <div class="cards-grid" role="grid">
        {#each emojis as emoji}
            <div
                tabindex="0"
                role="gridcell"
                class="card cursor-pointer p-4 grid items-center gap-4 text-center colored-card [&>*]:pointer-events-none"
                style:--card-color={getColorBasedOnVariant(emoji.variant)}
                use:popup={{
                    event: "hover",
                    target: `card${emoji.type}`,
                    placement: "top",
                }}
                on:click={() => onRowClick(emoji)}
                on:keydown={(e) => {
                    if (e.key === "Enter") {
                        onRowClick(emoji);
                    }
                }}
            >
                <span class="text-6xl">{emoji.emoji}</span>
                <span class="text-xl">{emoji.type}</span>
            </div>
            <div data-popup="card{emoji.type}"></div>
        {/each}
    </div>
</div>

<style lang="postcss">
    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .colored-card {
        background-color: var(--card-color);
    }
</style>
