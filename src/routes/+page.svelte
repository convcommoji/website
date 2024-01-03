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

<div class="table-container">
    <table class="table table-interactive">
        <thead>
            <tr>
                <th class="table-cell-fit"> Emoji </th>
                <th> Type </th>
                <th> Description </th>
            </tr>
        </thead>
        <tbody>
            {#each emojis as emoji}
                <tr on:click={() => onRowClick(emoji)}>
                    <td
                        style:font-size="2rem"
                        style:line-height="1"
                        class="table-cell-fit">{emoji.emoji}</td
                    >
                    <td class="w-max">{emoji.type}</td>
                    <td>{emoji.description}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
