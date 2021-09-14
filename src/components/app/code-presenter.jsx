import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodePresenter = ({lang, children}) => {
    return (
        <SyntaxHighlighter language={lang} style={vscDarkPlus}>
            {children}
        </SyntaxHighlighter>
    );
}
