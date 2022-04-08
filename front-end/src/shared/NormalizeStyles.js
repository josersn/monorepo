import { createGlobalStyle } from 'styled-components';

import { FontFamilies, Spaces } from './DesignTokens';

export const NormalizeStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        font-family: 'Inter', sans-serif;;
    }
`;