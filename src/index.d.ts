type TextObject = TextLabel | TextBox;

export type HighlightProps = {
    textObject: TextObject,
	src?: string,
	forceUpdate?: boolean,
	customLang?: { [str: string]: string },
}

/**
 * Highlights the given textObject with the given props and returns a cleanup function. Highlighting will automatically update when needed, so the cleanup function will disconnect those connections and remove all labels.
 */
export declare function highlight(props: HighlightProps): () => void;
export { default as Language } from "./lexer/language";