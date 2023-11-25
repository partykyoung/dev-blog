import { css } from '@emotion/react';

import type { HTMLAttributes } from 'react';

function EmptyPost({...props}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} css={cssProps.root}>
            <h3 css={cssProps.commingSoon}>COMING SOON</h3>
            <br/>
            <span css={cssProps.emptyPostText}>아직 등록된 포스트가 없어요<br/>조금만 기다려주세요</span>
        </div>
    );
};

const cssProps = {
    root: css({
        width: '100%',
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 18,
    }),
    commingSoon: css({
        fontSize: 24,
        fontWeight: 600,
        color: 'hsla(var(--palette-blue-100), 100%)'
    }),
    emptyPostText: css({
        fontSize: 18,
        lineHeight: 1.5,
        color: 'hsla(var(--palette-gray-100), 100%)'
    })
}

export default EmptyPost;