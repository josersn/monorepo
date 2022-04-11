import { createGlobalStyle } from 'styled-components';

import { FontFamilies, Spaces } from './DesignTokens';

export const NormalizeStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        font-family: 'Inter', sans-serif;;
    }
`;