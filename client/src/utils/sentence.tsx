import React from 'react';

export type SentenceProps = {
    sentences: string[]
}
export const SetSentence = (props: SentenceProps) => {
    if (!props.sentences) {
        throw Error("invalid sentences")
    }
    return (
        <div style={{textAlign:"left"}}>
            {props.sentences.map((each_sentence: string) => (
                <p>{each_sentence}</p>
            ))}
        </div>
    )
}