<script lang="ts">
    import { emojis, type EmojiRow } from "$lib/const";
    import { getToastStore } from "@skeletonlabs/skeleton";

    const toastStore = getToastStore();

    function onRowClick(emoji: EmojiRow) {
        navigator.clipboard.writeText(emoji.emoji);

        toastStore.trigger({
            message: `${emoji.emoji} copied to clipboard`,
        });
    }
</script>

<div class="cards-grid" role="grid">
    {#each emojis as emoji}
        <div
            tabindex="0"
            role="gridcell"
            class="card card-hover cursor-pointer p-4 grid items-center gap-4 text-center"
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
    {/each}
</div>

<style>
    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
    }
</style>
