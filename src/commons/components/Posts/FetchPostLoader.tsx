import { css, keyframes } from '@emotion/react';

const Loading = () => {
  return (
    <div css={cssProps.root}>
        <span />
        <span />
        <span />
    </div>
  )
}

const bounce = keyframes({
    to: {
        opacity: '0.3',
        transform: 'translate3d(0, -16px, 0)'
      }
});

const cssProps = {
    root: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,

        ['span']: {
            width: 8,
            height: 8,
            backgroundColor: 'var(--primary-color)',
            borderRadius: '50%',
            animation: `0.6s ${bounce} infinite alternate`,
        
            ['&:nth-of-type(2)']: {
              animationDelay: '0.3s'
            },
        
            ['&:nth-of-type(3)']: {
              animationDelay: '0.6s'
            }
        }
    })
}

export default Loading;