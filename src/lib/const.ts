export interface EmojiRow {
    emoji: string;
    type: string;
    variant: EmojiVariant;
    description: string;
}

export type EmojiVariant = "normal" | "version" | "git" | "special";

export const emojis: Readonly<EmojiRow[]> = [
    {
        emoji: "✨",
        type: "Feature",
        variant: "version",
        description: "Add new feature",
    },
    {
        emoji: "⚡️",
        type: "Update",
        variant: "version",
        description: "Update existing feature",
    },
    {
        emoji: "🔥",
        type: "Remove",
        variant: "version",
        description: "Remove a feature",
    },
    {
        emoji: "🐛",
        type: "Fix",
        variant: "version",
        description: "Fix a bug",
    },
    {
        emoji: "📦",
        type: "Build",
        variant: "normal",
        description: "?",
    },
    {
        emoji: "🔧",
        type: "Chore",
        variant: "normal",
        description: "Perform ",
    },
    {
        emoji: "💚",
        type: "CI",
        variant: "normal",
        description: "",
    },
    {
        emoji: "📝",
        type: "Docs",
        variant: "normal",
        description: "",
    },
    {
        emoji: "🖌️",
        type: "UI",
        variant: "normal",
        description: "",
    },
    {
        emoji: "🎨",
        type: "Style",
        variant: "normal",
        description: "",
    },
    {
        emoji: "♻️",
        type: "Refactor",
        variant: "normal",
        description: "",
    },
    {
        emoji: "🚀",
        type: "Performance",
        variant: "normal",
        description: "",
    },
    {
        emoji: "🧪",
        type: "Test",
        variant: "normal",
        description: "",
    },
    {
        emoji: "🔖",
        type: "Version tag",
        variant: "normal",
        description: "",
    },
    {
        emoji: "⏪️",
        type: "Revert",
        variant: "git",
        description: "",
    },
    {
        emoji: "🔀",
        type: "Merge",
        variant: "git",
        description: "",
    },
    {
        emoji: "🎉",
        type: "Begin",
        variant: "special",
        description: "",
    },
    {
        emoji: "💥",
        type: "Breaking change",
        variant: "special",
        description: "",
    },
    {
        emoji: "🚧",
        type: "WIP",
        variant: "special",
        description: "",
    },
];
