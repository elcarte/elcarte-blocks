import React from 'react';

export interface TextBlockProps {
    content: string;
    alignment?: 'left' | 'center' | 'right';
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, alignment = 'left' }) => {
    return (
        <div className={`py-8 prose max-w-none text-${alignment}`}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};
