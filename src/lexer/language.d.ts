type Language = {
    [str in string]?: string | Language;
}

declare const language: Language;
export = language;